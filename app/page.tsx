"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import TypingText from "@/components/ui/TypingText";
import QRCode from "@/components/ui/QRCode";
import {
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

// URL para el QR code - Cambia esta URL por la que quieras usar
const QR_CODE_URL = "https://apps.apple.com/mx/app/polly/id10543434";

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Poolly Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-xl font-bold text-foreground lowercase">poolly</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Blue Background */}
      <section className="relative overflow-hidden bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight min-h-[120px] md:min-h-[180px]">
              <TypingText 
                text="Con Poolly" 
                speed={80}
                delay={300}
                className="text-white"
              />
              <br />
              <TypingText 
                text="todos ponen" 
                speed={80}
                delay={1200}
                className="text-white"
              />
            </h1>
            
            <p className="text-base md:text-lg max-w-2xl mx-auto text-white/90 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'both' }}>
              <TypingText 
                text="Poolly te ayuda a juntar el dinero de tus planes, fiestas, regalos y más. Para que nadie se quede sin pagar." 
                speed={30}
                delay={2800}
                showCursor={false}
                className="text-white/90"
              />
            </p>

            <div className="pt-4 animate-scale-in" style={{ animationDelay: '5.5s', animationFillMode: 'both' }}>
              <a href={QR_CODE_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="text-base md:text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all bg-white text-primary hover:bg-gray-50 animate-pulse-glow">
                  Descarga el App
                </Button>
              </a>
            </div>

            {/* QR Code / App Download Image */}
            <div className="pt-6 flex justify-center animate-scale-in" style={{ animationDelay: '0s', animationFillMode: 'both' }}>
              <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-lg">
                <div className="text-center space-y-3">
                  <p className="text-xs md:text-sm font-medium text-gray-700">
                    Escanea para bajar el app
                  </p>
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-lg mx-auto flex items-center justify-center border-2 border-gray-300 shadow-md relative overflow-hidden p-2">
                    <QRCode 
                      value={QR_CODE_URL} 
                      size={128}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Examples Section - Scrolling Banner */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 animate-slide-in-left">
              Úsalo con todos tus grupos
            </h2>
            <Text variant="muted" className="text-base md:text-lg animate-slide-in-right" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Haz Pools e invita a que te paguen – ¡no se necesita bajar el app para pagar!
            </Text>
          </div>
        </div>
        
        {/* Scrolling Banner - Full Width */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set */}
            {[
              { emoji: "🎁", name: "Regalo Miss Lana" },
              { emoji: "🎉", name: "Fiesta Sorpresa Susy" },
              { emoji: "🏘️", name: "Cuota Vecinos" },
              { emoji: "🏃🏻‍♂️", name: "Carrera con Causa" },
              { emoji: "👵🏻", name: "Detalle Abuelita" },
              { emoji: "🍭", name: "Playdate K2" },
              { emoji: "👴🏻", name: "Ayuda Abuelitos" },
              { emoji: "✈️", name: "Viaje Cancún" },
              { emoji: "🍽️", name: "Cenita Amigos" },
              { emoji: "🎂", name: "Fiesta Kinder" },
              { emoji: "💝", name: "Ayuda Especial" },
              { emoji: "🎊", name: "Regalo Cumpleaños" },
            ].map((pool, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 mx-2 bg-white border-2 border-gray-200 rounded-xl p-4 min-w-[240px]"
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl flex-shrink-0">
                    {pool.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-foreground break-words leading-tight">
                      {pool.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { emoji: "🎁", name: "Regalo Miss Lana" },
              { emoji: "🎉", name: "Fiesta Sorpresa Susy" },
              { emoji: "🏘️", name: "Cuota Vecinos" },
              { emoji: "🏃🏻‍♂️", name: "Carrera con Causa" },
              { emoji: "👵🏻", name: "Detalle Abuelita" },
              { emoji: "🍭", name: "Playdate K2" },
              { emoji: "👴🏻", name: "Ayuda Abuelitos" },
              { emoji: "✈️", name: "Viaje Cancún" },
              { emoji: "🍽️", name: "Cenita Amigos" },
              { emoji: "🎂", name: "Fiesta Kinder" },
              { emoji: "💝", name: "Ayuda Especial" },
              { emoji: "🎊", name: "Regalo Cumpleaños" },
            ].map((pool, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 mx-2 bg-white border-2 border-gray-200 rounded-xl p-4 min-w-[240px]"
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl flex-shrink-0">
                    {pool.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-bold text-foreground break-words leading-tight">
                      {pool.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Justo lo que necesitas
              <br />
              para que todos paguen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="space-y-4 text-center animate-slide-in-left hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 mx-auto">
                <LinkIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cobra con un link</h3>
              <Text variant="muted" className="text-base">
                Puedes juntar dinero con link de pago.
              </Text>
            </div>

            <div className="space-y-4 text-center animate-slide-in-left hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 mx-auto">
                <CreditCardIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">Pagos con tarjeta</h3>
              <Text variant="muted" className="text-base">
                Puedes juntar dinero con tarjeta.
              </Text>
            </div>

            <div className="space-y-4 text-center animate-slide-in-right hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors duration-300 mx-auto">
                <EyeIcon />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ve quién ya pagó</h3>
              <Text variant="muted" className="text-base">
                Puedes ver quién pagó.
              </Text>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            <TypingText 
              text="Arma el plan" 
              speed={100}
              delay={0}
              className="text-foreground"
            />
            <br />
            <TypingText 
              text="y despreocúpate de cobrar" 
              speed={100}
              delay={1500}
              className="text-foreground"
            />
          </h2>
          <Text variant="muted" className="text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'both' }}>
            ¡Empieza ya! es fácil y gratis
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '3.5s', animationFillMode: 'both' }}>
            <a href={QR_CODE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-base md:text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow">
                Descargar el App
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">Poolly</h3>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Ayuda
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacidad
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
