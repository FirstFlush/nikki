"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface AuthContextType {
    auth: AuthState;
    setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

interface AuthState {
    token: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode}) => {
    const [auth, setAuth] = useState<AuthState>({ token: null })

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            setAuth({ token })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};