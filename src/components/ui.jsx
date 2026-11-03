import Link from "next/link";
import Icon from "./Icon";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const variants = {
  primary:
    "bg-teal-400 text-navy-950 hover:bg-teal-300 shadow-[0_10px_30px_-10px_rgba(39,203,189,0.8)]",
  navy: "bg-navy-900 text-white hover:bg-navy-800",
  outline: "border border-navy-200 bg-white text-navy-900 hover:border-navy-900",
  ghostLight: "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/15",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb857] shadow-[0_10px_30px_-12px_rgba(37,211,102,0.9)]",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

export function buttonClass(variant = "primary", size = "md", extra = "") {
  return `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${extra}`;
}

export function Button({ href, variant = "primary", size = "md", className = "", external, children, ...props }) {
  const cls = buttonClass(variant, size, className);
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  if (href?.startsWith("tel:") || href?.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-teal-300" : "text-teal-600"
      }`}
    >
      <span className={`h-px w-6 ${light ? "bg-teal-300" : "bg-teal-500"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left", light = false, className = "" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.85rem] ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? "text-navy-200" : "text-navy-500"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function CheckItem({ children, light = false }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
          light ? "bg-teal-400/20 text-teal-300" : "bg-teal-50 text-teal-600"
        }`}
      >
        <Icon name="check" className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className={light ? "text-navy-100" : "text-navy-700"}>{children}</span>
    </li>
  );
}

export function PlaceholderNote({ children, className = "" }) {
  return (
    <p
      className={`inline-flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800 ${className}`}
    >
      <Icon name="info" className="mt-px h-3.5 w-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
