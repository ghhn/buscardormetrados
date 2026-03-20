import React from 'react';
import { Select } from './ui/Select';
import { isAcero } from '../hooks/useMetradosForm';
import { ESPECIALIDADES_PARTIDA, getEspecialidadPorCodigo } from '../constants/especialidades';
import { Save, Eraser } from 'lucide-react';

export type TipoProyecto = 'hospital' | 'contingencia';

interface MetradosFormProps {
    state: any;
    actions: any;
    onGuardar: () => void;
    proyecto: TipoProyecto;
}

export const RenderModificacionBadge = (modificacionStr?: string) => {
    if (!modificacionStr) {
        return (
            <div className="w-[10px] h-[10px] rounded-full bg-sky-200 shadow-sm border border-sky-300 shrink-0" title="Sin Modificación" />
        );
    }

    const tags = modificacionStr.split('-');

    return (
        <div className="flex items-center gap-1 shrink-0">
            {tags.map((tag, i) => {
                let colorClass = "bg-slate-200 border-slate-300";
                if (tag.startsWith('DD')) colorClass = "bg-red-500 border-red-600";
                if (tag.startsWith('PN')) colorClass = "bg-green-500 border-green-600";
                if (tag.startsWith('MM')) colorClass = "bg-blue-500 border-blue-600";
                if (tag.startsWith('PC')) colorClass = "bg-[#FF69B4] border-[#FF1493]"; // Rosado (Partidas Creadas)

                return (
                    <div key={i} className={`w-[10px] h-[10px] rounded-full border shadow-sm ${colorClass}`} title={tag} />
                );
            })}
        </div>
    );
};

// @ts-ignore
window.RenderModificacionBadge = RenderModificacionBadge;

