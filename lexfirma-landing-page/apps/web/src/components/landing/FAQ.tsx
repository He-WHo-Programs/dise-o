import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Pill from "./Pill";

const faqs = [
  ["Lexfirma sustituye al abogado?", "No. Lexfirma propone tareas, documentos y plantillas. El despacho revisa y decide siempre."],
  ["Entrena modelos con nuestros datos?", "No. Tu informacion no se usa para entrenar modelos de terceros."],
  ["Funciona con Google Workspace?", "Si. La experiencia esta pensada para Gmail, Drive y Calendar."],
  ["Podemos mantener nuestras plantillas?", "Si. Lexfirma aprende que plantilla encaja en cada contexto y conserva el control del equipo."],
  ["Que pasa con los permisos?", "Cada usuario ve solo lo que corresponde a su despacho, rol y asunto."],
  ["Cuanto tarda el despliegue?", "Un despacho pequeno puede empezar en dias. Firmas grandes suelen requerir una fase de configuracion."],
  ["Hay soporte para migracion?", "Si. Los planes Firma y Enterprise incluyen acompanamiento para estructura inicial y adopcion."],
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index + 1) % faqs.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index - 1 + faqs.length) % faqs.length);
    }
  };

  return (
    <Section id="faq">
      <Reveal className="section-heading">
        <Pill variant="muted">FAQ</Pill>
        <h2>Preguntas antes de poner IA en un despacho.</h2>
      </Reveal>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => {
          const open = active === index;

          return (
            <div className="faq-item" key={question}>
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setActive(open ? -1 : index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span>{question}</span>
                <ChevronDown className={open ? "open" : ""} strokeWidth={1.5} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    className="faq-answer"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
