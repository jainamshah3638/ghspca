import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, HeartPulse, IndianRupee, Bed, GraduationCap, Ambulance } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import multiSpeciality from "@/assets/ghscpc_hospital.webp";
import consultancy from "@/assets/hospital/consultancy.jpg";
import surgery from "@/assets/hospital/surgery.jpg";
import diagnostics from "@/assets/hospital/diagnostics.jpg";
import recovery from "@/assets/hospital/recovery.jpg";
import shelter from "@/assets/hospital/shelter.jpg";
import pharmacy from "@/assets/hospital/pharmacy.jpg";
import XrayRoom from "@/assets/hospital/XrayRoom.png";

export const Route = createFileRoute("/hospital")({
  component: HospitalPage,
  head: () => ({
    meta: [
      { title: "Hospital Facilities — GHSPCA" },
      { name: "description", content: "The GHSPCA Multi-Speciality Animal Hospital & Shelter — surgery, diagnostics, recovery, shelter and pharmacy under one roof, free of cost, 24×7." },
      { property: "og:title", content: "Hospital Facilities — GHSPCA" },
      { property: "og:description", content: "A promise to never turn away a life in need." },
    ],
    links: [{ rel: "canonical", href: "/hospital" }],
  }),
});

const glance = [
  { icon: Clock, value: "24×7 • 365 Days", label: "Operating Hours" },
  { icon: IndianRupee, value: "Free", label: "Cost of Care" },
  { icon: HeartPulse, value: "6", label: "Specialised Departments" },
  { icon: Ambulance, value: "Ambulance", label: "24×7 • 365 Days" },
  { icon: Ambulance, value: "50+", label: "Monthly emergency rescues" },
  { icon: Ambulance, value: "300+", label: "Monthly rescues" },
  { icon: GraduationCap, value: "21", label: "Veterinary Doctors, Para-Veterinary Team Etc." },
  { icon: Bed, value: "100+", label: "Beds for Animals" },
  { icon: Bed, value: "150+", label: "Beds for Birds" },
];

const departments = [
  { img: consultancy, title: "Consultancy Room", desc: "Well-equipped consultancy room for check-ups, open to community pet owners too." },
  { img: surgery, title: "Surgery", desc: "A sterile theatre equipped for repair, surgeries, sterilisation and other critical procedures." },
  { img: diagnostics, title: "Diagnostics & Imaging", desc: "Dedicated X-ray and laboratory services for timely and accurate clinical assessment." },
  { img: recovery, title: "Recovery Room", desc: "Post-operative and critical care facilities providing close monitoring, recovery support and safe isolation when needed." },
  { img: shelter, title: "Recovery Shelter", desc: "Species-specific shelters for birds, animals and wildlife, providing safe spaces for recovery and rehabilitation." },
  { img: pharmacy, title: "Pharmacy", desc: "A fully equipped in-house pharmacy supporting uninterrupted care with essential medicines and supplies." },
  { img: XrayRoom, title: "XRay Room", desc: "A dedicated X-ray room equipped for advanced diagnostic imaging of animals and birds." },
];

const milestones: { label: string; status: "done" | "current" | "upcoming" }[] = [
  { label: "Foundation Laid", status: "done" },
  { label: "Structure Completion", status: "done" },
  { label: "Equipment Installation", status: "current" },
  { label: "Staffing & Trials", status: "upcoming" },
  { label: "Hospital Inauguration", status: "upcoming" },
];

function HospitalPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Hospital Facilities"
        title="A promise to never turn away a life in need."
        subtitle="The GHSPCA Multi-Speciality Animal Hospital & Shelter at Begum Bazaar, Hyderabad — advanced treatment, rehabilitation and recovery under one roof."
      />

      {/* Introduction */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img
              src={multiSpeciality}
              alt="GHSPCA Multi-Speciality Animal Hospital & Shelter"
              loading="lazy"
              className="rounded-[2.5rem] shadow-elegant w-full aspect-video md:aspect-[4/3] object-cover"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Mujhe Bachao — Save Me</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">Not just emergency care, but time to heal.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                For 18 years, our care has travelled to animals in need — by ambulance, through volunteers and on every call. But critical cases such as major trauma, orthopaedic recovery and wildlife quarantine often require specialised long-term care.
              </p>
              <p>
                Our <strong className="text-foreground font-semibold">"Mujhe Bachao — Save Me"</strong> programme aims to change this by creating a permanent multi-speciality hospital dedicated to advanced treatment, rehabilitation and recovery, giving animals not just emergency care but the time, space and support they need to heal.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facility at a glance */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Facility at a glance</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Open to every stray Animal and Birds, Always.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {glance.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.08}>
                <div className="h-full bg-card rounded-3xl p-8 border border-border shadow-soft text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary mx-auto">
                    <g.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 text-2xl md:text-3xl font-semibold text-primary">{g.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{g.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Facilities</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Specialised departments. One purpose.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <article className="group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={d.img} alt={d.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-foreground">{d.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Images are architectural renders of the hospital under construction.</p>
        </div>
      </section>
    </PageLayout>
  );
}
