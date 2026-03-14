import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-6 text-sm text-muted-foreground">
          Effective date: March 14, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-medium">Use of This Website</h2>
            <p className="mt-2">
              By using this website, you agree to use it lawfully and respectfully.
              Content is provided for informational and professional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">Intellectual Property</h2>
            <p className="mt-2">
              Text, branding, visuals, and source work displayed here are protected
              and may not be reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">Project Engagement</h2>
            <p className="mt-2">
              Any service engagement, timeline, pricing, and deliverables are
              governed by separate written agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact{" "}
              <a
                href="mailto:amitnarwal115@gmail.com"
                className="underline underline-offset-4"
              >
                amitnarwal115@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