const MetradosForm: React.FC<MetradosFormProps> = ({ state, actions, onGuardar }) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLSelectElement>, nextId: string) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (nextId === 'submit') {
                const isAceroFlag = isAcero(state.partidaSeleccionada);
                const isAceroValido = isAceroFlag && state.cantidad !== "" && state.cantidad > 0;
                const isGuardable = state.partidaSeleccionada && (state.total > 0 || isAceroValido);
                if (isGuardable) onGuardar();
            } else {
                const nextEl = document.getElementById(nextId) as HTMLInputElement;
                if (nextEl) {
                    nextEl.focus();
                    if (nextEl.select) nextEl.select();
                }
            }
        }
    };

    return (
        <div className="glass-panel rounded-2xl p-4 h-full flex flex-col gap-3 relative">
            {/* Cabecera Compacta */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h2 className="text-sm font-bold text-gray-800 tracking-tight uppercase flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-blue-600 rounded-full" /> Registro de Metrados
                </h2>
                <div className="flex items-center gap-3">
                    <input
                        type="date"
                        value={state.fecha}
                        onChange={e => actions.setFecha(e.target.value)}
                        className="text-[10px] font-mono font-bold text-slate-500 bg-transparent border-none p-0 focus:ring-0 cursor-pointer outline-none"
                    />
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => actions.limpiarCampos()}
                            className="text-[9px] font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 cursor-pointer px-1.5 py-0.5 rounded hover:bg-red-50"
                            title="Limpiar medidas y detalle"
                        >
                            <Eraser size={10} />
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-3 flex-grow">
                {/* ─── PASO 1: ESPECIALIDAD Y BÚSQUEDA ─── */}
                <div className="space-y-3">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Especialidad (Filtro OE)</label>
                        <Select
                            value={state.especialidadSeleccionada}
                            onSelect={val => {
                                actions.setEspecialidadSeleccionada(val);
                                actions.setPartidaSeleccionada(null);
                            }}
                            options={ESPECIALIDADES_PARTIDA.map(esp => esp.nombre)}
                            className="bg-white/50"
                        />
                    </div>
                </div>

                <div className="h-px bg-slate-100 mx-2" />

                {/* ─── PASO 2: UBICACIÓN Y ELEMENTO ─── */}
                <div className="space-y-3">
                    <div className="grid grid-cols-4 gap-1.5 p-2 bg-slate-50/50 rounded-2xl border border-slate-100">
                        <Select
                            label="Frente"
                            value={state.frente}
                            options={['F1', 'F2', 'F3', 'F4', 'F5']}
                            onSelect={(val) => actions.setFrente(val)}
                        />
                        <Select
                            label="Bloque"
                            value={state.bloque}
                            options={['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'EXT']}
                            onSelect={(val) => actions.setBloque(val)}
                        />
                        <Select
                            label="Nivel"
                            value={state.nivel}
                            options={['ZZ', 'N1', 'N2', 'N3', 'N4', 'AZ']}
                            onSelect={(val) => actions.setNivel(val)}
                        />
                        <div className="space-y-1">
                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter pl-1">CDLLA</label>
                            <input
                                type="text"
                                className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all uppercase text-center"
                                value={state.cuadrilla}
                                onChange={(e) => actions.setCuadrilla(e.target.value.toUpperCase())}
                                placeholder="C1"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 p-3 bg-slate-50/50 rounded-2xl border border-slate-100">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Elemento / Agrupador</label>
                            <input
                                type="text"
                                value={state.elemento}
                                onChange={e => actions.setElemento(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-xl shadow-sm text-xs font-bold text-slate-700 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all h-9"
                                placeholder="Ej. Viga BV-206 Ejes 1-4..."
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[9px] font-bold text-blue-600 flex items-center gap-1 uppercase tracking-wider pl-1">
                                <span className="text-blue-400 font-black">↳</span> Detalle
                            </label>
                            <input
                                type="text"
                                value={state.detalle}
                                onChange={e => actions.setDetalle(e.target.value)}
                                className="w-full px-4 py-1.5 border border-blue-100 rounded-xl shadow-sm text-xs border-l-4 border-l-blue-500 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none h-8"
                                placeholder="Mat. / Esp. / Actividad..."
                            />
                        </div>
                    </div>
                </div>

                {/* FILA 4: MATEMÁTICA */}
                <div className="grid grid-cols-5 gap-1.5 bg-white/50 p-2 rounded-xl border border-slate-100 shadow-sm">
                    {(() => {
                        const flagAcero = isAcero(state.partidaSeleccionada);
                        let config = [
                            { key: 'cantidad', label: flagAcero ? 'N°' : 'CANTIDAD', nextId: 'input-longitud' },
                            { key: 'longitud', label: flagAcero ? 'LONG' : 'LONGITUD/AREA', nextId: flagAcero ? 'input-altura' : 'input-ancho' },
                        ];
                        if (!flagAcero) {
                            const especialidad = getEspecialidadPorCodigo(state.partidaSeleccionada?.codigo || '');
                            const labelAncho = especialidad === 'ARQUITECTURA' ? 'ANCHO/EMPAME/KG' : 'ANCHO / EMPAME';
                            config.push({ key: 'ancho', label: labelAncho, nextId: 'input-altura' });
                        }
                        config.push({ key: 'altura', label: flagAcero ? 'GAN' : 'ALTURA / GANCHO', nextId: 'input-veces' });

                        const fields = config.map(({ key, label, nextId }) => {
                            const valKey = key as 'cantidad' | 'longitud' | 'ancho' | 'altura';
                            
                            return (
                                <div key={key} className="space-y-1">
                                    <label className={`text-[7px] font-black uppercase tracking-tighter text-center block leading-[1.1] h-[18px] flex items-end justify-center pb-0.5 text-slate-400`}>
                                        {label}
                                    </label>
                                    <input
                                        id={`input-${key}`}
                                        type="number"
                                        step="any"
                                        value={state[valKey]}
                                        onChange={e => actions[`set${key.charAt(0).toUpperCase() + key.slice(1)}`](e.target.value === "" ? "" : Number(e.target.value))}
                                        onKeyDown={e => handleKeyDown(e, nextId)}
                                        onFocus={e => e.target.select()}
                                        className={`w-full px-1 py-1 border rounded text-xs text-right font-mono font-bold outline-none transition-colors border-slate-200 text-slate-700 bg-white focus:border-blue-500`}
                                        placeholder="-"
                                    />
                                </div>
                            );
                        });

                        const vecesField = (
                            <div key="veces" className="space-y-1">
                                <label className={`text-[9px] font-black uppercase tracking-tighter text-center block text-slate-400`}>
                                    VECES
                                </label>
                                <input
                                    id="input-veces"
                                    type="number"
                                    value={state.nroVeces}
                                    onChange={e => actions.setNroVeces(e.target.value === "" ? "" : Number(e.target.value))}
                                    onKeyDown={e => handleKeyDown(e, 'submit')}
                                    onFocus={e => e.target.select()}
                                    className={`w-full px-1 py-1 border rounded text-xs text-right font-mono font-bold outline-none transition-colors border-slate-200 text-slate-700 bg-white focus:border-blue-500`}
                                    placeholder="1"
                                />
                            </div>
                        );

                        if (flagAcero) {
                            const diametroField = (
                                <div key="diametro" className="space-y-1">
                                    <label className="text-[9px] font-black text-orange-400 uppercase tracking-tighter text-center block">DIÁM</label>
                                    <select
                                        id="input-diametro"
                                        value={state.diametro}
                                        onChange={e => actions.setDiametro(e.target.value)}
                                        onKeyDown={e => handleKeyDown(e as any, 'input-cantidad')}
                                        className="w-full border border-orange-100 bg-orange-50 rounded text-[10px] font-black text-orange-700 h-[26px] text-center outline-none"
                                    >
                                        {['1/4"', '3/8"', '1/2"', '5/8"', '3/4"', '1"'].map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            );
                            return [diametroField, fields[0], fields[1], fields[2], vecesField];
                        }
                        return [...fields, vecesField];
                    })()}
                </div>

                {/* RESULTADOS INTEGRADOS */}
                <div className="flex items-center justify-between px-2 -mb-1">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Parcial</span>
                            <span className="text-sm font-bold text-slate-700 font-mono">{state.parcial.toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Total</span>
                            <span className="text-xl font-black text-blue-900 font-mono -mt-1">
                                {state.total.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                id="submit"
                onClick={onGuardar}
                disabled={!state.partidaSeleccionada || (state.total === 0 && !(isAcero(state.partidaSeleccionada) && state.cantidad !== "" && state.cantidad > 0))}
                className={`w-full py-3 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all shadow-md ${(!state.partidaSeleccionada || (state.total === 0 && !(isAcero(state.partidaSeleccionada) && state.cantidad !== "" && state.cantidad > 0)))
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg active:scale-[0.98]'
                    }`}
            >
                <Save className="w-4 h-4" />
                REGISTRAR METRADO
            </button>
        </div>
    );
};

export default MetradosForm;
