import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/Reveal";
import { blogs } from "@/lib/blogs";

export const Route = createFileRoute("/blog/")({
  component: BlogListingPage,
  head: () => ({
    meta: [
      { title: "Stories & Care Blog — GHSPCA" },
      { name: "description", content: "Actionable tips, behind-the-scenes animal rescue stories, and scientific welfare guides from Greater Hyderabad Society for Prevention of Cruelty to Animals." },
      { property: "og:title", content: "Stories & Care Blog — GHSPCA" },
      { property: "og:description", content: "Read our latest news, rescue logs, and animal welfare guides." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogListingPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Blog"
        title="Voice for the Voiceless"
        subtitle="Insights, rescue stories, seasonal updates, and scientific animal care guides from our dedicated teams on the ground."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <article className="group flex flex-col h-full bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                  {/* Card Image */}
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="aspect-[16/10] overflow-hidden block">
                    <img
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  {/* Card Body */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                        <span className="rounded-full bg-secondary text-primary px-3 py-1 font-semibold tracking-wide">
                          {post.category}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        <Link to="/blog/$slug" params={{ slug: post.slug }}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-8 pt-6 border-t border-border flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-muted-foreground font-medium">
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <Link
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        Read Full Article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
