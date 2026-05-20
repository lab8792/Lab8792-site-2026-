import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="py-32 lg:py-48 border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-6 h-px bg-primary/60" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">Contato</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-foreground leading-[1.05]">
              Vamos construir uma presença visual mais forte?
            </h2>
            <p className="mt-8 text-base text-muted-foreground font-light leading-relaxed max-w-xl">
              Se sua empresa precisa apresentar melhor uma marca, produto, campanha ou ideia,
              a LAB 8792 pode ajudar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <a
              href="mailto:contato@lab8792.com.br"
              className="group flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-foreground border border-border px-8 py-5 hover:bg-secondary transition-colors duration-300"
            >
              <span>Enviar e-mail</span>
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-300 text-base">→</span>
            </a>
            <a
              href="https://wa.me/5554997028792"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-primary-foreground bg-primary px-8 py-5 hover:opacity-90 transition-opacity duration-300"
            >
              <span>Chamar no WhatsApp</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-base">→</span>
            </a>

            <div className="mt-4 pt-6 border-t border-border">
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-1">E-mail</p>
              <a href="mailto:contato@lab8792.com.br" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                contato@lab8792.com.br
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}