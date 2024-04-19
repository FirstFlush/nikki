// 'use client'
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import Cookies from 'js-cookie';

// interface AuthContextType {
//     token: string | null;
//     setToken: (accessToken: string | null, refreshToken: string | null) => void;
// }

// const AuthContext = createContext<AuthContextType>({
//     token: null,
//     setToken: () => {}
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const [token, setToken] = useState<string | null>(null);

//     useEffect(() => {
//         // Retrieve token from cookies on initial load
//         const accessToken = Cookies.get('accessToken');
//         if (accessToken) {
//             setToken(accessToken);
//         }
//     }, []);

//     const updateToken = (accessToken: string | null, refreshToken: string | null) => {
//         const inProduction = process.env.NODE_ENV === 'production'; // Assuming NODE_ENV is set appropriately
//         const cookieOptions = {
//             expires: 7,
//             path: '/',
//             secure: inProduction, // Only set 'secure' if in production
//             sameSite: 'Strict' as 'Strict' // Correctly typed for strict mode
//         };
    
//         if (accessToken) {
//             Cookies.set('accessToken', accessToken, { ...cookieOptions });
//         } else {
//             Cookies.remove('accessToken', { path: '/' });
//         }
    
//         if (refreshToken) {
//             Cookies.set('refreshToken', refreshToken, { ...cookieOptions });
//         } else {
//             Cookies.remove('refreshToken', { path: '/' });
//         }
    
//         setToken(accessToken);
//     };
        
//     return (
//         <AuthContext.Provider value={{ token, setToken: updateToken }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);



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