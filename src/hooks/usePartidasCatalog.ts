import { useEffect, useState } from 'react';
import type { Partida } from '../types';

type Proyecto = 'hospital' | 'contingencia';

const catalogCache: Partial<Record<Proyecto, Partida[]>> = {};

async function loadCatalog(proyecto: Proyecto): Promise<Partida[]> {
  if (catalogCache[proyecto]) {
    return catalogCache[proyecto]!;
  }

  const partidas =
    proyecto === 'hospital'
      ? (await import('../data/mockDB_1')).mockPartidas
      : (await import('../data/mockDB_contingencia')).mockPartidasContingencia;

  catalogCache[proyecto] = partidas;
  return partidas;
}

export function usePartidasCatalog(proyecto: Proyecto) {
  const [partidas, setPartidas] = useState<Partida[]>(catalogCache[proyecto] || []);
  const [isLoading, setIsLoading] = useState(!catalogCache[proyecto]);

  useEffect(() => {
    let active = true;

    const fetchCatalog = async () => {
      setIsLoading(!catalogCache[proyecto]);
      const loadedPartidas = await loadCatalog(proyecto);

      if (!active) {
        return;
      }

      setPartidas(loadedPartidas);
      setIsLoading(false);
    };

    void fetchCatalog();

    return () => {
      active = false;
    };
  }, [proyecto]);

  return {
    partidas,
    isLoading,
  };
}
