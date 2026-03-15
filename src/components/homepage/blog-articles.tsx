const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    date: "October 3, 2024",
    readTime: "6 min read",
    title: "Where Creative Design Meets Smart Development Solutions",
    excerpt:
      "This blog bridges the gap between creativity and technology. Learn how design thinking drives modern digital products.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    date: "January 8, 2025",
    readTime: "10 min read",
    title: "Exploring Innovation Through Design and Web Development",
    excerpt:
      "Dive into the latest trends, tools, and techniques shaping the future of design and development.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    date: "March 24, 2025",
    readTime: "14 min read",
    title: "Design Ideas, Development Tips, and Creative Solutions",
    excerpt:
      "Your go-to space for actionable insights on design trends, development practices, and creative problem solving.",
  },
];

export default function BlogArticles() {
  return (
    <section id="blog" className="bg-muted/40">
      <div className="mx-auto w-full max-w-350 px-6 py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2.3rem,5.2vw,4.6rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
            Blog &amp; Articles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Our clients&apos; voices are the true measure of our success. Their
            reviews highlight the trust, collaboration, and results we&apos;ve built
            together.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="border border-border bg-card/80"
            >
              <div
                className="h-52 w-full bg-cover bg-center bg-no-repeat md:h-56"
                style={{ backgroundImage: `url('${article.image}')` }}
                aria-hidden="true"
              />

              <div className="p-4 md:p-5">
                <p className="text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="px-2">|</span>
                  <span>{article.readTime}</span>
                </p>

                <h3 className="mt-3 text-[clamp(1.25rem,1.6vw,1.9rem)] font-semibold leading-[1.25] text-foreground">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
