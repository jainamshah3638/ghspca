import { Reveal } from "@/components/site/Reveal";

/* ---------------- Domestic Animals ---------------- */
const domestic = [
  { name: "Dogs", count: "6,847", emoji: "🐕" },
  { name: "Cats", count: "3,160", emoji: "🐈" },
  { name: "Cattle", count: "20,000+", emoji: "🐄" },
  { name: "Buffalo", count: "2,684", emoji: "🐃" },
  { name: "Camels", count: "970", emoji: "🐪" },
  { name: "Donkeys", count: "235", emoji: "🫏" },
  { name: "Horses", count: "186", emoji: "🐎" },
  { name: "Pigeons", count: "9853", emoji: "🕊️" },
];

export function DomesticAnimals() {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Lives saved</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Domestic Animals & Birds</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
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
  { name: "Sloth Bears", count: "2", emoji: "🐻" },
  { name: "Nilgai", count: "1", emoji: "🦌" },
  { name: "Snakes", count: "4,167", emoji: "🐍" },
  { name: "Turtles", count: "47", emoji: "🐢" },
];

export function WildAnimals() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Wildlife</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-foreground">Wild Animals Rescued</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <strong className="text-foreground">Also rescued:</strong> Parakeets, Koels, Eagles, Sparrows, Crows, Indian Rollers, Owls, Peacocks, Raptors, Kingfishers, Green Bee-Eaters, Yellow-Footed Green Pigeons, Little Egrets, Swifts, Indian Robins, Hoopoes, Sunbirds etc. — <strong className="text-primary">3,169</strong> additional lives.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
