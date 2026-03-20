// Servicio para gestionar metrados en la BD

import type { Metrado } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

export interface SaveMetradosResponse {
  success: boolean;
  message?: string;
  saved?: number;
  error?: string;
}

export interface LoadMetradosResponse {
  success: boolean;
  metrados: Metrado[];
  count?: number;
  error?: string;
}

/**
 * Guarda un lote de metrados en la BD
 */
export async function saveMetradosToDatabase(
  metrados: Metrado[],
  userId: string,
  proyecto: 'hospital' | 'contingencia',
  especialidad: number
): Promise<SaveMetradosResponse> {
  try {
    const res = await fetch(`${API_BASE}/metrados`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metrados: metrados.filter(m => !m.is_template), // Solo guardar metrados reales
        usuario_id: userId,
        proyecto,
        especialidad
      })
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: data.error || 'Error guardando metrados'
      };
    }

    return data;
  } catch (err) {
    console.error('Error guardando metrados:', err);
    return {
      success: false,
      error: 'Error de conexión con el servidor'
    };
  }
}

/**
 * Carga los metrados de un usuario específico desde la BD
 */
export async function loadMetradosByUser(userId: string): Promise<LoadMetradosResponse> {
  try {
    const res = await fetch(`${API_BASE}/metrados/usuario/${userId}`);
    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        metrados: [],
        error: data.error || 'Error cargando metrados'
      };
    }

    return data;
  } catch (err) {
    console.error('Error cargando metrados:', err);
    return {
      success: false,
      metrados: [],
      error: 'Error de conexión con el servidor'
    };
  }
}

/**
 * Carga metrados por proyecto y especialidad
 */
export async function loadMetradosByProjectAndSpecialty(
  proyecto: 'hospital' | 'contingencia',
  especialidad: number
): Promise<LoadMetradosResponse> {
  try {
    const res = await fetch(
      `${API_BASE}/metrados/proyecto/${proyecto}/especialidad/${especialidad}`
    );
    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        metrados: [],
        error: data.error || 'Error cargando metrados'
      };
    }

    return data;
  } catch (err) {
    console.error('Error cargando metrados:', err);
    return {
      success: false,
      metrados: [],
      error: 'Error de conexión con el servidor'
    };
  }
}

/**
 * Elimina un metrado específico de la BD
 */
export async function deleteMetradoFromDatabase(metradoId: string): Promise<SaveMetradosResponse> {
  try {
    const res = await fetch(`${API_BASE}/metrados/${metradoId}`, {
      method: 'DELETE'
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: data.error || 'Error eliminando metrado'
      };
    }

    return data;
  } catch (err) {
    console.error('Error eliminando metrado:', err);
    return {
      success: false,
      error: 'Error de conexión con el servidor'
    };
  }
}
