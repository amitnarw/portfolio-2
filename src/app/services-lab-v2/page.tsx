import type { Metadata } from "next";
import LabHeader from "./lab-header";
import Area17 from "@/components/homepage/services/v2/a-area17";
import Instrument from "@/components/homepage/services/v2/b-instrument";
import Basement from "@/components/homepage/services/v2/c-basement";

export const metadata: Metadata = {
  title: "Services Lab V2",
  robots: { index: false, follow: false },
};

const CONTAINER = "mx-auto w-full max-w-350 px-6 lg:px-12";

const VARIANTS = [
  {
    key: "A",
    name: "Area 17",
    description:
      "Three columns side by side — area17.com/capabilities. Name, one sentence, six capabilities, proof anchored at the bottom.",
    Component: Area17,
    id: "services-a",
  },
  {
    key: "B",
    name: "Instrument",
    description:
      "Stacked offering blocks — instrument.com/services. Each discipline pairs a large case-study image with capabilities and a View case study link.",
    Component: Instrument,
    id: "services-b",
  },
  {
    key: "C",
    name: "Basement",
    description:
      "Stacked, restrained — basement.studio. Name, one paragraph, four bullets, one inline proof link. Flattest, most air.",
    Component: Basement,
    id: "services-c",
  },
];

export default function ServicesLabV2Page() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <LabHeader />

      <div className={CONTAINER}>
        <div className="pb-8 pt-14 lg:pt-20">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span aria-hidden className="h-[2px] w-8 bg-primary" />
            Design exploration — v2
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] italic leading-[1.02] tracking-tight">
            Services section — 3 directions
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Same content spine as v1: 3 disciplines (Product Engineering, AI
            Systems, Backend &amp; Cloud), each with 6 capabilities and a real
            proof project on <code className="text-foreground">/work/[slug]</code>.
            Design is the only variable. All three use the same header and
            footer. Toggle dark mode from the top bar. The homepage is
            untouched.
          </p>
          <nav
            aria-label="Jump to a direction"
            className="mt-8 flex flex-wrap gap-2"
          >
            {VARIANTS.map((v) => (
              <a
                key={v.key}
                href={`#variant-${v.key}`}
                className="rounded-full border border-foreground/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:bg-primary/10"
              >
                {v.key} — {v.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {VARIANTS.map((v) => (
        <section
          key={v.key}
          id={`variant-${v.key}`}
          className="scroll-mt-20"
          aria-label={`Variant ${v.key} — ${v.name}`}
        >
          <div className={CONTAINER}>
            <div className="flex flex-wrap items-end justify-between gap-3 border-t border-foreground/10 pb-6 pt-12">
              <div>
                <h2 className="font-serif text-2xl italic leading-none">
                  {v.key} — {v.name}
                </h2>
                <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                  {v.description}
                </p>
              </div>
              <a
                href="#top"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Back to top ↑
              </a>
            </div>
          </div>
          <v.Component id={v.id} />
        </section>
      ))}

      <footer className="py-14">
        <div className={CONTAINER}>
          <div className="border-t border-foreground/10 pt-8 text-sm text-muted-foreground">
            <p>
              Tell me the letter — or &ldquo;A with B&apos;s image
              treatment&rdquo; — and I&apos;ll wire the winner into the
              homepage.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
