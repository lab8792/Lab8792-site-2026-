import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Design",
    description:
      "Identidade, materiais comerciais, campanhas, catálogos, apresentações e sistemas visuais.",
  },
  {
    title: "3D & Motion",
    description:
      "Renderizações, animações, vídeos de produto, motion design e visualizações técnicas/comerciais.",
  },
  {
    title: "Produtos Digitais",
    description:
      "Interfaces, dashboards, landing pages, protótipos e experiências digitais com acabamento visual profissional.",
  },
];

export default function Solution() {
  return (
    <section className="py-32 lg:py-48 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20 lg:mb-28"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-primary/60" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">A Solução</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.08]">
            Estratégia visual aplicada à realidade da empresa.
          </h2>
          <p className="mt-8 text-base text-muted-foreground font-light leading-relaxed">
            A LAB 8792 combina direção de arte, design gráfico, 3D, motion e interfaces digitais para
            criar materiais que ajudam empresas a apresentar, vender e comunicar melhor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-10 lg:p-12 group hover:bg-secondary transition-colors duration-500"
            >
              <span className="text-[9px] tracking-[0.3em] uppercase text-primary/40 block mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-2xl text-foreground tracking-tight mb-4">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}