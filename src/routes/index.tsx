import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, PhoneCall, ShieldCheck, Stethoscope, TreePine, Quote,
  Heart, HandHeart, IndianRupee, PawPrint, Home, Stethoscope as Hospital,
  Droplets, Bird, Syringe, ChevronLeft, ChevronRight, Handshake,
} from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { DomesticAnimals, WildAnimals } from "@/components/site/AnimalStats";
import heroDog from "@/assets/hero-dog.jpg";
import multiSpeciality from "@/assets/ghscpc_hospital.webp";
import ambulance from "@/assets/ambulance.jpg";
import welfareBird from "@/assets/welfare/bird.jpg";
import welfareWater from "@/assets/welfare/waterbowl.png";
import welfareVaccine from "@/assets/welfare/6.png";
import contributeMedical from "@/assets/contribute/3 (1).png";
import contributeSnake from "@/assets/contribute/4.png";
import contributeShelter from "@/assets/contribute/5.png";
import contributeCattle from "@/assets/contribute/6.png";
import banner2 from "@/assets/banner2.png";
import partner1 from "@/assets/partners/org5.jpg";
import partner2 from "@/assets/partners/org.jpg";
import partner3 from "@/assets/partners/org1.png";
import partner4 from "@/assets/partners/org2.jpg";
import partner5 from "@/assets/partners/org3.png";
import partner6 from "@/assets/partners/org4.png";
import partner7 from "@/assets/partners/org6.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GHSPCA-Greater Hyderabad Society for Prevention of Cruelty to Animals" },
      { name: "description", content: "Greater Hyderabad Society for Prevention of Cruelty to Animals. 24/7 animal rescue, rehabilitation and release across India since 2019." },
      { property: "og:title", content: "GHSPCA-Greater Hyderabad Society for Prevention of Cruelty to Animals" },
      { property: "og:description", content: "Since 2019, GHSPCA has rescued 55,000+ animals across India. Donate, volunteer, or call our 24/7 ambulance." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <PageLayout>
      <HeroSlider />
      <AboutPreview />
      <DomesticAnimals />
      <WildAnimals />
      <MissionStats />
      <ContributeWays />
      <HomelessBanner />
      <Welfare />
      <ContributeFor />
      <MissionGoals />
      <Testimonials />
      <Partners />
    </PageLayout>
  );
}

