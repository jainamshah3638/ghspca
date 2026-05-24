import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User, Heart, Share2, MessageSquare } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { blogs } from "@/lib/blogs";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetailsPage,
  head: ({ params }) => {
    const post = blogs.find((b) => b.slug === params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — GHSPCA Blog` : "Blog Post — GHSPCA" },
        { name: "description", content: post ? post.excerpt : "Read the latest news and guides from GHSPCA." },
        { property: "og:title", content: post ? post.title : "GHSPCA Blog" },
        { property: "og:description", content: post ? post.excerpt : "Read our latest article." },
      ],
    };
  },
});

function BlogDetailsPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold text-foreground">Post Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The article you are looking for does not exist or has been removed.
            </p>
            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Blog Hero / Cover */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-foreground overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-background/80 hover:text-primary-glow mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full bg-primary/20 text-primary-glow border border-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-semibold text-background leading-[1.1] text-balance">
                {post.title}
              </h1>

              {/* Author & Meta */}
              <div className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-background/70 font-medium">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary-glow" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary-glow" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary-glow" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Article Container */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Image */}
              <Reveal>
                <div className="overflow-hidden rounded-3xl aspect-[16/9] shadow-elegant border border-border bg-muted">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </div>
              </Reveal>

              {/* Render Post Body */}
              <div className="prose prose-lg dark:prose-invert max-w-none mt-10 space-y-6">
                {post.content.map((sec, idx) => {
                  if (sec.type === "paragraph") {
                    return (
                      <Reveal key={idx} delay={0.05}>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {sec.content as string}
                        </p>
                      </Reveal>
                    );
                  }
                  if (sec.type === "heading") {
                    return (
                      <Reveal key={idx} delay={0.05}>
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-12 mb-4">
                          {sec.content as string}
                        </h2>
                      </Reveal>
                    );
                  }
                  if (sec.type === "quote") {
                    return (
                      <Reveal key={idx} delay={0.05}>
                        <blockquote className="border-l-4 border-primary pl-6 py-3 my-8 text-xl font-medium text-foreground italic bg-secondary/30 rounded-r-2xl">
                          "{sec.content as string}"
                        </blockquote>
                      </Reveal>
                    );
                  }
                  if (sec.type === "list") {
                    return (
                      <Reveal key={idx} delay={0.05}>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground my-6">
                          {(sec.content as string[]).map((item, i) => (
                            <li key={i} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
                      </Reveal>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Sidebar / Widgets */}
            <div className="lg:col-span-4 space-y-8">
              {/* Sidebar Widget 1: Rescue Card */}
              <Reveal delay={0.15}>
                <div className="bg-card border border-border rounded-3xl p-6 shadow-soft">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Emergency Assistance</h4>
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20 text-center">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      24/7 Helpline
                    </span>
                    <p className="text-2xl font-bold text-foreground">+91 93945 78568</p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Save our helpline card to quickly report any street emergencies or coordinate rescues.
                    </p>
                    <a
                      href="tel:+919394578568"
                      className="mt-4 w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all cursor-pointer"
                    >
                      Call Rescue Team
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Sidebar Widget 2: Recent Posts */}
              <Reveal delay={0.2}>
                <div className="bg-card border border-border rounded-3xl p-6 shadow-soft">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Recent Articles</h4>
                  <div className="space-y-4">
                    {blogs
                      .filter((b) => b.slug !== slug)
                      .slice(0, 3)
                      .map((b) => (
                        <Link
                          key={b.slug}
                          to="/blog/$slug"
                          params={{ slug: b.slug }}
                          className="group flex gap-4 items-start"
                        >
                          <div className="h-16 w-20 rounded-xl overflow-hidden bg-muted shrink-0">
                            <img src={b.img} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                              {b.category}
                            </p>
                            <h5 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1 leading-snug">
                              {b.title}
                            </h5>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

          {/* Bottom Actions card (Full Width) */}
          <Reveal delay={0.1}>
            <div className="mt-20 bg-cream border border-accent rounded-[2rem] p-8 md:p-12 shadow-soft flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-semibold text-foreground">Make an impact today</h3>
                <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                  This rescue operations and awareness campaigns run purely on the generosity of animal lovers like you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
                <Link
                  to={post.cta.link}
                  className="inline-flex justify-center items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 hover:scale-[1.03] shadow-elegant transition-all text-center cursor-pointer"
                >
                  <Heart className="h-4 w-4" fill="currentColor" /> {post.cta.text}
                </Link>
                {post.cta.secondaryLink && (
                  <Link
                    to={post.cta.secondaryLink}
                    className="inline-flex justify-center items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary hover:scale-[1.03] transition-all text-center cursor-pointer"
                  >
                    {post.cta.secondaryText}
                  </Link>
                )}
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </PageLayout>
  );
}
