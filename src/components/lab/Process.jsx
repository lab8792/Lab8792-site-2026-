import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos o objetivo, o público, o produto e o contexto comercial.",
  },
  {
    number: "02",
    title: "Direção",
    description: "Definimos a linha visual, linguagem, referências e estrutura da entrega.",
  },
  {
    number: "03",
    title: "Produção",
    description: "Criamos design, 3D, motion ou interface com foco em acabamento e função.",
  },
  {
    number: "04",
    title: "Refinamento",
    description: "Ajustamos detalhes para elevar percepção, clareza e consistência.",
  },
  {
    number: "05",
    title: "Entrega",
    description: "Finalizamos os materiais prontos para uso comercial, institucional ou digital.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-32 lg:py-48 border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-primary/60" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">Processo</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.08] max-w-xl">
            Do conceito à entrega final.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-secondary p-8 lg:p-10 group hover:bg-border/40 transition-colors duration-400"
            >
              <span className="font-heading text-3xl lg:text-4xl text-foreground/[0.07] block mb-6">
                {step.number}
              </span>
              <h3 className="font-heading text-base text-foreground tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}