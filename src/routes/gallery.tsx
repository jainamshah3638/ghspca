import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

import cowImg from "@/assets/rescue-cow.jpg";
import snakeImg from "@/assets/hero-snake.png";
import kittenImg from "@/assets/rescue-kitten.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Our Work & Gallery — GHSPCA" },
      { name: "description", content: "Explore the daily rescues, rehabilitations, and releases performed by the GHSPCA team." },
    ],
  }),
});

function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Work"
        title="Stories of rescue and rehabilitation."
        subtitle="Witness the impact of your support. From late-night ambulance calls to successful releases back into the wild."
      />

      {/* Static Gallery Highlight */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Featured Rescues</h2>
              <p className="mt-4 text-lg text-muted-foreground">A glimpse into the daily lives we touch.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={cowImg} alt="Cow Rescue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium text-lg">Cattle Rehabilitation</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={snakeImg} alt="Snake Rescue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium text-lg">Wildlife Emergency Response</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={kittenImg} alt="Kitten Rescue" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium text-lg">Small Animal Care</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-cream py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 text-center">
          <Reveal>
            <span className="grid h-16 w-16 place-items-center rounded-3xl bg-white text-pink-600 shadow-soft mx-auto mb-6">
              <InstagramIcon className="h-8 w-8" />
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold">Follow our daily journey</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We post our live rescues and success stories on Instagram.
            </p>
            <a href="https://instagram.com/ghspca" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition">
              View on Instagram
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            {/* INSTRUCTION: Paste your Elfsight or LightWidget Embed code below */}
            <div className="mt-16 min-h-[400px] bg-white rounded-3xl border border-border shadow-soft flex items-center justify-center p-8 relative overflow-hidden">

            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
