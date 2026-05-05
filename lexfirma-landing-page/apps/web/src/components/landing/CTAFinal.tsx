import { ArrowRight } from "lucide-react";
import Section from "./Section";
import LandingButton from "./LandingButton";

export default function CTAFinal() {
  return (
    <Section tone="navy" className="final-cta">
      <div className="final-cta-inner">
        <h2>Convierte la operativa del despacho en una ventaja diaria.</h2>
        <p>Ve como Lexfirma organiza asuntos, tareas y documentos sin sacar al equipo de su flujo.</p>
        <div className="hero-actions">
          <LandingButton href="#solicitar-demo" variant="accent">
            Solicitar demo <ArrowRight strokeWidth={1.5} />
          </LandingButton>
          <LandingButton href="/login" variant="ghost-dark">
            Entrar
          </LandingButton>
        </div>
      </div>
    </Section>
  );
}
