import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { EDUCATION } from "./data";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="My learning journey"
      subtitle="How I've grown as a developer over the years."
    >
      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-4 top-2 bottom-2 w-px sm:left-1/2 sm:-translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, transparent, oklch(1 0 0 / 0.15), transparent)" }}
        />
        <div className="space-y-10">
          {EDUCATION.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`relative grid grid-cols-[auto_1fr] items-start gap-4 sm:grid-cols-2 sm:gap-8 ${
                  left ? "" : "sm:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`hidden sm:block ${left ? "sm:text-right sm:pr-8" : "sm:pl-8"}`}
                >
                  <div className="text-xs uppercase tracking-widest text-[var(--brand-purple)]">
                    {e.year}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                </div>

                <div className="relative">
                  <div
                    className="absolute -left-[3px] top-2 h-3 w-3 rounded-full bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] sm:left-auto sm:right-auto sm:top-2"
                    style={left ? { left: "-1.9rem" } : { left: "-1.9rem" }}
                  />
                  <div className="glass rounded-2xl p-5">
                    <div className="mb-2 flex items-center gap-2 sm:hidden">
                      <GraduationCap size={16} className="text-[var(--brand-purple)]" />
                      <div className="text-xs uppercase tracking-widest text-[var(--brand-purple)]">
                        {e.year}
                      </div>
                    </div>
                    <h3 className="text-base font-semibold sm:hidden">{e.title}</h3>
                    <div className="mb-2 text-sm text-muted-foreground sm:hidden">{e.org}</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {e.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
