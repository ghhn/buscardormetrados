import { useEffect, useState } from 'react';
import { Building2, LogOut, Save, Stethoscope, AlertTriangle, UserCircle2 } from 'lucide-react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import { useMetradosStore } from './store/useMetradosStore';
import type { Metrado } from './types';
import {
  clearSessionFromLocalStorage,
  getCurrentAuthenticatedUser,
  getSessionFromLocalStorage,
  login,
  requestPasswordReset,
  saveSessionToLocalStorage,
  signOut,
  updatePassword,
} from './services/authService';
import { loadMetradosByUser, saveMetradosToDatabase } from './services/metradosService';
import { supabase } from './services/supabaseClient';

export type TipoProyecto = 'hospital' | 'contingencia';

type Proyecto = {
  id: number;
  nombre: string;
  tipo: 'hospital' | 'contingencia' | string;
};

function App() {
  const { state, actions } = useMetradosForm();
  const {
    metrados,
    context,
    setContext,
    addMetrado,
    updateMetrado,
    deleteMetrado,
    updateGroup,
    currentUser,
    setCurrentUser,
    setSyncing,
    isSyncing,
    lastSyncTime,
    updateLastSyncTime,
  } = useMetradosStore();

  const [toast, setToast] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info');
  const [, setProyectos] = useState<Proyecto[]>([]);
  const [, setProjectLookup] = useState<Record<string, number>>({});

  const [selectedEmail, setSelectedEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [isSendingReset, setIsSendingReset] = useState(false);
  const [recoveryMode, setRecoveryMode] = useState(false);
  const [recoveryPassword, setRecoveryPassword] = useState('');
  const [recoveryConfirmPassword, setRecoveryConfirmPassword] = useState('');
  const [recoveryError, setRecoveryError] = useState<string | null>(null);
  const [recoveryMessage, setRecoveryMessage] = useState<string | null>(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  useEffect(() => {
    const restoreSession = async () => {
      const savedUser = getSessionFromLocalStorage();
      if (savedUser) {
        setCurrentUser(savedUser);
        await loadUserMetrados(savedUser.id);
        return;
      }

      const authUser = await getCurrentAuthenticatedUser();
      if (authUser) {
        saveSessionToLocalStorage(authUser);
        setCurrentUser(authUser);
        await loadUserMetrados(authUser.id);
      }
    };

    void restoreSession();
  }, [setCurrentUser]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const defaultProjects: Proyecto[] = [
          { id: 1, nombre: 'Hospital', tipo: 'hospital' },
          { id: 2, nombre: 'Contingencia', tipo: 'contingencia' },
        ];

        setProyectos(defaultProjects);

        const lookup: Record<string, number> = {};
        defaultProjects.forEach((project) => {
          lookup[project.tipo] = project.id;
        });
        setProjectLookup(lookup);
      } catch (err) {
        console.error('Error cargando proyectos:', err);
      }
    };

    void loadProjects();
  }, []);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const queryParams = new URLSearchParams(window.location.search);
    const hasRecoveryToken =
      hashParams.has('access_token') ||
      hashParams.get('type') === 'recovery' ||
      queryParams.get('type') === 'recovery';

    if (hasRecoveryToken) {
      setRecoveryMode(true);
      setRecoveryMessage('Define una nueva contraseña para tu cuenta.');
      setLoginError(null);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setRecoveryMode(true);
        setRecoveryMessage('Define una nueva contraseña para tu cuenta.');
        setLoginError(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loadUserMetrados = async (userId: string) => {
    setSyncing(true);
    try {
      const response = await loadMetradosByUser(userId);
      if (response.success && response.metrados) {
        console.log(`Cargados ${response.count} metrados para el usuario`);
      }
    } catch (err) {
      console.error('Error cargando metrados:', err);
    } finally {
      setSyncing(false);
    }
  };

  const handleLogin = async () => {
    const email = selectedEmail.trim();

    if (!email) {
      setLoginError('Ingrese un email.');
      return;
    }

    if (!loginPassword) {
      setLoginError('Ingrese contraseña.');
      return;
    }

    setIsLoggingIn(true);
    setLoginError(null);

    try {
      const response = await login(email, loginPassword);

      if (!response.success) {
        setLoginError(response.error || 'Credenciales inválidas');
        return;
      }

      if (response.user) {
        saveSessionToLocalStorage(response.user);
        setCurrentUser(response.user);
        setSelectedEmail('');
        setLoginPassword('');
        setLoginError(null);
        showToast(`Bienvenido ${response.user.nombre}`, 'success');
        await loadUserMetrados(response.user.id);
      }
    } catch (err) {
      console.error('Error en login:', err);
      setLoginError('Error de conexión con Supabase');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    clearSessionFromLocalStorage();
    setCurrentUser(null);
    setSelectedEmail('');
    setLoginPassword('');
    setLoginError(null);
    setRecoveryMode(false);
    void signOut();
    showToast('Sesión cerrada', 'info');
  };

  const handlePasswordResetRequest = async () => {
    const email = selectedEmail.trim();

    if (!email) {
      setLoginError('Ingrese su email para enviar el enlace de recuperación.');
      return;
    }

    setIsSendingReset(true);
    setLoginError(null);

    try {
      const response = await requestPasswordReset(email);

      if (!response.success) {
        setLoginError(response.error || 'No se pudo enviar el correo de recuperación');
        return;
      }

      showToast(
        response.message || 'Revisa tu correo para continuar con el cambio de contraseña.',
        'info'
      );
      setLoginError(
        'Si la cuenta fue creada solo con Google, ese correo puede no permitir reset por contraseña hasta definir una clave propia.'
      );
    } catch (err) {
      console.error('Error solicitando recuperación:', err);
      setLoginError('Error de conexión al enviar el correo de recuperación');
    } finally {
      setIsSendingReset(false);
    }
  };

  const handlePasswordUpdate = async () => {
    if (!recoveryPassword) {
      setRecoveryError('Ingrese una nueva contraseña.');
      return;
    }

    if (recoveryPassword.length < 6) {
      setRecoveryError('La nueva contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (recoveryPassword !== recoveryConfirmPassword) {
      setRecoveryError('Las contraseñas no coinciden.');
      return;
    }

    setIsUpdatingPassword(true);
    setRecoveryError(null);

    try {
      const response = await updatePassword(recoveryPassword);

      if (!response.success) {
        setRecoveryError(response.error || 'No se pudo actualizar la contraseña.');
        return;
      }

      setRecoveryMode(false);
      setRecoveryPassword('');
      setRecoveryConfirmPassword('');
      setRecoveryMessage(response.message || 'Contraseña actualizada correctamente.');
      await signOut();
      showToast('Contraseña actualizada. Ya puedes iniciar sesión.', 'success');
    } catch (err) {
      console.error('Error actualizando contraseña:', err);
      setRecoveryError('Error de conexión al actualizar la contraseña.');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleSaveMetrados = async () => {
    if (!currentUser || !currentUser.id) {
      setLoginError('Debe estar autenticado para guardar metrados');
      return;
    }

    if (metrados.length === 0) {
      showToast('No hay metrados para guardar', 'info');
      return;
    }

    setSyncing(true);
    try {
      const response = await saveMetradosToDatabase(
        metrados,
        currentUser.id,
        context.proyecto,
        currentUser.especialidad_id || 1
      );

      if (response.success) {
        showToast(`${response.saved} metrados guardados exitosamente`, 'success');
        updateLastSyncTime();
      } else {
        showToast(response.error || 'Error guardando metrados', 'error');
      }
    } catch (err) {
      console.error('Error guardando metrados:', err);
      showToast('Error de conexión', 'error');
    } finally {
      setSyncing(false);
    }
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast(message);
    setToastType(type);
    setTimeout(() => setToast(null), 3000);
  };

  const handleGuardar = async () => {
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      const nuevoConProy = { ...nuevo, proyecto: context.proyecto };
      addMetrado(nuevoConProy);
      showToast(`Metrado guardado: ${nuevo.codigo_partida}`, 'success');
    }
  };

  const handleDeleteMetrado = (id: string) => {
    deleteMetrado(id);
    showToast('Registro eliminado', 'info');
  };

  const handleUpdateMetrado = (id: string, field: keyof Metrado, value: unknown) => {
    const metradoOriginal = metrados.find((metrado) => metrado.id === id);
    if (!metradoOriginal) {
      return;
    }

    if (['cantidad', 'longitud_area', 'ancho_empalme', 'altura_gancho', 'nro_veces'].includes(field as string)) {
      const parseVal = (input: unknown) => {
        if (input === '' || input === undefined || input === null) {
          return null;
        }
        const num = parseFloat(String(input));
        return Number.isNaN(num) ? null : num;
      };

      const finalMetrado = { ...metradoOriginal, [field]: value };
      const cant = parseVal(finalMetrado.cantidad);
      const largo = parseVal(finalMetrado.longitud_area);
      const ancho = parseVal(finalMetrado.ancho_empalme);
      const altura = parseVal(finalMetrado.altura_gancho);

      let product = 1;
      let hasFactors = false;

      [cant, largo, ancho, altura].forEach((val) => {
        if (val !== null) {
          product *= val;
          hasFactors = true;
        }
      });

      finalMetrado.parcial = hasFactors ? product : 0;
      const veces = parseVal(finalMetrado.nro_veces);
      finalMetrado.total = finalMetrado.parcial * (veces !== null ? veces : 1);

      updateMetrado(id, field, value);
      updateMetrado(id, 'parcial', finalMetrado.parcial);
      updateMetrado(id, 'total', finalMetrado.total);
      return;
    }

    updateMetrado(id, field, value);
  };

  const handleUpdateGroup = (codigoPartida: string, oldElemento: string, newElemento: string) => {
    updateGroup(codigoPartida, oldElemento, newElemento);
  };

  const metradosFiltrados = metrados.filter(
    (metrado) => !metrado.proyecto || metrado.proyecto === context.proyecto
  );

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 text-slate-700 mb-6">
            <UserCircle2 className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold">Buscador de Metrados</h2>
          </div>

          <p className="text-sm text-slate-500 mb-4">
            {recoveryMode
              ? 'Completa tu nueva contraseña para recuperar el acceso.'
              : 'Ingrese sus credenciales para acceder al sistema.'}
          </p>

          {recoveryMessage && (
            <div className="mb-4 text-sm text-blue-700 bg-blue-50 p-3 rounded-lg border border-blue-100">
              {recoveryMessage}
            </div>
          )}

          <div className="space-y-3">
            {!recoveryMode ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    value={selectedEmail}
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && void handleLogin()}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese su email"
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    Ej: estructuras@metrados.local, residente@metrados.local
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && void handleLogin()}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese contraseña"
                  />
                </div>

                {loginError && (
                  <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg border border-red-100">
                    {loginError}
                  </div>
                )}

                <button
                  disabled={!selectedEmail || !loginPassword || isLoggingIn}
                  onClick={() => void handleLogin()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg disabled:bg-slate-300 transition-colors"
                >
                  {isLoggingIn ? 'Ingresando...' : 'Entrar'}
                </button>

                <button
                  type="button"
                  disabled={!selectedEmail || isSendingReset}
                  onClick={() => void handlePasswordResetRequest()}
                  className="w-full text-sm font-medium text-blue-700 hover:text-blue-800 disabled:text-slate-400 transition-colors"
                >
                  {isSendingReset ? 'Enviando enlace...' : '¿Olvidaste tu contraseña?'}
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nueva contraseña
                  </label>
                  <input
                    type="password"
                    value={recoveryPassword}
                    onChange={(e) => setRecoveryPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && void handlePasswordUpdate()}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese nueva contraseña"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    value={recoveryConfirmPassword}
                    onChange={(e) => setRecoveryConfirmPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && void handlePasswordUpdate()}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Repita la nueva contraseña"
                  />
                </div>

                {recoveryError && (
                  <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg border border-red-100">
                    {recoveryError}
                  </div>
                )}

                <button
                  disabled={!recoveryPassword || !recoveryConfirmPassword || isUpdatingPassword}
                  onClick={() => void handlePasswordUpdate()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg disabled:bg-slate-300 transition-colors"
                >
                  {isUpdatingPassword ? 'Actualizando...' : 'Guardar nueva contraseña'}
                </button>
              </>
            )}
          </div>

          {!recoveryMode && (
            <div className="mt-6 p-3 bg-slate-100 rounded-lg text-xs text-slate-600">
              <p className="font-semibold mb-2">Usuarios de prueba:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>estructuras@metrados.local / estructuras123</li>
                <li>arquitectura@metrados.local / arqui123</li>
                <li>residente@metrados.local / residente123</li>
                <li>jefe1@metrados.local / jefe1</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1450px] mx-auto">
      <header className="flex items-center justify-between px-2 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Metrados Belempampa
            </h1>
            <p className="text-sm text-gray-500 font-medium">Plataforma de Costos y Presupuestos</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <UserCircle2 className="w-5 h-5 text-slate-600" />
          <div className="text-sm">
            <div className="font-semibold text-slate-900">{currentUser.nombre}</div>
            <div className="text-xs text-slate-500">
              {currentUser.tipo === 'especialidad'
                ? 'Especialista'
                : currentUser.tipo === 'jefe_area'
                  ? 'Jefe de Área'
                  : 'Residente'}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="ml-2 text-slate-500 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition-colors"
            title="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setContext({ proyecto: 'hospital' })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              context.proyecto === 'hospital'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            Hospital
          </button>
          <button
            onClick={() => setContext({ proyecto: 'contingencia' })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              context.proyecto === 'contingencia'
                ? 'bg-white text-amber-600 shadow-md'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            Contingencia
          </button>
        </div>
      </header>

      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 animate-in slide-in-from-top-5 px-4 py-3 rounded-lg shadow-xl font-medium flex items-center gap-2 ${
            toastType === 'success'
              ? 'bg-green-500 text-white'
              : toastType === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-blue-500 text-white'
          }`}
        >
          {toastType === 'success' && <span>✓</span>}
          {toastType === 'error' && <span>✕</span>}
          {toastType === 'info' && <span>i</span>}
          {toast}
        </div>
      )}

      <div className="flex items-center justify-between px-2 flex-wrap gap-2">
        <div className="text-sm text-slate-600">
          {isSyncing && <span>Sincronizando...</span>}
          {lastSyncTime && !isSyncing && (
            <span>Última sincronización: {new Date(lastSyncTime).toLocaleTimeString()}</span>
          )}
          <span className="ml-4 font-semibold">{metradosFiltrados.length} metrados registrados</span>
        </div>
        <button
          onClick={() => void handleSaveMetrados()}
          disabled={isSyncing || metradosFiltrados.length === 0}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Save className="w-4 h-4" />
          {isSyncing ? 'Guardando...' : 'Guardar Metrados'}
        </button>
      </div>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[70vh]">
        <div className="lg:col-span-4 xl:col-span-3">
          <MetradosForm
            state={state}
            actions={actions}
            onGuardar={handleGuardar}
            proyecto={context.proyecto}
          />
        </div>

        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
          <MetradosTable
            metrados={metradosFiltrados}
            onUpdate={handleUpdateMetrado}
            onGroupUpdate={handleUpdateGroup}
            onDelete={handleDeleteMetrado}
            proyecto={context.proyecto}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
