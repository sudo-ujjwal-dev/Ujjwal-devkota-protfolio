import { motion } from "framer-motion";
import { Code2, Shield, GitBranch, Rocket } from "lucide-react";
import { Section } from "./Section";

const INTERESTS = [
  { icon: Code2, label: "Web Development", desc: "React, Node.js, Express, MySQL" },
  { icon: Shield, label: "Cybersecurity", desc: "Web app security & best practices" },
  { icon: GitBranch, label: "Open Source", desc: "Contributing to the community" },
  { icon: Rocket, label: "Learning", desc: "Always shipping side projects" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building the web, one commit at a time"
      subtitle="A little bit about who I am and what drives me."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 shadow-[var(--shadow-card)]"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm <span className="font-semibold gradient-text">Ujjwal Devkota</span>, a passionate full-stack web developer from Nepal who enjoys building modern, responsive, and user-focused web applications. I work with React, Node.js, Express, and MySQL, and I'm constantly learning new technologies to improve my skills with AI. Beyond development, I have a growing interest in cybersecurity, problem-solving, and creating software that makes a real impact.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My goal is simple: keep learning, keep building, and contribute to open source
            projects that make the web better for everyone. I love the intersection of
            design and engineering — the moment a small detail makes a product feel
            magical.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Outside the terminal, you'll find me exploring cybersecurity write-ups,
            reading engineering blogs, or shipping tiny weekend experiments.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { k: "3+", v: "Years coding" },
              { k: "20+", v: "Projects shipped" },
              { k: "10+", v: "Technologies" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold gradient-text">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {INTERESTS.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]">
                <it.icon size={18} />
              </div>
              <div className="font-semibold">{it.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
