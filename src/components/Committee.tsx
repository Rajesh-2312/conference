import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { committee } from "../data/conference";

export default function Committee() {
  return (
    <section id="committee" className="py-20 sm:py-22">
      <div className="container-x">
        <SectionHead
          eyebrow="Organizing Committee"
          title="The people behind ICICSCET 2026"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {committee.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 2) * 0.06}
              className={group.wide ? "md:col-span-2" : ""}
            >
              <div className="card h-full p-7">
                <h3 className="mb-5 border-b border-line pb-3 font-display text-[1.05rem] text-[#cfe]">
                  {group.title}
                </h3>
                <ul
                  className={`grid gap-x-6 gap-y-3.5 ${
                    group.twoCol ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {group.members.map((m) => (
                    <li
                      key={m.name}
                      className="relative flex flex-col pl-4 before:absolute before:left-0 before:top-[0.5em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-brand"
                    >
                      <strong className="font-display text-[0.95rem] font-semibold">
                        {m.name}
                      </strong>
                      <span className="text-[0.83rem] text-muted-2">
                        {m.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
