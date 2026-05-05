import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import LandingButton from "./LandingButton";
import Pill from "./Pill";

const words = "El despacho que decide antes, factura mejor".split(" ");

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <Pill variant="accent">IA operativa para despachos</Pill>
          <h1>
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: index * 0.055, duration: 0.45, ease: "easeOut" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>
          <p>
            Lexfirma convierte correos, documentos y decisiones repetidas en tareas claras,
            propuestas listas para revisar y plantillas vivas para todo el equipo.
          </p>
          <div className="hero-actions">
            <LandingButton href="#demo" variant="accent">
              Ver producto <ArrowRight strokeWidth={1.5} />
            </LandingButton>
            <LandingButton href="#precios" variant="ghost-dark">
              Ver planes
            </LandingButton>
          </div>
        </div>
        <motion.div
          className="task-mockup"
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          aria-label="Mockup de tareas Lexfirma"
        >
          <div className="mockup-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="task-header">
            <div>
              <p>Vista del despacho</p>
              <h2>Prioridad de hoy</h2>
            </div>
            <Clock3 strokeWidth={1.5} />
          </div>
          {[
            ["Preparar contestacion", "Civil", "Hoy 13:00"],
            ["Revisar burofax", "Mercantil", "Hoy 16:30"],
            ["Subir poderes", "Procesal", "Manana"],
          ].map(([title, tag, time]) => (
            <div className="task-row" key={title}>
              <CheckCircle2 strokeWidth={1.5} />
              <div>
                <strong>{title}</strong>
                <span>{tag}</span>
              </div>
              <time>{time}</time>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
