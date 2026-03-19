import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Metrado, Partida } from '../types';

interface User {
    id: string;
    username?: string;
    email?: string;
    nombre: string;
    tipo: 'especialidad' | 'jefe_area' | 'residente';
    especialidad_id?: number | null;
}

interface MetradosContext {
    frente: string;
    bloque: string;
    nivel: string;
    cuadrilla: string;
    proyecto: 'hospital' | 'contingencia';
}

interface MetradosState {
    // A) Usuario autenticado
    currentUser: User | null;
    
    // B) Contexto actual
    context: MetradosContext;

    // C) Array temporal de metrados
    metrados: Metrado[];

    // D) Partidas personalizadas
    customPartidas: Partida[];

    // E) Estado de sincronización
    isSyncing: boolean;
    lastSyncTime: string | null;

    // Acciones de usuario
    setCurrentUser: (user: User | null) => void;
    
    // Acciones contexto
    setContext: (context: Partial<MetradosContext>) => void;
    
    // Acciones metrados
    addMetrado: (metrado: Metrado) => void;
    updateMetrado: (id: string, field: keyof Metrado, value: any) => void;
    deleteMetrado: (id: string) => void;
    updateGroup: (codigo_partida: string, old_elemento: string, new_elemento: string) => void;
    addCustomPartida: (partida: Partida) => void;
    
    // Acciones sincronización
    setMetrados: (metrados: Metrado[]) => void;
    setSyncing: (syncing: boolean) => void;
    updateLastSyncTime: () => void;
    
    // Acciones limpiar
    clearAll: () => void;
}

export const useMetradosStore = create<MetradosState>()(
    persist(
        (set) => ({
            currentUser: null,
            context: {
                frente: '',
                bloque: '',
                nivel: '',
                cuadrilla: '',
                proyecto: 'hospital'
            },
            metrados: [],
            customPartidas: [],
            isSyncing: false,
            lastSyncTime: null,

            setCurrentUser: (user) =>
                set(() => ({
                    currentUser: user
                })),

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

            setMetrados: (metrados) =>
                set(() => ({
                    metrados
                })),

            setSyncing: (syncing) =>
                set(() => ({
                    isSyncing: syncing
                })),

            updateLastSyncTime: () =>
                set(() => ({
                    lastSyncTime: new Date().toISOString()
                })),

            clearAll: () => set({ metrados: [], customPartidas: [] }),
        }),
        {
            name: 'inkaia-metrados-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
