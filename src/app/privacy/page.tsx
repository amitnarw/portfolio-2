import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-12">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-muted-foreground">
          Effective date: March 14, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-medium">Information We Collect</h2>
            <p className="mt-2">
              We may collect details you share directly, like your name, email,
              and project requirements through contact forms or emails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">How We Use Information</h2>
            <p className="mt-2">
              Information is used to respond to inquiries, provide services,
              improve site experience, and communicate project updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">Data Sharing</h2>
            <p className="mt-2">
              Personal data is not sold. Information is only shared when needed
              to provide services or when legally required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium">Contact</h2>
            <p className="mt-2">
              For privacy-related questions, contact{" "}
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
