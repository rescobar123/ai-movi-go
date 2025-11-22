# AI Movi Go

Aplicación web construida con la plantilla oficial de [Next.js](https://nextjs.org) usando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), TypeScript y Tailwind CSS v4 con sistema de multitemas.

## Características

- ⚡ Next.js 16 con App Router (plantilla oficial)
- 🎨 Tailwind CSS v4 configurado
- 🌈 Sistema de multitemas dinámico
- 📦 pnpm como gestor de paquetes
- 💾 Temas almacenados en JSON (fácil de migrar a DB)
- 🔤 Fuentes Geist optimizadas

## Instalación

1. Instala las dependencias:
```bash
pnpm install
```

2. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con ThemeProvider
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales con Tailwind v4
├── components/            # Componentes React
│   └── ThemeSelector.tsx  # Selector de temas
├── contexts/             # Contextos de React
│   └── ThemeContext.tsx  # Contexto para manejo de temas
├── data/                 # Datos estáticos
│   └── themes.json       # Temas (fácil de remover cuando vengan de DB)
├── types/                # Tipos TypeScript
│   └── theme.ts          # Tipos para temas
└── package.json
```

## Sistema de Temas

Los temas están actualmente almacenados en `data/themes.json`. Cada tema incluye:

- `id`: Identificador único del tema
- `name`: Nombre del tema
- `colors`: Objeto con todos los colores del tema

### Migrar temas a Base de Datos

Cuando quieras migrar los temas a la base de datos:

1. Crea una tabla/colección en tu DB con la estructura de los temas
2. Modifica `contexts/ThemeContext.tsx` para cargar los temas desde una API
3. Elimina `data/themes.json` y la importación correspondiente

## Temas Incluidos

- **Claro** (light): Tema claro estándar
- **Oscuro** (dark): Tema oscuro
- **Azul** (blue): Tema con paleta azul
- **Verde** (green): Tema con paleta verde
- **Morado** (purple): Tema con paleta morada

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm start`: Inicia el servidor de producción
- `pnpm lint`: Ejecuta ESLint

## Tecnologías

- [Next.js](https://nextjs.org/) - Framework React
- [React](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS
- [pnpm](https://pnpm.io/) - Gestor de paquetes

## Plantilla Base

Este proyecto fue creado usando la plantilla oficial de Next.js con Tailwind CSS:
```bash
pnpm create next-app@latest . --typescript --tailwind --eslint --app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
