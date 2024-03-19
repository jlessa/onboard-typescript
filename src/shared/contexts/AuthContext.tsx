import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthService } from "../services/api/auth/AuthService";
import { Environment } from "../environment";

interface IAuthContextData {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<string | void>;
    logout: () => void;
}

interface IAuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string>();

    useEffect(() => {
        const accessToken = localStorage.getItem(Environment.TOKEN_STRING);
        if (accessToken) {
            setAccessToken(JSON.parse(accessToken));
        } else {
            setAccessToken(undefined);
        }
    }, [])

    const handleLogin = useCallback(async (username: string, password: string) => {
        const result = await AuthService.auth(username, password);
        if (result instanceof Error) {
            return result.message;
        } else {
            localStorage.setItem(Environment.TOKEN_STRING, JSON.stringify(result.token));
            setAccessToken(result.token);
        }
    }, []);

    const handleLogout = useCallback(() => {
        localStorage.removeItem(Environment.TOKEN_STRING);
        setAccessToken(undefined);
    }, []);

    const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

    return (
        <AuthContext.Provider value={{ isAuthenticated: isAuthenticated, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);