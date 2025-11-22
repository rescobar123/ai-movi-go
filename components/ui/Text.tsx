import { ReactNode, HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  variant?: "foreground" | "muted" | "card-foreground";
}

export default function Text({
  children,
  variant = "foreground",
  className = "",
  ...props
}: TextProps) {
  const variantClasses = {
    foreground: "text-foreground",
    muted: "text-muted-foreground",
    "card-foreground": "text-card-foreground",
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
}

