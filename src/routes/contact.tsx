import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — GHSPCA" },
      { name: "description", content: "Reach GHSPCA Hyderabad — 24/7 rescue line, email and office address." },
      { property: "og:title", content: "Contact — GHSPCA" },
      { property: "og:description", content: "Get in touch with the GHSPCA team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const text = `🚨 *New Contact Inquiry*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Subject:* ${data.subject}\n*Message:* ${data.message}`;

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "8720859636:AAHARY7HJcmS-0fBjeupWQS_E HrdlUKvcpc";
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || "1854353873";

    if (botToken && chatId) {
      try {
        const urlParams = new URLSearchParams({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        });

        await fetch(`https://api.telegram.org/bot${botToken.replace(/\s/g, "")}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlParams.toString(),
        });
      } catch (err) {
        console.error("Failed to send message:", err);
      }
    } else {
      console.warn("Telegram credentials missing in .env, simulating success.");
    }

    setLoading(false);
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." subtitle="For emergencies call our 24/7 line. For everything else, send a message and we'll get back to you." />

      <section className="py-20 md:py-28 overflow-x-hidden w-full">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <ContactItem icon={Phone} label="24/7 Emergency" value="+91 9394578568" href="tel:+919394578568" />
              <ContactItem icon={Mail} label="Email" value="ghspca.hyderabad@gmail.com" href="mailto:ghspca.hyderabad@gmail.com" />
              <ContactItem icon={MapPin} label="Contact Address" value={
                <span className="text-base font-normal leading-relaxed text-muted-foreground block mt-1">
                  <strong className="text-foreground font-semibold">GREATER HYDERABAD SOCIETY FOR PREVENTION OF CRUELTY TO ANIMALS</strong><br />
                  9FC9+G96, Muslim Jung Brg, Shakar Bazaar,<br />
                  Afzal Gunj, Hyderabad, Telangana 500012
                </span>
              } />

              <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
                <iframe
                  title="GHSPCA Multi-Speciality Animal Hospital and Shelter"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.84296297795!2d78.4684005!3d17.3712879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970049a19a5f%3A0xdd3dc4e63cb80a70!2sGHSPCA%20Multi-Speciality%20Animal%20Hospital%20and%20Shelter!5e0!3m2!1sen!2sin!4v1788005654617!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-5 sm:p-8 md:p-10 shadow-soft"
            >
              <h2 className="text-2xl md:text-3xl font-semibold">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">We typically respond within 24 hours.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" />
              </div>
              <div className="mt-5">
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>
              <button
                type="submit"
                disabled={sent || loading}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:bg-primary/90 disabled:opacity-60 transition-all"
              >
                {sent ? "Message sent — thank you!" : loading ? "Sending..." : <>Send message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode; href?: string }) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 shadow-soft hover:shadow-elegant transition group">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
        <div className="mt-1 text-[15px] sm:text-lg font-semibold text-foreground group-hover:text-primary transition break-all leading-snug sm:leading-normal">{value}</div>
      </div>
    </Tag>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}