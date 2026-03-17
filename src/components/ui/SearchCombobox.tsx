import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import type { Partida } from '../../types';

interface SearchComboboxProps {
    partidas: Partida[];
    onSelect: (partida: Partida) => void;
    onAddPartida?: () => void;
    value: string;
}

export const SearchCombobox: React.FC<SearchComboboxProps> = ({ partidas, onSelect, onAddPartida, value }) => {
    const [query, setQuery] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Sincronizar valor externo (ej. cuando cambia la especialidad o se limpia desde afuera)
    useEffect(() => {
        setQuery(value);
    }, [value]);

    const filteredPartidas = query.trim() === ''
        ? partidas
        : partidas.filter((partida) => {
            const searchTokens = query.toLowerCase().split(' ').filter(token => token.trim() !== '');
            const descLower = partida.descripcion.toLowerCase();
            const codLower = partida.codigo.toLowerCase();
            // Coincidencia booleana AND: todos los tokens deben aparecer
            return searchTokens.every(token => descLower.includes(token) || codLower.includes(token));
        });

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    return (
        <div ref={wrapperRef} className="relative w-full group">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                <input
                    type="text"
                    className="w-full pl-10 pr-10 h-[34px] rounded-xl border border-slate-200 bg-white shadow-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all text-xs outline-none font-bold text-slate-700"
                    placeholder="Buscar por código o descripción..."
                    value={query}
                    onFocus={(e) => {
                        e.target.select();
                        setIsOpen(true);
                    }}
                    onClick={() => setIsOpen(true)}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                />
                <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
            </div>

            {isOpen && (
                <div className="absolute z-[110] w-full mt-2 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-2xl max-h-64 overflow-auto animate-in fade-in zoom-in-95 duration-200 origin-top">
                    {filteredPartidas.length === 0 ? (
                        <div className="p-4 flex flex-col items-center gap-3">
                            <div className="text-xs text-slate-400 text-center font-medium italic">Ninguna partida encontrada.</div>
                            {onAddPartida && (
                                <button
                                    onClick={onAddPartida}
                                    className="w-full py-2.5 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all border border-blue-100 border-dashed"
                                >
                                    + Crear nueva partida
                                </button>
                            )}
                        </div>
                    ) : (
                        <ul className="py-1.5 p-1">
                            {filteredPartidas.map((partida) => (
                                <li
                                    key={partida.id}
                                    className="px-4 py-3 hover:bg-blue-600 hover:text-white cursor-pointer flex gap-3 items-start rounded-xl transition-all duration-200 group/item border-b border-slate-50 last:border-0"
                                    onClick={() => {
                                        onSelect(partida);
                                        setQuery(partida.descripcion);
                                        setIsOpen(false);
                                    }}
                                >
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold leading-tight block">
                                                {partida.descripcion}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                                        <span className="text-[10px] font-mono font-black text-slate-400 bg-slate-100 group-hover/item:bg-blue-500 group-hover/item:text-white group-hover/item:border-blue-400 border border-slate-100 px-2 py-0.5 rounded-md flex-shrink-0 transition-colors">
                                            {partida.codigo}
                                        </span>
                                        {/* @ts-ignore - Asumiendo que RenderModificacionBadge estará disponible */}
                                        {window.RenderModificacionBadge && window.RenderModificacionBadge(partida.modificacion)}
                                    </div>
                                </li>
                            ))}
                            {onAddPartida && (
                                <li className="p-1 mt-1 border-t border-slate-100">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAddPartida();
                                            setIsOpen(false);
                                        }}
                                        className="w-full py-2 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-blue-50 hover:text-blue-600 transition-all border border-slate-200 border-dashed"
                                    >
                                        + Agregar partida personalizada
                                    </button>
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
