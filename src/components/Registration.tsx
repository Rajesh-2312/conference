import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { registrationCards, conference } from "../data/conference";

export default function Registration() {
  return (
    <section
      id="registration"
      className="border-y border-line bg-bg-soft py-20 sm:py-22"
    >
      <div className="container-x">
        <SectionHead eyebrow="Registration" title="Attend & present" />

        <div className="grid gap-6 md:grid-cols-3">
          {registrationCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article
                className={`card h-full rounded-[24px] p-7 transition hover:-translate-y-1 hover:border-line-strong ${
                  c.pending ? "border-dashed" : ""
                }`}
              >
                {c.pending && (
                  <span className="mb-3 inline-block rounded-full border border-gold/30 bg-gold/[0.12] px-2.5 py-1 text-[0.78rem] font-bold text-gold">
                    Update soon
                  </span>
                )}
                <h3 className="mb-2 font-display text-[1.1rem]">{c.title}</h3>
                <p className="text-[0.93rem] text-muted">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-muted">
            Questions about registration? Email{" "}
            <a
              href={`mailto:${conference.submissionEmail}`}
              className="font-semibold text-[#9db4ff] hover:text-white"
            >
              {conference.submissionEmail}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
