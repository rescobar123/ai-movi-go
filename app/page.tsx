"use client";

import ThemeSelector from "@/components/ThemeSelector";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            AI Movi Go
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Aplicación web con sistema de multitemas
          </p>
        </div>

        <ThemeSelector />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <h2 className="text-2xl font-semibold mb-4">Card de Ejemplo</h2>
            <Text variant="muted" className="mb-4">
              Este es un ejemplo de cómo se ven los componentes con el tema actual.
            </Text>
            <Button variant="primary">Botón Primario</Button>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold mb-4">Otro Card</h2>
            <Text variant="muted" className="mb-4">
              Los colores se actualizan dinámicamente según el tema seleccionado.
            </Text>
            <Button variant="secondary">Botón Secundario</Button>
          </Card>
        </div>

        <Card>
          <h3 className="text-lg font-semibold mb-2">Nota sobre los temas</h3>
          <Text variant="muted" className="text-sm">
            Los temas están actualmente almacenados en{" "}
            <code className="bg-black/10 dark:bg-white/10 px-1 rounded">data/themes.json</code>.
            En el futuro, estos temas se cargarán desde la base de datos. El archivo JSON puede ser
            fácilmente removido cuando se implemente la integración con la DB.
          </Text>
        </Card>
      </div>
    </main>
  );
}
