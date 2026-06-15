import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { tracks } from "../data/conference";

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 sm:py-22">
      <div className="container-x">
        <SectionHead eyebrow="Research Tracks" title="Three areas of focus" />

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <article className="group card relative h-full overflow-hidden rounded-[24px] p-8 transition duration-300 hover:-translate-y-1.5 hover:border-line-strong hover:shadow-soft">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-grad transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-line bg-surface-2">
                  <Icon name={t.icon} size={26} className="text-[#bcd0ff]" />
                </div>
                <h3 className="mb-4 min-h-[2.6em] font-display text-[1.18rem] leading-tight">
                  {t.title}
                </h3>
                <ul className="grid gap-2">
                  {t.topics.map((topic) => (
                    <li
                      key={topic}
                      className="relative pl-4 text-[0.9rem] text-muted before:absolute before:left-0 before:top-[0.6em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-brand"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
