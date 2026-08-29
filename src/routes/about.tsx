import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, Users, ArrowRight, Heart, HeartHandshake, Phone } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import multiSpeciality from "@/assets/ghscpc_hospital.webp";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — GHSPCA" },
      { name: "description", content: "Learn about GHSPCA, our rescue efforts, and the dedicated team behind it all." },
      { property: "og:title", content: "About Us — GHSPCA" },
      { property: "og:description", content: "Our story, mission and the team behind 55,000+ rescues." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

/* ─────────────────────────────────────────────
   Data — extracted from official GHSPCA image
───────────────────────────────────────────── */

const teamGHSPCA = [
  { name: "Maneka Gandhi", role: "Chief Patron", subtitle: "Founder — People For Animals", phone: null },
  { name: "Mahip Jain", role: "Chairman", phone: "+91 9396874199" },
  { name: "Dinesh Anchaliya", role: "President", phone: "+91 9849124231" },
  { name: "Surender Bhandari", role: "Founder Secretary", phone: "+91 8555955202" },
  { name: "D Joshi", role: "Joint Secretary", phone: "+91 9441131481" },
  { name: "Manoj Jain", role: "Treasurer", phone: "+91 9290267995" },
  { name: "Dr Vishva Chaitanya", role: "Veterinary Advisor", phone: "+91 9000082255" },
  { name: "Shaik Hussain", role: "Project Scientist", phone: "+91 9949602074" },
];

const advisoryCommittee = [
  { name: "Hiten Shah", phone: "+91 9849164221" },
  { name: "Shantilal Salecha", phone: "+91 9885133477" },
  { name: "Deepak Vijaywargi", phone: "+91 9848046793" },
  { name: "Vasanti Vadi", phone: "+91 9346530121" },
  { name: "Alka Choadhry", phone: "+91 9480093779" },
];

const coordinators = [
  { name: "Soudharm Bhandari", phone: "+91 8886743881" },
  { name: "Yogesh Gosar", phone: "+91 9000991133" },
];

const rescueHead = { name: "Taqi Ali", phone: "+91 7416705697" };

const members = [
  { name: "Akshat Porwar" },
  { name: "Ajay Bharadwaj" },
  { name: "Dharmik Shah" },
  { name: "Luvkik Nahata" },
  { name: "Parth Shah" },
  { name: "Prateek Lodha" },
  { name: "Vishal Kumar" },
  { name: "Pranav Jain" },
  { name: "Ganesh Bhai" },
  { name: "Akshay Baldota" },
  { name: "Akshat Choadhry" },
  { name: "Deepak Agarwal" },
  { name: "Nikhil Achaliya" },
  { name: "Piyush Gandhi" },
  { name: "Shubham Vyas" },
  { name: "Sumeet Zotha" },
  { name: "Sanjay Jain" },
  { name: "Sunil Kumar" },
  { name: "Ajay Surana" },
  { name: "Amit Anchaliya" },
  { name: "Jivesh Jain" },
  { name: "Pankaj Gupta" },
  { name: "Praful Bohra" },
  { name: "Siddhum Bhandari" },
  { name: "Yash Nahata" },
  { name: "Deepesh Jain" },
  { name: "B Naveen" },
];

/* ─────────────────────────────────────────────
   Shared card sub-components
───────────────────────────────────────────── */

function Initials({ name }: { name: string }) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function CoreCard({ m }: { m: typeof teamGHSPCA[0] }) {
  return (
    <article className="bg-card border border-border rounded-3xl p-7 shadow-soft hover:shadow-elegant transition h-full flex items-center gap-5">
      <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 grid place-items-center">
        <span className="text-xl font-semibold text-primary">
          <Initials name={m.name} />
        </span>
      </div>
      <div>
        <h4 className="text-lg font-semibold">{m.name}</h4>
        <p className="text-sm text-primary font-medium">{m.role}</p>
        {m.subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{m.subtitle}</p>
        )}
        {m.phone && (
          <a
            href={`tel:${m.phone.replace(/ /g, "")}`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5" /> {m.phone}
          </a>
        )}
      </div>
    </article>
  );
}

function SmallCard({ name, phone, role }: { name: string; phone?: string; role?: string }) {
  return (
    <article className="bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-elegant transition flex items-center gap-4">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary grid place-items-center">
        <span className="text-sm font-semibold text-foreground">
          <Initials name={name} />
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">{name}</h4>
        {role && <p className="text-xs text-primary">{role}</p>}
        {phone && (
          <a
            href={`tel:${phone.replace(/ /g, "")}`}
            className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-3 w-3" /> {phone}
          </a>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About GHSPCA"
        title="A little about Us"
        subtitle="Greater Hyderabad Society for Prevention of Cruelty to Animals (GHSPCA) an organization working for welfare of animals was started in 2008 by a few Animal Lovers."
      />

      {/* Introduction */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={multiSpeciality}
                alt="Veterinarian care"
                loading="lazy"
                className="rounded-[2.5rem] shadow-elegant w-full aspect-video md:aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-3xl p-6 shadow-elegant max-w-sm">
                <p className="text-xl font-semibold italic text-balance text-foreground">
                  "Till date, 55,000+ animals and birds are saved and count is increasing daily"
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Welcome to GHSPCA</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">Rescue Effort Over The Years</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Greater Hyderabad Society for Prevention of Cruelty to Animals (GHSPCA) an organization working for welfare of animals was started in 2008 by a few Animal Lovers. Lately, many other conservatives, professionals from different fields joined hands in order to rescue, rehabilitate, release and reduce cruelty on animals.
              </p>
              <p>
                <strong className="text-foreground font-semibold">Our Impact:</strong> Not just Telangana, but many other states like Andhra Pradesh, Karnataka, Maharashtra, Gujrat, Rajsthan, Uttar Pradesh have been receiving our services. And so we keep spreading our wings of service in future.
              </p>
              <p>
                Since 2019, we have a 24/7 ambulance service running 365 days for handling emergency cases and rehabilitating animals.
              </p>
              <p className="text-xl font-medium text-foreground mt-6">
                Our mission is to help the Animals and Treat them Equally.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0.1}>
            <Link to="/donate" className="block group bg-card border border-border rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all text-center h-full">
              <Heart className="mx-auto h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="mt-5 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Become a DONOR</h3>
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/causes" className="block group bg-card border border-border rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all text-center h-full">
              <Target className="mx-auto h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="mt-5 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">You Can Contribute For</h3>
            </Link>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/donate" className="block group bg-card border border-border rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all text-center h-full">
              <HeartHandshake className="mx-auto h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="mt-5 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Save the Helpless</h3>
            </Link>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/contact" className="block group bg-card border border-border rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all text-center h-full">
              <Users className="mx-auto h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="mt-5 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Help the Homeless</h3>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── All Teams ── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 space-y-24">

          {/* Section header */}
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our People</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
                The incredible people behind GHSPCA.
              </h2>
            </div>
          </Reveal>

          {/* Team GHSPCA */}
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold text-foreground mb-8">Team GHSPCA</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamGHSPCA.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.05}>
                  <CoreCard m={m} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Advisory Committee */}
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold text-foreground mb-8">Advisory Committee</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryCommittee.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.05}>
                  <SmallCard name={m.name} phone={m.phone} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Coordinators + Rescue Head side by side */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h3 className="text-3xl font-semibold text-foreground mb-8">Coordinators</h3>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-6">
                {coordinators.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.05}>
                    <SmallCard name={m.name} phone={m.phone} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="text-3xl font-semibold text-foreground mb-8">Rescue Head</h3>
              </Reveal>
              <Reveal delay={0.05}>
                <SmallCard name={rescueHead.name} phone={rescueHead.phone} />
              </Reveal>
            </div>
          </div>

          {/* Members */}
          <div>
            <Reveal>
              <h3 className="text-3xl font-semibold text-foreground mb-2">Members</h3>
              <p className="text-muted-foreground mb-8">Our dedicated on-ground members driving every rescue mission.</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {members.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.03}>
                  <SmallCard name={m.name} />
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}