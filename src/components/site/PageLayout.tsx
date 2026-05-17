import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-soft border-b border-border">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 py-20 md:py-28 text-center">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}