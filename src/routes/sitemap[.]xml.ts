import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const blogPaths = [
          "/blog",
          "/blog/5-simple-ways-you-can-help-stray-animals",
          "/blog/protecting-our-avian-friends-from-kite-strings",
          "/blog/behind-the-scenes-a-day-in-the-life-of-spca-rescue",
          "/blog/why-adopting-an-indie-animal-will-change-your-life",
          "/blog/the-truth-about-street-dog-populations-abc-vaccinations"
        ];
        const paths = ["/", "/about", "/impact", "/causes", "/donate", "/contact", ...blogPaths];
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});