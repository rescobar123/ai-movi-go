"use client";

import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import {
  MoneyIcon,
  UsersIcon,
  ShieldIcon,
  LinkIcon,
  CreditCardIcon,
  EyeIcon,
  LightningIcon,
  GiftIcon,
  PartyIcon,
  HomeIcon,
  RunIcon,
  HeartIcon,
  PlayIcon,
} from "@/components/ui/Icons";

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("poolly");
  }, [setTheme]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Con Poolly
              <br />
              <span className="text-primary">todos ponen</span>
            </h1>
            
            <Text variant="muted" className="text-xl md:text-2xl">
              Poolly te ayuda a juntar el dinero de tus planes, fiestas, regalos y más. 
              Para que nadie se quede sin pagar.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="primary" className="text-lg px-8 py-4 rounded-lg">
                Descargar App
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-4 rounded-lg">
                Ver cómo funciona
              </Button>
            </div>
            
            <div className="pt-4">
              <Text variant="muted" className="text-sm">
                Disponible para iOS y Android
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: GiftIcon, name: "Regalo" },
              { icon: PartyIcon, name: "Fiesta" },
              { icon: HomeIcon, name: "Cuota" },
              { icon: RunIcon, name: "Carrera" },
              { icon: HeartIcon, name: "Detalle" },
              { icon: PlayIcon, name: "Playdate" },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Card key={idx} className="text-center p-6 hover:shadow-md transition-all cursor-pointer hover:scale-105">
                  <div className="flex justify-center mb-3 text-primary">
                    <IconComponent />
                  </div>
                  <Text variant="muted" className="text-sm font-semibold">
                    {item.name}
                  </Text>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Justo lo que necesitas
              <br />
              para que todos paguen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <LinkIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cobra con un link</h3>
              <Text variant="muted">
                Crea un Pool y comparte el link único con las personas que quieres que te paguen. 
                El registro toma menos de 3 minutos.
              </Text>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CreditCardIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">Pagos con tarjeta</h3>
              <Text variant="muted">
                Puedes recibir pagos con cualquier tarjeta de crédito y débito. 
                Los pagos te llegan de inmediato.
              </Text>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <EyeIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ve quién ya pagó</h3>
              <Text variant="muted">
                Lleva el seguimiento de los pagos en un mismo lugar, la actividad es pública 
                y todos pueden ver quién ya pagó.
              </Text>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <LightningIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">El dinero al instante</h3>
              <Text variant="muted">
                El dinero se guarda en el Pool hasta que decidas sacarlo, puedes transferirlo 
                a cualquier cuenta de banco en segundos.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto md:mx-0 mb-4">
                <MoneyIcon />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Súper Simple
              </h3>
              <Text variant="muted" className="text-lg">
                Crea un pool en menos de un minuto. Sin complicaciones, sin formularios largos.
              </Text>
            </div>

            <div className="text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto md:mx-0 mb-4">
                <UsersIcon />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Úsalo con todos tus grupos
              </h3>
              <Text variant="muted" className="text-lg">
                Haz Pools e invita a que te paguen – ¡no se necesita bajar el app para pagar!
              </Text>
            </div>

            <div className="text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto md:mx-0 mb-4">
                <ShieldIcon />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Seguro y Transparente
              </h3>
              <Text variant="muted" className="text-lg">
                Ve quién ha contribuido, cuánto falta y mantén todo organizado en un solo lugar.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Arma el plan
            <br />
            y despreocúpate de cobrar
          </h2>
          <Text variant="muted" className="text-xl mb-8">
            ¡Descarga la app! es fácil y gratis
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-lg px-8 py-4 rounded-lg">
              Descargar para iOS
            </Button>
            <Button variant="primary" className="text-lg px-8 py-4 rounded-lg">
              Descargar para Android
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Poolly</h3>
              <Text variant="muted" className="text-sm">
                Cooperachas fáciles para guatemaltecos
              </Text>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Ayuda
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Términos
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contacto
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <Text variant="muted" className="text-xs">
              © 2025 Poolly. Todos los derechos reservados.
            </Text>
          </div>
        </div>
      </footer>
    </main>
  );
}
