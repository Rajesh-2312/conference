import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useScrollSpy";

export default function BackToTop() {
  const show = useScrolled(600);
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-grad text-white shadow-soft transition-all duration-300 hover:-translate-y-1 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </a>
  );
}
