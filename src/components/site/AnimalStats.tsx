import { Reveal } from "@/components/site/Reveal";

/* ---------------- Community Animals ---------------- */
const domestic = [
  { name: "Pigeons", count: "15,500", emoji: "🕊️" },
  { name: "Cows", count: "12,300", emoji: "🐄" },
  { name: "Dogs", count: "10,300", emoji: "🐕" },
  { name: "Bulls", count: "4,800", emoji: "🐂" },
  { name: "Cats", count: "4,500", emoji: "🐈" },
  { name: "Camels", count: "1,400", emoji: "🐪" },
  { name: "Donkeys", count: "182", emoji: "🫏" },
  { name: "Horses", count: "173", emoji: "🐎" },
];

export function DomesticAnimals() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Community Rescue</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Community Animals Rescued</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {domestic.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <div className="bg-card text-card-foreground rounded-2xl p-6 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="text-5xl">{a.emoji}</div>
                <p className="mt-3 font-semibold text-foreground">{a.name}</p>
                <p className="text-primary font-semibold text-lg">{a.count}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Wild Animals ---------------- */
const wild = [
  { name: "Snakes", count: "6,212+", emoji: "🐍" },
  { name: "Turtles", count: "60", emoji: "🐢" },
  { name: "Wild Birds", count: "5,900+", emoji: "🦅" },
  { name: "Leopards", count: "2", emoji: "🐆" },
  { name: "Sloth Bears", count: "2", emoji: "🐻" },
  { name: "Nilgai", count: "2", emoji: "🦌" },
];

export function WildAnimals() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Wildlife</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Wildlife Rescued</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {wild.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.05}>
              <div className="bg-card text-card-foreground rounded-2xl p-6 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="text-5xl">{a.emoji}</div>
                <p className="mt-3 font-semibold text-foreground">{a.name}</p>
                <p className="text-primary font-semibold text-lg">{a.count}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-8 bg-card text-card-foreground rounded-2xl p-6 text-center shadow-soft">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Also rescued:</strong> Parakeets, Koels, Eagles, Sparrows, Crows, Indian Rollers, Owls, Peacocks, Raptors, Kingfishers, Green Bee-Eaters, Yellow-Footed Green Pigeons, Little Egrets, Swifts, Indian Robins, Hoopoes, Sunbirds etc. — <strong className="text-primary">5,900+</strong> wild birds & animals rehabilitated and released into natural habitats.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

