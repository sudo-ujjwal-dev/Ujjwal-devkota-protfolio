import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[var(--brand-purple)]" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl font-bold sm:text-5xl">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="gradient-text">
                  {" "}
                  {w}
                </span>
              ) : (
                <span key={i}>{i === 0 ? "" : " "}{w}</span>
              ),
            )}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
