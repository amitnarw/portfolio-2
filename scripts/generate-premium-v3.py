"""Generate premium-21..40 + expanded 40-card gallery."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "favicons"
OUT.mkdir(parents=True, exist_ok=True)

def wrap(title, body, bg="#0A0A0A"):
    esc = title.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="{esc}">
<title>{esc}</title>
<rect width="512" height="512" rx="88" fill="{bg}"/>
{body}
</svg>'''

P21 = wrap("Amit Narwal — Roman Arch",
'''
<defs><linearGradient id="g21" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#EDE6D6"/><stop offset="100%" stop-color="#D8CDB0"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#1E1E20"/>
<!-- aqueduct arch -->
<path d="M112 384 L112 256 A144 144 0 0 1 400 256 L400 384 L340 384 L340 256 A84 84 0 0 0 172 256 L172 384 Z" fill="url(#g21)"/>
<!-- keystone -->
<polygon points="240,118 272,118 268,156 244,156" fill="#8A7A60"/>
<!-- A voussoir lines -->
<path d="M168 384 L168 256 A88 88 0 0 1 344 256 L344 384" fill="none" stroke="#1E1E20" stroke-width="4" opacity=".3"/>
''', bg="#1E1E20")

P22 = wrap("Amit Narwal — Aurora Form",
'''
<defs><linearGradient id="g22a" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7CF5C8"/><stop offset="50%" stop-color="#A8E6D8"/><stop offset="100%" stop-color="#3A9EA8"/></linearGradient>
<linearGradient id="g22b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A2B4A"/><stop offset="100%" stop-color="#0B1220"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="url(#g22b)"/>
<!-- aurora curtains -->
<path d="M88 340 C188 260 288 360 388 268 L388 356 C288 448 188 348 88 428 Z" fill="url(#g22a)" opacity=".55"/>
<path d="M118 300 C198 236 298 336 378 256 L378 300 C298 380 198 280 118 344 Z" fill="#7CF5C8" opacity=".35"/>
<!-- A in negative -->
<path d="M216 342 L256 236 L296 342 M232 298 L280 298" fill="none" stroke="#0B1220" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="256" cy="152" r="12" fill="#E6FFFB"/>
''', bg="#0B1220")

P23 = wrap("Amit Narwal — Mango Leaf Monsoon",
'''
<rect width="512" height="512" rx="88" fill="#101E33"/>
<!-- mango leaf shape -->
<path d="M256 92 C334 140 362 222 352 308 C298 252 268 180 256 92" fill="#1F4D3A"/>
<path d="M256 92 C178 140 150 222 160 308 C214 252 244 180 256 92" fill="#2A7A5C" opacity=".9"/>
<!-- vein -->
<path d="M256 92 L256 380" stroke="#101E33" stroke-width="8" stroke-linecap="round"/>
<!-- rain chain forming A -->
<g fill="none" stroke="#A8C4D8" stroke-width="10" stroke-linecap="round">
<path d="M200 368 L256 244 L312 368" />
<path d="M228 316 L284 316" stroke-width="8"/>
</g>
<g fill="#A8C4D8"><circle cx="200" cy="368" r="8"/><circle cx="312" cy="368" r="8"/><circle cx="256" cy="244" r="8"/></g>
''', bg="#101E33")

P24 = wrap("Amit Narwal — Peacock Eye",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<!-- eye almond -->
<path d="M256 96 C340 148 372 256 256 356 C140 256 172 148 256 96" fill="#1F4D3A"/>
<!-- inner jewel -->
<ellipse cx="256" cy="226" rx="72" ry="54" fill="#0F3A2A"/>
<ellipse cx="256" cy="226" rx="52" ry="38" fill="#C9A86A"/>
<ellipse cx="256" cy="226" rx="28" ry="22" fill="#7ECFC4"/>
<circle cx="256" cy="226" r="12" fill="#F5F1E8"/>
<!-- A hint in almond bottom -->
<path d="M224 334 L256 272 L288 334" fill="none" stroke="#F5F1E8" stroke-width="12" stroke-linecap="round" opacity=".8"/>
<!-- year notch -->
<path d="M120 404 L392 404" stroke="#1F4D3A" stroke-width="6" stroke-linecap="round"/>
''', bg="#F5F1E8")

P25 = wrap("Amit Narwal — Terracotta Atelier",
'''
<rect width="512" height="512" rx="88" fill="#1A1A1A"/>
<!-- clay ring -->
<circle cx="256" cy="256" r="148" fill="none" stroke="#C8522E" stroke-width="38"/>
<circle cx="256" cy="256" r="148" fill="none" stroke="#A64628" stroke-width="38" stroke-dasharray="28 22" opacity=".35"/>
<!-- thumb-pressed A -->
<path d="M196 342 L256 186 L316 342" fill="none" stroke="#F5F1E8" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M220 284 L292 284" stroke="#F5F1E8" stroke-width="12" stroke-linecap="round"/>
<!-- clay speckle -->
<g fill="#F5F1E8" opacity=".55"><circle cx="318" cy="136" r="6"/><circle cx="138" cy="226" r="5"/><circle cx="368" cy="304" r="5"/></g>
''', bg="#1A1A1A")

P26 = wrap("Amit Narwal — Isometric Cube",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<!-- iso cube -->
<polygon points="256,112 356,170 356,286 256,344 156,286 156,170" fill="none" stroke="#1A1A1A" stroke-width="16" stroke-linejoin="round"/>
<polygon points="256,112 356,170 256,228 156,170" fill="#DDD8C8"/>
<polygon points="156,170 256,228 256,344 156,286" fill="#D9D1BC"/>
<polygon points="256,228 356,170 356,286 256,344" fill="#C9BFB0"/>
<!-- A edge highlight -->
<path d="M216 302 L256 196 L296 302 M228 268 L284 268" fill="none" stroke="#1A1A1A" stroke-width="12" stroke-linecap="round"/>
''', bg="#F5F1E8")

P27 = wrap("Amit Narwal — Mandala Negative",
'''
<rect width="512" height="512" rx="88" fill="#1A1A1A"/>
<!-- 12 petals -->
<g fill="#E8A23B">
<circle cx="256" cy="106" r="22"/><circle cx="256" cy="406" r="22"/><circle cx="106" cy="256" r="22"/><circle cx="406" cy="256" r="22"/>
<circle cx="362" cy="150" r="16"/><circle cx="150" cy="362" r="16"/><circle cx="362" cy="362" r="16"/><circle cx="150" cy="150" r="16"/>
<circle cx="330" cy="104" r="12" opacity=".8"/><circle cx="182" cy="104" r="12" opacity=".8"/><circle cx="330" cy="408" r="12" opacity=".8"/><circle cx="182" cy="408" r="12" opacity=".8"/>
</g>
<circle cx="256" cy="256" r="108" fill="none" stroke="#E8A23B" stroke-width="8"/>
<!-- AN cut -->
<path d="M216 310 L256 202 L296 310 M228 270 L284 270" fill="none" stroke="#F5F1E8" stroke-width="14" stroke-linecap="round"/>
<circle cx="256" cy="256" r="36" fill="none" stroke="#E8A23B" stroke-width="6" opacity=".65"/>
''', bg="#1A1A1A")

P28 = wrap("Amit Narwal — Zaha Sweep",
'''
<rect width="512" height="512" rx="88" fill="#0E0E12"/>
<!-- sweeping curve AN -->
<path d="M112 384 L212 128 L312 384" fill="none" stroke="#F5F1E8" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"/>
<!-- fluid extension to N -->
<path d="M312 384 C352 320 312 224 400 160" fill="none" stroke="#E6E6E6" stroke-width="36" stroke-linecap="round"/>
<path d="M400 160 L400 384" stroke="#F5F1E8" stroke-width="36" stroke-linecap="round"/>
<path d="M156 284 L276 284" stroke="#0E0E12" stroke-width="16" stroke-linecap="round"/>
<circle cx="212" cy="128" r="18" fill="#F5F1E8"/>
''', bg="#0E0E12")

P29 = wrap("Amit Narwal — Vinyl Groove",
'''
<rect width="512" height="512" rx="88" fill="#0A0A0A"/>
<circle cx="256" cy="256" r="188" fill="#111111"/>
<circle cx="256" cy="256" r="188" fill="none" stroke="#C0C0C8" stroke-width="4"/>
<circle cx="256" cy="256" r="156" fill="none" stroke="#C0C0C8" stroke-width="3" opacity=".55"/>
<circle cx="256" cy="256" r="124" fill="none" stroke="#C0C0C8" stroke-width="3" opacity=".35"/>
<circle cx="256" cy="256" r="92" fill="#0A0A0A"/>
<circle cx="256" cy="256" r="92" fill="none" stroke="#C0C0C8" stroke-width="4"/>
<!-- label A + groove into A -->
<circle cx="256" cy="256" r="52" fill="#C0C0C8"/>
<path d="M230 276 L256 212 L282 276 M238 250 L274 250" fill="none" stroke="#0A0A0A" stroke-width="10" stroke-linecap="round"/>
<circle cx="256" cy="256" r="9" fill="#0A0A0A"/>
<path d="M92 344 A188 188 0 0 0 344 92" fill="none" stroke="#C0C0C8" stroke-width="6" stroke-linecap="round" opacity=".8"/>
''', bg="#0A0A0A")

P30 = wrap("Amit Narwal — Fortress Bastion",
'''
<rect width="512" height="512" rx="88" fill="#1F1E1A"/>
<!-- bastion silhouette -->
<path d="M112 384 L112 288 L180 288 L180 240 L256 148 L332 240 L332 288 L400 288 L400 384 Z" fill="#B8985A"/>
<!-- battlement notches -->
<g fill="#1F1E1A"><rect x="180" y="222" width="32" height="18"/><rect x="300" y="222" width="32" height="18"/></g>
<rect x="240" y="230" width="32" height="18" fill="#1F1E1A"/>
<!-- A gateway -->
<path d="M256 384 L256 268 A36 36 0 0 1 292 304 L292 384 Z" fill="#1F1E1A"/>
<path d="M256 384 L256 268 A36 36 0 0 0 220 304 L220 384 Z" fill="#1F1E1A" opacity=".85"/>
<!-- flag -->
<path d="M256 148 L256 104 L312 120 L256 136" fill="#C73E2E"/>
''', bg="#1F1E1A")

P31 = wrap("Amit Narwal — Twin Cranes",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<!-- twin crane silhouettes (mirrored) -->
<g fill="#C73E2E">
<path d="M128 384 L128 260 L180 200 L232 260 L232 384 Z"/>
<path d="M180 200 L208 200 L232 260 L208 252 Z" opacity=".8"/>
<path d="M256 384 L256 260 L308 200 L360 260 L360 384 Z" fill="#2B2520"/>
<path d="M308 200 L336 200 L360 260 L336 252 Z" fill="#2B2520" opacity=".8"/>
</g>
<!-- hearts formed by negatives -->
<path d="M180 384 C160 340 150 314 180 298 C210 314 220 340 240 384" fill="none" stroke="#C73E2E" stroke-width="10" stroke-linecap="round"/>
<circle cx="256" cy="130" r="14" fill="#C73E2E"/>
''', bg="#F5F1E8")

P32 = wrap("Amit Narwal — Mirror Pair",
'''
<rect width="512" height="512" rx="88" fill="#101010"/>
<defs><linearGradient id="g32" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E6E6E6"/><stop offset="100%" stop-color="#8A8A8A"/></linearGradient></defs>
<!-- mirrored A pair, chrome to black fade -->
<path d="M116 384 L180 148 L244 384" fill="none" stroke="url(#g32)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M268 384 L332 148 L396 384" fill="none" stroke="#1A1A1A" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>
<!-- center mirror line -->
<rect x="252" y="124" width="8" height="260" fill="#F5F1E8" opacity=".7"/>
<!-- reflection ticks -->
<g stroke="#F5F1E8" stroke-width="4" stroke-linecap="round" opacity=".5"><path d="M180 384 L180 406"/><path d="M332 384 L332 406"/></g>
''', bg="#101010")

P33 = wrap("Amit Narwal — Globe Wire",
'''
<rect width="512" height="512" rx="88" fill="#0B1220"/>
<!-- wire globe -->
<circle cx="256" cy="256" r="178" fill="none" stroke="#D9B96A" stroke-width="6"/>
<ellipse cx="256" cy="256" rx="132" ry="178" fill="none" stroke="#D9B96A" stroke-width="4" opacity=".75"/>
<line x1="78" y1="256" x2="434" y2="256" stroke="#D9B96A" stroke-width="4" opacity=".75"/>
<ellipse cx="256" cy="184" rx="148" ry="42" fill="none" stroke="#D9B96A" stroke-width="4" opacity=".6"/>
<ellipse cx="256" cy="328" rx="148" ry="42" fill="none" stroke="#D9B96A" stroke-width="4" opacity=".6"/>
<!-- A meridian -->
<path d="M196 342 L256 172 L316 342" fill="none" stroke="#D9B96A" stroke-width="22" stroke-linecap="round"/>
<path d="M216 280 L296 280" stroke="#0B1220" stroke-width="12" stroke-linecap="round"/>
<circle cx="256" cy="256" r="10" fill="#D9B96A"/>
''', bg="#0B1220")

P34 = wrap("Amit Narwal — Chisel A",
'''
<rect width="512" height="512" rx="88" fill="#2A2A28"/>
<!-- granite slab -->
<rect x="148" y="118" width="216" height="276" rx="12" fill="#8A8A86"/>
<rect x="160" y="130" width="192" height="252" rx="8" fill="#6A6A66"/>
<!-- chisel A incision -->
<path d="M212 352 L256 176 L300 352" fill="none" stroke="#2A2A28" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M226 284 L286 284" stroke="#2A2A28" stroke-width="12" stroke-linecap="round"/>
<!-- chisel flecks -->
<g stroke="#2A2A28" stroke-width="4" stroke-linecap="round"><path d="M200 168 L216 184"/><path d="M312 168 L296 184"/><path d="M256 152 L256 176"/></g>
<g fill="#F5F1E8" opacity=".5"><circle cx="186" cy="352" r="5"/><circle cx="326" cy="352" r="5"/></g>
''', bg="#2A2A28")

P35 = wrap("Amit Narwal — Anchor Mark",
'''
<rect width="512" height="512" rx="88" fill="#0B1622"/>
<!-- anchor shaft -->
<rect x="238" y="112" width="36" height="228" rx="18" fill="#D9B96A"/>
<!-- crossbar -->
<rect x="176" y="168" width="160" height="24" rx="12" fill="#D9B96A"/>
<!-- flukes -->
<path d="M112 256 C112 340 176 384 256 384 C336 384 400 340 400 256 L360 256 L360 296 C352 348 306 344 256 344 C206 344 160 348 152 296 L152 256 Z" fill="#D9B96A"/>
<!-- ring -->
<circle cx="256" cy="98" r="28" fill="none" stroke="#D9B96A" stroke-width="12"/>
<!-- A hidden in fluke gap -->
<path d="M232 340 L256 276 L280 340" fill="none" stroke="#0B1622" stroke-width="12" stroke-linecap="round"/>
''', bg="#0B1622")

P36 = wrap("Amit Narwal — Nebula Birth",
'''
<defs><radialGradient id="g36a" cx=".5" cy=".5" r=".5"><stop offset="0%" stop-color="#E8D9FF" stop-opacity=".9"/><stop offset="45%" stop-color="#7C6AA8" stop-opacity=".55"/><stop offset="100%" stop-color="#0F0F1F" stop-opacity="0"/></radialGradient></defs>
<rect width="512" height="512" rx="88" fill="#0F0F1F"/>
<circle cx="256" cy="256" r="196" fill="url(#g36a)"/>
<!-- central vortex A -->
<path d="M172 352 L256 132 L340 352" fill="none" stroke="#E8D9FF" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M204 286 L308 286" stroke="#0F0F1F" stroke-width="16" stroke-linecap="round"/>
<!-- stardust -->
<g fill="#E8D9FF"><circle cx="168" cy="168" r="6"/><circle cx="344" cy="168" r="5"/><circle cx="128" cy="312" r="4"/><circle cx="384" cy="312" r="4"/><circle cx="256" cy="96" r="5"/></g>
''', bg="#0F0F1F")

P37 = wrap("Amit Narwal — Paper Plane",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<!-- paper plane -->
<polygon points="108,256 404,128 320,384 256,284" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="8" stroke-linejoin="round"/>
<polygon points="256,284 404,128 256,256" fill="#E8DFC8"/>
<polygon points="256,284 320,384 256,384" fill="#D8CDB0"/>
<!-- trail loop into A -->
<path d="M108 256 C160 312 210 360 256 284" fill="none" stroke="#C73E2E" stroke-width="10" stroke-linecap="round" stroke-dasharray="2 14"/>
<!-- A on wing -->
<path d="M264 264 L282 212 L300 264" fill="none" stroke="#1A1A1A" stroke-width="8" stroke-linecap="round"/>
''', bg="#F5F1E8")

P38 = wrap("Amit Narwal — Braided Rope",
'''
<rect width="512" height="512" rx="88" fill="#0F1F1A"/>
<!-- two braids as AN -->
<path d="M128 384 C128 280 188 192 256 192" fill="none" stroke="#B8985A" stroke-width="36" stroke-linecap="round"/>
<path d="M384 384 C384 280 324 192 256 192" fill="none" stroke="#7C6AA8" stroke-width="36" stroke-linecap="round"/>
<!-- crossover weave -->
<path d="M256 192 L256 384" stroke="#F5F1E8" stroke-width="10" stroke-dasharray="14 14" stroke-linecap="round"/>
<!-- knot dot -->
<circle cx="256" cy="384" r="18" fill="#F5F1E8"/>
<circle cx="256" cy="384" r="8" fill="#0F1F1A"/>
''', bg="#0F1F1A")

P39 = wrap("Amit Narwal — Minimal Line A",
'''
<rect width="512" height="512" rx="88" fill="#FBFBF8"/>
<!-- single-weight architectural line, Swiss -->
<path d="M146 384 L256 128 L366 384" fill="none" stroke="#111111" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M182 292 L330 292" stroke="#111111" stroke-width="18" stroke-linecap="round"/>
<!-- red tick accent -->
<rect x="346" y="368" width="36" height="10" fill="#C73E2E"/>
<!-- baseline hairline -->
<path d="M112 404 L400 404" stroke="#111111" stroke-width="4" stroke-linecap="round"/>
''', bg="#FBFBF8")

P40 = wrap("Amit Narwal — Single Dot Ritual",
'''
<rect width="512" height="512" rx="88" fill="#0A0A0A"/>
<!-- halo around dot + AN negative -->
<circle cx="256" cy="256" r="132" fill="none" stroke="#FFD976" stroke-width="8" opacity=".35"/>
<circle cx="256" cy="256" r="112" fill="#FFD976"/>
<!-- AN carved in dot -->
<path d="M212 296 L256 186 L300 296" fill="none" stroke="#0A0A0A" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M228 252 L284 252" stroke="#0A0A0A" stroke-width="10" stroke-linecap="round"/>
<!-- outer hairline -->
<circle cx="256" cy="256" r="172" fill="none" stroke="#FFD976" stroke-width="4" opacity=".7"/>
''', bg="#0A0A0A")

concepts = [
    ("premium-21", P21, "21 Roman Arch", "Aqueduct arch + keystone, travertine + ink.", "Research: Roman aqueduct permanence, keystone as structural node, Swiss arch premium."),
    ("premium-22", P22, "22 Aurora Form", "Aurora curtain sweeping into A, arctic navy + mint.", "Research: Aurora visual metaphor — rare light, YSL entropy, veil premium."),
    ("premium-23", P23, "23 Mango Leaf Monsoon", "Leaf + rain chain forming A, indigo + silver.", "Research: Indian monsoon flow metaphor, leaf symmetry, rain as build rhythm."),
    ("premium-24", P24, "24 Peacock Eye", "Peacock eye jewel with AN hint, ivory + green/gold.", "Research: Peacock eye as royal jewel, mandala Indian heritage without icon cliché."),
    ("premium-25", P25, "25 Terracotta Atelier", "Clay ring with thumb-pressed A, terracotta + charcoal.", "Research: Material craft, thumbprint uniqueness, ceramic atelier premium."),
    ("premium-26", P26, "26 Isometric Cube", "Isometric glass cube edge as A, bone + copper.", "Research: Iso cube as system layers, 3D without illustration, modular premium."),
    ("premium-27", P27, "27 Mandala Negative", "12-petal mandala with AN cut, saffron + ink.", "Research: Mandala counted-petal infiniteness, negative cut as clarity, Indian symmetry."),
    ("premium-28", P28, "28 Zaha Sweep", "Zaha-style sweep AN in one curve.", "Research: Architecture motion premium, continuous flow, Zaha fluidity."),
    ("premium-29", P29, "29 Vinyl Groove", "Vinyl groove spiral into A label.", "Research: Analog craft in digital, groove as spiral logic, burnished silver."),
    ("premium-30", P30, "30 Fortress Bastion", "Bastion silhouette forming A gateway.", "Research: Fortress foundations, arched gate as A, sandstone heritage."),
    ("premium-31", P31, "31 Twin Cranes", "Mirrored cranes forming heart/A negative.", "Research: Japanese crane longevity pair, duality-A+N, vermillion premium."),
    ("premium-32", P32, "32 Mirror Pair", "Mirrored chrome A pair split by mirror line.", "Research: Duality designer-engineer, reflection as system mirror, chrome luxury."),
    ("premium-33", P33, "33 Globe Wire", "Wire globe with A meridian, midnight + gold.", "Research: Global remote-first wiring, latitude premium, coordinate system."),
    ("premium-34", P34, "34 Chisel A", "Granite slab with chisel-incised A.", "Research: Stone carving permanence, chisel labour, granite monolith."),
    ("premium-35", P35, "35 Anchor Mark", "Anchor flukes forming A, brass + sea black.", "Research: Maritime anchor heritage (Narwal sea), hold-fast premium."),
    ("premium-36", P36, "36 Nebula Birth", "Nebula cloud resolving into A, plum + stardust.", "Research: Cosmic birth, AI genesis, nebula gradient premium."),
    ("premium-37", P37, "37 Paper Plane", "Folded plane with trail loop into A.", "Research: MVP→launch flight, origami economy, scarlet accent."),
    ("premium-38", P38, "38 Braided Rope", "Two braided ropes interweaving to AN.", "Research: Dual-stack braiding, jute/indigo craft, rope continuity."),
    ("premium-39", P39, "39 Minimal Line A", "Swiss one-weight line A + red tick.", "Research: Swiss International Style (Müller-Brockmann), single weight discipline, red accent."),
    ("premium-40", P40, "40 Single Dot Ritual", "Gold dot with AN negative + halo.", "Research: Period as signature (Chanel/YSL), dot as ownable asset, ultra-minimal."),
]

for slug, svg, title, desc, research in concepts:
    d = OUT / slug
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(svg, encoding="utf-8")
    print(slug, title, "done")

# 40-card gallery
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
    ("premium-11", "11 Auric Monolith", "Basalt slab with incised A — builder of lasting systems.", "Research: Swiss architectural monogram, bone/bronze museum premium, Müller-Brockmann grid, Rams monolith."),
    ("premium-12", "12 Signal Wave", "Echolocation arcs resolving into A — sensing AI.", "Research: Narwhal echolocation physics, concentric signal premium (Sonar), Gestalt resonance."),
    ("premium-13", "13 Proof Seal", "Vermillion Q.E.D. seal — verified & shipped.", "Research: Mathematical proof mark, editorial seal authority, red/black intellectual premium."),
    ("premium-14", "14 Orbital Lattice", "Islamic 8-point lattice as neural mesh.", "Research: Girih lattice mathematics, Escher revival, finite rules → infinite, sacred geometry."),
    ("premium-15", "15 Ink Bloom", "Sumi-e ink lotus — code to flower.", "Research: Japanese ink discipline, lotus counted-petal system, brush Bézier variable width."),
    ("premium-16", "16 Compass Cartographer", "16-point star with Delhi coords.", "Research: Kuyōmon nine-bodies star, kamon radial navigation, parchment cartographer heritage."),
    ("premium-17", "17 Glass Prism", "Prism refracting beam into gold A.", "Research: Transparency/clarity as premium (Aesop, Teenage Eng), refraction as AI distillation."),
    ("premium-18", "18 Feather & Node", "Editorial feather meets circuit node.", "Research: Writer-engineer duality, quill nostalgia (Six Pence), node = system AGI point."),
    ("premium-19", "19 Sundial", "Brass sundial — infinite time, on schedule.", "Research: Heritage craft (Jaeger), gnomon as structure, paper/brass luxury oxidation."),
    ("premium-20", "20 Folded Ribbon", "One ribbon through AN to a period dot.", "Research: YSL interlock discipline, single-thread continuity (Rand), dot as ownable signature."),
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
<title>Amit Narwal — 40 Premium Logo Concepts</title>
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
<header><div class="bar"><strong>Amit Narwal — Premium Mark Exploration</strong><span style="color:var(--muted)">40 concepts • SVG craft • no PIL polygons</span></div></header>
<main class="wrap">
<h1>Pick your mark.</h1>
<p class="lede">40 hand-crafted SVG Bézier concepts across three batches (01-10, 11-20, 21-40). Each built to the brief: stories for <i>infinite (Amit)</i>, <i>rare unicorn whale (Narwal)</i>, and <i>systems builder (full-stack + AI)</i>. Every concept ships as <code>icon.svg</code> (512×512) — browser-rendered, Bézier-built. 21-40 explores arch, aurora, monsoon, peacock, terracotta, cube, mandala, Zaha, vinyl, bastion, cranes, mirror, globe, chisel, anchor, nebula, plane, rope, Swiss line, and dot ritual.</p>
<div class="grid">{cards}</div>
<p style="color:var(--muted);margin-top:28px;font-size:.9rem">Tell me the numbers you like (e.g. “22 + 28 + 40”). I’ll refine those into a full favicon system (ICO + PNGs) and lock your chosen palette.</p>
</main>
<script>
document.querySelectorAll("[data-pick]").forEach(b=>b.addEventListener("click",e=>{{let s=e.currentTarget.getAttribute("data-pick");let l=document.querySelector('link[rel="icon"]');if(!l){{l=document.createElement("link");l.rel="icon";document.head.appendChild(l)}}l.type="image/svg+xml";l.href=s+"/icon.svg?v="+Date.now();alert("Browser tab now uses "+s)}}));
</script></body></html>'''

(OUT / "premium-gallery.html").write_text(gallery, encoding="utf-8")
print("Gallery expanded to 40 at public/favicons/premium-gallery.html")
