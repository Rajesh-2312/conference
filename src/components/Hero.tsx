import { motion } from "framer-motion";
import { heroFacts, conference } from "../data/conference";
import Icon from "./Icon";
import Countdown from "./Countdown";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <span className="absolute -left-20 -top-28 h-[480px] w-[480px] animate-float-slow rounded-full bg-[#4b63ff] opacity-50 blur-[70px]" />
        <span className="absolute -right-24 top-10 h-[420px] w-[420px] animate-float-slower rounded-full bg-brand-2 opacity-50 blur-[70px]" />
        <span className="absolute -bottom-40 left-[40%] h-[360px] w-[360px] animate-float-slow rounded-full bg-[#1f9d92] opacity-40 blur-[70px]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.55fr_1fr]">
        {/* Content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-6 inline-block rounded-full border border-brand/35 bg-brand/10 px-3.5 py-1.5 font-display text-[0.8rem] font-semibold tracking-wide text-[#bcd0ff]"
          >
            {conference.edition} International Conference
          </motion.span>

          <motion.h1
            variants={item}
            className="mb-5 font-display text-[clamp(2.1rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            Advances in{" "}
            <span className="gradient-text">Communications, Computing</span>{" "}
            &amp; Electronic Systems
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-7 max-w-[560px] text-[1.08rem] text-muted"
          >
            A global platform for researchers, engineers, academicians and
            professionals to share groundbreaking research across sustainable
            electronics, computing models and communication technologies.
          </motion.p>

          <motion.ul variants={item} className="mb-8 flex flex-wrap gap-6">
            {heroFacts.map((f) => (
              <li key={f.title} className="flex items-center gap-3">
                <span className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-line bg-surface-2">
                  <Icon name={f.icon} size={20} className="text-[#bcd0ff]" />
                </span>
                <div>
                  <strong className="block font-display text-[0.98rem]">
                    {f.title}
                  </strong>
                  <small className="text-[0.76rem] text-muted-2">{f.sub}</small>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={item} className="mb-7 flex flex-wrap gap-4">
            <a href="#cfp" className="btn btn-primary px-8 py-4 text-[1.02rem]">
              Call for Papers
            </a>
            <a
              href="#registration"
              className="btn btn-ghost px-8 py-4 text-[1.02rem]"
            >
              Register Now
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.85rem] text-muted-2"
          >
            <span>
              Hosted by <strong className="text-muted">{conference.host}</strong>
            </span>
            <span className="opacity-50">•</span>
            <span>
              In Association with{" "}
              <strong className="text-muted">{conference.technicalSponsor}</strong>
            </span>
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[460px]"
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
