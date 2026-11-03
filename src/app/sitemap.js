import { site } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/about", "/services", "/gallery", "/contact", "/quote", "/privacy-policy", "/terms"];
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: r === "" ? 1 : r === "/services" || r === "/quote" ? 0.9 : 0.6,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
