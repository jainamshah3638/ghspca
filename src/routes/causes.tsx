import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import snake from "@/assets/cause/snack.png";
import camel from "@/assets/cause/camle.png";
import cattle from "@/assets/cause/Cattle.jpg";
import birds from "@/assets/cause/Kite.png";

export const Route = createFileRoute("/causes")({
  component: CausesPage,
  head: () => ({
    meta: [
      { title: "Animal Welfare Causes | Bird & Wildlife Protection | GHSPCA" },
      { name: "description", content: "Discover important animal welfare causes and learn how GHSPCA works to protect vulnerable animals, birds and wildlife through rescue and awareness." },
      { property: "og:title", content: "Animal Welfare Causes | Bird & Wildlife Protection | GHSPCA" },
      { property: "og:description", content: "Discover important animal welfare causes and learn how GHSPCA works to protect vulnerable animals, birds and wildlife through rescue and awareness." },
    ],
    links: [{ rel: "canonical", href: "/causes" }],
  }),
});

const causes = [
  { img: snake, title: "Snake Rescues", desc: "Safe, no-kill relocation of snakes from homes and public spaces back to forests and protected areas." },
  { img: camel, title: "Camel Rescue from Slaughter", desc: "Intercepting and rehabilitating camels illegally trafficked for slaughter — restoring them to safe sanctuaries." },
  { img: cattle, title: "Cattle Rescue from Slaughter", desc: "Coordinating with authorities to rescue cattle from cruelty and find them lifelong shelter and care." },
  { img: birds, title: "Kite-String Injuries", desc: "Treating birds — especially pigeons — gravely wounded by manja (kite string) during festival season." },
];

function CausesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Causes" title="The fights we take on. Every single day." subtitle="From silent backyards to busy highways — these are the urgent causes where your support changes outcomes." />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {causes.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
                    <Link to="/donate" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                      Support this cause <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}