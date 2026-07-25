import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Facebook, Send, Check } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have an idea, a role, or just want to say hi? My inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="glass flex flex-col justify-between rounded-3xl p-8"
        >
          <div>
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I usually reply within a day. For quick questions, email works best.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                { icon: Mail, label: "ujjwal@example.com", href: "mailto:ujjwal@example.com" },
                { icon: Github, label: "github.com/sudo-ujjwal-dev", href: "https://github.com/sudo-ujjwal-dev" },
                { icon: Facebook, label: "facebook.com/ujjwal.devkota.1804", href: "https://www.facebook.com/ujjwal.devkota.1804" },
                { icon: Instagram, label: "instagram.com/ujjwaldevkota01", href: "https://www.instagram.com/ujjwaldevkota01/" },
              ].map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/25"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-primary)] text-white">
                      <it.icon size={16} />
                    </div>
                    <span className="text-sm text-foreground/90 group-hover:text-foreground">
                      {it.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-muted-foreground">Response time</div>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Usually within 24 hours
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="glass rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" id="name" placeholder="Jane Doe" />
            <Field label="Email" id="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Subject" id="subject" placeholder="Let's work together" />
          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell me a little about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[var(--brand-purple)] focus:bg-white/10"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-70"
            disabled={sent}
          >
            {sent ? (
              <>
                <Check size={16} /> Sent!
              </>
            ) : (
              <>
                <Send size={16} /> Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label, id, type = "text", placeholder,
}: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[var(--brand-purple)] focus:bg-white/10"
      />
    </div>
  );
}
