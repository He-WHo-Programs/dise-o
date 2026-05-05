# Lexfirma Landing Page B2B

Lexfirma no tenia pagina publica de marketing. Esta tarea cubre el diseno e implementacion completa de una landing page B2B para despachos de abogados, alineada con el sistema de diseno existente del producto (`index.css` + tokens `--lf-*`).

## Lo que se implemento

## Como ejecutar

Desde esta carpeta:

```bash
pnpm install
pnpm --filter web dev
```

La landing queda disponible en `http://localhost:5173/`.

Tambien puedes entrar directamente en `apps/web` y ejecutar:

```bash
pnpm install
pnpm dev
```

### Infraestructura

- Instalacion de `framer-motion` en `apps/web`.
- Nuevos tokens CSS en `index.css`:
  - `--lf-glass-bg`
  - `--lf-glass-border`
  - `--lf-hero-radial`
  - `--lf-shadow-lift`
  - `--lf-shadow-accent`
  - `--lf-grid-line`
- Nueva ruta publica `/` en `App.tsx` hacia `LandingPage.tsx`.
- Catch-all redirige a `/`, antes redirigia a `/app/tasks`.

## Componentes compartidos

Ubicacion: `src/components/landing/`

| Componente | Descripcion |
| --- | --- |
| `Section.tsx` | Wrapper con padding responsive y `max-w-6xl`. |
| `Reveal.tsx` | Animacion `whileInView` con `useReducedMotion()`. |
| `BrandMark.tsx` | Logo con icono `Scale` + wordmark, variante dark/light. |
| `LandingButton.tsx` | Variantes `primary`, `accent`, `ghost` y `ghost-dark`, con micro-bounce hover/press. |
| `Pill.tsx` | Eyebrow badges con variantes de color. |

## Secciones implementadas

1. **NavBar**
   - Sticky con blur al scroll.
   - Hamburger en movil con panel animado.
   - Anchor links con offset para navbar fija.

2. **Hero**
   - Fondo navy + gradiente radial accent + grid hairlines.
   - H1 con stagger word-by-word.
   - Mockup interactivo de tareas con propuesta IA animada.

3. **LogoMarquee**
   - CSS `@keyframes marquee` de 40s infinito.
   - Pausa en hover.
   - Fade-out lateral.

4. **ProblemPromise**
   - Split 50/50.
   - 3 dolores reales del despacho frente a una ilustracion de "todo organizado".

5. **Features**
   - Grid 2x2.
   - 4 capacidades core: Email a tarea, Documentos, Plantillas y Google nativo.
   - `whileHover` lift + glow accent por card.

6. **HowItWorks**
   - Timeline de 4 pasos: Conecta, Aprende, Propone, Tu decides.
   - Linea horizontal animada con `scaleX` al entrar en viewport.

7. **ProductDemo**
   - Seccion oscura navy.
   - Tabs interactivos con `AnimatePresence mode="wait"`.
   - Mockups React puros de Tareas, Archivos pendientes y Plantillas.

8. **SecuritySeals**
   - 4 sellos: RGPD, EU, cifrado y multitenant.
   - Copy clave: "Tu informacion jamas entrena modelos de terceros. Punto."

9. **UseCases**
   - 3 perfiles: Socio director, Abogado senior y Admin.
   - Metricas grandes tabulares: `+12h`, `-68%`, `x3`.

10. **Pricing**
    - Toggle mensual/anual.
    - 3 planes: Despacho, Firma y Enterprise.
    - Plan central elevado con borde accent y badge.

11. **FAQ**
    - Acordeon animado con `AnimatePresence`.
    - Navegacion por teclado.
    - 7 preguntas.

12. **CTAFinal**
    - Seccion navy full-width con gradiente radial.
    - CTA doble: accent + ghost-dark.

13. **Footer**
    - 4 columnas.
    - Formulario newsletter con confirmacion.
    - Copyright dinamico.

## Decisiones tecnicas

- Sin emojis estructurales: sustituidos por Lucide React, con `stroke-width: 1.5` uniforme en todos los iconos funcionales.
- `useReducedMotion()` en todos los componentes animados: cumple `prefers-reduced-motion` de forma nativa sin fallbacks CSS adicionales.
- Mockups React puros, sin imagenes: consistencia visual con el producto real, sin activos externos que cachear.
- Sin `shadcn/ui`: componentes propios siguiendo el sistema de tokens existente; sin nuevas dependencias salvo Framer Motion.
- Copy 100% espanol de Espana: tuteo, "despacho" en vez de "bufete", verbos en presente y sin adjetivos vacios.

## Archivos modificados o creados

- `apps/web/src/index.css`: nuevos tokens.
- `apps/web/src/App.tsx`: ruta `/` + catch-all.
- `apps/web/src/routes/LandingPage.tsx`: nuevo.
- `apps/web/src/components/landing/`: 13 componentes nuevos.

## Verificacion

- `pnpm --filter web dev`: `localhost:5173/` carga sin errores.
- Login sigue funcionando en `/login`.
- Responsive de 375px a 1440px sin scroll horizontal.
- Tab por toda la pagina: focus visible en todos los interactivos.
- `prefers-reduced-motion: reduce`: animaciones desactivadas.
- Lighthouse mobile Accessibility >= 95.
