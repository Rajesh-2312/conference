import { CalendarDays } from "lucide-react";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { conference } from "../data/conference";

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="border-y border-line bg-bg-soft py-20 sm:py-22"
    >
      <div className="container-x">
        <SectionHead
          eyebrow="Program Schedule"
          title="Conference day — 26 April 2025"
        />

        <Reveal className="mx-auto max-w-[640px]">
          <div className="card rounded-[24px] p-10 text-center">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl border border-line bg-surface-2">
              <CalendarDays size={30} className="text-[#bcd0ff]" />
            </div>
            <h3 className="mb-3 font-display text-[1.35rem]">
              Detailed schedule — Update soon
            </h3>
            <p className="mb-6 text-muted">
              The tentative program schedule will be published here. In the
              meantime, please note the key deadline:
            </p>
            <div className="mb-6 flex flex-col items-center gap-1 rounded-xl border border-brand/30 bg-brand/[0.08] px-5 py-5">
              <span className="text-[0.9rem] text-muted">
                Last date for submission of papers / articles
              </span>
              <strong className="bg-brand-grad-text bg-clip-text font-display text-[1.5rem] text-transparent">
                {conference.submissionDeadline}
              </strong>
            </div>
            <a href="#cfp" className="btn btn-ghost">
              View Call for Papers
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
