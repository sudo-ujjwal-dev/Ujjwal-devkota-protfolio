import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative mt-10 border-t border-white/10 pb-10 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        <button
          onClick={toTop}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Back to top"
        >
          <ArrowUp size={14} /> Back to top
        </button>

        <div className="font-display text-2xl font-bold gradient-text">Ujjwal Devkota</div>
        <p className="max-w-md text-sm text-muted-foreground">
          Full-stack developer, student, and lifelong tinkerer. Thanks for stopping by.
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ujjwal@example.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>

        <div className="text-xs text-muted-foreground">
          © {year} Ujjwal Devkota · Crafted with React, Tailwind & Framer Motion
        </div>
      </div>
    </footer>
  );
}
