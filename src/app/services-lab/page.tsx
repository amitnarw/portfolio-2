import type { Metadata } from "next";
import LabHeader from "./lab-header";
import CapabilityMatrix from "@/components/homepage/services/variants/a-capability-matrix";
import DisciplineIndex from "@/components/homepage/services/variants/b-discipline-index";
import EditorialLedger from "@/components/homepage/services/variants/c-editorial-ledger";
import ProofStaggered from "@/components/homepage/services/variants/d-proof-staggered";
import SplitSticky from "@/components/homepage/services/variants/e-split-sticky";
import EngagementModels from "@/components/homepage/services/variants/f-engagement-models";
import ProcessPhases from "@/components/homepage/services/variants/g-process-phases";
import CaseStudyRows from "@/components/homepage/services/variants/h-case-study-rows";
import AccordionStack from "@/components/homepage/services/variants/i-accordion";
import ScrollChapters from "@/components/homepage/services/variants/j-scroll-chapters";
import HorizontalRail from "@/components/homepage/services/variants/k-horizontal-rail";
import MenuLedger from "@/components/homepage/services/variants/l-menu-ledger";

export const metadata: Metadata = {
  title: "Services Lab",
  robots: { index: false, follow: false },
};

const CONTAINER = "mx-auto w-full max-w-350 px-6 lg:px-12";

const VARIANTS = [
  {
    key: "A",
    name: "Capability Matrix",
    description:
      "3 disciplines × capability ledger. Atlas / Airborne system. Clarity and hierarchy, zero assets.",
    Component: CapabilityMatrix,
  },
  {
    key: "B",
    name: "Discipline Index",
    description:
      "Giant 01 / 02 / 03 poster rows in Bebas. Last Studio / Debut pattern.",
    Component: DisciplineIndex,
  },
  {
    key: "C",
    name: "Editorial Ledger",
    description:
      "One mixed serif statement, then serif rows with outcome right. PostGeneric / Holland.",
    Component: EditorialLedger,
  },
  {
    key: "D",
    name: "Staggered Proof List",
    description:
      "Indented rows with real project images at the seam. Harsh Shah / Bellevoire.",
    Component: ProofStaggered,
  },
  {
    key: "E",
    name: "Split Sticky Statement",
    description:
      "Sticky statement + CTA left, disciplines scroll right. Glean / Deadwater.",
    Component: SplitSticky,
  },
  {
    key: "F",
    name: "Engagement Models",
    description:
      "Sells Sprint / Build / Partner instead of skills. Conversion-first.",
    Component: EngagementModels,
  },
  {
    key: "G",
    name: "Process Phases",
    description:
      "Discover → Design → Build → Ship. Each phase with a tangible deliverable.",
    Component: ProcessPhases,
  },
  {
    key: "H",
    name: "Case-Study Rows",
    description:
      "Problem → built → result, alternating image rows. Proof-led.",
    Component: CaseStudyRows,
  },
  {
    key: "I",
    name: "Accordion Stack",
    description:
      "Expandable discipline rows, one open at a time. Compact.",
    Component: AccordionStack,
  },
  {
    key: "J",
    name: "Sticky Scroll Chapters",
    description:
      "Scrollspy index left, one discipline per scroll beat right.",
    Component: ScrollChapters,
  },
  {
    key: "K",
    name: "Horizontal Rail",
    description:
      "Snap-swipe panels with arrows and counter. Studio-showreel feel.",
    Component: HorizontalRail,
  },
  {
    key: "L",
    name: "Menu Ledger",
    description:
      "Restaurant-menu typography with dotted leaders. Calm and distinctive.",
    Component: MenuLedger,
  },
];

export default function ServicesLabPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <LabHeader />

      <div className={CONTAINER}>
        <div className="pb-8 pt-14 lg:pt-20">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            <span aria-hidden className="h-[2px] w-8 bg-primary" />
            Design exploration
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] italic leading-[1.02] tracking-tight">
            Services section — 12 directions
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            All 12 share the same content spine: 3 disciplines (Product
            Engineering, AI Systems, Backend &amp; Cloud), each with 6
            capabilities and a real proof project. Design is the only variable.
            Every variant is theme-aware — toggle dark mode from the top bar to
            compare both tones. The homepage is untouched — the current bento
            still lives at <code className="text-foreground">services.tsx</code>
            . Scroll through, then tell me the letter you like — I&apos;ll wire
            that one in and delete the rest.
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
                {v.key}
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
              <div className="flex items-center gap-4">
                <span className="font-heading text-4xl leading-none text-orange-600 dark:text-primary">
                  {v.key}
                </span>
                <div>
                  <h2 className="font-serif text-2xl italic leading-none">
                    {v.name}
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </div>
              <a
                href="#top"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Back to top ↑
              </a>
            </div>
          </div>
          <v.Component />
        </section>
      ))}

      <footer className="py-14">
        <div className={CONTAINER}>
          <div className="border-t border-foreground/10 pt-8 text-sm text-muted-foreground">
            <p>
              Not in the top 12? Tell me what to mix up — for example
              &ldquo;F&apos;s offer with A&apos;s structure&rdquo; — and
              I&apos;ll make a v2.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