/* ---------------- Hero Slider ---------------- */
const slides = [
  {
    img: heroDog,
    eyebrow: "24/7 Ambulance Service",
    title: "Every life is worth saving.",
    desc: "Since 2019, GHSPCA has rescued, rehabilitated and released over 55,000 animals and birds across India — free of cost.",
    duration: 7000,
  },
  {
    img: ambulance,
    eyebrow: "Emergency Rescue",
    title: "One call away. Anywhere. Anytime.",
    desc: "Our trained team responds to injured, trapped and abandoned animals — round the clock, all year round.",
    duration: 7000,
  },
  {
    img: multiSpeciality,
    hideText: true,
    duration: 15000, // 15 seconds for Slide 3
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const slideDuration = slides[i].duration || 8000;
    const timer = setTimeout(() => {
      setI((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearTimeout(timer);
  }, [i]);
  const s = slides[i];
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-foreground">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={s.img} alt={s.title ?? "GHSPCA Hospital"} className="h-full w-full object-cover" />
          {!s.hideText && (
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/15" />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative mx-auto max-w-[1600px] w-full px-5 lg:px-8 pt-32 pb-12 flex-1 flex flex-col justify-between z-10 pointer-events-none">
        <div className="flex-1 flex items-center pointer-events-auto">
          <AnimatePresence mode="wait">
            {!s.hideText && (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-2xl text-background"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" /> {s.eyebrow}
                </span>
                <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] text-balance">
                  {s.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-background/85 max-w-xl text-balance">{s.desc}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/donate" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-elegant hover:bg-primary/90 transition-all">
                    Donate Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                  <a href="tel:+919394578568" className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur border border-background/30 px-6 py-3.5 text-base font-semibold text-background hover:bg-background/25 transition">
                    <PhoneCall className="h-4 w-4" /> Emergency: 93945 78568
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)} className="grid h-11 w-11 place-items-center rounded-full bg-background/20 backdrop-blur border border-background/30 text-background hover:bg-background/35 transition" aria-label="Previous slide">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary-glow" : "w-4 bg-background/40"}`} />
            ))}
          </div>
          <button onClick={() => setI((p) => (p + 1) % slides.length)} className="grid h-11 w-11 place-items-center rounded-full bg-background/20 backdrop-blur border border-background/30 text-background hover:bg-background/35 transition" aria-label="Next slide">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function AboutPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={multiSpeciality} alt="Multi-Speciality Care" loading="lazy" className="rounded-3xl shadow-elegant object-cover h-auto w-full" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-2xl p-5 shadow-elegant max-w-xs">
              <p className="text-3xl font-semibold text-primary"><Counter value={18} suffix="+" /></p>
              <p className="text-sm text-muted-foreground mt-1">Years of dedicated service to voiceless lives.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About GHSPCA</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground text-balance">
            A small group of animal lovers. A movement that grew across India.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Greater Hyderabad Society for Prevention of Cruelty to Animals (GHSPCA) was founded in 2008 by a handful of compassionate volunteers. Today, we run a 24/7 emergency ambulance and serve animals across Telangana, Andhra Pradesh, Karnataka, Maharashtra, Gujarat, Rajasthan and Uttar Pradesh.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Over <strong className="text-foreground">55,000</strong> animals saved and counting — every one of them treated with dignity, free of cost.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              Learn our story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/hospital" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              Explore our hospital <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------- Mission Stats ---------------- */
const stats = [
  { value: 18, label: "Years of service", suffix: "" },
  { value: 55000, label: "Animals Rescued", suffix: "+" },
  { value: 12, label: "States served", suffix: "" },
  { value: 100, label: "Active Volunteers", suffix: " +" },
];

function MissionStats() {
  return (
    <section className="bg-foreground text-background py-20 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Our Mission</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
              Helping all animals and birds — treating them equally.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-background/20 pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-background/20 gap-8 lg:gap-0">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center md:text-left ${i !== 0 ? "lg:pl-8" : ""} ${i !== stats.length - 1 ? "lg:pr-8" : ""}`}>
                  <p className="text-5xl md:text-6xl font-semibold tracking-tight font-serif">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm text-background/80 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-background/70">
              <div>
                <a href="mailto:ghspca.hyderabad@gmail.com" className="hover:text-background transition-colors">ghspca.hyderabad@gmail.com</a>
                <span className="mx-3 opacity-50">|</span>
                <a href="tel:+919394578568" className="hover:text-background transition-colors">+91 93945 78568</a>
              </div>
              <p>9FC9+G96, Muslim Jung Brg, Shakar Bazaar, Afzal Gunj, Hyderabad, Telangana 500012</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contribute Ways ---------------- */
const contribute = [
  { icon: HandHeart, title: "Become a Volunteer", desc: "Join our on-ground rescue and shelter teams.", to: "/contact" },
  { icon: Heart, title: "Adopt an Animal", desc: "Give a rescued animal a forever home.", to: "/causes" },
  { icon: IndianRupee, title: "Donate", desc: "Fund food, medicine and ambulance fuel.", to: "/donate" },
  { icon: Handshake, title: "Partner Organisation", desc: "Collaborate with us to expand our rescue impact.", to: "/contact" },
];

function ContributeWays() {
  return (
    <section className="py-20 md:py-24 bg-cream">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get involved</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">How you can contribute</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contribute.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Link to={c.to} className="group block h-full bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Get started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Homeless Banner ---------------- */
function HomelessBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={banner2} alt="Homeless animals" className="h-full w-full object-cover md:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 lg:px-8">
        <Reveal>
          <div className="bg-background/10 backdrop-blur-md border border-background/20 rounded-[2.5rem] p-8 md:p-14 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-background relative overflow-hidden">
            {/* Soft glowing ambient orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex-1 text-center lg:text-left relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary-glow border border-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                <Heart className="h-3.5 w-3.5" fill="currentColor" /> Urgent Need
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-balance">
                Help the homeless.<br />Join us today.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-background/85 leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance">
                Every night, thousands of animals sleep on our streets — hungry, hurt, and unseen. With a monthly pledge or a one-time gift, you become their voice and their safety.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
                <Link to="/donate" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 shadow-elegant hover:-translate-y-1 transition-all">
                  Donate Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-background/15 border border-background/30 px-8 py-4 text-base font-semibold text-background hover:bg-background/25 hover:-translate-y-1 transition-all">
                  Become a Volunteer
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-80 relative z-10">
              <div className="bg-background/10 hover:bg-background/15 border border-background/20 rounded-3xl p-6 backdrop-blur-md transition-colors">
                <p className="text-4xl font-semibold text-primary-glow mb-2">50+</p>
                <p className="text-sm text-background/80 leading-relaxed">Emergency rescues are conducted by our dedicated ambulance team every single day.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Welfare ---------------- */
const welfare = [
  { icon: Bird, title: "Free Bird Feeders", desc: "Free bird feeders distributed every year to homes and communities.", img: welfareBird },
  { icon: Droplets, title: "Free Water Bowls for Strays", desc: "Water bowls for thirsty stray dogs and street animals placed across neighbourhoods.", img: welfareWater },
  { icon: Syringe, title: "Free Stray Dog Vaccination Drive", desc: "Free vaccination drives for stray dogs and street animals organised throughout the year.", img: welfareVaccine },
];

function Welfare() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our welfare</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Programmes that run year-round</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {welfare.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <Link to="/causes" className="block h-full cursor-pointer">
                <article className="group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elegant transition-all h-full">
                  <div className="aspect-video overflow-hidden">
                    <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold text-foreground">{w.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contribute For ---------------- */
const contributeFor = [
  { img: contributeMedical, label: "Animal Shelter", to: "/causes" },
  { img: contributeSnake, label: "Free Stray Animal Checkups", to: "/causes" },
  { img: contributeShelter, label: "Animal Hospital", to: "/hospital" },
  { img: contributeCattle, label: "Free Treatment of Stray Animals", to: "/causes" },
];

function ContributeFor() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Causes</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">You can contribute for</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {contributeFor.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <Link to={c.to} className="block cursor-pointer">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-accent shadow-soft">
                  <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-background font-semibold text-lg">{c.label}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mission & Goals ---------------- */
const goals = [
  { icon: Home, label: "Homeless Shelters" },
  { icon: ShieldCheck, label: "Animal Rescue" },
  { icon: Hospital, label: "Hospital Setup" },
  { icon: TreePine, label: "Shelter Setup" },
  { icon: Stethoscope, label: "Free Stray Animal Treatment" },
];

function MissionGoals() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Roadmap</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Our mission and goals</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div className="flex items-center gap-4 bg-card rounded-2xl px-6 py-5 border border-border shadow-soft hover:shadow-elegant hover:border-primary/40 transition-all">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                  <g.icon className="h-5 w-5" />
                </span>
                <p className="font-semibold text-foreground">{g.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const quotes = [
  { q: "They came within 20 minutes when our community dog was hit by a car. He's alive today because of GHSPCA.", who: "Priya, Jubilee Hills" },
  { q: "An entire family of stray puppies — rescued, vaccinated and re-homed. This team works miracles, quietly.", who: "Rahul, Banjara Hills" },
  { q: "I called about an injured pigeon at midnight. They picked up. They came. That's everything.", who: "Anjali, Secunderabad" },
];

function Testimonials() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Voices from Hyderabad</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Stories of the people we serve alongside</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <Reveal key={t.who} delay={i * 0.1}>
              <figure className="h-full bg-card rounded-3xl p-8 border border-border shadow-soft">
                <Quote className="h-7 w-7 text-primary/60" />
                <blockquote className="mt-5 text-lg text-foreground leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-sm font-medium text-muted-foreground">— {t.who}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners ---------------- */
const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

function Partners() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Collaborations</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Our Partners</h2>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-8 flex w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[var(--cream)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[var(--cream)] to-transparent z-10" />

        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} className="px-8 md:px-16 flex-shrink-0">
              <img
                src={p}
                alt={`Partner`}
                loading="lazy"
                className="h-20 md:h-32 w-auto max-w-[220px] object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

