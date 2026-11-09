"""Generate premium-11..20 + expanded 20-card gallery."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "favicons"
OUT.mkdir(parents=True, exist_ok=True)

def wrap(title, body, bg="#0A0A0A"):
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="{title}">
<title>{title}</title>
<rect width="512" height="512" rx="88" fill="{bg}"/>
{body}
</svg>'''

P11 = wrap("Amit Narwal , Auric Monolith",
'''
<defs><linearGradient id="g11" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F5F1E8"/><stop offset="100%" stop-color="#D8CFB8"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#171512"/>
<!-- monolith slab -->
<path d="M178 80 L334 80 L352 432 L160 432 Z" fill="url(#g11)"/>
<path d="M334 80 L352 432 L372 432 L358 80 Z" fill="#8A7A60"/>
<!-- incised A -->
<path d="M256 140 L200 332 L312 332 Z" fill="none" stroke="#171512" stroke-width="22" stroke-linejoin="round"/>
<path d="M222 268 L290 268" stroke="#171512" stroke-width="14" stroke-linecap="round"/>
<!-- shadow base -->
<rect x="160" y="432" width="192" height="14" fill="#A67C52"/>
''', bg="#171512")

P12 = wrap("Amit Narwal , Signal Wave",
'''
<defs><radialGradient id="g12bg" cx=".5" cy=".5" r=".5"><stop offset="0%" stop-color="#0B3A4A"/><stop offset="100%" stop-color="#06202E"/></radialGradient></defs>
<rect width="512" height="512" rx="88" fill="url(#g12bg)"/>
<g fill="none" stroke="#E6F4F3" stroke-linecap="round">
<circle cx="228" cy="286" r="36" stroke-width="10" opacity=".95"/>
<circle cx="228" cy="286" r="76" stroke-width="8" opacity=".65"/>
<circle cx="228" cy="286" r="116" stroke-width="6" opacity=".42"/>
<circle cx="228" cy="286" r="156" stroke-width="4" opacity=".25"/>
<circle cx="228" cy="286" r="196" stroke-width="3" opacity=".16"/>
</g>
<!-- A formed by gap/wave fusion on right -->
<path d="M300 356 L330 250 L360 356" fill="none" stroke="#E6F4F3" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M312 310 L348 310" stroke="#E6F4F3" stroke-width="12" stroke-linecap="round"/>
<circle cx="228" cy="286" r="16" fill="#E6F4F3"/>
<!-- tusk needle -->
<path d="M228 286 L338 168" stroke="#7ECFC4" stroke-width="9" stroke-linecap="round"/>
''', bg="#06202E")

P13 = wrap("Amit Narwal , Proof Seal",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<!-- red vermillion square seal, slightly rotated -->
<g transform="rotate(-6 256 256)">
<rect x="132" y="124" width="248" height="264" fill="#C73E2E"/>
<rect x="144" y="136" width="224" height="240" fill="none" stroke="#F5F1E8" stroke-width="6"/>
<!-- Q.E.D. square glyph -->
<rect x="238" y="172" width="36" height="36" fill="none" stroke="#F5F1E8" stroke-width="8"/>
<text x="256" y="320" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="86" fill="#F5F1E8">AN</text>
<text x="256" y="356" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" letter-spacing="3" fill="#F5F1E8">Q.E.D.</text>
</g>
''', bg="#F5F1E8")

P14 = wrap("Amit Narwal , Orbital Lattice",
'''
<defs><linearGradient id="g14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D9B96A"/><stop offset="100%" stop-color="#8A6E3B"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#131C3A"/>
<!-- 8-point lattice -->
<g fill="none" stroke="url(#g14)" stroke-width="10" stroke-linejoin="round">
<rect x="156" y="156" width="200" height="200"/>
<rect x="156" y="156" width="200" height="200" transform="rotate(45 256 256)"/>
<circle cx="256" cy="256" r="118" stroke-width="6" opacity=".7"/>
</g>
<!-- nodes -->
<g fill="url(#g14)"><circle cx="256" cy="156" r="14"/><circle cx="356" cy="256" r="14"/><circle cx="256" cy="356" r="14"/><circle cx="156" cy="256" r="14"/><circle cx="186" cy="186" r="10"/><circle cx="326" cy="186" r="10"/><circle cx="326" cy="326" r="10"/><circle cx="186" cy="326" r="10"/></g>
<!-- A negative centre -->
<path d="M226 314 L256 222 L286 314" fill="none" stroke="#131C3A" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M238 280 L274 280" stroke="#131C3A" stroke-width="10" stroke-linecap="round"/>
''', bg="#131C3A")

P15 = wrap("Amit Narwal , Ink Bloom",
'''
<rect width="512" height="512" rx="88" fill="#F5F7F2"/>
<!-- brush ink petals , black, variable -->
<path d="M256 382 C248 302 240 210 256 108 C272 210 264 302 256 382" fill="#111111"/>
<path d="M256 382 C196 318 168 254 150 176 C208 210 246 288 256 382" fill="#111111" opacity=".92"/>
<path d="M256 382 C316 318 344 254 362 176 C304 210 266 288 256 382" fill="#111111" opacity=".92"/>
<path d="M256 382 C206 346 160 344 108 360 C150 308 214 306 256 382" fill="#111111" opacity=".78"/>
<path d="M256 382 C306 346 352 344 404 360 C362 308 298 306 256 382" fill="#111111" opacity=".78"/>
<!-- vein -->
<path d="M256 382 L256 138" stroke="#F5F7F2" stroke-width="7" stroke-linecap="round"/>
<!-- root tick -->
<path d="M210 404 L302 404" stroke="#111111" stroke-width="8" stroke-linecap="round"/>
''', bg="#F5F7F2")

P16 = wrap("Amit Narwal , Compass Cartographer",
'''
<rect width="512" height="512" rx="88" fill="#E8DFC8"/>
<defs><linearGradient id="g16" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A2B4A"/><stop offset="100%" stop-color="#0E1A30"/></linearGradient></defs>
<g transform="rotate(8 256 256)">
<!-- 16-point star -->
<polygon points="256,70 270,196 332,120 282,214 412,196 296,238 376,292 282,252 312,376 256,286 200,376 230,252 136,292 216,238 100,196 230,214 180,120 242,196" fill="url(#g16)"/>
</g>
<circle cx="256" cy="256" r="78" fill="#E8DFC8" stroke="#1A2B4A" stroke-width="6"/>
<!-- coordinates -->
<text x="256" y="248" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="2" fill="#1A2B4A">28.6°N</text>
<text x="256" y="274" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="2" fill="#1A2B4A">77.2°E</text>
<!-- north needle -->
<path d="M256 96 L262 256 L250 256 Z" fill="#C73E2E"/>
''', bg="#E8DFC8")

P17 = wrap("Amit Narwal , Glass Prism",
'''
<defs><linearGradient id="g17" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FFE9A8"/><stop offset="50%" stop-color="#FFD976"/><stop offset="100%" stop-color="#E8A23B"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#EEF1F4"/>
<!-- beam in -->
<rect x="56" y="246" width="102" height="18" fill="#1A1A1A"/>
<!-- prism -->
<polygon points="158,158 158,354 330,256" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="8" stroke-linejoin="round"/>
<polygon points="158,158 158,354 244,256" fill="#EAF2FA"/>
<!-- spectrum out -->
<path d="M330 204 L452 152 L452 168 L330 236 Z" fill="url(#g17)"/>
<path d="M330 256 L452 256 L452 272 L330 272 Z" fill="#E8A23B"/>
<path d="M330 308 L452 360 L452 344 L330 292 Z" fill="#C73E2E" opacity=".8"/>
<!-- A in prism refraction -->
<path d="M200 316 L218 238 L236 316 M206 284 L230 284" fill="none" stroke="#1A1A1A" stroke-width="9" stroke-linecap="round"/>
''', bg="#EEF1F4")

P18 = wrap("Amit Narwal , Feather & Node",
'''
<rect width="512" height="512" rx="88" fill="#0E0E12"/>
<!-- feather -->
<path d="M128 384 C178 268 258 142 392 84 C396 164 316 298 192 384 Z" fill="#F5F1E8"/>
<path d="M128 384 C188 300 256 216 352 148" fill="none" stroke="#0E0E12" stroke-width="10" stroke-linecap="round"/>
<!-- barbs -->
<g stroke="#0E0E12" stroke-width="6" stroke-linecap="round">
<path d="M186 318 L236 332"/><path d="M218 272 L272 286"/><path d="M250 226 L304 240"/><path d="M282 180 L334 194"/>
</g>
<!-- node at tip -->
<circle cx="128" cy="384" r="26" fill="#C0C0C8"/>
<circle cx="128" cy="384" r="12" fill="#0E0E12"/>
<circle cx="392" cy="84" r="14" fill="#C0C0C8"/>
''', bg="#0E0E12")

P19 = wrap("Amit Narwal , Sundial",
'''
<defs><linearGradient id="g19" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E9D8A6"/><stop offset="100%" stop-color="#8A6E3B"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#D9C7A5"/>
<circle cx="256" cy="256" r="188" fill="#B8985A"/>
<circle cx="256" cy="256" r="168" fill="#D9C7A5"/>
<!-- hour marks -->
<g stroke="#1A1A1A" stroke-width="8" stroke-linecap="round">
<line x1="256" y1="104" x2="256" y2="128"/><line x1="256" y1="384" x2="256" y2="408"/>
<line x1="104" y1="256" x2="128" y2="256"/><line x1="384" y1="256" x2="408" y2="256"/>
<line x1="148" y1="148" x2="164" y2="164"/><line x1="348" y1="348" x2="364" y2="364"/>
<line x1="364" y1="148" x2="348" y2="164"/><line x1="164" y1="348" x2="148" y2="364"/>
</g>
<!-- gnomon as A leg -->
<polygon points="256,108 268,256 244,256" fill="url(#g19)" stroke="#1A1A1A" stroke-width="4"/>
<!-- centre pin -->
<circle cx="256" cy="256" r="34" fill="url(#g19)" stroke="#1A1A1A" stroke-width="4"/>
<path d="M240 286 L256 224 L272 286" fill="none" stroke="#1A1A1A" stroke-width="10" stroke-linecap="round"/>
''', bg="#D9C7A5")

P20 = wrap("Amit Narwal , Folded Ribbon",
'''
<defs><linearGradient id="g20" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#FF6B35"/><stop offset="100%" stop-color="#E8A23B"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#16161A"/>
<!-- ribbon AN as one continuous path -->
<path d="M112 372 L196 140 L280 372 L280 196 L364 372 L364 140" fill="none" stroke="url(#g20)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"/>
<!-- fold shadow -->
<path d="M196 140 L280 372" stroke="#16161A" stroke-width="10" stroke-linecap="round" opacity=".55"/>
<!-- period dot , the ownable full stop -->
<circle cx="404" cy="352" r="26" fill="#FF6B35"/>
<circle cx="404" cy="352" r="12" fill="#16161A"/>
<!-- hairline underline -->
<path d="M112 404 L404 404" stroke="#FF6B35" stroke-width="5" stroke-linecap="round" opacity=".7"/>
''', bg="#16161A")

concepts = [
    ("premium-11", P11, "11 Auric Monolith", "Basalt slab with incised A , builder of lasting systems.", "Research: Swiss architectural monogram, bone/bronze museum premium, Müller-Brockmann grid, Ram monolith."),
    ("premium-12", P12, "12 Signal Wave", "Echolocation arcs resolving into A , sensing AI.", "Research: Narwhal echolocation physics, concentric signal premium (Sonar), Gestalt resonance."),
    ("premium-13", P13, "13 Proof Seal", "Vermillion Q.E.D. seal , verified & shipped.", "Research: Mathematical proof mark, editorial seal authority, red/black intellectual premium."),
    ("premium-14", P14, "14 Orbital Lattice", "Islamic 8-point lattice as neural mesh.", "Research: Girih lattice mathematics, Escher revival, finite rules → infinite, sacred geometry."),
    ("premium-15", P15, "15 Ink Bloom", "Sumi-e ink lotus , code to flower.", "Research: Japanese ink discipline, lotus counted-petal system, brush Bézier variable width."),
    ("premium-16", P16, "16 Compass Cartographer", "16-point star with Delhi coords.", "Research: Kuyōmon nine-bodies star, kamon radial navigation, parchment cartographer heritage."),
    ("premium-17", P17, "17 Glass Prism", "Prism refracting beam into gold A.", "Research: Transparency/clarity as premium (Aesop, Teenage Eng), refraction as AI distillation."),
    ("premium-18", P18, "18 Feather & Node", "Editorial feather meets circuit node.", "Research: Writer-engineer duality, quill nostalgia (Six Pence), node = system AGI point."),
    ("premium-19", P19, "19 Sundial", "Brass sundial , infinite time, on schedule.", "Research: Heritage craft (Jaeger), gnomon as structure, paper/brass luxury oxidation."),
    ("premium-20", P20, "20 Folded Ribbon", "One ribbon through AN to a period dot.", "Research: YSL interlock discipline, single-thread continuity (Rand), dot as ownable signature."),
]

for slug, svg, title, desc, research in concepts:
    d = OUT / slug
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(svg, encoding="utf-8")
    print(slug, title, "done")

# 20-card gallery (01-10 preserved + 11-20 new)
all_items = [
    ("premium-01", "01 The Infinite Thread", "Lemniscate thread where the A apex sits at the crossing. Midnight + champagne.", "Research: Amit = infinite (Sanskrit a-mita), endless-knot wisdom, Rand single-gesture, continuous line = build systems without breaks."),
    ("premium-02", "02 Tusk Spiral", "Pure double-helix spiral in a hairline ring. Ice-teal disc, no letters.", "Research: Narwhal tusk double opposing spiral (Nature 2026), sensory AI metaphor, circular harmony (Henderson & Cote)."),
    ("premium-03", "03 Architectural AN", "Custom engineered pillars + copper bridge. Bone on charcoal, brutalist premium.", "Research: Swiss grid (Müller-Brockmann), Apple 18-year Garamond→sans split, structural AN as system."),
    ("premium-04", "04 Lotus Apex", "Three petals, centre petal = A. Forest + sage.", "Research: Lotus Cars triangle mass over botanical detail, counted petal system, kamon radial discipline."),
    ("premium-05", "05 Knot Enigma", "Endless knot with AI nodes, indigo field.", "Research: Srivatsa endless knot (wisdom without beginning/end), Allen's 8 elementary knots, network lattice."),
    ("premium-06", "06 Origami Crane", "Faceted crane in terracotta + bone, AN in wing negative.", "Research: Miura-ori origami tech transfer (NASA starshade), JP crane longevity, geometric facets survive tiny size."),
    ("premium-07", "07 Orbital Stack", "Full-stack chevrons in an orbit, violet field.", "Research: Full-stack layers → product orbit, Material 2dp stroke system, orbital hierarchy."),
    ("premium-08", "08 Seal Crest", "Laurel double ring + AN essence, forest + brass.", "Research: Alfa Romeo/UN laurel legitimacy, kamon jinuki inversion, heritage seal premium."),
    ("premium-09", "09 Eclipse Negative", "Gold disc, black eclipse cut, light sliver with AN hint.", "Research: Swiss eclipse disc, high-contrast negative (FedEx), 14:1 WCAG AAA, minimal surprise."),
    ("premium-10", "10 Serif Ligature", "Editorial serif AN ligature, bone paper, copper dot + rule.", "Research: Instrument Serif italic Didone, optical sizing (Display vs Micro), single-weight serif luxury, tight pair/loose tracking."),
] + [(slug, title, desc, res) for slug, svg, title, desc, res in concepts]

cards = ""
for slug, title, desc, research in all_items:
    cards += f'''
    <article class="card">
      <div class="thumb"><img src="{slug}/icon.svg" alt=""/></div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div class="research"><b>Research:</b> {research}</div>
      <div class="pick"><button data-pick="{slug}">Use in tab</button><span>icon.svg 512</span></div>
    </article>
    '''

gallery = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Amit Narwal , 20 Premium Logo Concepts</title>
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
</style></head><body>
<header><div class="bar"><strong>Amit Narwal , Premium Mark Exploration</strong><span style="color:var(--muted)">20 concepts • SVG craft • no PIL polygons</span></div></header>
<main class="wrap">
<h1>Pick your mark.</h1>
<p class="lede">20 hand-crafted SVG Bézier concepts across two batches. Each built to the brief: stories for <i>infinite (Amit)</i>, <i>rare unicorn whale (Narwal)</i>, and <i>systems builder (full-stack + AI)</i>. Every concept ships as <code>icon.svg</code> (512×512) , browser-rendered, Bézier-built. The new batch 11-20 explores materials, sound, ink, navigation, glass, feather, time and ribbon , not repeats of lotus/knot/spiral.</p>
<div class="grid">{cards}</div>
<p style="color:var(--muted);margin-top:28px;font-size:.9rem">Tell me the numbers you like (e.g. “12 + 16 + 18”). I’ll refine those into a full favicon system (ICO + PNGs) and lock your chosen palette.</p>
</main>
<script>
document.querySelectorAll("[data-pick]").forEach(b=>b.addEventListener("click",e=>{{let s=e.currentTarget.getAttribute("data-pick");let l=document.querySelector('link[rel="icon"]');if(!l){{l=document.createElement("link");l.rel="icon";document.head.appendChild(l)}}l.type="image/svg+xml";l.href=s+"/icon.svg?v="+Date.now();alert("Browser tab now uses "+s)}}));
</script></body></html>'''

(OUT / "premium-gallery.html").write_text(gallery, encoding="utf-8")
print("Gallery expanded to 20 at public/favicons/premium-gallery.html")
