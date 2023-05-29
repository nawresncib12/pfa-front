/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export type Preferences = {
  healthLabels: string[];
  dietLabels: string[];
  excluded: string[];
};

// Define the shape of your user object
export type User = {
  id: string;
  name: string;
  email: string;

  preferences?: Preferences;
  // Add other user properties as needed
};

// Define the shape of your authentication context
interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  token: null
});

// Create a wrapper component to provide the authentication context
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  //  useEffect(() => {
  //    // Check if user is authenticated on initial load
  //    checkAuth();
  //  }, []);

  // Function to handle user login
  const login = (token: string) => {
    // Save the token in local storage or cookies
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/profile");
  };

  // Function to handle user logout
  const logout = () => {
    // Remove the token from local storage or cookies
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>{children}</AuthContext.Provider>
  );
}

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}
