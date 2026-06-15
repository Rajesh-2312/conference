import { Check } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { manuscriptRules, importantDates, conference } from "../data/conference";

export default function CallForPapers() {
  return (
    <section
      id="cfp"
      className="border-y border-line bg-bg-soft py-20 sm:py-22"
    >
      <div className="container-x">
        <SectionHead
          eyebrow="Call for Papers"
          title="Submit your original research"
          intro="The conference invites original, unpublished manuscripts. Authors submit directly by email; accepted & presented papers appear in the conference proceedings, with select papers in Scopus-indexed venues."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Guidelines */}
          <Reveal>
            <div className="card rounded-[24px] p-8">
              <h3 className="mb-5 font-display text-[1.25rem]">
                Manuscript guidelines
              </h3>
              <ul className="mb-6 grid gap-3">
                {manuscriptRules.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[0.95rem] text-muted">
                    <span className="mt-0.5 grid h-[1.3rem] w-[1.3rem] flex-shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${conference.submissionEmail}?subject=ICICSCET%202026%20Paper%20Submission`}
                className="btn btn-primary"
              >
                Email manuscript →
              </a>
              <p className="mt-3 break-words text-[0.82rem] text-muted-2">
                Send to {conference.submissionEmail}
              </p>
            </div>
          </Reveal>

          {/* Dates */}
          <Reveal delay={0.08}>
            <div className="card rounded-[24px] p-8">
              <h3 className="mb-5 font-display text-[1.25rem]">Important dates</h3>
              <ol className="mb-6">
                {importantDates.map((d, i) => (
                  <li
                    key={d.event}
                    className={`relative border-l-2 border-line pl-7 ${
                      i === importantDates.length - 1 ? "pb-0" : "pb-6"
                    }`}
                  >
                    <span
                      className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 ${
                        d.accent
                          ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(47,214,198,0.18)]"
                          : "border-brand bg-surface"
                      }`}
                    />
                    <span className="block font-display text-[0.98rem] font-bold text-ink">
                      {d.date}
                    </span>
                    <span className="block text-[0.9rem] text-muted">
                      {d.event}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="rounded-xl border border-gold/30 bg-gold/[0.08] px-4 py-4 text-[0.9rem] text-muted">
                <strong className="text-gold">Plagiarism policy:</strong> All
                submissions are screened. Acceptable similarity limit is{" "}
                <strong className="text-ink">15%</strong>; articles exceeding it
                face immediate rejection.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
