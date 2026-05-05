import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck2, FileText, Layers3, ListChecks } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import Pill from "./Pill";

const tabs = ["Tareas", "Archivos pendientes", "Plantillas"] as const;
type Tab = (typeof tabs)[number];

const taskColumns = [
  {
    title: "Entrada",
    items: ["Convertir correo de cliente en tarea", "Pedir poder actualizado"],
  },
  {
    title: "En curso",
    items: ["Preparar contestacion a demanda", "Revisar vencimiento de alegaciones"],
  },
  {
    title: "Listo para revisar",
    items: ["Validar propuesta de requerimiento", "Aprobar plantilla de acta"],
  },
];

const pendingFiles = [
  {
    name: "Contrato revisado proveedor.pdf",
    origin: "Gmail · recibido hace 24 min",
    status: "Sin asunto",
    action: "Vincular a Atlas / Mercantil",
  },
  {
    name: "Poder cliente Romero.docx",
    origin: "Drive · carpeta compartida",
    status: "Falta responsable",
    action: "Asignar a Abogado senior",
  },
  {
    name: "Anexo vencimientos.xlsx",
    origin: "Gmail · adjunto reenviado",
    status: "Requiere revision",
    action: "Crear tarea de control",
  },
  {
    name: "Burofax escaneado.pdf",
    origin: "Drive · subida manual",
    status: "Urgente",
    action: "Extraer plazo y notificar",
  },
];

const templates = [
  {
    title: "Contestacion a demanda",
    use: "Civil · fase de oposicion",
  },
  {
    title: "Requerimiento de pago",
    use: "Impagados · primera reclamacion",
  },
  {
    title: "Acta de junta",
    use: "Societario · aprobacion anual",
  },
  {
    title: "Escrito de subsanacion",
    use: "Procesal · plazo abierto",
  },
];

function DemoPanel({ tab }: { tab: Tab }) {
  if (tab === "Tareas") {
    return (
      <div className="demo-board">
        {taskColumns.map((column) => (
          <div className="demo-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.items.map((task) => (
              <div className="demo-card task-demo-card" key={task}>
                <strong>{task}</strong>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (tab === "Archivos pendientes") {
    return (
      <div className="file-list">
        {pendingFiles.map((file) => (
          <div className="file-row" key={file.name}>
            <input type="checkbox" aria-label={`Marcar ${file.name} como revisado`} />
            <div>
              <strong>{file.name}</strong>
              <span>{file.origin}</span>
            </div>
            <span className="file-status">{file.status}</span>
            <button type="button">{file.action}</button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="template-grid">
      {templates.map((template) => (
        <div className="template-card" key={template.title}>
          <FileText strokeWidth={1.5} />
          <strong>{template.title}</strong>
          <span>{template.use}</span>
          <button type="button">Usar plantilla</button>
        </div>
      ))}
    </div>
  );
}

export default function ProductDemo() {
  const [active, setActive] = useState<Tab>("Tareas");
  const reduceMotion = useReducedMotion();

  return (
    <Section id="producto" tone="navy" className="product-demo">
      <div className="demo-layout" id="demo">
        <div>
          <Pill variant="accent">Producto</Pill>
          <h2>Una mesa de trabajo para todo lo que antes se escapaba.</h2>
          <p>
            Lexfirma no sustituye al abogado. Ordena la operativa, explica por que propone
            cada accion y deja la decision en manos del equipo.
          </p>
        </div>
        <div className="demo-shell">
          <div className="demo-tabs" role="tablist" aria-label="Vistas de producto">
            {tabs.map((tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === tab}
                className={active === tab ? "active" : ""}
                onClick={() => setActive(tab)}
                key={tab}
              >
                {tab === "Tareas" && <ListChecks strokeWidth={1.5} />}
                {tab === "Archivos pendientes" && <CalendarCheck2 strokeWidth={1.5} />}
                {tab === "Plantillas" && <Layers3 strokeWidth={1.5} />}
                {tab}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="demo-panel"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.24 }}
            >
              <DemoPanel tab={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
