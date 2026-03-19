import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Metrado, Partida } from '../types';

interface MetradosContext {
    frente: string;
    bloque: string;
    nivel: string;
    cuadrilla: string;
    proyecto: 'hospital' | 'contingencia';
}

interface MetradosState {
    // A) Contexto actual
    context: MetradosContext;

    // B) Array temporal de metrados
    metrados: Metrado[];

    // C) Partidas personalizadas
    customPartidas: Partida[];

    // Acciones
    setContext: (context: Partial<MetradosContext>) => void;
    addMetrado: (metrado: Metrado) => void;
    updateMetrado: (id: string, field: keyof Metrado, value: any) => void;
    deleteMetrado: (id: string) => void;
    updateGroup: (codigo_partida: string, old_elemento: string, new_elemento: string) => void;
    addCustomPartida: (partida: Partida) => void;
    clearAll: () => void;
}

export const useMetradosStore = create<MetradosState>()(
    persist(
        (set) => ({
            context: {
                frente: '',
                bloque: '',
                nivel: '',
                cuadrilla: '',
                proyecto: 'hospital'
            },
            metrados: [],
            customPartidas: [],

            setContext: (newContext) =>
                set((state) => ({
                    context: { ...state.context, ...newContext }
                })),

            addMetrado: (metrado) =>
                set((state) => ({
                    metrados: [...state.metrados, metrado]
                })),

            updateMetrado: (id, field, value) =>
                set((state) => ({
                    metrados: state.metrados.map((m) =>
                        m.id === id ? { ...m, [field]: value } : m
                    ),
                })),

            deleteMetrado: (id) =>
                set((state) => ({
                    metrados: state.metrados.filter((m) => m.id !== id),
                })),

            updateGroup: (codigo_partida, old_elemento, new_elemento) =>
                set((state) => ({
                    metrados: state.metrados.map((m) =>
                        m.codigo_partida === codigo_partida && m.elemento === old_elemento
                            ? { ...m, elemento: new_elemento }
                            : m
                    ),
                })),

            addCustomPartida: (partida) =>
                set((state) => ({
                    customPartidas: [...state.customPartidas, partida]
                })),

            clearAll: () => set({ metrados: [], customPartidas: [] }),
        }),
        {
            name: 'inkaia-metrados-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
