import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjwal Devkota — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ujjwal Devkota — full-stack developer, student and tech enthusiast building modern web experiences with React, Node.js and Express.",
      },
      { property: "og:title", content: "Ujjwal Devkota — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Ujjwal Devkota — full-stack developer building modern, elegant web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="dark min-h-dvh text-foreground">
      <Loader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
