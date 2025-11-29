"use client";

import { useEffect, useState } from "react";

interface MoneyParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
}

interface FallingMoneyProps {
  count?: number;
  symbols?: string[];
  className?: string;
}

export default function FallingMoney({
  count = 30,
  symbols = ["💰", "💵", "💸", "💴", "💶", "💷", "💳"],
  className = "",
}: FallingMoneyProps) {
  const [particles, setParticles] = useState<MoneyParticle[]>([]);

  useEffect(() => {
    const newParticles: MoneyParticle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        rotation: Math.random() * 360,
        size: 20 + Math.random() * 15,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        return (
          <div
            key={particle.id}
            className="absolute falling-money"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              fontSize: `${particle.size}px`,
              transform: `rotate(${particle.rotation}deg)`,
            }}
          >
            {symbol}
          </div>
        );
      })}
    </div>
  );
}

