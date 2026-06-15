import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { partnerJournals, conference } from "../data/conference";

export default function Publication() {
  return (
    <section id="publication" className="py-20 sm:py-22">
      <div className="container-x">
        <SectionHead eyebrow="Publication" title="Where your work appears" />

        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card rounded-[24px] p-8">
              <h3 className="mb-4 font-display text-[1.2rem]">
                Review &amp; publication process
              </h3>
              <p className="mb-4 text-[0.95rem] text-muted">
                The conference requires original, unpublished research. All
                submissions undergo plagiarism screening with an acceptable limit
                of <strong className="text-ink">15%</strong> — articles exceeding
                this threshold face immediate rejection. Non-plagiarized
                submissions go to <strong className="text-ink">two reviewers</strong>;
                the convenor and programme committee make acceptance decisions
                based on reviewer feedback.
              </p>
              <p className="mb-4 text-[0.95rem] text-muted">
                Accepted and presented papers appear in{" "}
                <strong className="text-ink">Conference Proceedings</strong>, with
                select papers published in{" "}
                <strong className="text-ink">Scopus-indexed</strong> venues.
              </p>
              <div className="rounded-xl border border-brand/30 bg-brand/[0.08] px-4 py-4 text-[0.9rem] text-muted">
                <strong className="text-[#9db4ff]">Note:</strong> Authors have to
                pay the APC applicable as per the journal guidelines for journal
                publication.
              </div>
              <p className="mt-4 break-all text-[0.82rem] text-muted-2">
                Previous proceedings:{" "}
                <a
                  href={conference.previousProceedings}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#9db4ff] hover:text-white"
                >
                  printorders.aip.org/proceedings/2794
                </a>
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <h3 className="font-display text-[1.2rem]">
                Tentative partner journals
              </h3>
            </Reveal>
            {partnerJournals.map((j, i) => (
              <Reveal key={j.name} delay={0.1 + i * 0.08}>
                <article className="card p-6 transition hover:-translate-y-1 hover:border-line-strong">
                  <h4 className="mb-3 font-display text-[1rem] leading-snug">
                    {j.name}
                  </h4>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {j.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/25 bg-accent/[0.12] px-2.5 py-1 text-[0.72rem] font-semibold text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-[0.88rem] text-muted">{j.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
