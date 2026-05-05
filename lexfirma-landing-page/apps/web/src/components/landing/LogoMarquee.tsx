const logos = ["Garrido Legal", "Nexo Civil", "Atlas Juridico", "Matriz Fiscal", "Orbe Laboral", "Prisma IP"];

export default function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-label="Despachos que trabajan con Lexfirma">
      <div className="marquee-track">
        {[...logos, ...logos].map((logo, index) => (
          <span key={`${logo}-${index}`}>{logo}</span>
        ))}
      </div>
    </section>
  );
}
