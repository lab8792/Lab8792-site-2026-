import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    title: "Renderização 3D de produto",
    category: "3D",
    image: "/portfolio/render-3d-01.webp",
    description: "Visualização premium para apresentação comercial.",
  },
  {
    title: "Campanha visual",
    category: "Design",
    image: "/portfolio/campanha-01.webp",
    description: "Direção visual para comunicação de marca.",
  },
  {
    title: "Motion design",
    category: "Motion",
    image: "/portfolio/motion-01.webp",
    description: "Peças animadas para comunicação digital.",
  },
  {
    title: "Produto digital",
    category: "Digital",
    image: "/portfolio/produto-digital-01.webp",
    description: "Interfaces e experiências digitais com clareza visual.",
  },
  {
    title: "Catálogo comercial",
    category: "Editorial",
    image: "/portfolio/catalogo-01.webp",
    description: "Materiais comerciais com padrão profissional.",
  },
  {
    title: "Identidade visual",
    category: "Branding",
    image: "/portfolio/identidade-01.webp",
    description: "Sistemas visuais para marcas e empresas.",
  },
];

const categories = ["Todos", "3D", "Design", "Motion", "Digital", "Editorial", "Branding"];

const gradients = {
  "3D": "from-slate-800/80 via-slate-700/30 to-slate-900",
  Design: "from-zinc-800/80 via-zinc-700/30 to-zinc-900",
  Motion: "from-stone-800/80 via-stone-700/30 to-stone-900",
  Digital: "from-neutral-800/80 via-neutral-700/30 to-neutral-900",
  Editorial: "from-gray-800/80 via-gray-700/30 to-gray-900",
  Branding: "from-slate-700/80 via-slate-600/30 to-slate-900",
};

function PortfolioCard({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden border border-white/[0.06] hover:border-primary/20 transition-all duration-500 cursor-pointer">
      {!imgError ? (
        <img
          src={item.image}
          alt={item.title}
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[item.category] || "from-slate-800 to-slate-900"}`}>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`g-${item.title.replace(/\s/g, "")}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#g-${item.title.replace(/\s/g, "")})`} />
          </svg>
        </div>
      )}

      {/* Top label */}
      <div className="absolute top-5 left-5">
        <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">{item.category}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-primary/70 mb-2">{item.category}</p>
        <h3 className="font-heading text-base text-foreground leading-snug mb-1">{item.title}</h3>
        <p className="text-[12px] text-muted-foreground font-light">{item.description}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? portfolioItems : portfolioItems.filter((p) => p.category === active);

  return (
    <section id="projetos" className="py-32 lg:py-48 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-6 h-px bg-primary/60" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-primary/80">Trabalhos</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.08]">
            Trabalhos selecionados.
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                active === cat
                  ? "border-primary/50 text-foreground bg-primary/[0.10]"
                  : "border-white/[0.10] text-[#6F7782] hover:text-foreground hover:border-white/[0.20]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <PortfolioCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}