import React from "react";
import { motion } from "framer-motion";

const blocks = [
  {
    number: "01",
    title: "Percepção",
    text: "Antes de vender, sua empresa precisa ser percebida como relevante.",
  },
  {
    number: "02",
    title: "Clareza",
    text: "Antes de convencer, sua comunicação precisa ser entendida.",
  },
  {
    number: "03",
    title: "Valor",
    text: "Antes de competir por preço, sua marca precisa construir valor visual.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-32 lg:py-48 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px bg-primary/60" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">Manifesto</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.08]">
              Design bonito não é suficiente.
            </h2>
            <p className="mt-8 text-base text-muted-foreground font-light leading-relaxed">
              Empresas boas perdem força quando se apresentam mal. Produtos fortes parecem
              menores quando a imagem não acompanha o valor real.
            </p>
            <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
              A LAB 8792 existe para corrigir essa distância entre o que uma empresa é e
              como ela é percebida.
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-px">
            {blocks.map((block, i) => (
              <motion.div
                key={block.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-8 p-8 lg:p-10 border-b border-border hover:bg-secondary transition-colors duration-500"
              >
                <span className="text-[10px] tracking-[0.2em] text-primary/50 mt-1 shrink-0 font-heading">
                  {block.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-foreground tracking-wide mb-3">
                    {block.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {block.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}