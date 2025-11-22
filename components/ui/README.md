# Componentes UI con Temas

Componentes reutilizables que usan automáticamente los temas configurados. No necesitas escribir estilos inline, solo usa los componentes.

## Card

Componente de tarjeta que se adapta automáticamente al tema.

```tsx
import Card from "@/components/ui/Card";

<Card>
  <h2>Título</h2>
  <p>Contenido</p>
</Card>
```

## Button

Botón con variantes que se adaptan al tema.

```tsx
import Button from "@/components/ui/Button";

<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="accent">Acento</Button>
```

## Text

Texto con variantes de color que se adaptan al tema.

```tsx
import Text from "@/components/ui/Text";

<Text variant="foreground">Texto principal</Text>
<Text variant="muted">Texto secundario</Text>
<Text variant="card-foreground">Texto en card</Text>
```

## Ejemplo Completo

```tsx
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";

<Card>
  <h2 className="text-2xl font-semibold mb-4">Título</h2>
  <Text variant="muted" className="mb-4">
    Descripción del contenido
  </Text>
  <Button variant="primary">Acción</Button>
</Card>
```

Todos los componentes se adaptan automáticamente cuando cambias el tema usando el `ThemeSelector`.

