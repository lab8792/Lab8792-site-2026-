import React from "react";
import { motion } from "framer-motion";

export default function ImpactStatement() {
  return (
    <section className="py-32 lg:py-48 border-t border-white/[0.07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Thin decorative line */}
          <div className="flex items-center gap-6 justify-center mb-16">
            <div className="flex-1 max-w-[80px] h-px bg-border" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground">LAB 8792</span>
            <div className="flex-1 max-w-[80px] h-px bg-border" />
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight text-foreground leading-[1.0]">
            Sua empresa não precisa
            <br />
            parecer maior do que é.
          </h2>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight text-primary leading-[1.0]">
            Ela precisa parecer tão forte
            <br />
            quanto realmente é.
          </h2>

          <p className="mt-12 text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
            A LAB 8792 transforma estratégia visual em presença, percepção e valor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}