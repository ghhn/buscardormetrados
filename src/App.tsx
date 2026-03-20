<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
=======
<<<<<<< HEAD
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

=======
import { useState, useEffect } from 'react';
import { MetradosForm } from './components/MetradosForm';
>>>>>>> main
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado } from './types';
import { Building2, Stethoscope, AlertTriangle, Save, RotateCcw } from 'lucide-react';
import { useMetradosStore } from './store/useMetradosStore';
import { SearchCombobox } from './components/ui/SearchCombobox';
import { mockPartidas } from './data/mockDB_1';
import { mockPartidasContingencia } from './data/mockDB_contingencia';

// Tipo de proyecto disponible en el sistema (Hospital o Contingencia)
export type TipoProyecto = 'hospital' | 'contingencia';

<<<<<<< HEAD
=======
type UserType = 'especialidad' | 'jefe_area' | 'residente';

type User = {
  id: string;
  name: string;
  type: UserType;
  specialty?: string;
  specialtyId?: number | null;
};

>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
type Proyecto = {
  id: number;
  nombre: string;
  tipo: 'hospital' | 'contingencia' | string;
};

<<<<<<< HEAD
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
=======
const LOGIN_USERS: User[] = [
  { id: 'especialidad_estructuras', name: 'Especialidad Estructuras', type: 'especialidad', specialty: 'ESTRUCTURAS' },
  { id: 'especialidad_arquitectura', name: 'Especialidad Arquitectura', type: 'especialidad', specialty: 'ARQUITECTURA' },
  { id: 'especialidad_sanitarias', name: 'Especialidad Instalaciones Sanitarias', type: 'especialidad', specialty: 'INSTALACIONES SANITARIAS' },
  { id: 'especialidad_electricas', name: 'Especialidad Eléctricas', type: 'especialidad', specialty: 'ELÉCTRICAS' },
  { id: 'especialidad_electromecanicas', name: 'Especialidad Electromecánicas', type: 'especialidad', specialty: 'ELECTROMECÁNICAS' },
  { id: 'especialidad_arqueologia', name: 'Especialidad Arqueología', type: 'especialidad', specialty: 'ARQUEOLOGÍA' },
  { id: 'especialidad_seguridad', name: 'Especialidad Seguridad', type: 'especialidad', specialty: 'SEGURIDAD' },
  { id: 'especialidad_obras_provisionales', name: 'Especialidad Obras Provisionales', type: 'especialidad', specialty: 'OBRAS PROVICIONALES' },
  { id: 'jefe_area_1', name: 'Jefe de Área 1', type: 'jefe_area' },
  { id: 'jefe_area_2', name: 'Jefe de Área 2', type: 'jefe_area' },
  { id: 'residente', name: 'Residente', type: 'residente' },
];

>>>>>>> main
function App() {
  const { state, actions } = useMetradosForm();
  const { metrados, context, setContext, addMetrado, updateMetrado, deleteMetrado, updateGroup, addCustomPartida } = useMetradosStore();
  const [toast, setToast] = useState<string | null>(null);

  // Estados para el Modal de Nueva Partida
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPartida, setNewPartida] = useState({ codigo: '', descripcion: '', unidad: 'und' });

