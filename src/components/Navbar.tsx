import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, conference, logos } from "../data/conference";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";

const Brand = () => (
  <a href="#home" className="flex items-center gap-3">
    <img
      src={logos.seal}
      alt="Malineni Lakshmaiah Women's Engineering College (MLEW) logo"
      className="h-11 w-11 shrink-0 rounded-full bg-white object-contain p-0.5"
    />
    <span className="rounded-xl bg-brand-grad px-2.5 py-2 font-display text-base font-extrabold leading-none tracking-tight text-white">
      I<span className="opacity-70">·</span>26
    </span>
    <span className="flex flex-col leading-tight">
      <strong className="font-display text-[1.05rem] tracking-tight">
        ICICSCET 2026
      </strong>
      <small className="hidden max-w-[230px] text-[0.66rem] text-muted-2 sm:block">
        Intelligent Computing, Secure Communications &amp; Emerging Technologies
      </small>
    </span>
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  return (
    <>
      {/* Host college banner strip */}
      <div className="border-b border-line bg-white">
        <div className="container-x flex justify-center py-2.5">
          <img
            src={logos.banner}
            alt="Malineni Lakshmaiah Women's Engineering College (Autonomous)"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>
      </div>

      {/* Announcement bar */}
      <div className="border-b border-line bg-gradient-to-r from-brand/15 to-brand-2/15 text-[0.85rem]">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center">
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-[0.72rem] font-bold tracking-wide text-[#06281f]">
            Hybrid Mode
          </span>
          <span className="text-muted">
            Paper submission deadline —{" "}
            <strong className="text-ink">{conference.submissionDeadline}</strong>
          </span>
          <a
            href={`mailto:${conference.submissionEmail}`}
            className="font-semibold text-[#9db4ff] hover:text-white"
          >
            Submit your paper →
          </a>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-bg/90"
            : "border-b border-transparent bg-bg/70"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Brand />

          {/* Desktop menu */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative rounded-lg px-2.5 py-2 text-[0.88rem] font-medium transition-colors ${
                  active === l.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-2.5 bottom-0.5 h-0.5 rounded bg-brand-grad" />
                )}
              </a>
            ))}
            <a
              href={`mailto:${conference.submissionEmail}`}
              className="btn btn-primary ml-2 px-4 py-2.5 text-[0.85rem]"
            >
              Submit Paper
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`overflow-hidden border-t border-line bg-surface transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-base transition-colors ${
                  active === l.id
                    ? "bg-surface-2 text-ink"
                    : "text-muted hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${conference.submissionEmail}`}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              Submit Paper
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
