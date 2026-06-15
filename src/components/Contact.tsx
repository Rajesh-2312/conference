import { Phone, Mail, Globe } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { contacts, conference } from "../data/conference";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-22">
      <div className="container-x">
        <SectionHead eyebrow="Contact" title="Get in touch" />

        <div className="grid gap-6 md:grid-cols-3">
          {contacts.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.08}>
              <article className="card h-full rounded-[24px] p-8 transition hover:-translate-y-1 hover:border-brand">
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 font-display text-[0.74rem] font-semibold uppercase tracking-wider text-accent">
                  {c.tag}
                </span>
                <h3 className="mb-2 font-display text-[1.15rem]">{c.name}</h3>
                <p className="mb-5 text-[0.85rem] text-muted-2">{c.title}</p>
                <a
                  href={`tel:${c.phoneHref}`}
                  className="mb-2 flex items-center gap-2 text-[0.92rem] text-muted hover:text-[#9db4ff]"
                >
                  <Phone size={16} /> {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2 break-all text-[0.92rem] text-muted hover:text-[#9db4ff]"
                >
                  <Mail size={16} /> {c.email}
                </a>
              </article>
            </Reveal>
          ))}

          {/* Venue card spanning full width on its own row when needed */}
          <Reveal delay={0.24} className="md:col-span-3">
            <article className="rounded-[24px] border border-line bg-gradient-to-br from-brand/10 to-brand-2/[0.08] p-8">
              <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 font-display text-[0.74rem] font-semibold uppercase tracking-wider text-accent">
                Venue
              </span>
              <h3 className="mb-2 font-display text-[1.15rem]">
                {conference.host}
              </h3>
              <p className="mb-3 text-[0.85rem] text-muted-2">
                {conference.location}
              </p>
              <p className="flex items-center gap-2 text-[0.92rem] text-muted">
                <Globe size={16} /> Hybrid Mode — {conference.date}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
