import { BrainCircuit, Check, Plug, Sparkles, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import Pill from "./Pill";

const steps: Array<[string, string, LucideIcon]> = [
  ["Conecta", "Enlaza Google Workspace y tus fuentes de trabajo.", Plug],
  ["Aprende", "Detecta patrones por asunto, cliente y fase.", BrainCircuit],
  ["Propone", "Sugiere tareas, adjuntos y plantillas.", Sparkles],
  ["Tu decides", "El equipo valida antes de ejecutar.", Check],
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="como-funciona">
      <Reveal className="section-heading">
        <Pill variant="navy">Como funciona</Pill>
        <h2>La IA propone. El despacho conserva el criterio.</h2>
      </Reveal>
      <div className="timeline">
        <motion.div
          className="timeline-line"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={reduceMotion ? undefined : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {steps.map(([title, text, Icon], index) => (
          <Reveal className="timeline-step" delay={index * 0.08} key={title}>
            <span className="step-number">0{index + 1}</span>
            <Icon strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
