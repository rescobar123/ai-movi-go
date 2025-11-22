export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  "primary-foreground": string;
  secondary: string;
  "secondary-foreground": string;
  accent: string;
  "accent-foreground": string;
  muted: string;
  "muted-foreground": string;
  border: string;
  card: string;
  "card-foreground": string;
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
}

export interface ThemesData {
  themes: Theme[];
}

