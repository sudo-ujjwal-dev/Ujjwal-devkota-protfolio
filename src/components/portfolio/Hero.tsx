import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import profileImg from "@/assets/profile.png";
import { TYPING_ROLES } from "./data";

function Typing() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = TYPING_ROLES[i];
    const timeout = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), 1400);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => (v + 1) % TYPING_ROLES.length);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-[3px] animate-pulse bg-[var(--brand-purple)]" />
    </span>
  );
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-16"
    >
      {/* Animated background blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="animate-blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--brand-blue)]/30 blur-3xl" />
        <div
          className="animate-blob absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-purple)]/30 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[var(--brand-blue)]/20 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles size={12} className="text-[var(--brand-purple)]" />
            Available for freelance & collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="gradient-text">Ujjwal Devkota</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            <Typing />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A student and full-stack developer who loves crafting fast, elegant
            web experiences. I build with React, Node.js and Express — and I'm
            obsessed with clean code, great UI, and open source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Mail size={16} /> Contact Me
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-white/25"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ujjwal@example.com"
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[var(--gradient-primary)] opacity-30 blur-2xl" />
          <div className="gradient-border relative overflow-hidden rounded-[2rem] p-1">
            <div className="glass-strong overflow-hidden rounded-[calc(2rem-4px)]">
              <img
                src={profileImg}
                alt="Portrait of Ujjwal Devkota"
                width={768}
                height={768}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 shadow-[var(--shadow-card)]"
          >
            <div className="text-xs text-muted-foreground">Currently</div>
            <div className="text-sm font-semibold">Building side projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-[var(--shadow-card)]"
          >
            <div className="text-xs text-muted-foreground">Role</div>
            <div className="text-sm font-semibold gradient-text">
              A full-stack developer
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
