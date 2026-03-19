import.meta.env.VITE_SUPABASE_URL
import { useState, useEffect } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado } from './types';
import { Building2, Stethoscope, AlertTriangle, UserCircle2, LogOut } from 'lucide-react';
import { useMetradosStore } from './store/useMetradosStore';
import { supabase } from './utils/supabase';





//import { useState, useEffect } from 'react'
//import { supabase } from './utils/supabase'


// Tipo de proyecto disponible en el sistema (Hospital o Contingencia)
export type TipoProyecto = 'hospital' | 'contingencia';

type UserType = 'especialidad' | 'jefe_area' | 'residente';

type User = {
  id: string;
  name: string;
  type: UserType;
  specialty?: string;
  specialtyId?: number | null;
};

type Proyecto = {
  id: number;
  nombre: string;
  tipo: 'hospital' | 'contingencia' | string;
};

function App() {
  const { state, actions } = useMetradosForm();
  const { metrados, context, setContext, addMetrado, updateMetrado, deleteMetrado, updateGroup } = useMetradosStore();
  const [toast, setToast] = useState<string | null>(null);
  const [proyectos, setProyectos] = useState([]);
  const [_projectLookup, _setProjectLookup] = useState({});
  //supabase test
  //const [todos, setTodos] = useState([]);
  //const [projectLookup, setProjectLookup] = useState({})

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('metrados_current_user');
    if (!saved) return null;
    try {
      return JSON.parse(saved);
    } catch {
      return null;
    }
  });
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerNombre, setRegisterNombre] = useState('');
  //const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [projectLookup, setProjectLookup] = useState<Record<string, number>>({});

  const [registerPassword, setRegisterPassword] = useState('');
  const [registerTipo, setRegisterTipo] = useState<UserType>('especialidad');
  const [registerEspecialidad, setRegisterEspecialidad] = useState('ESTRUCTURAS');
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null);
  //const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

  useEffect(() => {
  const load = async () => {
    const { data, error } = await supabase
      .from('proyectos')
      .select('*')

    console.log(data, error)
  }

  load()
}, [])


  useEffect(() => {
    const loadProjects = async () => {
      try {
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
    if (!loginPassword) {
      setLoginError('Ingrese contraseña.');
      return;
    }

    setIsLoggingIn(true);
    try {
      // Convertir username a email si no contiene @
      const email = username.includes('@') ? username : `${username}@metrados.local`;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: loginPassword,
      });

      if (error) {
        setLoginError(error.message || 'Credenciales inválidas');
        setIsLoggingIn(false);
        return;
      }

      const user = data.user;

      const userData: User = {
        id: user.id,
        name: user.user_metadata?.nombre || user.email || 'Usuario',
        type: user.user_metadata?.tipo || 'residente',
        specialty: user.user_metadata?.especialidad_nombre,
        specialtyId: null,
      };

      setCurrentUser(userData);
      localStorage.setItem('metrados_current_user', JSON.stringify(userData));
      setLoginError(null);
      setIsLoggingIn(false);
    } catch (err) {
      console.error(err);
      setLoginError('Error inesperado en login');
      setIsLoggingIn(false);
    }
  };

  const handleRegister = async () => {
    setRegisterError(null);
    setRegisterSuccess(null);

    if (isRegistering) {
      setRegisterError('Por favor espere mientras se procesa el registro...');
      return;
    }

    if (!registerUsername || !registerNombre || !registerPassword || !registerTipo) {
      setRegisterError('Complete todos los campos obligatorios.');
      return;
    }
    if (registerTipo === 'especialidad' && !registerEspecialidad) {
      setRegisterError('Seleccione una especialidad para usuarios de tipo especialidad.');
      return;
    }

    setIsRegistering(true);
    let registered = false;

    try {
      // Crear un email válido a partir del username
      const email = registerUsername.includes('@')
        ? registerUsername
        : `${registerUsername}@metrados.local`;

      // Registrar usuario en Supabase Auth (redirigir de vuelta a la app correcta)
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: registerPassword,
        options: {
          // Asegura que cualquier redirect ocupe el host/puerto actuales
          emailRedirectTo: window.location.origin,
          data: {
            username: registerUsername,
            nombre: registerNombre,
            tipo: registerTipo,
            especialidad_nombre: registerTipo === 'especialidad' ? registerEspecialidad : null,
          },
        },
      });

      if (signUpError) {
        setRegisterError(signUpError.message || 'Error al registrar usuario');
        return;
      }

      if (!data?.user) {
        setRegisterError('Error inesperado al registrar usuario');
        return;
      }

      setRegisterSuccess('Usuario registrado con éxito. Ahora inicie sesión.');
      setSelectedUserId(registerUsername);
      setLoginPassword('');
      setRegisterUsername('');
      setRegisterNombre('');
      setRegisterPassword('');
      setRegisterTipo('especialidad');
      setRegisterEspecialidad('ESTRUCTURAS');
      registered = true;

      // Limpiar el mensaje de éxito después de 3 segundos
      setTimeout(() => setRegisterSuccess(null), 3000);
    } catch (err) {
      console.error(err);
      setRegisterError('Error inesperado al registrar usuario');
    } finally {
      // Siempre deben reactivarse los controles al finalizar (éxito o error)
      setIsRegistering(false);

      // Si hubo registro exitoso, damos un pequeño delay antes de permitir otro registro
      if (registered) {
        setTimeout(() => setIsRegistering(false), 500);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
    setCurrentUser(null);
    setSelectedUserId('');
    setLoginPassword('');
    setLoginError(null);
    localStorage.removeItem('metrados_current_user');
  };

  const handleGuardar = async () => {
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      const nuevoConProy = { ...nuevo, proyecto: context.proyecto };
      addMetrado(nuevoConProy);
      setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
      setTimeout(() => setToast(null), 3000);

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
    }
  };

  const handleDeleteMetrado = (id: string) => {
    deleteMetrado(id);
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

      let product = 1;
      let hasFactors = false;

      [cant, l, a, h].forEach(val => {
        if (val !== null) {
          product *= val;
          hasFactors = true;
        }
      });

      finalMetrado.parcial = hasFactors ? product : 0;
      const veces = parseVal(finalMetrado.nro_veces);
      finalMetrado.total = finalMetrado.parcial * (veces !== null ? veces : 1);

      // Actualizamos todo el metrado en el store si hubo cambios en los cálculos
      updateMetrado(id, field, value);
      updateMetrado(id, 'parcial', finalMetrado.parcial);
      updateMetrado(id, 'total', finalMetrado.total);
    } else {
      updateMetrado(id, field, value);
    }
  };

  const handleUpdateGroup = (codigoPartida: string, oldElemento: string, newElemento: string) => {
    updateGroup(codigoPartida, oldElemento, newElemento);
  };

  // Filtra los metrados mostrados según el proyecto activo
  const metradosFiltrados = metrados.filter(m => !m.proyecto || m.proyecto === context.proyecto);

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-6">
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
                disabled={isRegistering}
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg disabled:bg-slate-400"
              >
                {isRegistering ? 'Registrando...' : 'Registrar usuario'}
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
                disabled={!selectedUserId || !loginPassword || isLoggingIn}
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg disabled:bg-slate-300"
              >
                {isLoggingIn ? 'Ingresando...' : 'Entrar'}
              </button>
              <div className="mt-4 text-xs text-slate-500">Usuarios: 8 especialidades + jefes de área + residentes.</div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col gap-6 relative max-w-[1450px] mx-auto">

      {/* Header */}
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Metrados Belempampa
            </h1>
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
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        {/* ─── Selector de Especialidad ─── */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
          <button
            onClick={() => { setContext({ proyecto: 'hospital' }); actions.setPartidaSeleccionada(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'hospital'
              ? 'bg-white text-blue-700 shadow-md border border-blue-100'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <Stethoscope className="w-4 h-4" />
            Hospital
          </button>
          <button
            onClick={() => { setContext({ proyecto: 'contingencia' }); actions.setPartidaSeleccionada(null); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${context.proyecto === 'contingencia'
              ? 'bg-white text-amber-600 shadow-md border border-amber-100'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <AlertTriangle className="w-4 h-4" />
            Contingencia
          </button>
        </div>
      </header>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-5 mt-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl font-medium flex items-center gap-2">
          <span className="text-xl">✨</span> {toast}
        </div>
      )}


      {/* Main Layout Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[70vh]">

        {/* Left Column: Form */}
        <div className="lg:col-span-4 xl:col-span-3">
          <MetradosForm
            state={state}
            actions={actions}
            onGuardar={handleGuardar}
            proyecto={context.proyecto}
          />
        </div>

        {/* Right Column: Table History */}
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
  return (
    <div>
      <h1>Proyectos</h1>

      {proyectos?.map((p: any) => (
        <div key={p.id}>{p.nombre}</div>
      ))}

    </div>
  )
}

export default App;
