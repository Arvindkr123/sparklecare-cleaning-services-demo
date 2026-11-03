export default function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-navy-900">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-300" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.2 6.1L20.5 10l-6.3 2-2.2 6-2.2-6L3.5 10l6.3-1.9z" />
          <path d="M19 15.5l.9 2.3 2.3.8-2.3.8-.9 2.3-.9-2.3-2.3-.8 2.3-.8z" opacity=".7" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.35rem] tracking-tight ${light ? "text-white" : "text-navy-950"}`}>
          Sparkle<span className="text-teal-500">Care</span>
        </span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-navy-300" : "text-navy-400"}`}>
          Cleaning Services
        </span>
      </span>
    </span>
  );
}
