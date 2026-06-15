import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { aboutCards, conference } from "../data/conference";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-22">
      <div className="container-x">
        <SectionHead
          eyebrow="About the Conference"
          title="A premier academic & industry-focused event"
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="mb-5 text-[1.05rem] text-muted">
              The{" "}
              <strong className="text-ink">
                International Conference on Intelligent Computing, Secure
                Communications and Emerging Technologies (ICICSCET 2026)
              </strong>{" "}
              aims to bring together researchers, academicians, industry experts,
              and students to share innovative ideas, research findings, and
              technological advancements in the fields of intelligent computing,
              secure communications, and emerging technologies.
            </p>
            <p className="mb-5 text-[1.05rem] text-muted">
              Organized by{" "}
              <strong className="text-ink">{conference.host}</strong>, Guntur,
              India, in collaboration with{" "}
              <strong className="text-ink">UCSI University, Malaysia</strong>, the
              conference provides a multidisciplinary platform covering{" "}
              <em className="not-italic text-[#bcd0ff]">
                Artificial Intelligence, Machine Learning, Internet of Things
                (IoT), Cybersecurity, Blockchain, VLSI, Embedded Systems,
                Communications, and Signal Processing
              </em>
              .
            </p>
            <p className="text-[1.05rem] text-muted">
              ICICSCET 2026 will feature keynote talks, technical paper
              presentations, industry sessions, and networking opportunities to
              promote collaboration between academia and industry. Through a
              rigorous <strong className="text-ink">double-blind peer-review
              process</strong>, the conference seeks to showcase high-quality
              research and foster innovation that addresses real-world challenges
              and contributes to future technological advancements.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {aboutCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="card p-6 transition hover:-translate-y-1 hover:border-line-strong">
                  <h3 className="mb-2 font-display text-[1.05rem] text-[#cfe]">
                    {c.title}
                  </h3>
                  <p className="text-[0.92rem] text-muted">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
