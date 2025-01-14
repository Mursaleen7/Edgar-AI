import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  session: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<boolean>(false);

  const value = {
    session,
    signUp: async (email: string, password: string) => {
      // Mock signup
      setSession(true);
    },
    signIn: async (email: string, password: string) => {
      // Mock signin
      setSession(true);
    },
    signOut: async () => {
      // Mock signout
      setSession(false);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};