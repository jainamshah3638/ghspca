import { createFileRoute } from "@tanstack/react-router";
import { Building2, Smartphone, QrCode, HeartHandshake, Stethoscope, Truck, Utensils, Gem, Award, Crown, Medal, Trophy } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import donateQr from "@/assets/donate.jpeg";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate — GHSPCA" },
      { name: "description", content: "Donate to GHSPCA via UPI, bank transfer or QR code. Every contribution funds rescues, medicine and 24/7 ambulance care." },
      { property: "og:title", content: "Donate — GHSPCA" },
      { property: "og:description", content: "UPI, bank and QR — your donation goes directly to animal care." },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
});

const impactList = [
  { icon: Utensils, amount: "₹500", desc: "Feeds and treats one rescued animal for a week." },
  { icon: Stethoscope, amount: "₹2,500", desc: "Funds emergency surgery and post-op medication." },
  { icon: Truck, amount: "₹5,000", desc: "Keeps the ambulance running for 3 full days of rescue calls." },
  { icon: HeartHandshake, amount: "₹10,000", desc: "Sponsors the full rehabilitation of a large rescued animal." },
];

const schemes = [
  { icon: Gem, tier: "Diamond", amount: "₹5,51,000", desc: "Premier benefactor — sponsor an entire shelter wing & ongoing care.", accent: "from-primary to-primary-glow" },
  { icon: Crown, tier: "Platinum", amount: "₹2,51,000", desc: "Underwrite a year of surgeries and life‑saving treatments.", accent: "from-primary to-primary" },
  { icon: Trophy, tier: "Golden", amount: "₹1,11,000", desc: "Fund the ambulance, fuel and rescue operations for months.", accent: "from-primary to-primary" },
  { icon: Award, tier: "Silver", amount: "₹51,000", desc: "Support food, shelter and medicines for dozens of animals.", accent: "from-primary to-primary" },
  { icon: Medal, tier: "Bronze", amount: "₹21,000", desc: "Help rescue, vaccinate and rehabilitate animals in need.", accent: "from-primary to-primary" },
];

function DonatePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Donate"
        title="Your generosity becomes their second chance."
        subtitle="100% of your donation goes into food, medicine, surgery and ambulance fuel. Every service we provide is free of cost to the public."
      />

      {/* Where your money goes */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Where your money goes</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">Real impact, transparently broken down.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactList.map((i, idx) => (
              <Reveal key={i.amount} delay={idx * 0.08}>
                <div className="bg-card border border-border rounded-3xl p-7 shadow-soft h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-3xl font-semibold text-foreground">{i.amount}</p>
                  <p className="mt-2 text-muted-foreground">{i.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Schemes */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Schemes</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">Become a lifelong patron of GHSPCA.</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Join our <span className="font-semibold text-foreground">"Mujhe Bachao – Save Me"</span> startup donation schemes and help us build a permanent hospital & shelter for rescued animals.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((s, idx) => (
              <Reveal key={s.tier} delay={idx * 0.07}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-8 shadow-soft overflow-hidden">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.accent}`} />
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-semibold">{s.tier}</h3>
                  </div>
                  <p className="mt-6 text-4xl font-semibold text-foreground">{s.amount}</p>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                  <a
                    href="upi://pay?pa=9394578568@upi&pn=GHSPCA"
                    className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-primary/90 transition"
                  >
                    Contribute {s.tier}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Details Section (Bank Transfer, UPI & QR Code) */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="bg-card border border-border rounded-3xl p-8 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                  <Building2 className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">Bank Transfer</h3>
                <p className="mt-2 text-muted-foreground">For NEFT, RTGS and IMPS transfers.</p>
                <dl className="mt-5 rounded-2xl bg-secondary p-5 text-sm space-y-2">
                  <Row label="Account Name" value="Greater Hyderabad Society For Prevention of Cruelty to Animals" />
                  <Row label="A/c Number" value="3033251886" />
                  <Row label="Bank" value="Central Bank of India" />
                  <Row label="Branch" value="Noor Khan Bazar, Hyderabad" />
                  <Row label="IFSC" value="CBIN0282407" />
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-soft sm:flex sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary shrink-0">
                    <Smartphone className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">UPI / GPay</h3>
                    <p className="text-sm text-muted-foreground">Instant donation to +91 93945 78568</p>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 shrink-0">
                  <a href="upi://pay?pa=9394578568@upi&pn=GHSPCA" className="inline-flex w-full sm:w-auto justify-center items-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition shadow-soft hover:shadow-elegant">
                    Open UPI App
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-elegant flex flex-col">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-foreground/15">
                  <QrCode className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold">Scan & Donate</h3>
                <div className="mt-4 space-y-2 text-sm text-primary-foreground/90 bg-primary-foreground/10 rounded-2xl p-4">
                  <p className="leading-snug"><strong className="text-primary-foreground font-semibold">Name:</strong><br/>Greater Hyderabad Society for Prevention of Cruelty to Animals</p>
                  <p><strong className="text-primary-foreground font-semibold">UPI ID:</strong> <span className="font-mono break-all">9394578568-1@okbizaxis</span></p>
                </div>
                <div className="mt-6 mx-auto bg-background rounded-2xl p-3 shadow-elegant w-full max-w-[220px]">
                  <img src={donateQr} alt="GHSPCA Donation QR Code" className="w-full h-auto rounded-xl block" />
                </div>
                <p className="mt-6 text-xs text-primary-foreground/70 text-center">Scan with GPay, PhonePe, Paytm, or BHIM.</p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground text-right break-all">{value}</dd>
    </div>
  );
}