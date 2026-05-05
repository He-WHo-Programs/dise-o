import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  tone?: "light" | "navy";
};

export default function Section({ children, className = "", tone = "light", ...props }: SectionProps) {
  return (
    <section className={`section section-${tone} ${className}`} {...props}>
      <div className="section-inner">{children}</div>
    </section>
  );
}
