import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const token = sessionStorage.getItem('basicAuth');
    return !!token;
  });

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'admin') {
      const token = btoa(`${username}:${password}`);
      sessionStorage.setItem('basicAuth', token);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('basicAuth');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={React.useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated])}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 