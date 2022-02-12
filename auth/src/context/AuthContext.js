import React, { createContext } from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children, onSignIn }) {
  return <AuthContext.Provider value={{ onSignIn }}>{children}</AuthContext.Provider>;
}

export { AuthContext };
