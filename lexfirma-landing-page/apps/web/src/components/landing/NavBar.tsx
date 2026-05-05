import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import LandingButton from "./LandingButton";

const links = [
  ["Problema", "#problema"],
  ["Producto", "#producto"],
  ["Seguridad", "#seguridad"],
  ["Precios", "#precios"],
  ["FAQ", "#faq"],
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        <BrandMark variant="dark" />
        <nav className="nav-links" aria-label="Navegacion principal">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <LandingButton href="/login" variant="ghost">
            Entrar
          </LandingButton>
          <LandingButton href="#demo" variant="primary">
            Ver demo
          </LandingButton>
        </div>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-panel"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <LandingButton href="#demo" variant="primary" onClick={() => setOpen(false)}>
              Ver demo
            </LandingButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
