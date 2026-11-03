import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

export default function ServiceCard({ service, priority = false }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-[0_30px_60px_-30px_rgba(7,17,38,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-100">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-navy-900 shadow-sm backdrop-blur">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-navy-950">{service.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy-500">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
          Learn more
          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