<<<<<<< HEAD
  const handleGuardar = () => {
=======
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';


>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41

  useEffect(() => {
    const loadProjects = async () => {
      try {
<<<<<<< HEAD
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

=======
        const resp = await fetch(`${API_BASE}/api/proyectos`);
        if (!resp.ok) return;
        const data = await resp.json();
        setProyectos(data);
        const lookup: Record<string, number> = {};
        data.forEach((p: Proyecto) => {
          lookup[p.tipo] = p.id;
        });
        setProjectLookup(lookup);
      } catch (err) {
        console.error('No se pudo cargar proyectos', err);
      }
    };
    loadProjects();
  }, []);

  const handleLogin = async () => {
    const username = selectedUserId;
    if (!username) {
      setLoginError('Seleccione o escriba un usuario.');
      return;
    }
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
    if (!loginPassword) {
      setLoginError('Ingrese contraseña.');
      return;
    }

<<<<<<< HEAD
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
=======
    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password: loginPassword }),
      });
      if (!response.ok) {
        const err = await response.json();
        setLoginError(err.error || 'Credenciales inválidas');
        return;
      }
      const userData = await response.json();
      const selectedMeta = LOGIN_USERS.find((u) => u.id === username);
      const user: User = {
        id: userData.id,
        name: userData.nombre || userData.username,
        type: userData.tipo,
        specialty: selectedMeta?.specialty,
        specialtyId: userData.especialidad_id || null,
      };
      setCurrentUser(user);
      localStorage.setItem('metrados_current_user', JSON.stringify(user));
      setLoginError(null);
    } catch (err) {
      console.error(err);
      setLoginError('No se pudo conectar al servidor de login');
    }
  };

  const handleRegister = async () => {
    setRegisterError(null);
    setRegisterSuccess(null);

    if (!registerUsername || !registerNombre || !registerPassword || !registerTipo) {
      setRegisterError('Complete todos los campos obligatorios.');
      return;
    }
    if (registerTipo === 'especialidad' && !registerEspecialidad) {
      setRegisterError('Seleccione una especialidad para usuarios de tipo especialidad.');
      return;
    }

    try {
      const payload: any = {
        username: registerUsername,
        nombre: registerNombre,
        tipo: registerTipo,
        password: registerPassword,
        especialidad_id: null,
        especialidad_nombre: registerTipo === 'especialidad' ? registerEspecialidad : null,
      };

      const response = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const err = await response.json();
        setRegisterError(err.error || 'Error al registrar usuario');
        return;
      }

      const data = await response.json();
      setRegisterSuccess('Usuario registrado con éxito. Ahora inicie sesión.');
      setIsRegistering(false);
      setSelectedUserId(registerUsername);
      setLoginPassword('');
      setRegisterUsername('');
      setRegisterNombre('');
      setRegisterPassword('');
      setRegisterTipo('especialidad');
      setRegisterEspecialidad('ESTRUCTURAS');
    } catch (err) {
      console.error(err);
      setRegisterError('No se pudo conectar al servidor para registrar');
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
    }
  };

  const handleLogout = () => {
<<<<<<< HEAD
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
=======
    setCurrentUser(null);
    setSelectedUserId('');
    setLoginPassword('');
    setLoginError(null);
    localStorage.removeItem('metrados_current_user');
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
  };

  const handleGuardar = async () => {
>>>>>>> main
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      // El metrado hereda el proyecto activo al momento de registrarse
      const nuevoConProy = { ...nuevo, proyecto: context.proyecto };
      addMetrado(nuevoConProy);
<<<<<<< HEAD
      showToast(`Metrado guardado: ${nuevo.codigo_partida}`, 'success');
=======
      setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
      setTimeout(() => setToast(null), 3000);
<<<<<<< HEAD
=======

      try {
        const proyectoId = projectLookup[context.proyecto] ?? (context.proyecto === 'hospital' ? 1 : 2);
        const resp = await fetch(`${API_BASE}/api/metrados`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...nuevoConProy,
            autor_usuario: currentUser?.id ?? null,
            proyecto_id: proyectoId,
            especialidad_id: currentUser?.specialtyId ?? null,
          }),
        });
        if (!resp.ok) {
          console.error('Error guardando en backend', await resp.text());
          return;
        }
      } catch (err) {
        console.error('Error backend guardar', err);
      }
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
>>>>>>> main
    }
  };

  const handleDeleteMetrado = (id: string) => {
    deleteMetrado(id);
<<<<<<< HEAD
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
=======
    setToast('Registro eliminado exitosamente');
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdateMetrado = (id: string, field: keyof Metrado, value: any) => {
    // Primero calculamos el nuevo valor para campos numéricos si es necesario
    const metradoOriginal = metrados.find(m => m.id === id);
    if (!metradoOriginal) return;

    let finalMetrado = { ...metradoOriginal, [field]: value };

    if (['cantidad', 'longitud_area', 'ancho_empalme', 'altura_gancho', 'nro_veces'].includes(field as string)) {
      const parseVal = (v: any) => {
        if (v === "" || v === undefined || v === null) return null;
        const num = parseFloat(String(v));
        return isNaN(num) ? null : num;
      };

      const cant = parseVal(finalMetrado.cantidad);
      const l = parseVal(finalMetrado.longitud_area);
      const a = parseVal(finalMetrado.ancho_empalme);
      const h = parseVal(finalMetrado.altura_gancho);
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41

      let product = 1;
      let hasFactors = false;

<<<<<<< HEAD
      [cant, largo, ancho, altura].forEach((val) => {
=======
      [cant, l, a, h].forEach(val => {
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
        if (val !== null) {
          product *= val;
          hasFactors = true;
        }
      });

      finalMetrado.parcial = hasFactors ? product : 0;
      const veces = parseVal(finalMetrado.nro_veces);
      finalMetrado.total = finalMetrado.parcial * (veces !== null ? veces : 1);

<<<<<<< HEAD
      updateMetrado(id, field, value);
      updateMetrado(id, 'parcial', finalMetrado.parcial);
      updateMetrado(id, 'total', finalMetrado.total);
      return;
    }

    updateMetrado(id, field, value);
=======
      // Actualizamos todo el metrado en el store si hubo cambios en los cálculos
      updateMetrado(id, field, value);
      updateMetrado(id, 'parcial', finalMetrado.parcial);
      updateMetrado(id, 'total', finalMetrado.total);
    } else {
      updateMetrado(id, field, value);
    }
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
  };

  const handleAddCustomPartida = () => {
    if (!newPartida.codigo || !newPartida.descripcion) {
      alert("Por favor completa el código y la descripción");
      return;
    }
    const created: any = {
      ...newPartida,
      es_titulo: false,
      jerarquia: newPartida.codigo,
      nivel_jerarquia: newPartida.codigo.split('.').length,
      modificacion: 'PC' // Partida Creada
    };
    addCustomPartida(created);
    actions.setPartidaSeleccionada(created);
    setIsModalOpen(false);
    setNewPartida({ codigo: '', descripcion: '', unidad: 'und' });
    setToast("Partida personalizada añadida exitosamente");
    setTimeout(() => setToast(null), 3000);
  };

  const handleUpdateGroup = (codigoPartida: string, oldElemento: string, newElemento: string) => {
    updateGroup(codigoPartida, oldElemento, newElemento);
  };

<<<<<<< HEAD
  const metradosFiltrados = metrados.filter(
    (metrado) => !metrado.proyecto || metrado.proyecto === context.proyecto
  );
=======
  // Filtra los metrados mostrados según el proyecto activo
  const metradosFiltrados = metrados.filter(m => !m.proyecto || m.proyecto === context.proyecto);
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41

<<<<<<< HEAD
  // Catálogo para el buscador superior
  const catalogoBuscador = useMemo(() => {
    const base = context.proyecto === 'hospital' ? mockPartidas : mockPartidasContingencia;
    return [...base, ...state.customPartidas];
  }, [context.proyecto, state.customPartidas]);

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1600px] mx-auto">

      {/* Header & Context Bar */}
      <header className="flex flex-col gap-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Metrados Belempampa <span className="text-primary/40 text-lg font-medium ml-1">v5.0</span>
              </h1>
              <p className="text-sm text-gray-500 font-medium">Plataforma de Ingeniería Aplicada</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* ─── Selector de Especialidad ─── */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              <button
                onClick={() => { setContext({ proyecto: 'hospital' }); actions.setPartidaSeleccionada(null); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'hospital'
                  ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <Stethoscope className="w-4 h-4" />
                Hospital
              </button>
              <button
                onClick={() => { setContext({ proyecto: 'contingencia' }); actions.setPartidaSeleccionada(null); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'contingencia'
                  ? 'bg-amber-50 text-amber-700 shadow-sm border border-amber-100'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <AlertTriangle className="w-4 h-4" />
                Contingencia
              </button>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            {/* Botón de Guardado Rápido */}
            <button
              onClick={handleGuardar}
              disabled={!state.partidaSeleccionada}
              className={`px-8 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 flex items-center gap-2 ${state.partidaSeleccionada
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-primary/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }`}
            >
              <Save className="w-4 h-4" />
              Registrar Metrado
            </button>
          </div>
        </div>

        {/* ─── CONTEXT BAR & SEARCH (Metadata Navigation) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          
          {/* Selector de Partida Principal */}
          <div className="lg:col-span-5 flex flex-col gap-1.5 border-r border-slate-100 pr-4">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Buscador de Partida Matriz</label>
            <SearchCombobox
              partidas={catalogoBuscador}
              value={state.partidaSeleccionada ? state.partidaSeleccionada.descripcion : ''}
              onSelect={(p) => {
                actions.setPartidaSeleccionada(p);
                actions.setCantidad(1);
                actions.setLongitud('');
                actions.setAncho('');
                actions.setAltura('');
              }}
              onAddPartida={() => setIsModalOpen(true)}
              placeholder="Buscar por código o descripción..."
            />
            {state.partidaSeleccionada && (
              <div className="flex items-center gap-2 mt-1 px-2 text-slate-500">
                <span className="text-[9px] font-mono font-black text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  {state.partidaSeleccionada.codigo}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-tighter">
                  Unidad: {state.partidaSeleccionada.unidad}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-tighter">
                  Tipo: {state.partidaSeleccionada.unidad === 'kg' ? 'ACERO' : 'ESTÁNDAR'}
                </span>
              </div>
            )}
          </div>

          {/* Metadata Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-5 gap-4 h-full items-end">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Fecha</label>
              <input
                type="date"
                value={state.fecha}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => actions.setFecha(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Frente</label>
              <input
                type="text"
                placeholder="F1"
                value={state.frente}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => actions.setFrente(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Bloque</label>
              <input
                type="text"
                placeholder="B-01"
                value={state.bloque}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => actions.setBloque(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Nivel</label>
              <input
                type="text"
                placeholder="N+0.00"
                value={state.nivel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => actions.setNivel(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5 relative group">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Cuadrilla</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="C-01"
                  value={state.cuadrilla}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => actions.setCuadrilla(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all pr-10"
                />
                <button 
                  onClick={() => actions.limpiarCampos()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-300 hover:text-red-400 transition-colors"
                  title="Reiniciar Campos"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
=======
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-6">
<<<<<<< HEAD
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
=======
          <div className="flex items-center gap-2 text-slate-700 mb-4">
            <UserCircle2 className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Iniciar sesión</h2>
          </div>

          <div className="mb-4 flex gap-2">
            <button
              onClick={() => setIsRegistering(false)}
              className={`flex-1 py-2 rounded-lg font-semibold ${!isRegistering ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
              Iniciar sesión
            </button>
            <button
              onClick={() => setIsRegistering(true)}
              className={`flex-1 py-2 rounded-lg font-semibold ${isRegistering ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
              Registrar usuario
            </button>
          </div>

          {isRegistering ? (
            <>
              <p className="text-sm text-slate-500 mb-3">Registre un usuario para crear metrados por especialidad.</p>
              <input
                className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2"
                placeholder="Usuario (username)"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              />
              <input
                className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2"
                placeholder="Nombre completo"
                value={registerNombre}
                onChange={(e) => setRegisterNombre(e.target.value)}
              />
              <input
                type="password"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2"
                placeholder="Contraseña"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <select
                className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2"
                value={registerTipo}
                onChange={(e) => setRegisterTipo(e.target.value as UserType)}
              >
                <option value="especialidad">Especialidad</option>
                <option value="jefe_area">Jefe de área</option>
                <option value="residente">Residente</option>
              </select>
              {registerTipo === 'especialidad' && (
                <select
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2"
                  value={registerEspecialidad}
                  onChange={(e) => setRegisterEspecialidad(e.target.value)}
                >
                  <option value="ESTRUCTURAS">ESTRUCTURAS</option>
                  <option value="ARQUITECTURA">ARQUITECTURA</option>
                  <option value="INSTALACIONES SANITARIAS">INSTALACIONES SANITARIAS</option>
                  <option value="ELÉCTRICAS">ELÉCTRICAS</option>
                  <option value="ELECTROMECÁNICAS">ELECTROMECÁNICAS</option>
                  <option value="ARQUEOLOGÍA">ARQUEOLOGÍA</option>
                  <option value="SEGURIDAD">SEGURIDAD</option>
                  <option value="OBRAS PROVICIONALES">OBRAS PROVICIONALES</option>
                  <option value="PLAN DE MANEJO AMBIENTAL">PLAN DE MANEJO AMBIENTAL</option>
                </select>
              )}
              {registerError && <div className="text-xs text-red-600 mb-2">{registerError}</div>}
              {registerSuccess && <div className="text-xs text-green-600 mb-2">{registerSuccess}</div>}
              <button
                onClick={handleRegister}
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg"
              >
                Registrar usuario
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-slate-500 mb-4">Usuario o selecciona uno de los ejemplos.</p>
              <input
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2"
                placeholder="Username"
              />
              <div className="mb-3 text-xs text-slate-500">Ejemplos: residente, especialidad_estructuras, etc.</div>
              <input
                type="password"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contraseña"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              {loginError && <div className="text-xs text-red-600 mb-2">{loginError}</div>}
              <button
                disabled={!selectedUserId || !loginPassword}
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg disabled:bg-slate-300"
              >
                Entrar
              </button>
              <div className="mt-4 text-xs text-slate-500">Usuarios: 8 especialidades + jefes de área + residentes.</div>
            </>
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1450px] mx-auto">
<<<<<<< HEAD
      <header className="flex items-center justify-between px-2 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/30">
=======

      {/* Header */}
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30">
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Metrados Belempampa
            </h1>
<<<<<<< HEAD
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
=======
            <p className="text-sm text-gray-500 font-medium">Plataforma Costos y Presupuestos</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <UserCircle2 className="w-5 h-5 text-slate-600" />
          <div className="text-sm text-slate-700">
            <div className="font-semibold">{currentUser?.name}</div>
            <div className="text-xs text-slate-500">{currentUser?.type === 'especialidad' ? `Especialidad: ${currentUser.specialty}` : currentUser.type === 'jefe_area' ? 'Jefe de Área' : 'Residente'}</div>
          </div>
          <button
            onClick={handleLogout}
            className="ml-2 text-slate-500 hover:text-slate-800 rounded-md p-1 border border-slate-200 hover:border-slate-300"
            aria-label="Cerrar sesión"
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

<<<<<<< HEAD
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setContext({ proyecto: 'hospital' })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              context.proyecto === 'hospital'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-slate-500 hover:text-slate-700'
            }`}
=======
        {/* ─── Selector de Especialidad ─── */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
          <button
            onClick={() => { setContext({ proyecto: 'hospital' }); actions.setPartidaSeleccionada(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'hospital'
              ? 'bg-white text-blue-700 shadow-md border border-blue-100'
              : 'text-slate-500 hover:text-slate-700'
              }`}
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
          >
            <Stethoscope className="w-4 h-4" />
            Hospital
          </button>
          <button
<<<<<<< HEAD
            onClick={() => setContext({ proyecto: 'contingencia' })}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              context.proyecto === 'contingencia'
                ? 'bg-white text-amber-600 shadow-md'
                : 'text-slate-500 hover:text-slate-700'
            }`}
=======
            onClick={() => { setContext({ proyecto: 'contingencia' }); actions.setPartidaSeleccionada(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'contingencia'
              ? 'bg-white text-amber-600 shadow-md border border-amber-100'
              : 'text-slate-500 hover:text-slate-700'
              }`}
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
          >
            <AlertTriangle className="w-4 h-4" />
            Contingencia
          </button>
>>>>>>> main
        </div>
      </header>

<<<<<<< HEAD
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
=======
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-5 mt-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl font-medium flex items-center gap-2">
          <span className="text-xl">✨</span> {toast}
        </div>
      )}


