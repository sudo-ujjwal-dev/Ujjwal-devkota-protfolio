import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(l.id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass-strong flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "shadow-[var(--shadow-card)]" : ""
          }`}
          aria-label="Primary"
        >
          <button
            onClick={() => go("home")}
            className="flex items-center gap-2 font-display text-lg font-bold"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]">
              U
            </span>
            <span className="gradient-text">Ujjwal</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative ${active === l.id ? "text-foreground" : ""}`}
                  >
                    {l.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go("contact")}
            className="hidden rounded-lg bg-[var(--gradient-primary)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105 md:inline-flex"
          >
            Let's talk
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 overflow-hidden rounded-2xl p-2 md:hidden"
            >
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`block w-full rounded-lg px-4 py-3 text-left text-sm ${
                    active === l.id ? "bg-white/5 text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
