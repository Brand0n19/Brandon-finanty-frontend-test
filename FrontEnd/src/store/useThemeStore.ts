import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
    mode: 'light' | 'dark';
    toggleTheme: () => void;
    setMode: (mode: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
            toggleTheme: () => set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
            setMode: (mode) => set({ mode }),
        }),
        {
            name: 'theme-storage',
        }
    )
);