<<<<<<< HEAD
      {/* Main Layout Grid (RECONSTRUIDO: ANCHO COMPLETO) */}
      <main className="flex-1 min-h-[70vh]">
        <div className="w-full flex flex-col gap-6">
=======
      {/* Main Layout Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[70vh]">

        {/* Left Column: Form */}
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
        <div className="lg:col-span-4 xl:col-span-3">
          <MetradosForm
            state={state}
            actions={actions}
            onGuardar={handleGuardar}
            proyecto={context.proyecto}
          />
        </div>

<<<<<<< HEAD
=======
        {/* Right Column: Table History */}
>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
>>>>>>> main
          <MetradosTable
            metrados={metradosFiltrados}
            onUpdate={handleUpdateMetrado}
            onGroupUpdate={handleUpdateGroup}
            onDelete={handleDeleteMetrado}
            proyecto={context.proyecto}
          />
        </div>
<<<<<<< HEAD
      </main>

      {/* Modal - Nueva Partida Personalizada */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md p-6 flex flex-col gap-5 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">Crear Partida Nueva</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">✕</button>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Código / Item</label>
                <input
                  type="text"
                  placeholder="Ej: OE.1.1.2.1"
                  className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
                  value={newPartida.codigo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPartida({...newPartida, codigo: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Descripción</label>
                <textarea
                  placeholder="Descripción de la partida..."
                  rows={3}
                  className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all resize-none"
                  value={newPartida.descripcion}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewPartida({...newPartida, descripcion: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Unidad</label>
                <select
                  className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all appearance-none cursor-pointer"
                  value={newPartida.unidad}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNewPartida({...newPartida, unidad: e.target.value})}
                >
                  <option value="und">und (Unidad)</option>
                  <option value="m">m (Metro Lineal)</option>
                  <option value="m2">m2 (Metro Cuadrado)</option>
                  <option value="m3">m3 (Metro Cúbico)</option>
                  <option value="kg">kg (Kilogramos - Acero)</option>
                  <option value="pza">pza (Pieza)</option>
                  <option value="glb">glb (Global)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 border border-slate-200 transition-all"
              >
                Cancelar
              </button>
              <button 
                onClick={handleAddCustomPartida}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                Guardar Partida
              </button>
            </div>
          </div>
        </div>
      )}
=======
<<<<<<< HEAD
      </main>
=======

      </main>

>>>>>>> 606008038ae330265422f196bf30875eaa6f9f41
>>>>>>> main
    </div>
  );
}

export default App;
