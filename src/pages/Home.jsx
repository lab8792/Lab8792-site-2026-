import React from "react";
import Navbar from "../components/lab/Navbar";
import Hero from "../components/lab/Hero";
import Manifesto from "../components/lab/Manifesto";
import Problem from "../components/lab/Problem";
import Solution from "../components/lab/Solution";
import Services from "../components/lab/Services";
import Portfolio from "../components/lab/Portfolio";
import Process from "../components/lab/Process";
import ImpactStatement from "../components/lab/ImpactStatement";
import Contact from "../components/lab/Contact";
import Footer from "../components/lab/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/20 selection:text-foreground">
      <Navbar />
      <Hero />
      <Manifesto />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <Process />
      <ImpactStatement />
      <Contact />
      <Footer />
    </div>
  );
}