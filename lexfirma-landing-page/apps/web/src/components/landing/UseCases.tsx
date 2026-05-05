import { BriefcaseBusiness, Scale, Settings2, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

const cases: Array<[string, string, string, LucideIcon]> = [
  ["Socio director", "+12h", "recuperadas por semana en coordinacion", BriefcaseBusiness],
  ["Abogado senior", "-68%", "menos tareas sin contexto suficiente", Scale],
  ["Admin", "x3", "mas rapidez enlazando documentos", Settings2],
];

export default function UseCases() {
  return (
    <Section>
      <div className="use-case-grid">
        {cases.map(([role, metric, text, Icon], index) => (
          <Reveal delay={index * 0.08} key={role}>
            <article className="use-case-card">
              <Icon strokeWidth={1.5} />
              <h3>{role}</h3>
              <strong>{metric}</strong>
              <p>{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
