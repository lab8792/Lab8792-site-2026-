import React from "react";
import { motion } from "framer-motion";

const problems = [
  "Marca sem presença visual",
  "Produto difícil de apresentar",
  "Materiais comerciais desalinhados",
  "Catálogos que não vendem",
  "Apresentações genéricas",
  "Falta de padrão visual",
  "Ideias boas com execução fraca",
  "Produtos digitais sem clareza visual",
];

export default function Problem() {
  return (
    <section className="py-32 lg:py-48 border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px bg-primary/60" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">O Problema</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.08]">
              O mercado julga antes de entender.
            </h2>
            <p className="mt-8 text-base text-muted-foreground font-light leading-relaxed">
              Uma apresentação fraca reduz confiança. Um material mal resolvido diminui valor.
              Um produto sem boa visualização perde impacto.
            </p>
            <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
              Em poucos segundos, a percepção visual define se sua empresa parece preparada,
              improvisada, comum ou memorável.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
              {problems.map((problem, i) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-secondary p-6 lg:p-7 group hover:bg-border/40 transition-colors duration-400"
                >
                  <span className="text-[9px] tracking-[0.2em] uppercase text-primary/40 block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-muted-foreground font-light leading-snug group-hover:text-foreground/90 transition-colors duration-300">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}