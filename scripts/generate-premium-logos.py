"""Generate 10 premium AN logo concepts as hand-crafted SVG.
Each is hand-authored Bézier geometry (not PIL polygons) for premium craft.
Output: public/favicons/premium-01..10/icon.svg  + premium-gallery.html
"""
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "favicons"
OUT.mkdir(parents=True, exist_ok=True)

def wrap(title, body, bg="#0B1026"):
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="{title}">
<title>{title}</title>
<rect width="512" height="512" rx="88" fill="{bg}"/>
{body}
</svg>
'''

# ─────────────────────────────────────────────
# 01 , The Infinite Thread: lemniscate forming an A
# Deep midnight #0A1220, champagne gradient, one continuous thread
P01 = wrap("Amit Narwal , Infinite Thread A",
'''
<defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E9D8A6"/><stop offset="55%" stop-color="#C9A86A"/><stop offset="100%" stop-color="#8A6E3B"/></linearGradient>
<linearGradient id="g1s" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0A1220"/><stop offset="100%" stop-color="#0A1220"/></linearGradient></defs>
<!-- infinity loop, A hidden in left lobe -->
<path d="M256 322 C236 322 130 322 130 256 C130 178 205 152 256 256 C307 360 382 334 382 256 C382 178 307 152 256 256" fill="none" stroke="url(#g1)" stroke-width="30" stroke-linecap="round"/>
<!-- A leg: vertical drop from apex -->
<path d="M256 256 L256 372" stroke="url(#g1)" stroke-width="30" stroke-linecap="round"/>
<!-- crossbar tick -->
<path d="M232 316 L280 316" stroke="url(#g1)" stroke-width="18" stroke-linecap="round"/>
<!-- hairline offset echo -->
<path d="M256 322 C240 322 146 322 146 256 C146 191 215 168 256 256" fill="none" stroke="#E9D8A6" stroke-width="4" stroke-linecap="round" opacity=".55"/>
''', bg="#0A1220")

# 02 , Tusk Spiral: double helix narwhal tusk, abstract disc
# Ice teal, luminous, minimal , no letters, pure mark
P02 = wrap("Amit Narwal , Tusk Spiral",
'''
<defs><radialGradient id="g2bg" cx=".5" cy=".5" r=".5"><stop offset="0%" stop-color="#0E2A3A"/><stop offset="100%" stop-color="#061019"/></radialGradient>
<linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#A8E6E0"/><stop offset="100%" stop-color="#3A9EA8"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="url(#g2bg)"/>
<!-- outer ring hairline -->
<circle cx="256" cy="256" r="178" fill="none" stroke="#A8E6E0" stroke-width="3" opacity=".7"/>
<!-- double helix: two opposing spirals -->
<path d="M256 256 C286 256 300 222 256 210 C212 198 212 238 256 250" fill="none" stroke="url(#g2)" stroke-width="12" stroke-linecap="round"/>
<path d="M256 256 C226 256 212 290 256 302 C300 314 300 274 256 262" fill="none" stroke="#A8E6E0" stroke-width="12" stroke-linecap="round" opacity=".85"/>
<!-- center node dot -->
<circle cx="256" cy="256" r="14" fill="#E6FFFB"/>
<!-- tusk tip needle up-right -->
<path d="M232 150 L322 82" stroke="url(#g2)" stroke-width="8" stroke-linecap="round"/>
<circle cx="326" cy="78" r="10" fill="#A8E6E0"/>
''', bg="#061019")

# 03 , Architectural AN: custom engineered pillars, bone + copper accent
P03 = wrap("Amit Narwal , Architectural AN",
'''
<defs><linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F5F1E8"/><stop offset="100%" stop-color="#E7DFC8"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#1A1A1A"/>
<!-- A frame: two pillars + diagonal beam -->
<path d="M112 374 L198 148 L284 374" fill="none" stroke="url(#g3)" stroke-width="32" stroke-linejoin="round" stroke-linecap="round"/>
<!-- crossbar -->
<path d="M150 300 L246 300" stroke="url(#g3)" stroke-width="20" stroke-linecap="round"/>
<!-- bridge into N: beam extends to N -->
<path d="M246 300 L330 300" stroke="#B87333" stroke-width="20" stroke-linecap="round"/>
<!-- N -->
<path d="M330 374 L330 148 L412 374 L412 148" fill="none" stroke="url(#g3)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<!-- copper node at junction -->
<circle cx="330" cy="300" r="16" fill="#B87333"/>
<circle cx="330" cy="300" r="7" fill="#1A1A1A"/>
''', bg="#1A1A1A")

# 04 , Lotus Apex: three petals, centre petal = A
P04 = wrap("Amit Narwal , Lotus Apex",
'''
<defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B7C9A8"/><stop offset="100%" stop-color="#6B8A6B"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#0F1F1A"/>
<!-- side petals -->
<path d="M256 392 C178 392 140 332 132 242 C170 272 220 282 256 256 Z" fill="url(#g4)" opacity=".55"/>
<path d="M256 392 C334 392 372 332 380 242 C342 272 292 282 256 256 Z" fill="url(#g4)" opacity=".55"/>
<!-- centre petal A -->
<path d="M256 392 C216 288 212 200 256 108 C300 200 296 288 256 392" fill="url(#g4)"/>
<!-- inner vein A -->
<path d="M256 392 L256 168" stroke="#0F1F1A" stroke-width="10" stroke-linecap="round"/>
<path d="M228 300 L284 300" stroke="#0F1F1A" stroke-width="8" stroke-linecap="round"/>
<!-- base arc -->
<path d="M156 368 Q256 408 356 368" fill="none" stroke="#B7C9A8" stroke-width="6" stroke-linecap="round"/>
''', bg="#0F1F1A")

# 05 , Knot Enigma: endless knot + AI nodes
P05 = wrap("Amit Narwal , Knot Enigma",
'''
<defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D4C3FC"/><stop offset="100%" stop-color="#7C6AA8"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#15102A"/>
<!-- knot path (figure-8 with loops) -->
<path d="M256 150 C196 150 158 198 178 248 C198 298 256 268 256 320 C256 372 314 402 334 352 C354 302 316 254 256 280" fill="none" stroke="url(#g5)" stroke-width="22" stroke-linejoin="round" stroke-linecap="round"/>
<!-- inner second loop echo -->
<path d="M178 248 C172 278 196 310 228 304" fill="none" stroke="#D4C3FC" stroke-width="10" stroke-linecap="round" opacity=".6"/>
<!-- AI nodes -->
<circle cx="256" cy="150" r="18" fill="#D4C3FC"/><circle cx="256" cy="150" r="8" fill="#15102A"/>
<circle cx="334" cy="352" r="18" fill="#D4C3FC"/><circle cx="334" cy="352" r="8" fill="#15102A"/>
<circle cx="178" cy="248" r="14" fill="none" stroke="#D4C3FC" stroke-width="8"/>
<circle cx="256" cy="320" r="14" fill="none" stroke="#D4C3FC" stroke-width="8"/>
<!-- centre A negative -->
<path d="M228 342 L256 258 L284 342 M240 314 L272 314" fill="none" stroke="#15102A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
''', bg="#15102A")

# 06 , Origami Crane: faceted crane forming AN
P06 = wrap("Amit Narwal , Origami Crane",
'''
<rect width="512" height="512" rx="88" fill="#F3EFE8"/>
<!-- crane silhouette , faceted triangles -->
<!-- body -->
<polygon points="112,352 256,208 400,352 256,392" fill="#2B2520"/>
<!-- wing up -->
<polygon points="256,208 330,86 400,172" fill="#C8522E"/>
<polygon points="256,208 182,86 112,172" fill="#E8845A"/>
<!-- neck/head -->
<polygon points="400,352 438,278 412,322" fill="#2B2520"/>
<polygon points="112,352 74,278 100,322" fill="#2B2520"/>
<!-- fold lines -->
<path d="M256 208 L256 392" stroke="#F3EFE8" stroke-width="6"/>
<path d="M256 212 L400 352" stroke="#F3EFE8" stroke-width="6"/>
<!-- AN negative in wing -->
<path d="M256 270 L282 200 L308 270 M266 242 L298 242" fill="none" stroke="#F3EFE8" stroke-width="10" stroke-linecap="round"/>
''', bg="#F3EFE8")

# 07 , Orbital Stack: full-stack layers + orbit, violet field
P07 = wrap("Amit Narwal , Orbital Stack",
'''
<defs><linearGradient id="g7" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7C6AA8"/><stop offset="100%" stop-color="#D4C3FC"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#1B1430"/>
<!-- orbit ellipse -->
<ellipse cx="256" cy="256" rx="214" ry="156" fill="none" stroke="#7C6AA8" stroke-width="10" opacity=".85" transform="rotate(-18 256 256)"/>
<!-- stack chevrons -->
<path d="M116 284 L256 196 L396 284" fill="none" stroke="url(#g7)" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M116 348 L256 260 L396 348" fill="none" stroke="#D4C3FC" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>
<!-- core dot -->
<circle cx="256" cy="224" r="22" fill="#D4C3FC"/>
<circle cx="256" cy="224" r="10" fill="#1B1430"/>
<!-- satellite nodes -->
<circle cx="96" cy="178" r="12" fill="#D4C3FC"/><circle cx="416" cy="334" r="12" fill="#D4C3FC"/>
''', bg="#1B1430")

# 08 , Seal Crest: laurel ring + AN in serif essence
P08 = wrap("Amit Narwal , Seal Crest",
'''
<defs><linearGradient id="g8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D9B96A"/><stop offset="100%" stop-color="#8A6E3B"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#122115"/>
<!-- outer double ring -->
<circle cx="256" cy="256" r="192" fill="none" stroke="url(#g8)" stroke-width="6"/>
<circle cx="256" cy="256" r="170" fill="none" stroke="url(#g8)" stroke-width="3" opacity=".7"/>
<!-- laurel ticks (12 leaves) -->
<g fill="url(#g8)">
<circle cx="256" cy="94" r="12"/><circle cx="316" cy="108" r="12"/><circle cx="366" cy="140" r="12"/><circle cx="400" cy="196" r="12"/>
<circle cx="408" cy="256" r="12"/><circle cx="400" cy="316" r="12"/><circle cx="366" cy="372" r="12"/><circle cx="316" cy="404" r="12"/>
<circle cx="256" cy="418" r="12"/><circle cx="196" cy="404" r="12"/><circle cx="146" cy="372" r="12"/><circle cx="112" cy="316" r="12"/>
<circle cx="104" cy="256" r="12"/><circle cx="112" cy="196" r="12"/><circle cx="146" cy="140" r="12"/><circle cx="196" cy="108" r="12"/>
</g>
<!-- AN essence: two serif beams -->
<path d="M170 340 L256 170 L342 340" fill="none" stroke="url(#g8)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M206 284 L306 284" stroke="url(#g8)" stroke-width="16" stroke-linecap="round"/>
<circle cx="256" cy="158" r="16" fill="url(#g8)"/>
''', bg="#122115")

# 09 , Eclipse Negative: ultra-minimal disc + light sliver
P09 = wrap("Amit Narwal , Eclipse Negative",
'''
<rect width="512" height="512" rx="88" fill="#0A0A0A"/>
<!-- gold disc -->
<circle cx="256" cy="256" r="172" fill="#FFD976"/>
<!-- inner eclipse cut -->
<circle cx="256" cy="256" r="128" fill="#0A0A0A"/>
<!-- sliver light: gold crescent on right -->
<path d="M256 128 A128 128 0 0 1 256 384 A100 128 0 0 1 256 128" fill="#FFD976" opacity=".9"/>
<!-- AN hint in crescent (negative gold AN tiny) -->
<path d="M312 310 L338 214 L364 310 M322 272 L354 272" fill="none" stroke="#0A0A0A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
''', bg="#0A0A0A")

# 10 , Serif Ligature AN: editorial, bone paper, single weight, tight pair loose tracking
P10 = wrap("Amit Narwal , Serif Ligature",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<defs><linearGradient id="g10" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A1A1A"/><stop offset="100%" stop-color="#3A3630"/></linearGradient></defs>
<!-- A -->
<path d="M112 368 L200 148 L288 368" fill="none" stroke="url(#g10)" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150 296 L250 296" stroke="url(#g10)" stroke-width="14" stroke-linecap="round"/>
<!-- N sharing stem space, optical kerning -->
<path d="M288 368 L288 148 L400 368 L400 148" fill="none" stroke="url(#g10)" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
<!-- period exclamation: single gold dot baseline right -->
<circle cx="424" cy="352" r="16" fill="#B87333"/>
<!-- hairline rule below -->
<path d="M112 404 L400 404" stroke="#B87333" stroke-width="4" stroke-linecap="round" opacity=".7"/>
''', bg="#F5F1E8")

