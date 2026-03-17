import { useState } from 'react';
import { MetradosForm } from './components/MetradosForm';
import { MetradosTable } from './components/MetradosTable';
import { useMetradosForm } from './hooks/useMetradosForm';
import type { Metrado } from './types';
import { Building2, Stethoscope, AlertTriangle, UserCircle2, LogOut } from 'lucide-react';
import { useMetradosStore } from './store/useMetradosStore';

// Tipo de proyecto disponible en el sistema (Hospital o Contingencia)
export type TipoProyecto = 'hospital' | 'contingencia';

type UserType = 'especialidad' | 'jefe_area' | 'residente';

type User = {
  id: string;
  name: string;
  type: UserType;
  specialty?: string;
};

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

function App() {
  const { state, actions } = useMetradosForm();
  const { metrados, context, setContext, addMetrado, updateMetrado, deleteMetrado, updateGroup } = useMetradosStore();
  const [toast, setToast] = useState<string | null>(null);
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

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';



  const handleLogin = async () => {
    if (!selectedUserId) {
      setLoginError('Seleccione un usuario.');
      return;
    }
    if (!loginPassword) {
      setLoginError('Ingrese contraseña.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: selectedUserId, password: loginPassword }),
      });
      if (!response.ok) {
        const err = await response.json();
        setLoginError(err.error || 'Credenciales inválidas');
        return;
      }
      const userData = await response.json();
      const selectedMeta = LOGIN_USERS.find((u) => u.id === selectedUserId);
      const user: User = {
        id: userData.id,
        name: userData.nombre || userData.username,
        type: userData.tipo,
        specialty: selectedMeta?.specialty,
      };
      setCurrentUser(user);
      localStorage.setItem('metrados_current_user', JSON.stringify(user));
      setLoginError(null);
    } catch (err) {
      console.error(err);
      setLoginError('No se pudo conectar al servidor de login');
    }
  };

  const handleLogout = () => {
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
        const resp = await fetch(`${API_BASE}/api/metrados`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...nuevoConProy,
            autor_usuario: currentUser?.id ?? null,
            proyecto_id: context.proyecto === 'hospital' ? 1 : 2,
            especialidad_id: null,
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
          <p className="text-sm text-slate-500 mb-4">Selecciona tu usuario (especialidad, jefe de área o residente).</p>
          <select
            className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">-- Seleccione usuario --</option>
            {LOGIN_USERS.map((u) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>
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
}

export default App;
