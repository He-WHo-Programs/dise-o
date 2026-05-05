import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  variant?: "accent" | "navy" | "muted" | "success";
};

export default function Pill({ children, variant = "accent" }: PillProps) {
  return <span className={`pill pill-${variant}`}>{children}</span>;
}
