import { Scale } from "lucide-react";

type BrandMarkProps = {
  variant?: "dark" | "light";
};

export default function BrandMark({ variant = "dark" }: BrandMarkProps) {
  return (
    <a className={`brand brand-${variant}`} href="/" aria-label="Lexfirma inicio">
      <span className="brand-icon" aria-hidden="true">
        <Scale strokeWidth={1.5} />
      </span>
      <span className="brand-word">Lexfirma</span>
    </a>
  );
}
