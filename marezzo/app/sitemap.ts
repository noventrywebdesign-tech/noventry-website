import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.marezzo-london.com";
const ROUTES = ["", "/speisekarte", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
