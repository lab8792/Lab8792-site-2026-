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
    <div className="hero-visual" aria-label="Ilustração abstrata de interface e conexões digitais">
      <div className="hero-visual-glow" />
      <div className="hero-wire hero-wire-a" />
      <div className="hero-wire hero-wire-b" />
      <div className="interface-frame">
        <div className="interface-top">
          <span className="interface-top-logo">LAB / DIGITAL SYSTEMS</span>
          <span className="interface-top-dots"><b /><b /><b /></span>
        </div>
        <div className="interface-main">
          <div className="interface-side">
            <span className="sidebar-square active"><Layers3 size={16} /></span>
            <span className="sidebar-square"><Workflow size={16} /></span>
            <span className="sidebar-square"><Braces size={16} /></span>
            <span className="sidebar-square"><Box size={16} /></span>
            <span className="interface-side-bottom">8792</span>
          </div>
          <div className="interface-content">
            <div className="interface-heading">
              <div><span>AMBIENTE DE TRABALHO</span><strong>Projetos conectados</strong></div>
              <span className="interface-live"><i /> SISTEMA / ATIVO</span>
            </div>
            <div className="interface-statline">
              <div><small>ESTRUTURA</small><span>PLATAFORMA</span></div>
              <div><small>PROCESSOS</small><span>AUTOMAÇÃO</span></div>
              <div><small>EXPERIÊNCIA</small><span>DESIGN</span></div>
            </div>
            <div className="interface-map">
              <div className="map-guides" />
              <div className="map-core"><span className="core-inner"><Box size={20}/></span></div>
              <div className="map-node node-a"><span>01</span> ENTRADA</div>
              <div className="map-node node-b"><span>02</span> PROCESSO</div>
              <div className="map-node node-c"><span>03</span> ENTREGA</div>
              <svg className="map-connections" viewBox="0 0 450 230" aria-hidden="true" preserveAspectRatio="none">
                <path d="M 225 110 L 100 52" />
                <path d="M 225 110 L 354 54" />
                <path d="M 225 110 L 352 180" />
                <circle cx="225" cy="110" r="5" />
                <circle cx="100" cy="52" r="4" />
                <circle cx="354" cy="54" r="4" />
                <circle cx="352" cy="180" r="4" />
              </svg>
              <div className="map-label">FLUXO INTEGRADO / 001</div>
            </div>
            <div className="interface-bottom"><span><Check size={12} /> ARQUITETURA DIGITAL</span><span>LAB 8792 — CONCEITO VISUAL</span></div>
          </div>
        </div>
      </div>
      <div className="floating-tile tile-top"><Zap size={16}/><span>Soluções conectadas</span></div>
      <div className="floating-tile tile-bottom"><span className="tile-icon"><Check size={14}/></span><span>Da ideia à execução</span></div>
      <span className="hero-visual-index">001 — LABORATÓRIO DIGITAL</span>
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
    <div className="wood-graphic" aria-hidden="true">
      <div className="wood-grid" />
      <div className="wood-outline">
        <svg viewBox="0 0 440 240" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
          <path d="M90 70 L245 28 L353 85 L199 130 Z"/>
          <path d="M90 70 V190 L199 226 V130"/>
          <path d="M353 85 V191 L199 226"/>
          <path d="M135 85 V181 L199 202"/>
          <path d="M199 130 L199 226"/>
          <path d="M245 28 V141"/>
          <path d="M90 134 L199 170 L353 126"/>
          <path d="M135 85 L289 45"/>
          <path d="M90 190 L245 148 L353 191"/>
          <circle cx="290" cy="74" r="2.5" fill="currentColor"/>
          <circle cx="305" cy="82" r="2.5" fill="currentColor"/>
        </svg>
      </div>
      <div className="wood-measure measure-one">1200 mm</div>
      <div className="wood-measure measure-two">CONFIG / 3D</div>
      <div className="wood-graphic-note">PRODUCT ENGINE / 002</div>
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
            <div className="creative-display" aria-label="Composição gráfica conceitual de design e tridimensionalidade">
              <div className="creative-display-grid"/>
              <span className="creative-word">FORM<br/><em>&</em> FUNCTION</span>
              <div className="creative-object">
                <div className="creative-shape creative-shape-one"/><div className="creative-shape creative-shape-two"/><div className="creative-shape creative-shape-three"/>
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
