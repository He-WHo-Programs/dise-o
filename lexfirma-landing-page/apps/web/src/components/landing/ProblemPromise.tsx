import { AlertCircle, CheckCircle2, FolderKanban, Inbox, Search, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import Section from "./Section";
import Pill from "./Pill";

export default function ProblemPromise() {
  const pains: Array<[string, LucideIcon]> = [
    ["Correos que se convierten tarde en tareas.", Inbox],
    ["Documentos pendientes que nadie ve a tiempo.", Search],
    ["Plantillas que dependen de memoria individual.", AlertCircle],
  ];

  return (
    <Section id="problema">
      <div className="split-grid">
        <Reveal>
          <Pill variant="muted">El coste invisible</Pill>
          <h2>El despacho pierde horas cuando cada asunto vive en un sitio distinto.</h2>
          <div className="pain-list">
            {pains.map(([text, Icon]) => (
              <div className="pain-item" key={text}>
                <Icon strokeWidth={1.5} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="organized-illustration">
            <div className="organized-card main">
              <FolderKanban strokeWidth={1.5} />
              <strong>Todo organizado</strong>
              <span>Asuntos, tareas y documentos conectados</span>
            </div>
            {["Vencimientos", "Adjuntos", "Plantillas"].map((item) => (
              <div className="organized-card" key={item}>
                <CheckCircle2 strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