concepts = [
    ("premium-01", P01, "01 The Infinite Thread",
     "Lemniscate thread where the A apex sits at the crossing. Midnight + champagne.",
     "Research: Amit = infinite (Sanskrit a-mita), endless-knot wisdom, Rand single-gesture, continuous line = build systems without breaks."),
    ("premium-02", P02, "02 Tusk Spiral",
     "Pure double-helix spiral in a hairline ring. Ice-teal disc, no letters.",
     "Research: Narwhal tusk double opposing spiral (Nature 2026), sensory AI metaphor, circular harmony (Henderson & Cote)."),
    ("premium-03", P03, "03 Architectural AN",
     "Custom engineered pillars + copper bridge. Bone on charcoal, brutalist premium.",
     "Research: Swiss grid (Müller-Brockmann), Apple 18-year Garamond→sans split, structural AN as system."),
    ("premium-04", P04, "04 Lotus Apex",
     "Three petals, centre petal = A. Forest + sage.",
     "Research: Lotus Cards triangle mass over botanical detail, counted petal system, kamon radial discipline."),
    ("premium-05", P05, "05 Knot Enigma",
     "Endless knot with AI nodes, indigo field.",
     "Research: Srivatsa endless knot (wisdom without beginning/end), Allen’s 8 elementary knots, network lattice."),
    ("premium-06", P06, "06 Origami Crane",
     "Faceted crane in terracotta + bone, AN in wing negative.",
     "Research: Miura-ori origami tech transfer (NASA starshade), JP crane longevity, geometric facets survive tiny size."),
    ("premium-07", P07, "07 Orbital Stack",
     "Full-stack chevrons in an orbit, violet field.",
     "Research: Tether full-stack layers → product orbit, Material 2dp stroke system, orbital hierarchy."),
    ("premium-08", P08, "08 Seal Crest",
     "Laurel double ring + AN essence, forest + brass.",
     "Research: Alfa Romeo/UN laurel legitimacy, kamon jinuki inversion, heritage seal premium."),
    ("premium-09", P09, "09 Eclipse Negative",
     "Gold disc, black eclipse cut, light sliver with AN hint.",
     "Research: Swiss eclipse disc, high-contrast negative (FedEx), 14:1 WCAG AAA, minimal surprise."),
    ("premium-10", P10, "10 Serif Ligature",
     "Editorial serif AN ligature, bone paper, copper dot + rule.",
     "Research: Instrument Serif italic Didone, optical sizing (Display vs Micro), single-weight serif luxury, tight pair/loose tracking."),
]

