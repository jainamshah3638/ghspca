import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Heart, Ambulance, Globe } from "lucide-react";
import { DomesticAnimals, WildAnimals } from "@/components/site/AnimalStats";

export const Route = createFileRoute("/impact")({
  component: ImpactPage,
  head: () => ({
    meta: [
      { title: "GHSPCA Impact | 55,000+ Animals & Birds Rescued and Treated" },
      { name: "description", content: "Explore GHSPCA's animal rescue achievements, treatment initiatives, bird protection programmes and welfare activities across multiple states." },
      { property: "og:title", content: "GHSPCA Impact | 55,000+ Animals & Birds Rescued and Treated" },
      { property: "og:description", content: "Explore GHSPCA's animal rescue achievements, treatment initiatives, bird protection programmes and welfare activities across multiple states." },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
});

const headline = [
  { value: 18, label: "Years of service", suffix: "" },
  { value: 61000, label: "Animals Rescued", suffix: "+" },
  { value: 12, label: "States served", suffix: "" },
  { value: 100, label: "Active Volunteers", suffix: " +" },
];

const timeline = [
  { year: "2008", title: "GHSPCA Founded", desc: "A few animal lovers in Hyderabad come together to respond to street emergencies." },
  { year: "2014", title: "Multi-state Reach", desc: "Started animal rescue operations in other Indian states." },
  { year: "2019", title: "24/7 ambulance launched", desc: "Round-the-clock emergency rescue service begins operating 365 days a year." },
  { year: "2026", title: "Hospital Established", desc: "Multi-speciality animal hospital established, with inauguration planned." },
  { year: "Til Today", title: "61,000+ Rescues", desc: "And counting. Every single rescue free of cost to the public." },
];

function ImpactPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Our Impact" title="Every number is a life that got a second chance." subtitle="Measurable, transparent results from 18+ years of on-ground rescue work across India." />

      {/* Stats Section */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {headline.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-3xl p-5 sm:p-8 shadow-soft text-center h-full">
                  <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-primary tracking-tight break-all sm:break-normal">
                    <Counter value={s.value} suffix={s.suffix ?? ""} />
                  </p>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DomesticAnimals />
      <WildAnimals />

      {/* Main Content Section */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Core Story */}
            <div className="lg:col-span-7 space-y-12">
              <Reveal>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">The GHSPCA Journey</p>
                  <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">Driven by compassion. United by purpose.</h2>
                  <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      GHSPCA, an organization working for welfare of animals was started in 2008 by a few Animal Lovers. Lately, many other conservatives, professionals from different fields joined hands in order to rescue, rehabilitate, release and reduce cruelty on animals.
                    </p>
                    <p>
                      Awareness was spread among different community groups of the Deccan region. Based in Hyderabad, our expert team of volunteers work 24/7 from handling emergency calls to providing best possible treatment in no less time. We try maximum to bring the animals back to their natural habitat.
                    </p>
                    <p>
                      We work as a team and as individuals responding to needs of cases to be dealt. It differs to harm caused to animals severity on a normal day than during festivals. The society is proud of its 18 years of service towards the speechless creatures. 
                    </p>
                    <p className="text-xl font-medium text-foreground italic border-l-4 border-primary pl-6 py-3">
                      "We love and enjoy doing so, the most important part is we provide all our services completely free of cost."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Side: Impact Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elegant transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary shrink-0">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Expanding Our Wings</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Not just Telangana, but many other states like Andhra Pradesh, Karnataka, Maharashtra, Gujarat, Rajasthan, Madhya Pradesh, Uttar Pradesh, Haryana, Jammu & Kashmir, Jharkhand and West Bengal have been receiving our services. We keep spreading our wings of service for the future.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-elegant transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary shrink-0">
                      <Ambulance className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Round the Clock Care</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Since 2019, we have a 24/7 ambulance service running 365 days for handling emergency cases and rehabilitating animals.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-primary rounded-3xl p-6 sm:p-10 shadow-elegant text-primary-foreground text-center">
                  <Heart className="mx-auto h-10 w-10 mb-4 opacity-90" />
                  <p className="text-4xl sm:text-5xl font-semibold mb-2 tracking-tight break-all sm:break-normal">61,000+</p>
                  <p className="text-primary-foreground/90 font-medium text-lg">
                    Animals and birds saved till date.
                  </p>
                </div>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Timeline</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">From a small idea to a national rescue network.</h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <div className={`relative flex md:items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                      <p className="text-sm font-semibold text-primary">{t.year}</p>
                      <h3 className="mt-1 text-xl font-semibold">{t.title}</h3>
                      <p className="mt-2 text-muted-foreground">{t.desc}</p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}