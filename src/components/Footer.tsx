import { MapPin, Mail } from "lucide-react";
import { navLinks, conference, logos } from "../data/conference";

export default function Footer() {
  const footerLinks = navLinks.filter(
    (l) => !["home", "schedule"].includes(l.id)
  );
  return (
    <footer className="border-t border-line bg-bg-soft pt-14">
      <div className="container-x grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="flex items-start gap-4">
          <img
            src={logos.seal}
            alt="MLEW logo"
            className="h-12 w-12 shrink-0 rounded-full bg-white object-contain p-0.5"
          />
          <span className="rounded-xl bg-brand-grad px-2.5 py-2 font-display text-base font-extrabold leading-none text-white">
            I<span className="opacity-70">·</span>26
          </span>
          <div>
            <strong className="font-display text-[1.1rem]">ICICSCET 2026</strong>
            <p className="mt-1 text-[0.85rem] text-muted-2">
              {conference.edition} {conference.fullName}
            </p>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-2.5 content-start">
          {footerLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[0.9rem] text-muted hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="space-y-2 text-[0.85rem] text-muted-2">
          <p className="flex items-center gap-2">
            <MapPin size={15} /> {conference.host}, {conference.location}
          </p>
          <p className="flex items-center gap-2 break-all">
            <Mail size={15} /> {conference.submissionEmail}
          </p>
          <p>In Association with — {conference.technicalSponsor}</p>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <div className="container-x flex flex-col items-center justify-between gap-1 sm:flex-row">
          <p className="text-[0.82rem] text-muted-2">
            © 2026 ICICSCET 2026 · {conference.host}.
          </p>
          <p className="text-[0.82rem] text-muted-2">
            {conference.mode} · {conference.date}
          </p>
        </div>
      </div>
    </footer>
  );
}
