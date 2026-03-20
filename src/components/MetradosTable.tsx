import React, { useMemo } from 'react';
import type { Metrado, Partida } from '../types';
import { Download, Trash2, Loader2, Eraser } from 'lucide-react';
import { RenderModificacionBadge } from './MetradosForm';
import { useMetradosStore } from '../store/useMetradosStore';
import { SPECIALTY_RULES } from '../data/specialtyConfig';

interface MetradosTableProps {
    metrados: Metrado[];
    onUpdate?: (id: string, field: keyof Metrado, value: any) => void;
    onGroupUpdate?: (codigoPartida: string, oldElemento: string, newElemento: string) => void;
    onDelete?: (id: string) => void;
    proyecto?: string;
}

const getIndentLevel = (codigo: string): number => {
    if (!codigo) return 0;
    const parts = codigo.split('.');
    return Math.max(0, parts.length - 1);
};

const getHierarchicalRows = (activeMetrados: Metrado[], partidasCatalogo: Partida[]): any[] => {
    const activePartidaCodes = new Set(activeMetrados.map(m => m.codigo_partida));
    const activeIds = new Set<string>();

    const catalogoMap = new Map<string, Partida>();
    partidasCatalogo.forEach(p => catalogoMap.set(p.codigo, p));

    partidasCatalogo.forEach((node: Partida) => {
        if (!node.es_titulo && activePartidaCodes.has(node.codigo)) {
            activeIds.add(node.codigo);
            let parentId = node.parent_id;
            while (parentId) {
                if (activeIds.has(parentId)) break;
                activeIds.add(parentId);
                const parent = catalogoMap.get(parentId);
                parentId = parent?.parent_id;
            }
        }
    });

    const finalRows: any[] = [];

    partidasCatalogo.forEach((node: Partida) => {
        if (!activeIds.has(node.codigo)) return;

        finalRows.push({ ...node, is_template: true });

        if (!node.es_titulo) {
            const relatedMetrados = activeMetrados
                .filter(m => m.codigo_partida === node.codigo)
                .sort((a, b) => a.created_at - b.created_at);

            let lastElemento: string | null | undefined = null;

            relatedMetrados.forEach(m => {
                if (m.elemento && m.elemento !== lastElemento) {
                    finalRows.push({
                        is_template: true,
                        es_titulo: false,
                        is_elemento_virtual: true,
                        codigo: '',
                        descripcion: m.elemento,
                        codigo_partida: node.codigo,
                        id: `virtual-${m.id}`,
                        parcial: 0,
                        total: 0
                    });
                    lastElemento = m.elemento;
                } else if (!m.elemento && lastElemento !== null) {
                    lastElemento = null;
                }
                finalRows.push({ ...m, is_template: false });
            });
        }
    });

    return finalRows;
};

