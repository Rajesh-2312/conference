import { stripItems } from "../data/conference";

export default function Marquee() {
  const items = [...stripItems, ...stripItems];
  return (
    <div className="overflow-hidden border-y border-line bg-bg-soft py-3.5">
      <div className="flex w-max animate-marquee items-center gap-8 font-display text-[0.9rem] font-semibold text-muted">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item}
            <span className="text-[0.6rem] text-brand">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
