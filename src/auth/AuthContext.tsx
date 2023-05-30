/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/useApi";

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
  likedRecipes?: unknown[];
  savedRecipes?: unknown[];
  // Add other user properties as needed
};

// Define the shape of your authentication context
interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
  checkTokenLocal: () => string | null;
  checkTokenExpiration: () => void;
  getToken: () => string | null;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  checkTokenLocal: () => null,
  checkTokenExpiration: () => {},
  getToken: () => null,
  token: null
});

// Create a wrapper component to provide the authentication context
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const getToken = () => {
    const token = localStorage.getItem("token");
    setToken(token);
    return token;
  };
  // Function to handle user login
  const login = (token: string) => {
    // Save the token in local storage or cookies
    localStorage.setItem("token", token);
    setToken(token);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // Fetch the user data
    api.get("/auth/profile").then((response) => {
      setUser(response.data);
    });
  };

  const checkTokenLocal = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const checkTokenExpiration = async () => {
    const token = getToken();
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const response = await api.get("/auth/profile");
      setUser(response.data);
    } catch (error) {
      console.error(error);
      logout();
    }
  };
  // Function to handle user logout
  const logout = () => {
    // Remove the token from local storage or cookies
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, token, checkTokenExpiration, checkTokenLocal, getToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}
