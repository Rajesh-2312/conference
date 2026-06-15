import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHead({ eyebrow, title, intro }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-[720px] text-center">
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="font-display text-[clamp(1.7rem,3.6vw,2.5rem)] font-extrabold leading-tight tracking-tight">
        {title}
      </h2>
      {intro && <p className="mt-4 text-[1.02rem] text-muted">{intro}</p>}
    </Reveal>
  );
}