const MetradosTable: React.FC<MetradosTableProps> = ({ metrados, onUpdate, onGroupUpdate, onDelete, proyecto = 'hospital' }) => {
    const { customPartidas, state: storeState } = useMetradosStore() as any;
    
    const catalogoActivo = useMemo(() => {
        const base = (proyecto === 'hospital' ? storeState?.partidasHospital : storeState?.partidasContingencia) || [];
        return [...base, ...customPartidas];
    }, [proyecto, storeState, customPartidas]);

    const [selectedSpecialty, setSelectedSpecialty] = React.useState('TODAS');

    const filteredMetrados = useMemo(() => {
        if (selectedSpecialty === 'TODAS') return metrados;
        const rule = SPECIALTY_RULES.find(r => r.id === selectedSpecialty);
        if (!rule) return metrados;
        return metrados.filter(m =>
            rule.ranges.some(prefix => m.codigo_partida.startsWith(prefix))
        );
    }, [metrados, selectedSpecialty]);

    const rows = useMemo(() => getHierarchicalRows(filteredMetrados, catalogoActivo), [filteredMetrados, catalogoActivo]);
    const [isExporting, setIsExporting] = React.useState(false);

    const partidaTotals = useMemo(() => {
        const totals: Record<string, number> = {};
        filteredMetrados.forEach(m => {
            totals[m.codigo_partida] = (totals[m.codigo_partida] || 0) + m.total;
        });
        return totals;
    }, [filteredMetrados]);

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);
    };

    const cantPartidasRegistradas = new Set(filteredMetrados.map(m => m.codigo_partida)).size;

    const exportToExcel = async () => {
        setIsExporting(true);
        try {
            let apiUrl = import.meta.env.VITE_API_URL || '';
            if (!apiUrl && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
                apiUrl = `http://${window.location.hostname}:3001`;
            }
            if (apiUrl.endsWith('/')) apiUrl = apiUrl.slice(0, -1);

            let response: Response;
            try {
                response = await fetch(`${apiUrl}/api/export/metrados`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ metrados: rows, proyecto })
                });
            } catch (error) {
                throw new Error(`No se pudo conectar con el servidor de exportación en: ${apiUrl || 'URL no definida'}`);
            }

            if (!response.ok) {
                const errJson = await response.json().catch(() => ({}));
                throw new Error(`Error del Servidor: ${errJson.error || response.statusText}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Metrados_V5_${new Date().toISOString().split('T')[0]}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
            alert("Falló la exportación: " + (error as Error).message);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="glass-panel overflow-hidden rounded-2xl flex flex-col h-full border border-slate-200 shadow-sm bg-white">
            <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center sticky top-0 z-20 backdrop-blur-md">
                <div className="flex flex-col">
                    <h3 className="font-bold text-slate-800 text-lg tracking-tight uppercase">Planilla de Metrados Dinámica</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Filtro Especialidad:</p>
                        <select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            className="text-[9px] font-black uppercase bg-white border border-slate-100 rounded px-2 py-0.5 text-slate-600 outline-none cursor-pointer hover:bg-slate-50 transition-all font-mono"
                        >
                            {SPECIALTY_RULES.map(rule => (
                                <option key={rule.id} value={rule.id}>{rule.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            if (window.confirm('¿Desea limpiar todos los datos?')) {
                                (useMetradosStore.getState() as any).clearAll?.();
                            }
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                    >
                        <Eraser size={14} />
                        Limpiar
                    </button>
                    <button
                        onClick={exportToExcel}
                        disabled={isExporting}
                        className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg ${isExporting
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/20'
                            }`}
                    >
                        {isExporting ? <Loader2 className="animate-spin" size={14} /> : <Download size={14} />}
                        {isExporting ? 'Procesando...' : 'Exportar Excel'}
                    </button>
                </div>
            </div>

            <div className="overflow-auto flex-grow max-h-[calc(100vh-280px)] scrollbar-thin scrollbar-thumb-slate-200">
                <table className="w-full text-left align-middle border-collapse table-fixed">
                    <thead className="bg-white sticky top-0 z-10">
                        <tr className="border-b border-slate-100">
                            <th className="w-[110px] px-3 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Código</th>
                            <th className="px-3 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Descripción del Metrado</th>
                            <th className="w-[60px] px-1 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">Und</th>
                            <th className="w-[80px] px-1 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Cant.</th>
                            <th className="w-[80px] px-1 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Largo</th>
                            <th className="w-[80px] px-1 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Ancho</th>
                            <th className="w-[80px] px-1 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Alt./G.</th>
                            <th className="w-[90px] px-2 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Parcial</th>
                            <th className="w-[60px] px-1 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">Veces</th>
                            <th className="w-[110px] px-3 py-4 text-[10px] font-black uppercase text-slate-400 tracking-widest text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {rows.map((r: any) => {
                            if (r.is_template && r.es_titulo) {
                                return (
                                    <tr key={`title-${r.codigo}`} className="bg-slate-900 text-white font-black border-b border-slate-800">
                                        <td className="px-3 py-2 font-mono text-[9px] tracking-widest">{r.codigo}</td>
                                        <td colSpan={9} className="px-4 py-2 uppercase text-[10px] tracking-[0.15em]"
                                            style={{ paddingLeft: `${getIndentLevel(r.codigo) * 1.5 + 1}rem` }}>
                                            {r.descripcion}
                                        </td>
                                    </tr>
                                );
                            }

                            if (r.is_template && r.is_elemento_virtual) {
                                return (
                                    <tr key={r.id} className="bg-slate-50/80 border-b border-slate-100">
                                        <td colSpan={10} className="px-4 py-2" style={{ paddingLeft: `${getIndentLevel(r.codigo_partida) * 1.5 + 2}rem` }}>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm" />
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[10px] font-black uppercase tracking-widest"
                                                    value={r.descripcion}
                                                    onChange={(e) => onGroupUpdate?.(r.codigo_partida, r.descripcion, e.target.value.toUpperCase())}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }

                            if (r.is_template && !r.es_titulo) {
                                const total = partidaTotals[r.codigo] || 0;
                                return (
                                    <tr key={`header-${r.codigo}`} className={`border-b border-slate-200 ${total > 0 ? 'bg-blue-50/40' : 'bg-white'}`}>
                                        <td className="px-3 py-2.5">
                                            <span className="font-mono text-[10px] text-blue-600 font-black bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                                {r.codigo}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2.5 flex items-center gap-3">
                                            {RenderModificacionBadge(r.modificacion)}
                                            <span className="text-slate-800 text-[11px] font-black uppercase tracking-tight">{r.descripcion}</span>
                                        </td>
                                        <td className="px-1 py-2.5 text-center text-slate-400 font-bold text-[10px] uppercase">{r.unidad}</td>
                                        <td colSpan={6}></td>
                                        <td className="px-3 py-2.5 text-right text-blue-800 font-black text-[12px]">
                                            {total > 0 ? formatNumber(total) : '-'}
                                        </td>
                                    </tr>
                                );
                            }

                            return (
                                <tr key={`rec-${r.id}`} className="hover:bg-slate-50/50 border-b border-slate-50 group transition-all">
                                    <td className="px-3 py-2">
                                        <div className="flex gap-1" style={{ marginLeft: `${getIndentLevel(r.codigo_partida) * 1 + 0.5}rem` }}>
                                            <span className="text-[8px] font-black text-slate-400 bg-slate-100 px-1 rounded uppercase tracking-tighter" title="Frente">{r.frente}</span>
                                            <span className="text-[8px] font-black text-slate-400 bg-slate-100 px-1 rounded uppercase tracking-tighter" title="Bloque">{r.bloque}</span>
                                            <span className="text-[8px] font-black text-slate-400 bg-slate-100 px-1 rounded uppercase tracking-tighter" title="Nivel">{r.nivel}</span>
                                        </div>
                                    </td>
                                    <td className="px-3 py-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[9px] font-black text-slate-900 bg-slate-200 px-1.5 py-0.5 rounded shadow-sm">{r.cuadrilla}</span>
                                            {r.diametro && <span className="text-[9px] font-black text-orange-600 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded shadow-sm">Φ {r.diametro}</span>}
                                            <input
                                                type="text"
                                                className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-600 text-[10px] font-bold italic"
                                                value={r.detalle || ''}
                                                onChange={(e) => onUpdate?.(r.id, 'detalle', e.target.value)}
                                            />
                                        </div>
                                    </td>
                                    <td className="text-center text-slate-300">-</td>
                                    <td className="px-1 py-2"><input type="number" step="any" className="w-full text-right bg-transparent border-none p-0 text-[10px] font-bold text-slate-600 focus:ring-0" value={r.cantidad} onChange={(e) => onUpdate?.(r.id, 'cantidad', e.target.value)} /></td>
                                    <td className="px-1 py-2"><input type="number" step="any" className="w-full text-right bg-transparent border-none p-0 text-[10px] font-bold text-slate-600 focus:ring-0" value={r.longitud_area} onChange={(e) => onUpdate?.(r.id, 'longitud_area', e.target.value)} /></td>
                                    <td className="px-1 py-2"><input type="number" step="any" className="w-full text-right bg-transparent border-none p-0 text-[10px] font-bold text-slate-600 focus:ring-0" value={r.ancho_empalme} onChange={(e) => onUpdate?.(r.id, 'ancho_empalme', e.target.value)} /></td>
                                    <td className="px-1 py-2"><input type="number" step="any" className="w-full text-right bg-transparent border-none p-0 text-[10px] font-bold text-slate-600 focus:ring-0" value={r.altura_gancho} onChange={(e) => onUpdate?.(r.id, 'altura_gancho', e.target.value)} /></td>
                                    <td className="px-2 py-2 text-right text-[10px] font-bold text-slate-400">{formatNumber(r.parcial)}</td>
                                    <td className="px-1 py-2"><input type="number" step="any" className="w-full text-center bg-transparent border-none p-0 text-[10px] font-black text-slate-500 focus:ring-0" value={r.nro_veces} onChange={(e) => onUpdate?.(r.id, 'nro_veces', e.target.value)} /></td>
                                    <td className="px-3 py-2 text-right relative group">
                                        <div className="flex items-center justify-end gap-3">
                                            <span className="text-[11px] font-black text-slate-800">{r.total.toFixed(2)}</span>
                                            <button onClick={() => onDelete?.(r.id)} className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all p-1.5 hover:bg-red-50 rounded-lg">
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-slate-100 bg-white flex justify-between items-center">
                <div className="flex gap-6">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Partidas</span>
                        <span className="text-[11px] font-black text-slate-600">{cantPartidasRegistradas}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Registros</span>
                        <span className="text-[11px] font-black text-slate-600">{filteredMetrados.length}</span>
                    </div>
                </div>
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">ENGINE v5.1 / DB: SUPABASE</div>
            </div>
        </div>
    );
};

export default MetradosTable;
