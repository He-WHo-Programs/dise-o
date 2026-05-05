import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import Section from "./Section";
import Pill from "./Pill";

type DemoForm = {
  name: string;
  email: string;
  firm: string;
  role: string;
  size: string;
  interest: string;
  message: string;
};

const initialForm: DemoForm = {
  name: "",
  email: "",
  firm: "",
  role: "",
  size: "2-10",
  interest: "Tareas desde Gmail",
  message: "",
};

export default function DemoRequest() {
  const [form, setForm] = useState<DemoForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof DemoForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const request = {
      ...form,
      createdAt: new Date().toISOString(),
      source: "lexfirma-landing",
    };

    localStorage.setItem("lexfirma-demo-request", JSON.stringify(request));
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <Section id="solicitar-demo" className="demo-request-section">
      <div className="demo-request-layout">
        <div className="demo-request-copy">
          <Pill variant="accent">Solicitar demo</Pill>
          <h2>Cuentanos como trabaja tu despacho y te ensenamos Lexfirma con contexto.</h2>
          <p>
            En la demo revisamos tus flujos de correo, documentos y plantillas para mostrarte
            donde puede ayudarte Lexfirma desde el primer dia.
          </p>
          <div className="demo-request-points">
            <div>
              <CheckCircle2 strokeWidth={1.5} />
              <span>Sesion de 30 minutos con foco operativo.</span>
            </div>
            <div>
              <Mail strokeWidth={1.5} />
              <span>Respuesta en menos de un dia laborable.</span>
            </div>
            <div>
              <ShieldCheck strokeWidth={1.5} />
              <span>Sin compartir documentacion sensible.</span>
            </div>
          </div>
        </div>
        <form className="demo-request-form" onSubmit={onSubmit}>
          <div className="form-grid">
            <label>
              Nombre
              <input
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Tu nombre"
              />
            </label>
            <label>
              Email profesional
              <input
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="tu@despacho.es"
              />
            </label>
            <label>
              Despacho
              <input
                required
                autoComplete="organization"
                value={form.firm}
                onChange={(event) => updateField("firm", event.target.value)}
                placeholder="Nombre del despacho"
              />
            </label>
            <label>
              Rol
              <input
                required
                value={form.role}
                onChange={(event) => updateField("role", event.target.value)}
                placeholder="Socio, abogado, admin..."
              />
            </label>
            <label>
              Tamano del equipo
              <select value={form.size} onChange={(event) => updateField("size", event.target.value)}>
                <option>1</option>
                <option>2-10</option>
                <option>11-30</option>
                <option>31-100</option>
                <option>100+</option>
              </select>
            </label>
            <label>
              Interes principal
              <select value={form.interest} onChange={(event) => updateField("interest", event.target.value)}>
                <option>Tareas desde Gmail</option>
                <option>Documentos pendientes</option>
                <option>Plantillas</option>
                <option>Google Workspace</option>
                <option>Seguridad y RGPD</option>
              </select>
            </label>
          </div>
          <label>
            Que quieres mejorar primero?
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Ejemplo: convertir correos en tareas, controlar vencimientos o ordenar plantillas."
              rows={4}
            />
          </label>
          <button className="demo-submit" type="submit">
            Enviar solicitud
          </button>
          {submitted && (
            <p className="form-confirmation" role="status">
              Solicitud recibida. Hemos guardado tus datos de demo y el equipo de Lexfirma te contactara pronto.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
