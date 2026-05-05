import { DatabaseZap, KeyRound, LockKeyhole, ShieldCheck, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import Pill from "./Pill";

const seals: Array<[string, string, LucideIcon]> = [
  ["RGPD", "Privacidad por diseno.", ShieldCheck],
  ["EU", "Datos alojados en region europea.", DatabaseZap],
  ["Cifrado", "Proteccion en transito y reposo.", LockKeyhole],
  ["Multitenant", "Aislamiento por despacho.", KeyRound],
];

export default function SecuritySeals() {
  return (
    <Section id="seguridad">
      <Reveal className="section-heading">
        <Pill variant="success">Seguridad</Pill>
        <h2>Tu informacion jamas entrena modelos de terceros. Punto.</h2>
      </Reveal>
      <div className="seal-grid">
        {seals.map(([title, text, Icon]) => (
          <article className="seal-card" key={title}>
            <Icon strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
