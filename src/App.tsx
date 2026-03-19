import React, { useState, useMemo } from 'react';
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

function App() {
  const { state, actions } = useMetradosForm();
  const { metrados, context, setContext, addMetrado, updateMetrado, deleteMetrado, updateGroup, addCustomPartida } = useMetradosStore();
  const [toast, setToast] = useState<string | null>(null);

  // Estados para el Modal de Nueva Partida
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPartida, setNewPartida] = useState({ codigo: '', descripcion: '', unidad: 'und' });

  const handleGuardar = () => {
    const nuevo = actions.procesarRegistro();
    if (nuevo) {
      // El metrado hereda el proyecto activo al momento de registrarse
      const nuevoConProy = { ...nuevo, proyecto: context.proyecto };
      addMetrado(nuevoConProy);
      setToast(`Metrado guardado: ${nuevo.codigo_partida}`);
      setTimeout(() => setToast(null), 3000);
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

  // Filtra los metrados mostrados según el proyecto activo
  const metradosFiltrados = metrados.filter(m => !m.proyecto || m.proyecto === context.proyecto);

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
        </div>
      </header>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 animate-in slide-in-from-top-5 mt-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-xl font-medium flex items-center gap-2">
          <span className="text-xl">✨</span> {toast}
        </div>
      )}


      {/* Main Layout Grid (RECONSTRUIDO: ANCHO COMPLETO) */}
      <main className="flex-1 min-h-[70vh]">
        <div className="w-full flex flex-col gap-6">
          <MetradosTable
            metrados={metradosFiltrados}
            onUpdate={handleUpdateMetrado}
            onGroupUpdate={handleUpdateGroup}
            onDelete={handleDeleteMetrado}
            proyecto={context.proyecto}
          />
        </div>
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
    </div>
  );
}

export default App;
