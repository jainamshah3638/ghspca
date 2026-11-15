import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";

import img8Oct25 from "@/assets/8Oct25.jpg";
import img10Jan26 from "@/assets/10Jan26.jpg";
import img11Jan26 from "@/assets/11Jan26.jpg";
import img22Sep26 from '@/assets/22Sep26.jpeg'
import img25Jul25 from "@/assets/25Jul25.jpg";
import img29Mar26 from "@/assets/29Mar26.jpg";
import img30Sep25 from "@/assets/30Sep25.jpg";

export const Route = createFileRoute("/blog/")({
  component: BlogListingPage,
  head: () => ({
    meta: [
      { title: "Stories & Care Blog — GHSPCA" },
      { name: "description", content: "Actionable tips, behind-the-scenes animal rescue stories, and scientific welfare guides from Greater Hyderabad Society for Prevention of Cruelty to Animals." },
      { property: "og:title", content: "Stories & Care Blog — GHSPCA" },
      { property: "og:description", content: "Read our latest news, rescue logs, and animal welfare guides." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogListingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Blog"
        title="Voice for the Voiceless"
        subtitle="Insights, rescue stories, seasonal updates, and scientific animal care guides from our dedicated teams on the ground."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img22Sep26} target="_blank">
                  <img src={img22Sep26} alt="22Sep26" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img8Oct25} target="_blank">
                  <img src={img8Oct25} alt="25Jul25" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img29Mar26} target="_blank">
                  <img src={img29Mar26} alt="29Mar26" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img25Jul25} target="_blank">
                  <img src={img25Jul25} alt="8Oct25" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img10Jan26} target="_blank">
                  <img src={img10Jan26} alt="10Jan26" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img11Jan26} target="_blank">
                  <img src={img11Jan26} alt="11Jan26" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group overflow-hidden rounded-3xl aspect-[4/3] bg-muted relative">
                <a href={img30Sep25} target="_blank">
                  <img src={img30Sep25} alt="30Sep25" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
