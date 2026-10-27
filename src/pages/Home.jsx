import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Box, Check,
  ChevronRight, Factory, Globe2, Instagram, Monitor, Palette,
  Mail, Menu, MoveUpRight,
  Sparkles, Workflow, X
} from "lucide-react";

const WHATSAPP = "https://wa.me/5554997028792";
const talkLink = (topic) => WHATSAPP + "?text=" + encodeURIComponent(
  "Olá, equipe LAB 8792! Quero conversar sobre " + topic + "."
);

const nav = [
  { label: "Serviços", href: "#solucoes" },
  { label: "Design & 3D", href: "#criativo" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
];

const services = [
  {
    index: "01", icon: <Palette size={26} strokeWidth={1.5} />,
    category: "DESIGN & COMUNICAÇÃO",
    name: "Design & identidade",
    description: "Damos forma a marcas, campanhas e materiais que precisam comunicar com clareza, consistência e personalidade — no digital e no impresso.",
    audience: "Marcas, indústrias e equipes de marketing",
    deliveries: ["Identidade visual", "Campanhas", "Materiais comerciais"],
    topic: "design, identidade visual ou criação de campanhas",
    className: "service-card-one"
  },
  {
    index: "02", icon: <Box size={26} strokeWidth={1.5} />,
    category: "VISUALIZAÇÃO & MOVIMENTO",
    name: "3D, animação & motion",
    description: "Traduzimos produtos e conceitos em imagens, renderizações, vídeos e animações que explicam, valorizam e aproximam.",
    audience: "Fabricantes, lançamentos de produto e comunicação técnica",
    deliveries: ["Renderização 3D", "Animação de produto", "Motion design"],
    topic: "modelagem 3D, renderização ou animação",
    className: "service-card-two"
  },
  {
    index: "03", icon: <Monitor size={26} strokeWidth={1.5} />,
    category: "EXPERIÊNCIAS DIGITAIS",
    name: "Sites & experiências web",
    description: "Projetamos experiências digitais com atenção ao visual, à navegação e aos objetivos do negócio — de sites institucionais a interfaces interativas.",
    audience: "Empresas que buscam presença digital e boas experiências",
    deliveries: ["Sites e landing pages", "UI/UX", "Experiências interativas"],
    topic: "um site ou experiência digital",
    className: "service-card-three"
  },
  {
    index: "04", icon: <Workflow size={26} strokeWidth={1.5} />,
    category: "SOLUÇÕES DIGITAIS",
    name: "Tecnologia & automação",
    description: "Quando um projeto precisa ir além da comunicação, conectamos tecnologia, processos e interfaces para criar ferramentas digitais sob medida.",
    audience: "Equipes com processos a simplificar ou integrar",
    deliveries: ["Ferramentas sob medida", "Automações", "Integrações"],
    topic: "uma solução digital ou automação",
    className: "service-card-four"
  }
];

const sectors = [
  {
    n: "01", icon: <Palette size={21} strokeWidth={1.6} />,
    name: "Marcas & comunicação",
    text: "Identidade, campanhas, materiais comerciais e experiências visuais que fortalecem a forma como a marca se apresenta."
  },
  {
    n: "02", icon: <Factory size={21} strokeWidth={1.6} />,
    name: "Indústria & fabricantes",
    text: "Renderizações, animações técnicas, catálogos, apresentações de produto e projetos digitais conectados à operação."
  },
  {
    n: "03", icon: <Globe2 size={21} strokeWidth={1.6} />,
    name: "Negócios & experiências digitais",
    text: "Sites, interfaces, plataformas e soluções sob medida para quem precisa criar ou melhorar experiências online."
  }
];

const steps = [
  { n: "01", title: "Conhecer", text: "Entendemos a marca, o público, os objetivos e o contexto do projeto." },
  { n: "02", title: "Conceber", text: "Exploramos direções criativas e definimos o caminho visual e técnico." },
  { n: "03", title: "Criar", text: "Transformamos o conceito em peças, imagens, experiências ou soluções funcionais." },
  { n: "04", title: "Entregar", text: "Refinamos, validamos e preparamos o projeto para sua aplicação real." }
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

function AgeGraphic() {
  return (
    <div className="age-graphic age-video-graphic" aria-label="Vídeo demonstrativo do IdadeID em reprodução automática e sem som">
      <video
        className="age-product-video"
        src={import.meta.env.BASE_URL + "videos/VideoIdadeID.mp4"}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        aria-label="Demonstração em vídeo da verificação de identidade IdadeID"
      />
      <div className="age-video-overlay" aria-hidden="true" />
      <div className="age-graphic-note"><span className="age-indicator" />IDENTITY / ACCESS</div>
      <div className="age-graphic-corner">ID/01</div>
    </div>
  );
}

function WoodGraphic() {
  return (
    <div className="wood-graphic wood-video-graphic" aria-label="Vídeo ilustrativo de produção e projeto de móveis do MarceneiroPro">
      <video
        className="wood-product-video"
        src={import.meta.env.BASE_URL + "videos/VideoMarceneiroPro.mp4"}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        aria-label="Demonstração visual de projeto de móveis, modelagem e usinagem"
      />
      <div className="wood-video-overlay" aria-hidden="true" />
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
              <Eyebrow>DESIGN / 3D / CRIAÇÃO / SOLUÇÕES DIGITAIS</Eyebrow>
              <h1>Design que transforma.<br/><span>Ideias que ganham vida.</span></h1>
              <p className="hero-description">Criamos identidades, campanhas, imagens e animações 3D, sites e experiências digitais que dão forma às ideias e valorizam o que cada empresa tem de único. Criatividade e tecnologia, do conceito à entrega.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solucoes">Conheça nossos serviços <ArrowUpRight size={18}/></a>
                <a className="button button-link" href="#produtos">Conheça nossos produtos <ArrowRight size={17}/></a>
              </div>
              <div className="hero-meta">
                <span className="hero-meta-line" aria-hidden="true" />
                <span>DESIGN, 3D & COMUNICAÇÃO</span>
                <span className="hero-meta-dot">/</span>
                <span>EXPERIÊNCIAS DIGITAIS</span>
              </div>
            </div>
          </div>
          <a href="#essencia" className="hero-scroll" aria-label="Role para conhecer a LAB"><ArrowDown size={17}/><span>SCROLL TO EXPLORE</span></a>
        </section>

        <div className="expertise-band" aria-label="Áreas de atuação">
          <div className="expertise-track">
            {Array.from({length: 2}).map((_, k) => (
              <div className="expertise-items" key={k} aria-hidden={k === 1}>
                {["DESIGN & IDENTIDADE", "3D & ANIMAÇÃO", "CAMPANHAS & COMUNICAÇÃO", "SITES & EXPERIÊNCIAS", "SOLUÇÕES DIGITAIS"].map((item) => <span key={item}><i />{item}</span>)}
              </div>
            ))}
          </div>
        </div>

        <section className="intro-section section-space" id="essencia">
          <div className="site-container intro-layout">
            <div>
              <Eyebrow>NOSSA ESSÊNCIA</Eyebrow>
              <h2>Design como ponto de partida.<br/><span>Ideias sem limite de formato.</span></h2>
            </div>
            <div className="intro-right">
              <p>Uma boa ideia precisa ser bem pensada, bem desenhada e bem executada. Unimos estratégia, criação e tecnologia para comunicar produtos, fortalecer marcas e desenvolver novas experiências.</p>
              <a className="text-cta" href="#sobre">Conheça a LAB <ArrowUpRight size={17}/></a>
            </div>
          </div>
          <div className="site-container principles">
            <div><span>01 /</span><strong>Olhar estratégico</strong><p>Entendemos a marca, o mercado e o objetivo antes de criar.</p></div>
            <div><span>02 /</span><strong>Expressão visual</strong><p>Traduzimos ideias em design, imagens, movimento e experiências.</p></div>
            <div><span>03 /</span><strong>Capacidade digital</strong><p>Levamos a criação além do visual quando o projeto pede tecnologia.</p></div>
          </div>
        </section>

        <section className="solutions-section section-space" id="solucoes">
          <div className="site-container">
            <div className="solutions-top">
              <SectionHead kicker="O QUE FAZEMOS" title={<>Criatividade para comunicar.<br/>Soluções para evoluir.</>} description="Design, 3D e comunicação lideram nosso trabalho. Experiências e soluções digitais ampliam o que podemos entregar."/>
              <span className="section-index">01 — SERVIÇOS</span>
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

        <section className="creative-section" id="criativo">
          <div className="site-container creative-layout">
            <div className="creative-display" aria-label="Painel tipográfico Form & Function">
              <div className="creative-display-grid"/>
              <span className="creative-word">FORM<br/><em>&</em> FUNCTION</span>
              <div className="creative-caption">DIREÇÃO VISUAL / LAB 8792 — ESTUDO GRÁFICO</div>
            </div>
            <div className="creative-copy">
              <Eyebrow>DESIGN ESTÁ NO CENTRO DO QUE FAZEMOS</Eyebrow>
              <h2>Uma boa ideia merece<br/><span>uma execução à altura.</span></h2>
              <p>Do conceito visual à peça final, criamos identidades, campanhas, apresentações, renderizações, animações e motion. A atenção ao detalhe acompanha cada formato e cada entrega.</p>
              <div className="creative-tags"><span>DESIGN GRÁFICO</span><span>RENDERIZAÇÃO 3D</span><span>ANIMAÇÃO</span><span>MOTION DESIGN</span><span>COMUNICAÇÃO DE PRODUTO</span></div>
              <a className="text-cta" href={talkLink("um projeto criativo de design ou 3D")} target="_blank" rel="noopener noreferrer">Falar sobre um projeto criativo <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>


        <section className="products-section section-space" id="produtos">
          <div className="products-topography" aria-hidden="true" />
          <div className="site-container">
            <div className="products-head">
              <SectionHead light kicker="PRODUTOS CRIADOS NA LAB" title={<>Da criação à inovação.<br/><span>Ideias que viram produtos.</span></>} description="Nossa capacidade criativa também ganha forma em produtos digitais próprios, desenvolvidos para necessidades reais."/>
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
                  <p>Uma plataforma que une projeto, visualização 3D e configuração de móveis para conectar fabricantes e projetistas.</p>
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
              <h2>Cada mercado tem uma história para contar.</h2>
              <p>Entendemos produtos, públicos e desafios para criar uma comunicação mais clara — e experiências digitais quando elas fazem sentido.</p>
              <a href="#contato" className="text-cta">Fale sobre seu projeto <ArrowUpRight size={17}/></a>
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

        <section className="method-section section-space" id="metodo">
          <div className="site-container">
            <SectionHead kicker="NOSSO PROCESSO" title={<>Do conceito à entrega.<br/>Com intenção em cada detalhe.</>} description="Cada projeto começa com escuta e direção criativa, evoluindo para uma execução alinhada ao objetivo."/>
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
              <p>A LAB 8792 é uma empresa de design, criação e soluções digitais. Desenvolvemos projetos de identidade, comunicação, 3D, animação e experiências web, além de criar nossos próprios produtos. Reunimos estratégia, sensibilidade visual e tecnologia conforme a necessidade de cada projeto.</p>
              <div className="about-bottom"><span><Check size={16}/> Design e comunicação</span><span><Check size={16}/> 3D e experiências digitais</span><span><Check size={16}/> Criação e execução</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-space" id="contato">
          <div className="site-container contact-layout">
            <div className="contact-main">
              <Eyebrow>VAMOS CONVERSAR?</Eyebrow>
              <h2>Seu próximo projeto<br/>pode começar <span>aqui.</span></h2>
              <p>Uma marca, um lançamento, uma campanha, uma animação ou uma experiência digital. Conte sua ideia e vamos encontrar a melhor forma de realizá-la.</p>
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
            <div className="footer-identity"><a href="#inicio"><Brand inverted/></a><p>Design, 3D e comunicação.<br/>Experiências e soluções digitais.</p></div>
            <div className="footer-column"><span>NAVEGAÇÃO</span><a href="#solucoes">Soluções</a><a href="#produtos">Produtos</a><a href="#atuacao">Atuação</a><a href="#sobre">Sobre a LAB</a></div>
            <div className="footer-column"><span>CONTATO</span><a href="mailto:contato@lab8792.com.br">contato@lab8792.com.br</a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href="https://www.instagram.com/lab_8792/" target="_blank" rel="noopener noreferrer">Instagram <Instagram size={15}/></a></div>
            <div className="footer-location"><span>BASE</span><strong>Bento Gonçalves<br/>Rio Grande do Sul, Brasil</strong><small>Colaboração sem fronteiras.</small></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} LAB 8792. Todos os direitos reservados.</span><div className="footer-legal"><a href={import.meta.env.BASE_URL + "privacidade.html"}>Política de privacidade</a><span>DESIGN + CRIAÇÃO + DIGITAL <ArrowUpRight size={14}/></span></div></div>
        </div>
      </footer>
    </div>
  );
}
