import { motion } from "framer-motion";
import {
  Code, Palette, FileCode2, Atom, Server, Cable, Database, GitBranch, Github, Network,
} from "lucide-react";
import { Section } from "./Section";
import { SKILLS } from "./data";

const ICONS = {
  html: FileCode2,
  css: Palette,
  js: Code,
  react: Atom,
  node: Server,
  express: Cable,
  mysql: Database,
  git: GitBranch,
  github: Github,
  api: Network,
} as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My technical toolbox"
      subtitle="Tools I reach for daily to bring ideas to life."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-foreground transition-colors group-hover:text-white group-hover:bg-[var(--gradient-primary)]">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="truncate font-semibold">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.level}%</div>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                      className="h-full rounded-full bg-[var(--gradient-primary)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
