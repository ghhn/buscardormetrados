import { useState, useEffect, useMemo } from 'react';
import { 
  Building2, 
  Save, 
  UserCircle2, 
  LogOut, 
  Stethoscope, 
  AlertTriangle,
  RotateCcw,
  Building,
  CheckCircle2,
  XCircle,
  Info
} from 'lucide-react';
import MetradosForm from './components/MetradosForm';
import MetradosTable from './components/MetradosTable';
import { SearchCombobox } from './components/ui/SearchCombobox';
import { useMetradosForm } from './hooks/useMetradosForm';
import { useMetradosStore } from './store/useMetradosStore';
import { usePartidasCatalog } from './hooks/usePartidasCatalog';
import { Metrado, Partida } from './types';
import { 
  signInWithEmail, 
  signOutUser, 
  restoreSession, 
  requestPasswordReset,
  updatePassword
} from './services/authService';
import { saveMetrados, loadMetradosByUser } from './services/metradosService';

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
    addCustomPartida,
    currentUser,
    setCurrentUser,
    isSyncing,
    setSyncing,
    lastSyncTime,
    updateLastSyncTime,
    customPartidas
  } = useMetradosStore();

  const { partidas: partidasBase } = usePartidasCatalog(context.proyecto);

  // Estados locales
  const [toast, setToast] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success');
  
  // Estados para Login
  const [selectedEmail, setSelectedEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Estados para Recuperación de Contraseña
  const [recoveryMode, setRecoveryMode] = useState(false);
  const [recoveryPassword, setRecoveryPassword] = useState('');
  const [recoveryConfirmPassword, setRecoveryConfirmPassword] = useState('');
  const [recoveryError, setRecoveryError] = useState<string | null>(null);
  const [recoveryMessage, setRecoveryMessage] = useState<string | null>(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isSendingReset, setIsSendingReset] = useState(false);

  // Estados para el Modal de Nueva Partida
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPartida, setNewPartida] = useState({ codigo: '', descripcion: '', unidad: 'und' });

  // Restaurar sesión al cargar
  useEffect(() => {
    const init = async () => {
      const user = await restoreSession();
      if (user) {
        setCurrentUser(user);
        await loadUserMetrados(user.id);
      }
      
      // Manejar hash de recuperación
      if (window.location.hash && window.location.hash.includes('type=recovery')) {
        setRecoveryMode(true);
      }
    };
    init();
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

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast(message);
    setToastType(type);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = async () => {
    if (!selectedEmail || !loginPassword) return;
    
    setIsLoggingIn(true);
    setLoginError(null);
    try {
      const response = await signInWithEmail(selectedEmail, loginPassword);
      if (response.success && response.user) {
        setCurrentUser(response.user);
        await loadUserMetrados(response.user.id);
      } else {
        setLoginError(response.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setLoginError('Ocurrió un error inesperado');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await signOutUser();
    setCurrentUser(null);
    // Limpiar estado local si es necesario
  };

  const handlePasswordResetRequest = async () => {
    if (!selectedEmail) {
      setLoginError('Ingrese su email para enviar el enlace de recuperación');
      return;
    }
    setIsSendingReset(true);
    setLoginError(null);
    try {
      const response = await requestPasswordReset(selectedEmail);
      if (response.success) {
        setRecoveryMessage('Se ha enviado un enlace de recuperación a tu correo.');
      } else {
        setLoginError(response.error || 'Error al enviar el enlace');
      }
    } catch (err) {
      setLoginError('Error inesperado al solicitar recuperación');
    } finally {
      setIsSendingReset(false);
    }
  };

  const handlePasswordUpdate = async () => {
    if (!recoveryPassword || recoveryPassword !== recoveryConfirmPassword) {
      setRecoveryError('Las contraseñas no coinciden');
      return;
    }
    if (recoveryPassword.length < 6) {
      setRecoveryError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setIsUpdatingPassword(true);
    setRecoveryError(null);
    try {
      const response = await updatePassword(recoveryPassword);
      if (response.success) {
        setRecoveryMessage('Contraseña actualizada con éxito. Ya puedes iniciar sesión.');
        setRecoveryMode(false);
        setRecoveryPassword('');
        setRecoveryConfirmPassword('');
      } else {
        setRecoveryError(response.error || 'Error al actualizar la contraseña');
      }
    } catch (err) {
      setRecoveryError('Error inesperado al actualizar contraseña');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleSaveMetrados = async () => {
    if (!currentUser) return;
    setSyncing(true);
    try {
      const response = await saveMetrados(metrados, currentUser.id, context.proyecto, currentUser.especialidad_id || 0);
      if (response.success) {
        showToast('Metrados sincronizados con Supabase', 'success');
        updateLastSyncTime();
      } else {
        showToast(response.error || 'Error al sincronizar', 'error');
      }
    } catch (err) {
      showToast('Error de red al sincronizar', 'error');
    } finally {
      setSyncing(false);
    }
  };

  const handleGuardar = () => {
    if (state.partidaSeleccionada) {
      const nuevo: Metrado = {
        id: crypto.randomUUID(),
        codigo_partida: state.partidaSeleccionada.codigo,
        descripcion_partida: state.partidaSeleccionada.descripcion,
        unidad: state.partidaSeleccionada.unidad,
        frente: state.frente,
        bloque: state.bloque,
        nivel: state.nivel,
        cuadrilla: state.cuadrilla,
        elemento: state.elemento,
        detalle: state.detalle,
        cantidad: state.cantidad || 0,
        longitud_area: state.longitud || 0,
        ancho_empalme: state.ancho || 0,
        altura_gancho: state.altura || 0,
        nro_veces: state.nroVeces || 1,
        parcial: 0,
        total: 0,
        fecha: state.fecha,
        proyecto: context.proyecto,
        autor_usuario: currentUser ? currentUser.nombre : "Usuario",
        created_at: Date.now()
      };

      // Cálculos
      const val = (n: any) => (n === '' || n === undefined || n === null ? 0 : parseFloat(String(n)));
      const cant = val(nuevo.cantidad);
      const largo = val(nuevo.longitud_area);
      const ancho = val(nuevo.ancho_empalme);
      const altura = val(nuevo.altura_gancho);
      const veces = val(nuevo.nro_veces);

      let factors = [cant, largo, ancho, altura].filter(v => v > 0);
      let parcial = factors.length > 0 ? factors.reduce((acc, v) => acc * v, 1) : 0;
      nuevo.parcial = parcial;
      nuevo.total = parcial * (veces || 1);

      addMetrado(nuevo);
      showToast('Metrado registrado localmente', 'success');
    }
  };

  const handleDeleteMetrado = (id: string) => {
    deleteMetrado(id);
    showToast('Registro eliminado', 'info');
  };

  const handleUpdateMetrado = (id: string, field: keyof Metrado, value: unknown) => {
    const metradoOriginal = metrados.find((m) => m.id === id);
    if (!metradoOriginal) return;

    const finalMetrado = { ...metradoOriginal, [field]: value };
    
    // Recalcular si es campo numérico
    if (['cantidad', 'longitud_area', 'ancho_empalme', 'altura_gancho', 'nro_veces'].includes(field as string)) {
      const val = (n: any) => (n === '' || n === undefined || n === null ? 0 : parseFloat(String(n)));
      const cant = val(finalMetrado.cantidad);
      const largo = val(finalMetrado.longitud_area);
      const ancho = val(finalMetrado.ancho_empalme);
      const altura = val(finalMetrado.altura_gancho);
      const veces = val(finalMetrado.nro_veces);

      let factors = [cant, largo, ancho, altura].filter(v => v > 0);
      let parcial = factors.length > 0 ? factors.reduce((acc, v) => acc * v, 1) : 0;
      finalMetrado.parcial = parcial;
      finalMetrado.total = parcial * (veces || 1);
      
      updateMetrado(id, field, value);
      updateMetrado(id, 'parcial', finalMetrado.parcial);
      updateMetrado(id, 'total', finalMetrado.total);
    } else {
      updateMetrado(id, field, value);
    }
  };

  const handleAddCustomPartida = () => {
    if (!newPartida.codigo || !newPartida.descripcion) {
      showToast("Faltan datos de la partida", "error");
      return;
    }
    const created: Partida = {
      id: `cp-${Date.now()}`,
      ...newPartida,
      es_titulo: false,
      modificacion: 'PC-NUEVA',
      proyecto: context.proyecto
    };
    addCustomPartida(created);
    actions.setPartidaSeleccionada(created as any);
    setIsModalOpen(false);
    setNewPartida({ codigo: '', descripcion: '', unidad: 'und' });
    showToast("Partida personalizada añadida", "success");
  };

  const handleUpdateGroup = (codigoPartida: string, oldElemento: string, newElemento: string) => {
    updateGroup(codigoPartida, oldElemento, newElemento);
  };

  const metradosFiltrados = useMemo(() => {
    return metrados.filter(m => !m.proyecto || m.proyecto === context.proyecto);
  }, [metrados, context.proyecto]);

  const catalogoBuscador = useMemo(() => {
    return [...partidasBase, ...customPartidas];
  }, [partidasBase, customPartidas]);

  // Si no hay usuario, mostrar login
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 text-slate-800 mb-8 border-b pb-4">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Building className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black tracking-tight uppercase">Buscador Metrados</h2>
          </div>

          {recoveryMessage && (
            <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 flex gap-3 text-sm">
              <Info className="w-5 h-5 flex-shrink-0" />
              {recoveryMessage}
            </div>
          )}

          <div className="space-y-5">
            {!recoveryMode ? (
              <>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email</label>
                  <input
                    value={selectedEmail}
                    onChange={(e) => setSelectedEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && void handleLogin()}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium"
                    placeholder="ejemplo@metrados.local"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Contraseña</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && void handleLogin()}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium"
                    placeholder="••••••••"
                  />
                </div>

                {loginError && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl border border-red-100 flex gap-2 text-xs font-bold items-center animate-in fade-in zoom-in-95">
                    <XCircle className="w-4 h-4" />
                    {loginError}
                  </div>
                )}

                <button
                  disabled={!selectedEmail || !loginPassword || isLoggingIn}
                  onClick={() => void handleLogin()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-widest py-4 rounded-xl disabled:bg-slate-200 transition-all shadow-lg shadow-blue-600/20 active:scale-95 mt-2"
                >
                  {isLoggingIn ? 'Verificando...' : 'Iniciar Sesión'}
                </button>

                <button
                  type="button"
                  disabled={!selectedEmail || isSendingReset}
                  onClick={() => void handlePasswordResetRequest()}
                  className="w-full text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 disabled:text-slate-300 transition-colors py-2"
                >
                  {isSendingReset ? 'Procesando...' : '¿Olvidaste tu contraseña?'}
                </button>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Accesos rápidos:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => setSelectedEmail('estructuras@metrados.local')}
                      className="text-[9px] font-black uppercase tracking-tighter bg-slate-100 hover:bg-slate-200 py-2 rounded-lg text-slate-600 transition-colors"
                    >
                      Estructuras
                    </button>
                    <button 
                      onClick={() => setSelectedEmail('residente@metrados.local')}
                      className="text-[9px] font-black uppercase tracking-tighter bg-slate-100 hover:bg-slate-200 py-2 rounded-lg text-slate-600 transition-colors"
                    >
                      Residente
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Nueva Contraseña</label>
                  <input
                    type="password"
                    value={recoveryPassword}
                    onChange={(e) => setRecoveryPassword(e.target.value)}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Confirmar Contraseña</label>
                  <input
                    type="password"
                    value={recoveryConfirmPassword}
                    onChange={(e) => setRecoveryConfirmPassword(e.target.value)}
                    className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium"
                    placeholder="Repita la contraseña"
                  />
                </div>

                {recoveryError && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl border border-red-100 flex gap-2 text-xs font-bold items-center">
                    <XCircle className="w-4 h-4" />
                    {recoveryError}
                  </div>
                )}

                <button
                  disabled={!recoveryPassword || !recoveryConfirmPassword || isUpdatingPassword}
                  onClick={() => void handlePasswordUpdate()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-widest py-4 rounded-xl disabled:bg-slate-200 transition-all shadow-lg active:scale-95"
                >
                  {isUpdatingPassword ? 'Actualizando...' : 'Guardar Nueva Contraseña'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Dashboard principal
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-10 flex flex-col gap-8 relative max-w-[1700px] mx-auto bg-slate-50/50">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary text-white p-3 rounded-2xl shadow-xl shadow-primary/30">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent uppercase tracking-tight">
              Metrados Belempampa <span className="text-primary/40 text-xl ml-1">v5.1</span>
            </h1>
            <p className="text-xs text-gray-400 font-black uppercase tracking-[0.2em]">Data Engineering & Cost Control</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* User Profile */}
          <div className="flex items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-right">
              <div className="text-xs font-black text-slate-800 uppercase tracking-tighter">{currentUser.nombre}</div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                {currentUser.tipo === 'especialidad' ? currentUser.especialidad : currentUser.tipo}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
              <UserCircle2 className="w-6 h-6" />
            </div>
            <div className="w-px h-6 bg-slate-100 mx-1" />
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
              title="Cerrar Sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Project Selector */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm ml-2">
            <button 
              onClick={() => setContext({ proyecto: 'hospital' })}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                context.proyecto === 'hospital' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              Hospital
            </button>
            <button 
              onClick={() => setContext({ proyecto: 'contingencia' })}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                context.proyecto === 'contingencia' 
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              Contingencia
            </button>
          </div>
        </div>
      </header>

      {/* Stats Counter & Info */}
      <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm">
         <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Registros</span>
              <span className="text-xl font-black text-slate-800">{metradosFiltrados.length} <span className="text-sm font-bold text-slate-400 ml-1">metrados</span></span>
            </div>
            <div className="w-px h-8 bg-slate-100" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sincronización</span>
              <span className="text-xs font-bold text-slate-600 flex items-center gap-2">
                {isSyncing ? (
                  <span className="flex items-center gap-2 text-blue-600 animate-pulse">
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" /> Sincronizando datos...
                  </span>
                ) : lastSyncTime ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    Hoy, {new Date(lastSyncTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </>
                ) : (
                  'No sincronizado'
                )}
              </span>
            </div>
         </div>

         <div className="flex gap-3">
            <button 
              onClick={handleSaveMetrados}
              disabled={isSyncing || metradosFiltrados.length === 0}
              className="flex items-center gap-2.5 bg-green-600 hover:bg-green-700 disabled:bg-slate-200 text-white font-black uppercase text-[10px] tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg shadow-green-600/20 active:scale-95"
            >
              <Save className="w-4 h-4" />
              {isSyncing ? 'Guardando...' : 'Nube Supabase'}
            </button>
         </div>
      </div>

      <main className="grid grid-cols-1 xl:grid-cols-12 gap-8 min-h-[65vh]">
        
        {/* Left Column: Input Form & Search */}
        <div className="xl:col-span-4 2xl:col-span-3 flex flex-col gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 pb-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2 block">Partida Matriz</label>
              <SearchCombobox
                partidas={catalogoBuscador}
                value={state.partidaSeleccionada ? state.partidaSeleccionada.descripcion : ''}
                onSelect={(p: Partida) => {
                  actions.setPartidaSeleccionada(p);
                  actions.setCantidad(1);
                  actions.setLongitud('');
                  actions.setAncho('');
                  actions.setAltura('');
                }}
                onAddPartida={() => setIsModalOpen(true)}
                placeholder="Buscar por código o descripción..."
              />
            </div>

            <MetradosForm
              state={state}
              actions={actions}
              onGuardar={handleGuardar}
              proyecto={context.proyecto}
            />
          </div>
        </div>

        {/* Right Column: Historical Table */}
        <div className="xl:col-span-8 2xl:col-span-9 flex flex-col">
          <MetradosTable
            metrados={metradosFiltrados}
            onUpdate={handleUpdateMetrado}
            onGroupUpdate={handleUpdateGroup}
            onDelete={handleDeleteMetrado}
            proyecto={context.proyecto}
          />
        </div>
      </main>

      {/* Toast Notification Floating */}
      {toast && (
        <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-5 duration-300`}>
          <div className={`
            px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border font-black text-xs uppercase tracking-widest
            ${toastType === 'success' ? 'bg-white border-green-100 text-green-600 shadow-green-500/10' : 
              toastType === 'error' ? 'bg-white border-red-100 text-red-600 shadow-red-500/10' : 
              'bg-white border-blue-100 text-blue-600 shadow-blue-500/10'}
          `}>
             <div className={`p-2 rounded-lg ${
               toastType === 'success' ? 'bg-green-50' : 
               toastType === 'error' ? 'bg-red-50' : 'bg-blue-50'
             }`}>
               {toastType === 'success' && <CheckCircle2 className="w-5 h-5" />}
               {toastType === 'error' && <XCircle className="w-5 h-5" />}
               {toastType === 'info' && <Info className="w-5 h-5" />}
             </div>
             {toast}
          </div>
        </div>
      )}

      {/* Modal - Nueva Partida Personalizada */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300 p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md p-8 flex flex-col gap-6 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Crear Partida</h2>
              <button onClick={() => setIsModalOpen(false)} className="bg-slate-50 p-2 rounded-full text-slate-400 hover:text-slate-600 transition-colors">✕</button>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Código / Item</label>
                <input
                  type="text"
                  placeholder="Ej: OE.2.1.3"
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-blue-50 outline-none transition-all placeholder:text-slate-300"
                  value={newPartida.codigo}
                  onChange={(e) => setNewPartida({...newPartida, codigo: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Descripción</label>
                <textarea
                  placeholder="Nombre de la partida..."
                  rows={3}
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none placeholder:text-slate-300"
                  value={newPartida.descripcion}
                  onChange={(e) => setNewPartida({...newPartida, descripcion: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Unidad de Medida</label>
                <select
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-blue-50 outline-none transition-all cursor-pointer"
                  value={newPartida.unidad}
                  onChange={(e) => setNewPartida({...newPartida, unidad: e.target.value})}
                >
                  <option value="und">und (Unidad)</option>
                  <option value="m">m (Metro)</option>
                  <option value="m2">m2 (Área)</option>
                  <option value="m3">m3 (Volumen)</option>
                  <option value="kg">kg (Acero)</option>
                  <option value="glb">glb (Global)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 border border-slate-200 transition-all"
              >
                Cerrar
              </button>
              <button 
                onClick={handleAddCustomPartida}
                className="flex-1 px-4 py-4 rounded-2xl text-xs font-black uppercase tracking-widest bg-primary text-white hover:bg-primary/95 shadow-xl shadow-primary/20 active:scale-95 transition-all"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
