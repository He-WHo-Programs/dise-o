import { useState } from "react";
import BrandMark from "./BrandMark";

const columns = [
  ["Producto", "Tareas", "Documentos", "Plantillas"],
  ["Empresa", "Seguridad", "Precios", "Contacto"],
  ["Legal", "Privacidad", "RGPD", "Condiciones"],
];

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <BrandMark variant="light" />
          <p>IA operativa para despachos que quieren decidir antes y coordinar mejor.</p>
        </div>
        {columns.map(([title, ...items]) => (
          <div className="footer-column" key={title}>
            <h3>{title}</h3>
            {items.map((item) => (
              <a href="/" key={item}>
                {item}
              </a>
            ))}
          </div>
        ))}
        <form
          className="newsletter"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <h3>Novedades</h3>
          <label htmlFor="newsletter-email">Email profesional</label>
          <div>
            <input id="newsletter-email" type="email" placeholder="tu@despacho.es" required />
            <button type="submit">Enviar</button>
          </div>
          {sent && <p role="status">Confirmado. Te escribiremos pronto.</p>}
        </form>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Lexfirma. Todos los derechos reservados.</p>
    </footer>
  );
}
