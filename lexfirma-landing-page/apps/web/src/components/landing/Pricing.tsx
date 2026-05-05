import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Pill from "./Pill";
import LandingButton from "./LandingButton";

const plans = [
  ["Despacho", 79, "Para equipos que quieren ordenar la operativa semanal.", ["5 usuarios", "Tareas desde Gmail", "Plantillas base"]],
  ["Firma", 149, "Para despachos con varios equipos y criterio compartido.", ["20 usuarios", "Automatizaciones IA", "Analitica operativa"]],
  ["Enterprise", 0, "Para firmas con seguridad, soporte y despliegue a medida.", ["Usuarios ilimitados", "SSO", "Acompanamiento dedicado"]],
] as const;

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <Section id="precios">
      <Reveal className="section-heading">
        <Pill variant="accent">Precios</Pill>
        <h2>Empieza pequeno y escala cuando el despacho lo pida.</h2>
        <div className="billing-toggle" role="group" aria-label="Periodo de facturacion">
          <button className={!annual ? "active" : ""} type="button" onClick={() => setAnnual(false)}>
            Mensual
          </button>
          <button className={annual ? "active" : ""} type="button" onClick={() => setAnnual(true)}>
            Anual
          </button>
        </div>
      </Reveal>
      <div className="pricing-grid">
        {plans.map(([name, price, text, features], index) => {
          const shownPrice = annual && price ? Math.round(price * 0.84) : price;
          const featured = index === 1;

          return (
            <article className={`pricing-card ${featured ? "featured" : ""}`} key={name}>
              {featured && <span className="plan-badge">Mas elegido</span>}
              <h3>{name}</h3>
              <p>{text}</p>
              <div className="price">
                {price ? (
                  <>
                    <strong>{shownPrice} EUR</strong>
                    <span>/usuario/mes</span>
                  </>
                ) : (
                  <strong>A medida</strong>
                )}
              </div>
              <ul>
                {features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>
              <LandingButton href="#solicitar-demo" variant={featured ? "accent" : "primary"}>
                Solicitar demo
              </LandingButton>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
