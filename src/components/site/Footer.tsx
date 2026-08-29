import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const FbIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.9 2-1.9h2V2.2C16.7 2.1 15.6 2 14.3 2 11.7 2 10 3.6 10 6.6V10H7v4h3v8h3z" /></svg>
);
const IgIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="mx-auto max-w-[1600px] px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center rounded-full bg-background p-1.5">
              <img src={logo} alt="GHSPCA logo" className="h-10 w-10 object-contain" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-background">GHSPCA</span>
          </div>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Greater Hyderabad Society for Prevention of Cruelty to Animals. Rescuing, rehabilitating
            and releasing animals since 2019.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-background">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary-glow">About Us</Link></li>
            <li><Link to="/impact" className="hover:text-primary-glow">Our Impact</Link></li>
            <li><Link to="/causes" className="hover:text-primary-glow">Causes</Link></li>
            <li><Link to="/donate" className="hover:text-primary-glow">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-background">Contact</h4>
          <ul className="mt-4 space-y-4 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 shrink-0" /> 
              <span className="leading-relaxed">
                9FC9+G96, Muslim Jung Brg, Shakar Bazaar,<br />
                Afzal Gunj, Hyderabad, Telangana 500012
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1 shrink-0" /> 
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-background">We are Working 24x7</span>
                <a href="tel:+919394578568" className="hover:text-primary-glow transition-colors">+91 9394578568</a>
                <a href="tel:+919849124231" className="hover:text-primary-glow transition-colors">+91 9849124231</a>
                <a href="tel:+918886743881" className="hover:text-primary-glow transition-colors">+91 8886743881</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-1 shrink-0" /> 
              <a href="mailto:ghspca.hyderabad@gmail.com" className="hover:text-primary-glow transition-colors break-all">ghspca.hyderabad@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-background">Stay Connected</h4>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Subscribe to our newsletter to receive the latest rescue stories and updates.
          </p>
          <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-background/20 bg-background/10 text-background px-4 py-2.5 text-xs placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary-glow transition"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-background text-foreground px-4 py-2.5 text-xs font-semibold hover:bg-background/90 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-6 flex gap-3">
            <a href="https://www.facebook.com/ghspca.ap" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-primary transition"><FbIcon className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/ghspca/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-primary transition"><IgIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-background/60">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© {new Date().getFullYear()} GHSPCA. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-background transition-colors">Terms &amp; Conditions</Link>
              <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            </div>
          </div>
          <p>Made with <Heart className="inline h-3 w-3 text-primary-glow" fill="currentColor" /> for every voiceless life.</p>
        </div>
      </div>
    </footer>
  );
}