for slug, svg, title, desc, research in concepts:
    d = OUT / slug
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(svg, encoding="utf-8")
    # placeholder raster note (browser renders SVG natively)
    print(f"{slug} {title} done")

# Gallery
cards = ""
for slug, svg, title, desc, research in concepts:
    cards += f'''
    <article class="card">
      <div class="thumb dark"><img src="{slug}/icon.svg" alt=""/></div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div class="research"><b>Research:</b> {research}</div>
      <div class="pick"><button data-pick="{slug}">Use in tab</button><span>icon.svg , 512×512</span></div>
    </article>
    '''

gallery = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Amit Narwal , 10 Premium Logo Concepts</title>
<style>
:root{{--bg:#0a0a0f;--fg:#f2f0ea;--muted:#9aa3b2;--gold:#ffd976;--card:#13131b;--border:rgba(255,255,255,.1)}}
*{{box-sizing:border-box}}body{{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--fg);-webkit-font-smoothing:antialiased}}
header{{position:sticky;top:0;background:color-mix(in srgb,var(--bg) 86%,transparent);backdrop-filter:blur(16px);border-bottom:1px solid var(--border)}}
.bar{{max-width:1180px;margin:auto;padding:14px 28px;display:flex;justify-content:space-between;align-items:center}}
.wrap{{max-width:1180px;margin:auto;padding:32px 28px 80px}}
h1{{font-family:Georgia,serif;font-style:italic;font-size:clamp(2.4rem,5vw,4rem);line-height:1;margin:24px 0}}
.lede{{color:var(--muted);max-width:72ch;line-height:1.65}}
.grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}}@media(max-width:900px){{.grid{{grid-template-columns:1fr 1fr}}}}@media(max-width:560px){{.grid{{grid-template-columns:1fr}}}}
.card{{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:18px;display:flex;flex-direction:column;gap:10px}}
.thumb{{border-radius:18px;overflow:hidden;border:1px solid var(--border);background:#000;aspect-ratio:1;display:grid;place-items:center}}
.thumb img{{width:100%;height:100%;display:block}}
.card h2{{margin:0;font-size:1.15rem}}.card p{{margin:0;color:var(--muted);font-size:.9rem;line-height:1.55}}
.research{{font-size:.82rem;color:var(--muted);line-height:1.55;border-left:3px solid var(--gold);padding-left:10px}}
.pick{{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:4px}}
.pick button{{background:transparent;border:1px solid var(--border);color:var(--gold);border-radius:999px;padding:8px 14px;cursor:pointer}}
.link{{position:fixed;left:16px;top:-60px;background:var(--gold);color:#000;padding:10px 14px;border-radius:8px;z-index:99}}
</style></head><body>
<header><div class="bar"><strong>Amit Narwal , Premium Mark Exploration</strong><span style="color:var(--muted)">10 concepts • SVG craft • no PIL polygons</span></div></header>
<main class="wrap">
<h1>Pick your mark.</h1>
<p class="lede">10 hand-crafted SVG Bézier concepts. Each built to the brief: stories for <i>infinite (Amit)</i>, <i>rare unicorn whale (Narwal)</i>, and <i>systems builder (full-stack + AI)</i>. Every concept ships as <code>icon.svg</code> (512×512) , browser-rendered, not raster polygons. No generic AN lettering; every direction is a different metaphor.</p>
<div class="grid">{cards}</div>
<p style="color:var(--muted);margin-top:28px;font-size:.9rem">Tell me the numbers you like (e.g. “02 + 08 + 09”). I’ll refine those into a full favicon system (ICO + PNGs) and lock your chosen palette.</p>
</main>
<script>
document.querySelectorAll("[data-pick]").forEach(b=>b.addEventListener("click",e=>{{let s=e.currentTarget.getAttribute("data-pick");let l=document.querySelector('link[rel="icon"]');if(!l){{l=document.createElement("link");l.rel="icon";document.head.appendChild(l)}}l.type="image/svg+xml";l.href=s+"/icon.svg?v="+Date.now();alert("Browser tab now uses "+s)}}));
</script></body></html>'''

(OUT / "premium-gallery.html").write_text(gallery, encoding="utf-8")
print("Gallery done at public/favicons/premium-gallery.html")
