"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "@/types/theme";
import themesData from "@/data/themes.json";

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  setTheme: (themeId: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themesData.themes[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Cargar tema guardado del localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const theme = themesData.themes.find((t) => t.id === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Aplicar colores del tema como CSS variables en :root
    const root = document.documentElement;
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Guardar tema en localStorage
    localStorage.setItem("theme", currentTheme.id);
  }, [currentTheme, mounted]);

  const setTheme = (themeId: string) => {
    const theme = themesData.themes.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themes: themesData.themes,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

