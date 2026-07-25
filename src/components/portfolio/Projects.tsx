import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "./data";

export function Projects() {
  const showDemoUnavailable = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.alert("Demo unavailable right now, please try later.");
  };

  const handleGithubClick = (
    event: MouseEvent<HTMLAnchorElement>,
    githubUrl: string | null | undefined,
  ) => {
    if (!githubUrl) {
      event.preventDefault();
      window.alert("Repo has been deleted or unable to open right now. Please try later.");
    }
  };

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A handful of things I've designed, built, and shipped."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            className="glass group relative flex flex-col overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={1024}
                height={640}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href={p.github ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => handleGithubClick(event, p.github)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium transition-colors hover:border-white/25 hover:bg-white/5"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href="#"
                  onClick={showDemoUnavailable}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--gradient-primary)] px-3 py-2 text-xs font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
