"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeSelector() {
  const { currentTheme, themes, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4 p-6 rounded-lg border border-border bg-card text-card-foreground">
      <h2 className="text-xl font-bold">Seleccionar Tema</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentTheme.id === theme.id
                ? "ring-2 ring-offset-2"
                : "hover:scale-105"
            }`}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors["primary-foreground"],
              borderColor:
                currentTheme.id === theme.id
                  ? theme.colors.accent
                  : theme.colors.border,
              ringColor: theme.colors.accent,
            }}
          >
            <div className="font-semibold">{theme.name}</div>
            <div className="text-xs mt-1 opacity-90">{theme.id}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

