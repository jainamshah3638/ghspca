import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, Users, ArrowRight, Heart, HeartHandshake, Phone } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import multiSpeciality from "@/assets/Multi-Speciality.webp";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — GHSPCA" },
      { name: "description", content: "Learn about GHSPCA, our rescue efforts, and the dedicated team behind it all." },
      { property: "og:title", content: "About Us — GHSPCA" },
      { property: "og:description", content: "Our story, mission and the team behind 33,759+ rescues." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const teamGHSPCA = [
  { name: "Dinesh Anchaliya", role: "President", phone: "+91 9849124231" },
  { name: "Surender Bhandari", role: "Founder Secretary", phone: "+91 8555955202" },
  { name: "D. Joshi", role: "Joint Secretary", phone: "+91 9441131481" },
  { name: "Hitesh Srisrisrimal", role: "Treasurer", phone: "+91 9441131481" },
  { name: "Soudharm Bhandari", role: "Coordinator", phone: "+91 8886743881" },
  { name: "Yogesh Gosar", role: "Coordinator", phone: "+91 9000991133" },
  { name: "Shaik Hussain", role: "Project Scientist", phone: "+91 9949602074" },
  { name: "Dr. Chaitanya", role: "Veterinary Doctor", phone: "+91 9000082255" },
  { name: "Taqi Ali", role: "Rescue Team Head", phone: "+91 7416705697" },
];

const advisoryTeam = [
  { name: "Jasraj Srisrimal", role: "Advisor" },
  { name: "Nirmal Shingvi", role: "Advisor" },
  { name: "Mahip Jain", role: "Advisor" },
  { name: "Hiten Shah", role: "Advisor" },
];

const digitalTeam = [
  { name: "Akshay Baldota", role: "Digital Creator" },
  { name: "Amit Achaliya", role: "Digital Creator" },
  { name: "Ajay Bharadwaj", role: "Digital Creator" },
];

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
              <img src={multiSpeciality} alt="Veterinarian care" loading="lazy" className="rounded-[2.5rem] shadow-elegant w-full aspect-video md:aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-3xl p-6 shadow-elegant max-w-sm">
                <p className="text-xl font-semibold italic text-balance text-foreground">
                  "Till date, 33,759 animals and birds are saved and count is increasing daily"
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

      {/* Teams */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Join Our Team</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">The incredible people behind GHSPCA.</h2>
            </div>
          </Reveal>

          {/* Core Team */}
          <Reveal>
            <h3 className="text-3xl font-semibold text-foreground mb-8">Team GHSPCA</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {teamGHSPCA.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <article className="bg-card border border-border rounded-3xl p-7 shadow-soft hover:shadow-elegant transition h-full flex items-center gap-5">
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 grid place-items-center">
                    <span className="text-xl font-semibold text-primary">{m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{m.name}</h4>
                    <p className="text-sm text-primary font-medium">{m.role}</p>
                    {m.phone && (
                      <a href={`tel:${m.phone.replace(/ /g, '')}`} className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-3.5 w-3.5" /> {m.phone}
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Advisory & Digital Teams */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h3 className="text-3xl font-semibold text-foreground mb-8">Advisory Core Team</h3>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-6">
                {advisoryTeam.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.05}>
                    <article className="bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-elegant transition flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary grid place-items-center">
                        <span className="text-sm font-semibold text-foreground">{m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{m.name}</h4>
                        <p className="text-xs text-primary">{m.role}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="text-3xl font-semibold text-foreground mb-8">Digital Creator Team</h3>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-6">
                {digitalTeam.map((m, i) => (
                  <Reveal key={m.name} delay={i * 0.05}>
                    <article className="bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-elegant transition flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary grid place-items-center">
                        <span className="text-sm font-semibold text-foreground">{m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{m.name}</h4>
                        <p className="text-xs text-primary">{m.role}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}