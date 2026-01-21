import { create } from 'zustand';

interface PokemonStore {
    refreshCounter: number;   // Mantengo tu nombre
    refreshPokemons: number;  // Mantengo tu nombre
    notifyTableUpdate: () => void;
    notifyPokemonUpdate: () => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
    refreshCounter: 0,
    refreshPokemons: 0,
    
    notifyTableUpdate: () => set((state) => ({ 
        refreshCounter: state.refreshCounter + 1 
    })),

    notifyPokemonUpdate: () => set((state) => ({ 
        refreshPokemons: state.refreshPokemons + 1 
    })),
}));