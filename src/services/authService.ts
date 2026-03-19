import { supabase } from './supabaseClient';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

export interface User {
  id: string;
  email: string;
  username?: string;
  nombre: string;
  tipo: 'especialidad' | 'jefe_area' | 'residente';
  especialidad_id?: number | null;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface BasicAuthResponse {
  success: boolean;
  error?: string;
  message?: string;
}

type AuthLikeUser = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
};

function buildFallbackUser(authUser: AuthLikeUser): User {
  const metadata = authUser.user_metadata || {};

  return {
    id: authUser.id,
    email: authUser.email || '',
    username: typeof metadata.username === 'string' ? metadata.username : undefined,
    nombre:
      typeof metadata.nombre === 'string'
        ? metadata.nombre
        : typeof metadata.full_name === 'string'
          ? metadata.full_name
          : authUser.email || 'Usuario',
    tipo:
      metadata.tipo === 'especialidad' ||
      metadata.tipo === 'jefe_area' ||
      metadata.tipo === 'residente'
        ? metadata.tipo
        : 'especialidad',
    especialidad_id:
      typeof metadata.especialidad_id === 'number' ? metadata.especialidad_id : null,
  };
}

function mapAuthError(error: { message?: string } | null): string {
  const message = (error?.message || '').toLowerCase();

  if (message.includes('invalid login credentials')) {
    return 'Email o contraseña inválida';
  }
  if (message.includes('email not confirmed')) {
    return 'Debes confirmar tu correo antes de iniciar sesión';
  }
  if (message.includes('network') || message.includes('fetch')) {
    return 'No se pudo conectar con Supabase';
  }

  return error?.message || 'No se pudo iniciar sesión';
}

async function getUserProfileByEmail(email: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('usuarios')
    .select('id, email, username, nombre, tipo, especialidad_id')
    .eq('email', email)
    .maybeSingle();

  if (error) {
    console.error('[AUTH] Error consultando tabla usuarios:', error);
    return null;
  }

  return data ? (data as User) : null;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const normalizedEmail = email.trim().toLowerCase();

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    if (authError || !authData.user || !authData.session) {
      console.error('[AUTH] Error Supabase:', authError);
      return {
        success: false,
        error: mapAuthError(authError),
      };
    }

    const profile = await getUserProfileByEmail(normalizedEmail);

    return {
      success: true,
      user: profile || buildFallbackUser(authData.user),
    };
  } catch (err) {
    console.error('[AUTH] Error en login:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Error de conexión',
    };
  }
}

export async function getCurrentAuthenticatedUser(): Promise<User | null> {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return null;
    }

    const normalizedEmail = (data.user.email || '').trim().toLowerCase();
    if (!normalizedEmail) {
      return buildFallbackUser(data.user);
    }

    const profile = await getUserProfileByEmail(normalizedEmail);
    return profile || buildFallbackUser(data.user);
  } catch (err) {
    console.error('[AUTH] Error obteniendo usuario autenticado:', err);
    return null;
  }
}

export async function requestPasswordReset(email: string): Promise<BasicAuthResponse> {
  try {
    const redirectTo = window.location.origin;
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
      redirectTo,
    });

    if (error) {
      console.error('[AUTH] Error enviando recuperación:', error);
      return {
        success: false,
        error: 'No se pudo enviar el correo de recuperación',
      };
    }

    return {
      success: true,
      message: 'Si el correo existe, te enviamos un enlace para restablecer la contraseña.',
    };
  } catch (err) {
    console.error('[AUTH] Error en recuperación:', err);
    return {
      success: false,
      error: 'Error de conexión al solicitar recuperación',
    };
  }
}

export async function updatePassword(newPassword: string): Promise<BasicAuthResponse> {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error('[AUTH] Error actualizando contraseña:', error);
      return {
        success: false,
        error: 'No se pudo actualizar la contraseña',
      };
    }

    return {
      success: true,
      message: 'Contraseña actualizada correctamente. Ya puedes iniciar sesión.',
    };
  } catch (err) {
    console.error('[AUTH] Error en actualización de contraseña:', err);
    return {
      success: false,
      error: 'Error de conexión al actualizar contraseña',
    };
  }
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('[AUTH] Error cerrando sesión:', error);
  }
}

export async function getAvailableUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${API_BASE}/auth/usuarios`);
    const data = await res.json();

    if (data.success) {
      return data.usuarios;
    }
    return [];
  } catch (err) {
    console.error('Error obteniendo usuarios:', err);
    return [];
  }
}

export function saveSessionToLocalStorage(user: User): void {
  localStorage.setItem('metrados_current_user', JSON.stringify(user));
  localStorage.setItem('metrados_session_time', new Date().toISOString());
}

export function getSessionFromLocalStorage(): User | null {
  try {
    const saved = localStorage.getItem('metrados_current_user');
    if (!saved) {
      return null;
    }
    return JSON.parse(saved) as User;
  } catch {
    return null;
  }
}

export function clearSessionFromLocalStorage(): void {
  localStorage.removeItem('metrados_current_user');
  localStorage.removeItem('metrados_session_time');
}

export function isSessionValid(): boolean {
  const user = getSessionFromLocalStorage();
  return user !== null && user.id !== undefined;
}
