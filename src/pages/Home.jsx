import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Box, Braces, Check,
  ChevronRight, Code2, Factory, Globe2, Instagram, Layers3,
  Mail, Menu, MoveUpRight, Network, ShieldCheck,
  Sparkles, Workflow, X, Zap
} from "lucide-react";

const WHATSAPP = "https://wa.me/5554997028792";
const talkLink = (topic) => WHATSAPP + "?text=" + encodeURIComponent(
  "Olá, equipe LAB 8792! Quero conversar sobre " + topic + "."
);

const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
];

const services = [
  {
    index: "01", icon: <Code2 size={26} strokeWidth={1.5} />,
    category: "DESENVOLVIMENTO",
    name: "Softwares & plataformas",
    description: "Sistemas sob medida para organizar processos, conectar equipes e transformar operações manuais em experiências digitais.",
    audience: "Indústrias, equipes comerciais e operações B2B",
    deliveries: ["Sistemas web", "Portais e dashboards", "Integrações"],
    topic: "um software ou plataforma sob medida",
    className: "service-card-one"
  },
  {
    index: "02", icon: <Workflow size={26} strokeWidth={1.5} />,
    category: "EFICIÊNCIA OPERACIONAL",
    name: "Automação & IA aplicada",
    description: "Eliminamos etapas repetitivas, conectamos ferramentas e aplicamos inteligência artificial onde ela realmente melhora o trabalho.",
    audience: "Empresas com fluxos repetitivos e sistemas desconectados",
    deliveries: ["Automações", "Fluxos inteligentes", "Assistentes internos"],
    topic: "automação e inteligência artificial para minha empresa",
    className: "service-card-two"
  },
  {
    index: "03", icon: <Layers3 size={26} strokeWidth={1.5} />,
    category: "NOVOS NEGÓCIOS",
    name: "Produtos digitais & MVPs",
    description: "Transformamos uma oportunidade em produto digital funcional, com foco na experiência, na validação da proposta e na evolução.",
    audience: "Empresas e empreendedores com ideias a validar",
    deliveries: ["MVPs", "Plataformas SaaS", "Interfaces de produto"],
    topic: "desenvolvimento de um produto digital ou MVP",
    className: "service-card-three"
  },
  {
    index: "04", icon: <Box size={26} strokeWidth={1.5} />,
    category: "CAPACIDADE CRIATIVA",
    name: "Design, 3D & motion",
    description: "Criamos comunicação, visualizações e experiências que tornam produtos, marcas e ideias mais fáceis de entender e apresentar.",
    audience: "Marcas, fabricantes e equipes de marketing",
    deliveries: ["Design gráfico", "Renderização e animação 3D", "Motion"],
    topic: "design, 3D ou motion",
    className: "service-card-four"
  }
];

const sectors = [
  {
    n: "01", icon: <Factory size={21} strokeWidth={1.6} />,
    name: "Indústria & fabricantes",
    text: "Configuradores, orçamentos, catálogos digitais e processos que conectam produto, comercial e operação."
  },
  {
    n: "02", icon: <Network size={21} strokeWidth={1.6} />,
    name: "Operações B2B",
    text: "Portais, cadastros, aprovações, fluxos internos e integrações para reduzir retrabalho."
  },
  {
    n: "03", icon: <Globe2 size={21} strokeWidth={1.6} />,
    name: "Negócios digitais",
    text: "Plataformas, experiências web e recursos específicos para negócios que operam digitalmente."
  }
];

const steps = [
  { n: "01", title: "Entender", text: "Conhecemos o contexto, os usuários e o problema que precisa ser resolvido." },
  { n: "02", title: "Desenhar", text: "Definimos uma solução viável, seu escopo e a experiência de uso." },
  { n: "03", title: "Construir", text: "Desenvolvemos, integramos e validamos cada entrega." },
  { n: "04", title: "Evoluir", text: "Acompanhamos o aprendizado e planejamos os próximos passos." }
];

