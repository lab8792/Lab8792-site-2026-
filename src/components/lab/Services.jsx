import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Design gráfico", description: "Peças visuais com direção de arte, composição e acabamento para comunicação impressa e digital." },
  { title: "Identidade visual", description: "Marcas construídas com estratégia, consistência e presença visual que posiciona a empresa." },
  { title: "Renderização 3D", description: "Imagens fotorrealistas de produtos, ambientes e objetos para apresentações, catálogos e campanhas." },
  { title: "Animação 3D", description: "Animações de produto e ambientações com qualidade técnica para vídeos institucionais e comerciais." },
  { title: "Motion design", description: "Vídeos com animação gráfica, tipografia em movimento e narrativa visual para telas e redes." },
  { title: "Produtos digitais", description: "Interfaces, experiências digitais, dashboards, plataformas e produtos web com foco em clareza e usabilidade." },
  { title: "UI visual", description: "Design de interfaces com acabamento editorial, tipografia e hierarquia visual definidos para produto." },
  { title: "Dashboards e interfaces", description: "Interfaces funcionais com identidade visual clara, legibilidade e padrão profissional." },
  { title: "Catálogos", description: "Catálogos, folders e materiais gráficos com layout profissional e acabamento editorial." },
  { title: "Apresentações comerciais", description: "Decks e materiais de vendas com estrutura visual que ajuda a convencer, apresentar e fechar negócios." },
  { title: "Campanhas visuais", description: "Direção visual para campanhas de lançamento, institucional e comunicação de produto." },
  { title: "Materiais institucionais", description: "Documentos, apresentações e materiais de marca com consistência e padrão visual profissional." },
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 lg:py-48 border-t border-border bg-secondary">
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
            <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">Serviços</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.08] max-w-2xl">
            O que a LAB entrega.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-secondary p-8 lg:p-9 group hover:bg-border/40 transition-colors duration-400"
            >
              <span className="text-[9px] tracking-[0.25em] uppercase text-primary/40 block mb-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-base text-foreground tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-[13px] text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}