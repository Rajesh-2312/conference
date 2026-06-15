import { useEffect, useState } from "react";
import { conference } from "../data/conference";

type Remaining = { days: number; hours: number; mins: number; secs: number; done: boolean };

function getRemaining(target: number): Remaining {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const target = new Date(conference.submissionDeadlineISO).getTime();
  const [t, setT] = useState<Remaining>(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Min", value: t.mins },
    { label: "Sec", value: t.secs },
  ];

  return (
    <aside className="rounded-[24px] border border-line bg-gradient-to-b from-surface to-surface-2 p-7 shadow-glow">
      <p className="mb-4 font-display text-[0.9rem] font-semibold text-muted">
        {t.done ? "Submission window closed" : "Submission closes in"}
      </p>

      <div className="mb-5 grid grid-cols-4 gap-2.5">
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-xl border border-line bg-bg-soft px-1 py-3.5 text-center"
          >
            <span className="block bg-brand-grad-text bg-clip-text font-display text-[1.7rem] font-extrabold tabular-nums text-transparent">
              {pad(u.value)}
            </span>
            <small className="text-[0.68rem] uppercase tracking-wider text-muted-2">
              {u.label}
            </small>
          </div>
        ))}
      </div>

      <div className="mb-5 flex items-center justify-between rounded-xl border border-accent/25 bg-accent/[0.08] px-4 py-2.5 text-[0.9rem]">
        <span className="text-muted">Deadline</span>
        <strong className="font-display text-accent">
          {conference.submissionDeadline}
        </strong>
      </div>

      <a
        href={`mailto:${conference.submissionEmail}`}
        className="btn btn-primary w-full"
      >
        Email your manuscript
      </a>
      <p className="mt-3 break-all text-center text-[0.78rem] text-muted-2">
        {conference.submissionEmail}
      </p>
    </aside>
  );
}