function Brand({ inverted = false }) {
  return (
    <span className={"lab-brand" + (inverted ? " lab-brand-inverted" : "")} aria-label="LAB 8792">
      LAB<span className="brand-suffix">8792<span className="brand-dot">.</span></span>
    </span>
  );
}

function Eyebrow({ children, light = false }) {
  return <div className={"lab-eyebrow" + (light ? " is-light" : "")}><i aria-hidden="true" />{children}</div>;
}

function SectionHead({ kicker, title, description, light = false }) {
  return (
    <div className={"section-heading" + (light ? " section-heading-light" : "")}>
      <Eyebrow light={light}>{kicker}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function StudioVisual() {
  return (
    <div className="hero-visual hero-visual-v2" aria-label="Composição abstrata de arquitetura digital em camadas, com conexões e fluxos tecnológicos">
      <div className="architecture-glow" />
      <div className="architecture-grid" />
      <svg className="architecture-art" viewBox="0 0 680 640" role="img" aria-label="Camadas estruturais conectadas por circuitos, representando soluções digitais">
        <defs>
          <linearGradient id="arch-back" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a8becd" />
            <stop offset="100%" stopColor="#526f83" />
          </linearGradient>
          <linearGradient id="arch-mid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#354e61" />
            <stop offset="100%" stopColor="#152530" />
          </linearGradient>
          <linearGradient id="arch-front" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b4556" />
            <stop offset="58%" stopColor="#1b2e3b" />
            <stop offset="100%" stopColor="#101e28" />
          </linearGradient>
          <linearGradient id="arch-accent" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6c95aa" stopOpacity="0" />
            <stop offset="70%" stopColor="#bbdeed" stopOpacity=".9" />
            <stop offset="100%" stopColor="#a8cce0" stopOpacity=".1" />
          </linearGradient>
          <clipPath id="architecture-face"><polygon points="135,172 470,234 421,567 86,505" /></clipPath>
        </defs>
        <circle cx="342" cy="310" r="248" stroke="#9cbbc9" strokeOpacity=".26" strokeWidth=".8" strokeDasharray="2 9" fill="none" />
        <circle cx="342" cy="310" r="203" stroke="#9cbbc9" strokeOpacity=".12" fill="none" />
        <path d="M83 167 H594 M83 500 H594 M194 60 V594 M530 60 V594" stroke="#7894a7" strokeOpacity=".14" strokeWidth="1"/>
        <g className="architecture-panel-group">
          <polygon points="255,94 588,158 539,491 205,429" fill="url(#arch-back)" opacity=".72"/>
          <path d="M255 94 L588 158 L539 491" stroke="#e2edf3" strokeOpacity=".45" strokeWidth="1" fill="none"/>
          <polygon points="195,135 529,198 480,530 146,469" fill="url(#arch-mid)" stroke="#aec4d4" strokeOpacity=".56" strokeWidth="1.4"/>
          <path d="M195 135 L529 198 M529 198 L480 530" fill="none" stroke="#c8e0ea" strokeOpacity=".5"/>
          <polygon points="135,172 470,234 421,567 86,505" fill="url(#arch-front)" stroke="#a9c3d4" strokeWidth="1.6"/>
          <g clipPath="url(#architecture-face)" opacity=".37">
            <path d="M102 260 L468 329 M91 329 L457 398 M80 398 L446 467 M69 467 L435 536" stroke="#8aafc6" strokeWidth=".7"/>
            <path d="M197 168 L148 567 M276 174 L227 574 M355 182 L306 581 M434 189 L385 589" stroke="#8aafc6" strokeWidth=".7"/>
          </g>
          <g clipPath="url(#architecture-face)" opacity=".94">
            <path d="M153 322 L263 343 L365 316 L405 325" stroke="url(#arch-accent)" strokeWidth="2" fill="none" />
            <path d="M263 343 L254 423 L348 442" stroke="#b8d4e5" strokeWidth="1.8" strokeDasharray="5 7" fill="none" opacity=".7"/>
            <path d="M365 316 L349 441" stroke="#b8d4e5" strokeWidth="1.8" strokeDasharray="5 7" fill="none" opacity=".55"/>
            <circle cx="168" cy="325" r="14" fill="#38586e" stroke="#c1dce9" strokeWidth="1.3" />
            <circle cx="263" cy="343" r="25" fill="#36566c" stroke="#bbd9e8" strokeWidth="1.2" />
            <circle cx="263" cy="343" r="11" fill="#97bdcf" />
            <circle cx="365" cy="316" r="14" fill="#38586e" stroke="#c1dce9" strokeWidth="1.3" />
            <circle cx="348" cy="442" r="14" fill="#38586e" stroke="#c1dce9" strokeWidth="1.3" />
            <path d="M161 325 H175 M365 309 V323 M341 442 H355" stroke="#d3e5ed" strokeWidth="1.1"/>
            <path d="M170 242 L433 290 M162 256 L284 278" stroke="#d4e5eb" strokeOpacity=".55" strokeWidth="1.2"/>
            <path d="M119 476 L406 529" stroke="#d4e5eb" strokeOpacity=".35" strokeWidth="1.2"/>
            <text x="159" y="236" fill="#d2e4ef" fontSize="11" letterSpacing="3" fontFamily="Arial,sans-serif">SYSTEM / ARCHITECTURE</text>
            <text x="128" y="479" fill="#aec9d9" fontSize="10" letterSpacing="3" fontFamily="Arial,sans-serif">DESIGN + ENGINEERING</text>
          </g>
          <path d="M514 209 L559 217 L550 281" stroke="#7f9fb2" strokeWidth="1.5" fill="none" />
          <path d="M468 234 L421 567" stroke="#b6d4e3" strokeOpacity=".35" strokeWidth="2"/>
        </g>
        <g stroke="#56778a" strokeWidth="1" fill="none" opacity=".55">
          <path d="M95 171 H61 V212" />
          <path d="M520 508 H583 V474" />
        </g>
        <g fill="#628197" fontFamily="Arial,sans-serif" fontSize="11" letterSpacing="2">
          <text x="30" y="233">01 / INPUT</text>
          <text x="525" y="465">03 / OUTPUT</text>
        </g>
        <circle cx="60" cy="212" r="3" fill="#557e94"/>
        <circle cx="584" cy="475" r="3" fill="#557e94"/>
      </svg>
      <div className="architecture-side-note"><span>LAB 8792</span><span>DIGITAL / SYSTEMS / 001</span></div>
      <div className="architecture-corner-note">IDEAS INTO SYSTEMS <ArrowUpRight size={14}/></div>
    </div>
  );
}

function AgeGraphic() {
  return (
    <div className="age-graphic" aria-hidden="true">
      <div className="age-grid" />
      <span className="age-ring ring-one" />
      <span className="age-ring ring-two" />
      <span className="age-ring ring-three" />
      <div className="age-face"><ShieldCheck size={50} strokeWidth={1.05} /></div>
      <div className="age-scan scan-top"/><div className="age-scan scan-bottom"/>
      <div className="age-graphic-note"><span className="age-indicator" />IDENTITY / ACCESS</div>
      <div className="age-graphic-corner">ID/01</div>
    </div>
  );
}

function WoodGraphic() {
  return (
    <div className="wood-graphic wood-graphic-v2" aria-label="Desenho técnico conceitual de um módulo de marcenaria com portas, prateleiras e cotas">
      <div className="wood-grid" />
      <svg className="cabinet-drawing" viewBox="0 0 510 310" role="img" aria-label="Armário em perspectiva isométrica, com divisões de painéis e dimensões indicativas">
        <defs>
          <linearGradient id="cabinet-front" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#608298" stopOpacity=".34"/>
            <stop offset="100%" stopColor="#1d3445" stopOpacity=".1"/>
          </linearGradient>
          <linearGradient id="cabinet-side" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3c5d70" stopOpacity=".68"/>
            <stop offset="100%" stopColor="#192c39" stopOpacity=".5"/>
          </linearGradient>
        </defs>
        <g className="cabinet-lines">
          <path d="M122 78 L324 78 L382 43 L180 43 Z" fill="#587b91" fillOpacity=".23" stroke="#c8dce7" strokeWidth="2"/>
          <path d="M324 78 L382 43 L382 228 L324 264 Z" fill="url(#cabinet-side)" stroke="#adcbdc" strokeWidth="1.9"/>
          <path d="M122 78 L324 78 L324 264 L122 264 Z" fill="url(#cabinet-front)" stroke="#c6dce9" strokeWidth="1.9"/>
          <path d="M131 91 H313 V249 H131 Z" stroke="#88aabe" strokeWidth="1.2" fill="none"/>
          <path d="M218 91 V249" stroke="#b7d3e1" strokeWidth="2"/>
          <path d="M227 99 H304 V239 H227 Z" fill="#1e3546" fillOpacity=".42" stroke="#93b5c8" strokeWidth="1.25"/>
          <path d="M227 166 H304" stroke="#c0d9e6" strokeWidth="2"/>
          <path d="M231 169 H300 L314 160" stroke="#7898aa" strokeWidth="1.1"/>
          <path d="M140 101 H207 V154 H140 Z" stroke="#bbd5e3" strokeWidth="1.2" fill="#6e95ac" fillOpacity=".2"/>
          <path d="M140 162 H207 V239 H140 Z" stroke="#bbd5e3" strokeWidth="1.2" fill="#6e95ac" fillOpacity=".12"/>
          <path d="M168 131 H179 M168 194 H179" stroke="#e4f0f5" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M122 252 H324 M130 257 V264 M314 257 V264" stroke="#7f9dac" strokeWidth="1.2"/>
          <path d="M122 78 L180 43 M324 78 L382 43" stroke="#edf6fa" strokeOpacity=".65" strokeWidth="1"/>
          <path d="M326 91 L374 63 M327 249 L373 221" stroke="#7e9daf" strokeWidth="1.1"/>
          <circle cx="141" cy="89" r="3" fill="#c3e8f2"/>
          <circle cx="304" cy="239" r="3" fill="#c3e8f2"/>
        </g>
        <g className="cabinet-dimensions" fill="none" stroke="#80afc6" strokeWidth="1">
          <path d="M122 280 V298 M324 280 V298 M122 290 H324 M122 286 L122 294 M324 286 L324 294"/>
          <path d="M105 78 H76 M105 264 H76 M89 78 V264 M85 78 H93 M85 264 H93"/>
          <path d="M338 78 L394 45 M343 87 L400 54 M399 54 L420 54"/>
          <path d="M216 92 L212 65 L199 65" strokeDasharray="3 4"/>
          <path d="M264 167 L273 145 L295 145" strokeDasharray="3 4"/>
        </g>
        <g fill="#d4e8f1" fontFamily="Arial,sans-serif" letterSpacing="1.1" fontSize="12">
          <text x="223" y="284" textAnchor="middle">1200 mm</text>
          <text transform="translate(77 178) rotate(-90)" textAnchor="middle">720 mm</text>
          <text x="402" y="48">550 mm</text>
        </g>
        <g fill="#94c3d9" fontFamily="Arial,sans-serif" fontSize="9.5" letterSpacing="1.7">
          <text x="149" y="60">PAINEL / 01</text>
          <text x="281" y="140">PRATELEIRA</text>
        </g>
        <g stroke="#789fb5" strokeWidth="1" fill="none" opacity=".46">
          <path d="M47 22 H88 M47 22 V63 M426 247 V285 H463"/>
          <circle cx="47" cy="22" r="3" fill="#83b7d3"/>
        </g>
      </svg>
      <div className="cabinet-header">MODULAR SYSTEM <span>3D / CONFIG</span></div>
      <div className="cabinet-footer"><span>ESTUDO PARAMÉTRICO ILUSTRATIVO</span><span>LAB / 002</span></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const escape = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="lab-site">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="lab-header">
        <div className="site-container header-inner">
          <a href="#inicio" className="header-brand" onClick={closeMenu}><Brand /></a>
          <nav className={"header-nav" + (menuOpen ? " nav-open" : "")} id="main-menu" aria-label="Navegação principal">
            {nav.map((item) => <a key={item.href} onClick={closeMenu} href={item.href}>{item.label}</a>)}
            <a className="mobile-contact" href="#contato" onClick={closeMenu}>Converse com a LAB <ArrowUpRight size={16}/></a>
          </nav>
          <a className="header-cta" href="#contato">Converse com a LAB <ArrowUpRight size={15} strokeWidth={1.7} /></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="main-menu">
            {menuOpen ? <X size={23}/> : <Menu size={23}/>}
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero-section" id="inicio">
          <div className="site-container hero-layout">
            <div className="hero-copy">
              <Eyebrow>TECNOLOGIA / CRIAÇÃO / DESENVOLVIMENTO</Eyebrow>
              <h1>Desafios reais.<br/><span>Soluções digitais.</span></h1>
              <p className="hero-description">Criamos softwares, automações e produtos digitais para transformar problemas de negócio em novas possibilidades. Tecnologia e capacidade criativa, do conceito à implementação.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solucoes">Explore nossas soluções <ArrowUpRight size={18}/></a>
                <a className="button button-link" href="#produtos">Conheça nossos produtos <ArrowRight size={17}/></a>
              </div>
              <div className="hero-meta">
                <span className="hero-meta-line" aria-hidden="true" />
                <span>DESENVOLVIMENTO PARA EMPRESAS</span>
                <span className="hero-meta-dot">/</span>
                <span>PRODUTOS PRÓPRIOS</span>
              </div>
            </div>
            <StudioVisual />
          </div>
          <a href="#essencia" className="hero-scroll" aria-label="Role para conhecer a LAB"><ArrowDown size={17}/><span>SCROLL TO EXPLORE</span></a>
        </section>

        <div className="expertise-band" aria-label="Áreas de atuação">
          <div className="expertise-track">
            {Array.from({length: 2}).map((_, k) => (
              <div className="expertise-items" key={k} aria-hidden={k === 1}>
                {["SOFTWARE SOB MEDIDA", "PLATAFORMAS DIGITAIS", "AUTOMAÇÃO & IA", "PRODUTOS PRÓPRIOS", "DESIGN & 3D"].map((item) => <span key={item}><i />{item}</span>)}
              </div>
            ))}
          </div>
        </div>

        <section className="intro-section section-space" id="essencia">
          <div className="site-container intro-layout">
            <div>
              <Eyebrow>O QUE MOVE A LAB</Eyebrow>
              <h2>Não entregamos apenas código.<br/><span>Construímos possibilidades.</span></h2>
            </div>
            <div className="intro-right">
              <p>Todo desafio tem um contexto. Nosso trabalho começa entendendo o que precisa mudar — e só então escolhendo a tecnologia, o design e os recursos certos para isso.</p>
              <a className="text-cta" href="#sobre">Conheça a LAB <ArrowUpRight size={17}/></a>
            </div>
          </div>
          <div className="site-container principles">
            <div><span>01 /</span><strong>Visão de negócio</strong><p>Partimos do problema real, não de uma ferramenta da moda.</p></div>
            <div><span>02 /</span><strong>Execução integrada</strong><p>Conectamos desenvolvimento, experiência e comunicação.</p></div>
            <div><span>03 /</span><strong>Olhar de produto</strong><p>Criamos soluções que podem evoluir junto com a operação.</p></div>
          </div>
        </section>

        <section className="solutions-section section-space" id="solucoes">
          <div className="site-container">
            <div className="solutions-top">
              <SectionHead kicker="O QUE FAZEMOS" title={<>Tecnologia que faz<br/>sentido para o seu negócio.</>} description="Quatro competências que se conectam para transformar necessidades em entregas concretas."/>
              <span className="section-index">01 — SOLUÇÕES</span>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className={"service-card " + service.className} key={service.index}>
                  <div className="service-card-head"><span className="service-no">{service.index} / 04</span><span className="service-icon">{service.icon}</span></div>
                  <div className="service-card-body">
                    <span className="service-category">{service.category}</span>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-fit"><span>PARA QUEM</span><p>{service.audience}</p></div>
                  <div className="service-deliveries">{service.deliveries.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="service-card-link" href={talkLink(service.topic)} target="_blank" rel="noopener noreferrer" aria-label={"Conversar sobre " + service.name}>Conversar sobre essa solução <ArrowUpRight size={17}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section section-space" id="produtos">
          <div className="products-topography" aria-hidden="true" />
          <div className="site-container">
            <div className="products-head">
              <SectionHead light kicker="TECNOLOGIA PROPRIETÁRIA" title={<>Criamos para empresas.<br/><span>Também construímos o futuro.</span></>} description="Além dos projetos sob medida, desenvolvemos produtos próprios para desafios específicos de mercado."/>
              <div className="products-aside">IDEIAS QUE SE TORNAM<br/>PRODUTOS REAIS <MoveUpRight size={18}/></div>
            </div>
            <div className="products-grid">
              <article className="product-card product-idadeid">
                <div className="product-graphic"><AgeGraphic /></div>
                <div className="product-details">
                  <div className="product-brand-row"><span className="product-type">01 / IDENTIDADE DIGITAL</span><span className="product-label">PRODUTO LAB 8792</span></div>
                  <h3>IdadeID<span>.</span></h3>
                  <p>Tecnologia de verificação de idade e identidade para operações digitais, com foco em segurança, privacidade e integração.</p>
                  <a href="https://idadeid.com" target="_blank" rel="noopener noreferrer" className="product-link">Conhecer IdadeID <ArrowUpRight size={18}/></a>
                </div>
              </article>
              <article className="product-card product-marceneiro">
                <div className="product-graphic"><WoodGraphic /></div>
                <div className="product-details">
                  <div className="product-brand-row"><span className="product-type">02 / TECNOLOGIA INDUSTRIAL</span><span className="product-label">EM DESENVOLVIMENTO</span></div>
                  <h3>MarceneiroPro<span>.</span></h3>
                  <p>Uma plataforma para conectar fabricantes e projetistas, reunindo configuração de produtos, visualização 3D e processos comerciais.</p>
                  <a href={talkLink("o projeto MarceneiroPro")} target="_blank" rel="noopener noreferrer" className="product-link">Conversar sobre o projeto <ArrowUpRight size={18}/></a>
                </div>
              </article>
            </div>
            <p className="products-note"><Sparkles size={16} strokeWidth={1.5}/> Cada produto possui uma proposta própria. A LAB 8792 é a empresa por trás de seu desenvolvimento.</p>
          </div>
        </section>

        <section className="sectors-section section-space" id="atuacao">
          <div className="site-container sectors-layout">
            <div className="sectors-side">
              <Eyebrow>ONDE ATUAMOS</Eyebrow>
              <h2>Conhecemos o valor de um processo que funciona.</h2>
              <p>Nos aproximamos da operação para entender o que trava, o que se repete e o que pode ser melhor.</p>
              <a href="#contato" className="text-cta">Conte seu desafio <ArrowUpRight size={17}/></a>
            </div>
            <div className="sectors-list">
              {sectors.map((sector) => (
                <div key={sector.n} className="sector-item">
                  <span className="sector-number">{sector.n}</span>
                  <div className="sector-content"><span className="sector-icon">{sector.icon}</span><h3>{sector.name}</h3><p>{sector.text}</p></div>
                  <ChevronRight className="sector-arrow" size={20} strokeWidth={1.5}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="creative-section" id="criativo">
          <div className="site-container creative-layout">
            <div className="creative-display" aria-label="Estudo gráfico de superfícies, materiais e planos sobrepostos">
              <div className="creative-display-grid"/>
              <span className="creative-word">FORM<br/><em>&</em> FUNCTION</span>
              <div className="creative-composition" aria-hidden="true">
                <svg viewBox="0 0 650 520" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="surface-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d4e5ef"/><stop offset="45%" stopColor="#94b2c5"/><stop offset="100%" stopColor="#516f83"/></linearGradient>
                    <linearGradient id="surface-b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#8daabd"/><stop offset="60%" stopColor="#536d80"/><stop offset="100%" stopColor="#263f50"/></linearGradient>
                    <linearGradient id="surface-c" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#edf4f8"/><stop offset="55%" stopColor="#b9cddb"/><stop offset="100%" stopColor="#748fa1"/></linearGradient>
                    <filter id="surface-shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="13" dy="17" stdDeviation="16" floodColor="#0c2334" floodOpacity=".27"/></filter>
                  </defs>
                  <g filter="url(#surface-shadow)">
                    <path d="M170 206 L458 113 Q475 109 487 120 L596 212 L292 314 Z" fill="url(#surface-b)" stroke="#bdd3df" strokeOpacity=".38" strokeWidth="1.5"/>
                    <path d="M292 314 L596 212 L596 225 L292 327 Z" fill="#203d51"/>
                    <path d="M113 296 L410 195 Q427 192 441 204 L546 291 L242 393 Z" fill="url(#surface-a)" stroke="#d7e7ef" strokeWidth="1.4"/>
                    <path d="M242 393 L546 291 L546 305 L242 407 Z" fill="#43667b"/>
                    <path d="M66 382 L367 278 Q381 273 397 285 L505 374 L198 476 Z" fill="url(#surface-c)" stroke="#eff6fa" strokeWidth="1.5"/>
                    <path d="M198 476 L505 374 L505 388 L198 490 Z" fill="#6f8fa4"/>
                  </g>
                  <g fill="none" stroke="#e4f0f5" strokeOpacity=".56" strokeWidth="1">
                    <path d="M220 254 L474 171"/>
                    <path d="M157 345 L435 253"/>
                    <path d="M107 418 L387 326"/>
                    <path d="M292 314 L292 339" strokeDasharray="3 5"/>
                    <path d="M242 393 L242 424" strokeDasharray="3 5"/>
                  </g>
                  <g fill="#d3e5ef" fontFamily="Arial,sans-serif" fontSize="11" letterSpacing="2">
                    <text x="386" y="88">SURFACE STUDIES</text>
                    <text x="101" y="498">01 / MATERIAL + DEPTH</text>
                  </g>
                  <path d="M362 88 H368 V106" stroke="#bdd3df" strokeWidth="1" fill="none"/>
                  <circle cx="368" cy="106" r="3" fill="#a7c6da"/>
                </svg>
              </div>
              <div className="creative-caption">DIREÇÃO VISUAL / LAB 8792 — ESTUDO GRÁFICO</div>
            </div>
            <div className="creative-copy">
              <Eyebrow>DESIGN É PARTE DO NOSSO DNA</Eyebrow>
              <h2>Criatividade não é um extra.<br/><span>É uma vantagem.</span></h2>
              <p>O mesmo olhar que desenha uma interface cria a visualização de um produto, estrutura uma apresentação ou dá vida a uma animação. Design, 3D e motion seguem como parte essencial do que fazemos.</p>
              <div className="creative-tags"><span>DESIGN GRÁFICO</span><span>RENDERIZAÇÃO 3D</span><span>ANIMAÇÃO</span><span>MOTION DESIGN</span><span>COMUNICAÇÃO DE PRODUTO</span></div>
              <a className="text-cta" href={talkLink("um projeto criativo de design ou 3D")} target="_blank" rel="noopener noreferrer">Falar sobre um projeto criativo <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="method-section section-space" id="metodo">
          <div className="site-container">
            <SectionHead kicker="NOSSO PROCESSO" title={<>Boas soluções começam<br/>com boas perguntas.</>} description="Trabalhamos por etapas claras, com escopo definido e decisões orientadas ao problema."/>
            <div className="method-grid">
              {steps.map((step) => <div className="method-step" key={step.n}><span className="method-no">{step.n}</span><span className="method-rule"/><h3>{step.title}</h3><p>{step.text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="about-section section-space" id="sobre">
          <div className="site-container about-layout">
            <div className="about-side"><Eyebrow light>SOBRE A LAB</Eyebrow><div className="about-coordinate">BENTO GONÇALVES — RS<br/>ATUAÇÃO REMOTA / SEM FRONTEIRAS</div></div>
            <div className="about-main">
              <h2>Uma estrutura enxuta.<br/>Uma visão <span>sem limites de formato.</span></h2>
              <p>A LAB 8792 é uma empresa de tecnologia e criação que desenvolve soluções digitais, produtos próprios e projetos visuais. Trabalhamos de forma colaborativa, reunindo as competências certas para cada desafio.</p>
              <div className="about-bottom"><span><Check size={16}/> Desenvolvimento e produto</span><span><Check size={16}/> Tecnologia e design</span><span><Check size={16}/> Colaboração e execução</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-space" id="contato">
          <div className="site-container contact-layout">
            <div className="contact-main">
              <Eyebrow>VAMOS CONVERSAR?</Eyebrow>
              <h2>Seu próximo projeto<br/>pode começar <span>aqui.</span></h2>
              <p>Conte o que sua empresa precisa resolver. Vamos entender o desafio e avaliar como podemos contribuir.</p>
              <div className="contact-actions">
                <a className="button button-primary" href={talkLink("um projeto com a LAB 8792")} target="_blank" rel="noopener noreferrer">Converse com um especialista <ArrowUpRight size={19}/></a>
                <a className="contact-mail" href="mailto:contato@lab8792.com.br"><Mail size={17}/> contato@lab8792.com.br</a>
              </div>
            </div>
            <div className="contact-deco"><span>LET'S<br/>BUILD<br/>WHAT'S<br/>NEXT<span className="deco-dot">.</span></span><div className="contact-deco-index">LAB 8792 / DESDE A IDEIA ATÉ A SOLUÇÃO</div></div>
          </div>
        </section>
      </main>

      <footer className="lab-footer">
        <div className="site-container">
          <div className="footer-top">
            <div className="footer-identity"><a href="#inicio"><Brand inverted/></a><p>Tecnologia, produtos digitais<br/>e capacidade criativa.</p></div>
            <div className="footer-column"><span>NAVEGAÇÃO</span><a href="#solucoes">Soluções</a><a href="#produtos">Produtos</a><a href="#atuacao">Atuação</a><a href="#sobre">Sobre a LAB</a></div>
            <div className="footer-column"><span>CONTATO</span><a href="mailto:contato@lab8792.com.br">contato@lab8792.com.br</a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href="https://www.instagram.com/lab_8792/" target="_blank" rel="noopener noreferrer">Instagram <Instagram size={15}/></a></div>
            <div className="footer-location"><span>BASE</span><strong>Bento Gonçalves<br/>Rio Grande do Sul, Brasil</strong><small>Colaboração sem fronteiras.</small></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} LAB 8792. Todos os direitos reservados.</span><div className="footer-legal"><a href={import.meta.env.BASE_URL + "privacidade.html"}>Política de privacidade</a><span>TECNOLOGIA + CRIAÇÃO <ArrowUpRight size={14}/></span></div></div>
        </div>
      </footer>
    </div>
  );
}
