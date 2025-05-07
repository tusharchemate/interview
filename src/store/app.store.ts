import { create } from 'zustand';

interface AppState {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const savedToken = sessionStorage.getItem('token');

export const useAppStore = create<AppState>((set) => ({
    token: savedToken,
    isAuthenticated: !!savedToken,
    login: (token: string) => {
        sessionStorage.setItem('token', token);
        set({ token, isAuthenticated: true });
    },
    logout: () => {
        sessionStorage.removeItem('token');
        set({ token: null, isAuthenticated: false });
    },
}));
