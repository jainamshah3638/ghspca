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

import Camel from "@/assets/Camel.png";
import Cows from "@/assets/Cows.png";
import DogVaccination from "@/assets/Dog_Vaccination.jpg";
import Dog from '@/assets/Dog.png'
import Koel from "@/assets/Koel.jpg";
import Monkey from "@/assets/Monkey.png";
import Pigeon1 from "@/assets/Pigeon1.jpg";
import Reptiles from '@/assets/Reptiles.png'

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
                <img src={Dog} alt="Dog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={Cows} alt="Cows" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={Camel} alt="Camel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={DogVaccination} alt="DogVaccination" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={Koel} alt="Koel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={Monkey} alt="Monkey" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={Pigeon1} alt="Pigeon1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <img src={Reptiles} alt="Reptiles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
        </div>
      </section>
    </PageLayout>
  );
}
