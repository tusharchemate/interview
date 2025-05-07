import { create } from 'zustand';

interface AppState {
    token: string | null;
    username: string | null;
    isAuthenticated: boolean;
    login: (token: string, username: string) => void;
    logout: () => void;
}

const savedToken = sessionStorage.getItem('token');
const savedUsername = sessionStorage.getItem('username');

export const useAppStore = create<AppState>((set) => ({
    token: savedToken,
    username: savedUsername,
    isAuthenticated: !!savedToken,
    login: (token: string, username: string) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('username', username);
        set({ token, username, isAuthenticated: true });
    },
    logout: () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        set({ token: null, username: null, isAuthenticated: false });
    },
}));
