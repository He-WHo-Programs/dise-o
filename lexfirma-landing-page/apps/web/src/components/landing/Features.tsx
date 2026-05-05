import { FileText, FolderOpen, MailCheck, PlugZap, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import Pill from "./Pill";

const features: Array<[string, string, LucideIcon]> = [
  ["Email a tarea", "Convierte correos entrantes en tareas con asunto, prioridad y responsable sugerido.", MailCheck],
  ["Documentos", "Relaciona archivos pendientes con el asunto y deja trazabilidad para todo el equipo.", FolderOpen],
  ["Plantillas", "Propone el modelo correcto segun contexto, cliente y fase del expediente.", FileText],
  ["Google nativo", "Trabaja con Gmail, Drive y Calendar sin obligar al despacho a cambiar de habitos.", PlugZap],
];

export default function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="capacidades">
      <Reveal className="section-heading">
        <Pill variant="accent">Capacidades core</Pill>
        <h2>Menos coordinacion manual, mas criterio aplicado.</h2>
      </Reveal>
      <div className="feature-grid">
        {features.map(([title, text, Icon]) => (
          <motion.article
            className="feature-card"
            key={title}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <Icon strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
