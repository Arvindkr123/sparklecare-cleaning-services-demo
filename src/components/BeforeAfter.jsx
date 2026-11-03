"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Interactive before/after comparison slider.
 * NOTE: Until real job photos are available, the "before" side is a
 * simulated (desaturated/dimmed) version of the same stock photo.
 * Pass `before` to use a genuine before photo.
 */
export default function BeforeAfter({ after, before, alt, label, sizes = "(min-width: 1024px) 50vw, 100vw" }) {
  const [pos, setPos] = useState(50);
  const simulated = !before;

  return (
    <figure className="group">
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-3xl bg-navy-100">
        {/* After (full) */}
        <Image src={after} alt={`${alt} — after cleaning`} fill sizes={sizes} className="object-cover" />

        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image
            src={before || after}
            alt={`${alt} — before cleaning`}
            fill
            sizes={sizes}
            className="object-cover"
            style={simulated ? { filter: "grayscale(0.55) sepia(0.35) brightness(0.72) contrast(0.88) blur(0.4px)" } : undefined}
          />
          {simulated && (
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "radial-gradient(circle at 30% 40%, rgba(120,95,60,0.35), transparent 45%), radial-gradient(circle at 75% 70%, rgba(110,90,60,0.3), transparent 40%)",
              }}
            />
          )}
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-teal-400 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950">
          After
        </span>

        {/* Divider */}
        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)]" />
          <div className="absolute top-1/2 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full bg-white text-navy-900 shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${label}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-4">
        <span className="font-display text-lg text-navy-950">{label}</span>
        {simulated && <span className="text-xs text-navy-400">Illustrative sample</span>}
      </figcaption>
    </figure>
  );
}
