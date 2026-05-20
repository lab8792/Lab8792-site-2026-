import React from "react";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const navLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 lg:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="font-heading font-bold text-base tracking-widest text-foreground uppercase">
              LAB <span className="text-primary">8792</span>
            </span>
            <p className="mt-3 text-[13px] text-muted-foreground font-light leading-relaxed max-w-xs">
              Visual Strategy Studio. Design, 3D, motion e produtos digitais para empresas.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/lab_8792/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/5554997028792"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-5">Navegação</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground mb-5">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@lab8792.com.br"
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                contato@lab8792.com.br
              </a>
              <p className="text-[13px] text-muted-foreground">Bento Gonçalves / RS</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} LAB 8792 Visual Strategy Studio
          </p>
          <p className="text-[11px] text-muted-foreground/50 tracking-wide">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}