"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { checkUrlAccess, getToken } from "./utills";
import { usePathname, useRouter } from "next/navigation";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const isLoggedIn = () => {
    return Boolean(getToken());
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsLogged(true);
    window.dispatchEvent(new Event("storage"));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    window.location.href = "/";
  };

  const redirectUser = (url: string) => {
    router.replace(url);
  };

  useEffect(() => {
    checkUrlAccess(pathname, redirectUser, setIsLogged);
  }, [pathname]);

  const contextValue = {
    isLogged,
    login,
    logout,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
