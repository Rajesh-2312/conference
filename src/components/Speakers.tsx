import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { speakers } from "../data/conference";

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="border-y border-line bg-bg-soft py-20 sm:py-22"
    >
      <div className="container-x">
        <SectionHead eyebrow="Keynote Speakers" title="Distinguished voices" />

        <div className="grid gap-6 md:grid-cols-3">
          {speakers.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="card h-full rounded-[24px] p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-soft">
                <div className="mx-auto mb-5 grid h-[86px] w-[86px] place-items-center rounded-full bg-brand-grad font-display text-[1.7rem] font-extrabold text-white shadow-[0_12px_30px_-12px_rgba(91,124,255,0.8)]">
                  {s.initials}
                </div>
                <h3 className="mb-2 font-display text-[1.12rem]">{s.name}</h3>
                <p className="mb-1.5 text-[0.88rem] font-semibold text-[#9db4ff]">
                  {s.role}
                </p>
                <p className="text-[0.85rem] text-muted-2">{s.org}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
