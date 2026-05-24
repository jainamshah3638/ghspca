import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/causes", label: "Causes" },
  { to: "/gallery", label: "Our Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "bg-background/95 backdrop-blur-md",
        scrolled ? "shadow-soft" : ""
      )}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" aria-label="GHSPCA home">
          <img src={logo} alt="GHSPCA logo" className="h-12 w-12 object-contain group-hover:scale-105 transition" />
          <span className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight text-foreground text-lg">GHSPCA</span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Greater Hyderabad SPCA</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919394578568"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <PhoneCall className="h-4 w-4" />
            Emergency
          </a>
          <Link
            to="/donate"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-elegant transition-all"
          >
            Donate Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-background/80 border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary bg-secondary" }}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Donate Now
            </Link>
            <a
              href="tel:+919394578568"
              className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold"
            >
              <PhoneCall className="h-4 w-4" /> Emergency: +91 93945 78568
            </a>
          </div>
        </div>
      )}
    </header>
  );
}