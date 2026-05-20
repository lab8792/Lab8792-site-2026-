import React from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "Design estratégico",
  "Renderização 3D",
  "Motion design",
  "Produtos digitais",
  "Identidade visual",
  "Apresentações",
  "Campanhas visuais",
  "Materiais comerciais",
  "Animação 3D",
  "Interfaces",
];

export default function Hero() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Subtle noise / grid */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Glow orb */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[140px]" />
      </div>

      {/* Overline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-0 pb-12 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-primary/60" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">Visual Strategy Studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] leading-[1.0] tracking-tight text-foreground max-w-5xl"
        >
          A imagem da sua empresa
          <br />
          <span className="text-primary">também vende.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl"
        >
          A LAB 8792 cria design, 3D, motion e produtos digitais para marcas que
          precisam apresentar melhor, parecer maiores e comunicar com mais impacto.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-4 text-sm text-muted-foreground font-light"
        >
          Não é só estética. É presença, clareza e percepção de valor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#projetos"
            className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground bg-primary px-8 py-3.5 hover:opacity-90 transition-opacity duration-300"
          >
            Ver trabalhos
          </a>
          <a
            href="mailto:contato@lab8792.com.br"
            className="text-[11px] tracking-[0.2em] uppercase text-foreground border border-border px-8 py-3.5 hover:bg-secondary transition-colors duration-300"
          >
            Falar com a LAB
          </a>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-border overflow-hidden py-4 bg-secondary">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">{item}</span>
              <span className="w-1 h-1 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}