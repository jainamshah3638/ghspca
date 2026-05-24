import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall, ArrowRight, Heart, Info, Award, HelpCircle, BookOpen, Phone, Shield, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/impact", label: "Our Impact", icon: Award },
  { to: "/causes", label: "Urgent Causes", icon: HelpCircle },
  { to: "/gallery", label: "Rescue Logs", icon: Award },
  { to: "/blog", label: "Stories & Blog", icon: BookOpen },
  { to: "/contact", label: "Get In Touch", icon: Phone },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll locking when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          "bg-background/95 backdrop-blur-md border-b border-transparent",
          scrolled ? "shadow-soft border-border/80" : ""
        )}
      >
        {/* Main Desktop + Mobile Navigation Container */}
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 lg:px-8">
          
          {/* Mobile Left: Hamburger Trigger (takes w-20 to balance the right side) */}
          <div className="flex lg:hidden w-20 items-center justify-start">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full bg-secondary/80 hover:bg-secondary border border-border/60 transition cursor-pointer"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>

          {/* Desktop Left / Mobile Center: Logo */}
          <div className="flex flex-1 justify-center lg:justify-start lg:flex-none">
            <Link 
              to="/" 
              className="flex items-center gap-2 group" 
              aria-label="GHSPCA home"
              onClick={() => setOpen(false)}
            >
              <img src={logo} alt="GHSPCA logo" className="h-10 w-10 sm:h-11 sm:w-11 object-contain group-hover:scale-105 transition" />
              <span className="flex flex-col leading-tight">
                <span className="font-semibold tracking-tight text-foreground text-base sm:text-lg">GHSPCA</span>
                <span className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground hidden sm:inline">Greater Hyderabad SPCA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = l.to === "/" 
                ? currentPath === "/" 
                : currentPath.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all",
                    isActive
                      ? "text-primary bg-secondary/40 font-semibold"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary/20"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919394578568"
              className="flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition"
            >
              <PhoneCall className="h-4 w-4 text-primary" />
              Emergency
            </a>
            <Link
              to="/donate"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-elegant transition-all cursor-pointer"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Right Quick Action: Compact Donate Button (takes w-20 to balance the left side) */}
          <div className="flex lg:hidden w-20 items-center justify-end">
            <Link
              to="/donate"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 text-xs font-semibold hover:bg-primary/20 transition cursor-pointer"
            >
              <Heart className="h-3.5 w-3.5" fill="currentColor" />
              <span>Donate</span>
            </Link>
          </div>

        </nav>
      </header>

      {/* Premium Full-Screen Slide-in Menu Drawer Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-300 pointer-events-none",
          open ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
      >
        {/* Dim Backdrop with Blur */}
        <div
          className={cn(
            "absolute inset-0 bg-foreground/30 backdrop-blur-xs transition-opacity duration-300 ease-out",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* Drawer Panel Sliding from Left */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-[340px] bg-background shadow-elegant border-r border-border transition-transform duration-300 ease-out flex flex-col justify-between overflow-hidden",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-secondary/10">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <img src={logo} alt="GHSPCA logo" className="h-9 w-9 object-contain" />
              <span className="flex flex-col leading-tight">
                <span className="font-bold tracking-tight text-foreground text-sm">GHSPCA</span>
                <span className="text-[8px] uppercase tracking-[0.1em] text-muted-foreground">Greater Hyderabad SPCA</span>
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-8 w-8 place-items-center rounded-full bg-secondary/80 hover:bg-secondary border border-border/40 transition cursor-pointer"
            >
              <X className="h-4.5 w-4.5 text-foreground" />
            </button>
          </div>

          {/* Drawer Scrollable Body Content */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
            
            {/* Primary Nav List */}
            <div className="space-y-1.5">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4 mb-2">
                Main Navigation
              </span>
              {links.map((l) => {
                const isActive = l.to === "/" 
                  ? currentPath === "/" 
                  : currentPath.startsWith(l.to);
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all cursor-pointer",
                      isActive
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-foreground hover:bg-secondary/40"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <l.icon className={cn("h-4.5 w-4.5 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                      <span>{l.label}</span>
                    </span>
                    <ArrowRight className={cn("h-4 w-4 transition-all text-primary", isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0")} />
                  </Link>
                );
              })}
            </div>

            {/* Helpline quick-action card */}
            <div className="bg-red-500/5 border border-red-500/10 rounded-[1.5rem] p-4 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-red-500/5 blur-xl pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 text-red-500 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> 24/7 Rescue Line
                </span>
                <p className="text-xl font-bold text-foreground tracking-tight mt-1">+91 93945 78568</p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                  Call our ambulance dispatcher instantly for animal accidents or emergency dispatches.
                </p>
                <a
                  href="tel:+919394578568"
                  className="mt-3.5 w-full inline-flex justify-center items-center gap-2 rounded-full bg-red-500 text-white px-4 py-2.5 text-xs font-semibold hover:bg-red-600 transition shadow-soft cursor-pointer"
                >
                  <PhoneCall className="h-3.5 w-3.5 animate-bounce" /> Call Ambulance
                </a>
              </div>
            </div>

          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-border bg-secondary/15 flex flex-col gap-2.5">
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold hover:bg-primary/90 transition shadow-soft cursor-pointer"
            >
              <Heart className="h-4 w-4 animate-pulse" fill="currentColor" />
              <span>Donate Now</span>
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center items-center gap-1.5 rounded-full border border-border bg-background text-foreground py-2.5 text-xs font-semibold hover:bg-secondary transition cursor-pointer"
              >
                Volunteer
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center items-center gap-1.5 rounded-full border border-border bg-background text-foreground py-2.5 text-xs font-semibold hover:bg-secondary transition cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}