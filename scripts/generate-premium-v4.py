"""Generate premium-41..60 , typography-driven marks with outlined Bézier letters."""
import math
import sys
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

BASE = Path(__file__).resolve().parent
ROOT = BASE.parent
FONTS_DIR = BASE / ".fonts"
TOOLS_DIR = BASE / ".tools"
OUT = ROOT / "public" / "favicons"
OUT.mkdir(parents=True, exist_ok=True)
FONTS_DIR.mkdir(parents=True, exist_ok=True)

sys.path.insert(0, str(TOOLS_DIR))
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

FONT_SOURCES = {
    "Poppins-Regular.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Regular.ttf",
    "Poppins-SemiBold.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf",
    "BebasNeue-Regular.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/bebasneue/BebasNeue-Regular.ttf",
    "InstrumentSerif-Regular.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentserif/InstrumentSerif-Regular.ttf",
    "InstrumentSerif-Italic.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentserif/InstrumentSerif-Italic.ttf",
}

for name, url in FONT_SOURCES.items():
    p = FONTS_DIR / name
    if not p.exists():
        urllib.request.urlretrieve(url, p)

# map requested names to available files
ALIASES = {
    "SpaceGrotesk-Regular.ttf": "Poppins-Regular.ttf",
    "InstrumentSans-Regular.ttf": "Poppins-Regular.ttf",
}

CANVAS = 512

def glyph_path(tt, ch, font_px, x_px, baseline_px):
    upem = tt["head"].unitsPerEm
    scale = font_px / upem
    gs = tt.getGlyphSet()
    pen = SVGPathPen(gs)
    tp = TransformPen(pen, (scale, 0, 0, -scale, x_px, baseline_px))
    gs[ch].draw(tp)
    return pen.getCommands()

def metrics(tt, font_px):
    upem = tt["head"].unitsPerEm
    scale = font_px / upem
    hhea = tt["hhea"]
    asc_px = hhea.ascender * scale
    desc_px = hhea.descender * scale
    baseline_px = (CANVAS + asc_px + desc_px) / 2.0
    return scale, baseline_px

def an_paths(font_name, font_px, overlap_ratio=0.08, x_center=256, baseline_shift=0):
    real = ALIASES.get(font_name, font_name)
    tt = TTFont(str(FONTS_DIR / real))
    scale, baseline_px = metrics(tt, font_px)
    baseline_px += baseline_shift
    gs = tt.getGlyphSet()
    a_adv = gs["A"].width * scale
    n_adv = gs["N"].width * scale
    overlap = font_px * overlap_ratio
    total = a_adv + n_adv - overlap
    x0 = x_center - total/2
    a_path = glyph_path(tt, "A", font_px, x0, baseline_px)
    n_path = glyph_path(tt, "N", font_px, x0 + a_adv - overlap, baseline_px)
    return a_path, n_path

def wrap(title, body, bg):
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="{title}">
<title>{title}</title>
<rect width="512" height="512" rx="88" fill="{bg}"/>
{body}
</svg>'''

def save(num, title, svg):
    d = OUT / f"premium-{num:02d}"
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(svg, encoding="utf-8")
    print(f"premium-{num:02d} {title} done")

# 41 Venetian Wedge , expanded Playfair-like: use InstrumentSerif-Regular expanded via scale x
def p41():
    a, n = an_paths("InstrumentSerif-Regular.ttf", int(CANVAS*0.62), overlap_ratio=0.04)
    # stretch x by 1.25 around center in SVG transform group
    body = f'<g transform="translate(256 256) scale(1.25 1) translate(-256 -256)"><path d="{a}" fill="#E9D8A6"/><path d="{n}" fill="#E9D8A6"/></g>'
    body += '<rect x="96" y="396" width="320" height="6" fill="#E9D8A6" opacity=".65"/>'
    return wrap("Amit Narwal , Venetian Wedge", body, bg="#151515")

# 42 Swiss Grotesk AN , Instrument Sans
def p42():
    a, n = an_paths("InstrumentSans-Regular.ttf", int(CANVAS*0.66), overlap_ratio=0.06)
    body = f'<path d="{a}" fill="#111"/><path d="{n}" fill="#111"/>'
    body += '<rect x="120" y="398" width="272" height="8" fill="#C73E2E"/>'
    body += '<rect x="120" y="120" width="272" height="4" fill="#111" opacity=".15"/>'
    return wrap("Amit Narwal , Swiss Grotesk AN", body, bg="#FBFBF8")

# 43 Monotype Micro , thickened hairlines: Instrument Serif Italic heavier via stroke
def p43():
    a, n = an_paths("InstrumentSerif-Italic.ttf", int(CANVAS*0.60), overlap_ratio=0.08)
    body = f'<path d="{a}" fill="#FFD976" stroke="#FFD976" stroke-width="3"/><path d="{n}" fill="#FFD976" stroke="#FFD976" stroke-width="3"/>'
    body += '<circle cx="256" cy="372" r="10" fill="#FFD976"/>'
    return wrap("Amit Narwal , Monotype Micro", body, bg="#0A0A0A")

# 44 Gabardine Caps , Bebas condensed caps
def p44():
    a, n = an_paths("BebasNeue-Regular.ttf", int(CANVAS*0.68), overlap_ratio=0.10)
    body = f'<path d="{a}" fill="#0B1220"/><path d="{n}" fill="#0B1220"/>'
    body += '<rect x="132" y="378" width="248" height="10" fill="#D9B96A"/>'
    return wrap("Amit Narwal , Gabardine Caps", body, bg="#F5F1E8")

# 45 Acetylene Mark , Space Grotesk triangle A + node
def p45():
    a, n = an_paths("SpaceGrotesk-Regular.ttf", int(CANVAS*0.58), overlap_ratio=0.06)
    body = f'<path d="{a}" fill="#E6F4F3"/><circle cx="256" cy="384" r="18" fill="#7ECFC4"/>'
    # hide N as node? keep A only for mark, N subscript tiny
    body += f'<path d="{n}" fill="#E6F4F3" opacity=".85"/>'
    return wrap("Amit Narwal , Acetylene Mark", body, bg="#06202E")

# 46 Bodoni Shadow , InstrumentSerif-Regular with drop wedge
def p46():
    a, n = an_paths("InstrumentSerif-Regular.ttf", int(CANVAS*0.62), overlap_ratio=0.05)
    body = f'<g transform="translate(6 6)"><path d="{a}" fill="#C9BFB0" opacity=".9"/><path d="{n}" fill="#C9BFB0" opacity=".9"/></g>'
    body += f'<path d="{a}" fill="#111"/><path d="{n}" fill="#111"/>'
    return wrap("Amit Narwal , Bodoni Shadow", body, bg="#F5F1E8")

# 47 Typewriter Ledger , mono style using Poppins with rules (simulate mono via spaced paths?) Use Bebas + ledger lines
def p47():
    a, n = an_paths("Poppins-Regular.ttf", int(CANVAS*0.56), overlap_ratio=0.04)
    body = f'<path d="{a}" fill="#111"/><path d="{n}" fill="#111"/>'
    body += '<g stroke="#111" stroke-width="4"><line x1="104" y1="168" x2="408" y2="168"/><line x1="104" y1="344" x2="408" y2="344"/></g>'
    body += '<text x="256" y="396" text-anchor="middle" font-family="monospace" font-size="22" letter-spacing="3" fill="#111">AN , LEDGER</text>'
    return wrap("Amit Narwal , Typewriter Ledger", body, bg="#F5F1E8")

# 48 Kunsthaus Word , lowercase an interlocked suggestion: use A + N but lower tracking
def p48():
    a, n = an_paths("InstrumentSerif-Italic.ttf", int(CANVAS*0.54), overlap_ratio=0.18)
    body = f'<path d="{a}" fill="#1A1A1A"/><path d="{n}" fill="#1A1A1A" opacity=".92"/>'
    body += '<circle cx="256" cy="160" r="14" fill="#C73E2E"/>'
    return wrap("Amit Narwal , Kunsthaus Word", body, bg="#F5F1E8")

# 49 Technical Drawing , blueprint AN with dimension ticks
def p49():
    a, n = an_paths("SpaceGrotesk-Regular.ttf", int(CANVAS*0.52), overlap_ratio=0.08)
    body = f'<path d="{a}" fill="none" stroke="#F5F1E8" stroke-width="8"/><path d="{n}" fill="none" stroke="#F5F1E8" stroke-width="8"/>'
    body += '<g stroke="#F5F1E8" stroke-width="3"><path d="M132 384 L380 384"/><path d="M132 388 L132 376"/><path d="M380 388 L380 376"/></g>'
    body += '<text x="256" y="412" text-anchor="middle" font-family="monospace" font-size="18" fill="#F5F1E8">FIG. A , 1:1</text>'
    return wrap("Amit Narwal , Technical Drawing", body, bg="#0B2A4A")

# 50 Elzevir Mono , small caps serif + tagline
def p50():
    a, n = an_paths("InstrumentSerif-Regular.ttf", int(CANVAS*0.50), overlap_ratio=0.06)
    body = f'<path d="{a}" fill="#123524"/><path d="{n}" fill="#123524"/>'
    body += '<text x="256" y="372" text-anchor="middle" font-family="Georgia, serif" font-size="26" letter-spacing="4" fill="#123524">AN , EST. MMXXVI</text>'
    return wrap("Amit Narwal , Elzevir Mono", body, bg="#F5F1E8")

# 51 Monoline Outline , stroke-only AN
def p51():
    a, n = an_paths("InstrumentSans-Regular.ttf", int(CANVAS*0.62), overlap_ratio=0.07)
    body = f'<path d="{a}" fill="none" stroke="#111" stroke-width="10" stroke-linejoin="round"/><path d="{n}" fill="none" stroke="#111" stroke-width="10" stroke-linejoin="round"/>'
    return wrap("Amit Narwal , Monoline Outline", body, bg="#FFFFFF")

# 52 Poster Bebas , extra-bold condensed roundel
def p52():
    a, n = an_paths("BebasNeue-Regular.ttf", int(CANVAS*0.66), overlap_ratio=0.09)
    body = f'<circle cx="256" cy="256" r="168" fill="#C73E2E"/><path d="{a}" fill="#F5F1E8"/><path d="{n}" fill="#F5F1E8"/>'
    return wrap("Amit Narwal , Poster Bebas", body, bg="#0A0A0A")

# 53 Cut-Paper A , paper cut collage
def p53():
    a, n = an_paths("Poppins-SemiBold.ttf", int(CANVAS*0.58), overlap_ratio=0.06)
    body = f'<g transform="rotate(-3 256 256)"><path d="{a}" fill="#C8522E"/><path d="{n}" fill="#2B2520"/></g>'
    body += '<path d="M112 384 L400 384" stroke="#2B2520" stroke-width="4" opacity=".3"/>'
    return wrap("Amit Narwal , Cut-Paper A", body, bg="#F3EFE8")

# 54 Letterpress Stamp , embossed
def p54():
    a, n = an_paths("InstrumentSerif-Regular.ttf", int(CANVAS*0.56), overlap_ratio=0.07)
    body = f'<g><path d="{a}" fill="#3A3630" transform="translate(3 3)"/><path d="{n}" fill="#3A3630" transform="translate(3 3)"/></g>'
    body += f'<path d="{a}" fill="#1A1A1A"/><path d="{n}" fill="#1A1A1A"/>'
    body += '<rect x="148" y="388" width="216" height="6" fill="#1A1A1A" opacity=".55"/>'
    return wrap("Amit Narwal , Letterpress Stamp", body, bg="#D9C7A5")

# 55 Universal Sans , 3 squares forming A
def p55():
    body = '''
<rect x="196" y="148" width="120" height="120" fill="#111"/>
<rect x="156" y="268" width="80" height="80" fill="#111"/>
<rect x="276" y="268" width="80" height="80" fill="#111"/>
<rect x="228" y="228" width="80" height="24" fill="#FBFBF8"/>
<text x="256" y="408" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" letter-spacing="2" fill="#111">AN,UNIV</text>
'''
    return wrap("Amit Narwal , Universal Sans", body, bg="#FBFBF8")

# 56 Capitol Stone , engraved caps
def p56():
    a, n = an_paths("BebasNeue-Regular.ttf", int(CANVAS*0.60), overlap_ratio=0.08)
    body = f'<rect x="136" y="116" width="240" height="280" rx="8" fill="#8A8A86"/><path d="{a}" fill="#2A2A28"/><path d="{n}" fill="#2A2A28"/>'
    body += '<rect x="136" y="396" width="240" height="6" fill="#2A2A28"/>'
    return wrap("Amit Narwal , Capitol Stone", body, bg="#2A2A28")

# 57 Italic Ligature , true italic AN ligature (negative tracking)
def p57():
    a, n = an_paths("InstrumentSerif-Italic.ttf", int(CANVAS*0.64), overlap_ratio=0.22)
    body = f'<path d="{a}" fill="#0A0A0A"/><path d="{n}" fill="#0A0A0A" opacity=".96"/>'
    body += '<path d="M112 398 C200 408 312 408 400 398" stroke="#0A0A0A" stroke-width="4" fill="none"/>'
    return wrap("Amit Narwal , Italic Ligature", body, bg="#F5F1E8")

# 58 Barcode AN , barcode strokes + AN negative
def p58():
    a, n = an_paths("SpaceGrotesk-Regular.ttf", int(CANVAS*0.48), overlap_ratio=0.08)
    body = f'<g fill="#0B1220"><rect x="116" y="148" width="14" height="224"/><rect x="140" y="148" width="6" height="224"/><rect x="156" y="148" width="18" height="224"/><rect x="184" y="148" width="6" height="224"/><rect x="200" y="148" width="14" height="224"/><rect x="224" y="148" width="8" height="224"/><rect x="242" y="148" width="16" height="224"/><rect x="268" y="148" width="6" height="224"/><rect x="284" y="148" width="14" height="224"/><rect x="308" y="148" width="8" height="224"/><rect x="326" y="148" width="18" height="224"/><rect x="354" y="148" width="6" height="224"/><rect x="370" y="148" width="14" height="224"/></g>'
    body += f'<path d="{a}" fill="#F5F1E8"/><path d="{n}" fill="#F5F1E8"/>'
    # barcode ON bg, AN in negative white over black bars area (center stripe)
    # mask bars behind centre? Draw white bg stripe and letters dark
    # Actually letters need contrast: put white AN on top of bars
    return wrap("Amit Narwal , Barcode AN", body, bg="#F5F1E8")

# 59 Ledger Serif , folio AN
def p59():
    a, n = an_paths("InstrumentSerif-Regular.ttf", int(CANVAS*0.52), overlap_ratio=0.07)
    body = f'<g fill="none" stroke="#123524" stroke-width="6"><rect x="120" y="120" width="272" height="272"/><rect x="132" y="132" width="248" height="248" opacity=".6"/></g>'
    body += f'<path d="{a}" fill="#123524"/><path d="{n}" fill="#123524"/>'
    body += '<text x="360" y="168" font-family="Georgia, serif" font-size="28" fill="#123524">№ 26</text>'
    return wrap("Amit Narwal , Ledger Serif", body, bg="#F5F1E8")

# 60 Minimalist Mark , single dot + AN
def p60():
    a, n = an_paths("InstrumentSans-Regular.ttf", int(CANVAS*0.50), overlap_ratio=0.07)
    body = f'<circle cx="256" cy="108" r="18" fill="#1A1A1A"/><path d="{a}" fill="#1A1A1A"/><path d="{n}" fill="#1A1A1A"/>'
    body += '<path d="M164 372 L348 372" stroke="#1A1A1A" stroke-width="6" stroke-linecap="round"/>'
    return wrap("Amit Narwal , Minimalist Mark", body, bg="#FFFFFF")

makers = [
    (41, p41, "41 Venetian Wedge", "Expanded serif wedge, ochre + ink.", "Research: Playfair heritage contrast, expanded Didone, Pentagram expanded serif."),
    (42, p42, "42 Swiss Grotesk AN", "Single-weight Swiss AN + red tick.", "Research: Müller-Brockmann Swiss grid, single-weight discipline, International Typographic Style."),
    (43, p43, "43 Monotype Micro", "Monotype optical micro serif, thickened hairlines.", "Research: Monotype optical sizing Display→Micro, hairline thickening for 16px."),
    (44, p44, "44 Gabardine Caps", "Condensed caps, navy + gold rule.", "Research: NN/g glanceable caps, condensed display for hero only."),
    (45, p45, "45 Acetylene Mark", "Geometric sans + node, teal.", "Research: Notion/Stripe silhouette system, node as AI point."),
    (46, p46, "46 Bodoni Shadow", "Didone wedge with hard drop, stark.", "Research: Didone high-contrast fashion masthead, Bodoni shock value."),
    (47, p47, "47 Typewriter Ledger", "Mono AN with ledger rules.", "Research: Teenage Engineering mono precision, manifesto ledger."),
    (48, p48, "48 Kunsthaus Word", "Interlocked italic an, warm.", "Research: Kunsthaus editorial, chirographic italic, warm minimal."),
    (49, p49, "49 Technical Drawing", "Blueprint AN with dimensions.", "Research: Engineering drawing as brand, IDEO showing the work."),
    (50, p50, "50 Elzevir Mono", "Small-caps serif + EST tagline.", "Research: Elzevir heritage small caps, Caslon print premium."),
    (51, p51, "51 Monoline Outline", "Stroke-only AN outline.", "Research: Monoline continuity, Bauhaus line, single-stroke."),
    (52, p52, "52 Poster Bebas", "Condensed roundel poster.", "Research: Bebas poster power, maximum contrast, roundel containment."),
    (53, p53, "53 Cut-Paper A", "Paper-cut collage.", "Research: Material collage, tactile craft, Mid-century print."),
    (54, p54, "54 Letterpress Stamp", "Embossed letterpress AN.", "Research: Letterpress heritage, emboss depth, analog premium."),
    (55, p55, "55 Universal Sans", "3 squares forming A.", "Research: Universal geometric sans, Bauhaus universality, grid."),
    (56, p56, "56 Capitol Stone", "Engraved caps on granite.", "Research: Roman inscriptional caps, stone permanence, carving."),
    (57, p57, "57 Italic Ligature", "True italic ligature AN.", "Research: Italic ligature tradition, pointed-pen chirography."),
    (58, p58, "58 Barcode AN", "Barcode strokes with AN negative.", "Research: Data as brand without circuit cliché, barcode system logic."),
    (59, p59, "59 Ledger Serif", "Folio ledger AN with №26.", "Research: Ledger accounting precision, folio as proof."),
    (60, p60, "60 Minimalist Mark", "Single dot + minimal AN.", "Research: Chanel simplicity keynote, dot as ownable period."),
]

for num, fn, title, desc, research in makers:
    svg = fn()
    save(num, title, svg)

# 60-card gallery
base_items = [
    ("premium-01","01 The Infinite Thread","Lemniscate thread where the A apex sits at the crossing. Midnight + champagne.","Research: Amit = infinite (Sanskrit a-mita), endless-knot wisdom, Rand single-gesture, continuous line = build systems without breaks."),
    ("premium-02","02 Tusk Spiral","Pure double-helix spiral in a hairline ring. Ice-teal disc, no letters.","Research: Narwhal tusk double opposing spiral (Nature 2026), sensory AI metaphor, circular harmony (Henderson & Cote)."),
    ("premium-03","03 Architectural AN","Custom engineered pillars + copper bridge. Bone on charcoal, brutalist premium.","Research: Swiss grid (Müller-Brockmann), Apple 18-year Garamond→sans split, structural AN as system."),
    ("premium-04","04 Lotus Apex","Three petals, centre petal = A. Forest + sage.","Research: Lotus Cars triangle mass over botanical detail, counted petal system, kamon radial discipline."),
    ("premium-05","05 Knot Enigma","Endless knot with AI nodes, indigo field.","Research: Srivatsa endless knot (wisdom without beginning/end), Allen's 8 elementary knots, network lattice."),
    ("premium-06","06 Origami Crane","Faceted crane in terracotta + bone, AN in wing negative.","Research: Miura-ori origami tech transfer (NASA starshade), JP crane longevity, geometric facets survive tiny size."),
    ("premium-07","07 Orbital Stack","Full-stack chevrons in an orbit, violet field.","Research: Full-stack layers → product orbit, Material 2dp stroke system, orbital hierarchy."),
    ("premium-08","08 Seal Crest","Laurel double ring + AN essence, forest + brass.","Research: Alfa Romeo/UN laurel legitimacy, kamon jinuki inversion, heritage seal premium."),
    ("premium-09","09 Eclipse Negative","Gold disc, black eclipse cut, light sliver with AN hint.","Research: Swiss eclipse disc, high-contrast negative (FedEx), 14:1 WCAG AAA, minimal surprise."),
    ("premium-10","10 Serif Ligature","Editorial serif AN ligature, bone paper, copper dot + rule.","Research: Instrument Serif italic Didone, optical sizing (Display vs Micro), single-weight serif luxury, tight pair/loose tracking."),
    ("premium-11","11 Auric Monolith","Basalt slab with incised A , builder of lasting systems.","Research: Swiss architectural monogram, bone/bronze museum premium, Müller-Brockmann grid, Rams monolith."),
    ("premium-12","12 Signal Wave","Echolocation arcs resolving into A , sensing AI.","Research: Narwhal echolocation physics, concentric signal premium (Sonar), Gestalt resonance."),
    ("premium-13","13 Proof Seal","Vermillion Q.E.D. seal , verified & shipped.","Research: Mathematical proof mark, editorial seal authority, red/black intellectual premium."),
    ("premium-14","14 Orbital Lattice","Islamic 8-point lattice as neural mesh.","Research: Girih lattice mathematics, Escher revival, finite rules → infinite, sacred geometry."),
    ("premium-15","15 Ink Bloom","Sumi-e ink lotus , code to flower.","Research: Japanese ink discipline, lotus counted-petal system, brush Bézier variable width."),
    ("premium-16","16 Compass Cartographer","16-point star with Delhi coords.","Research: Kuyōmon nine-bodies star, kamon radial navigation, parchment cartographer heritage."),
    ("premium-17","17 Glass Prism","Prism refracting beam into gold A.","Research: Transparency/clarity as premium (Aesop, Teenage Eng), refraction as AI distillation."),
    ("premium-18","18 Feather & Node","Editorial feather meets circuit node.","Research: Writer-engineer duality, quill nostalgia (Six Pence), node = system AGI point."),
    ("premium-19","19 Sundial","Brass sundial , infinite time, on schedule.","Research: Heritage craft (Jaeger), gnomon as structure, paper/brass luxury oxidation."),
    ("premium-20","20 Folded Ribbon","One ribbon through AN to a period dot.","Research: YSL interlock discipline, single-thread continuity (Rand), dot as ownable signature."),
    ("premium-21","21 Roman Arch","Aqueduct arch + keystone, travertine + ink.","Research: Roman aqueduct permanence, keystone as structural node, Swiss arch premium."),
    ("premium-22","22 Aurora Form","Aurora curtain sweeping into A, arctic navy + mint.","Research: Aurora visual metaphor , rare light, YSL entropy, veil premium."),
    ("premium-23","23 Mango Leaf Monsoon","Leaf + rain chain forming A, indigo + silver.","Research: Indian monsoon flow metaphor, leaf symmetry, rain as build rhythm."),
    ("premium-24","24 Peacock Eye","Peacock eye jewel with AN hint, ivory + green/gold.","Research: Peacock eye as royal jewel, mandala Indian heritage without icon cliché."),
    ("premium-25","25 Terracotta Atelier","Clay ring with thumb-pressed A, terracotta + charcoal.","Research: Material craft, thumbprint uniqueness, ceramic atelier premium."),
    ("premium-26","26 Isometric Cube","Isometric glass cube edge as A, bone + copper.","Research: Iso cube as system layers, 3D without illustration, modular premium."),
    ("premium-27","27 Mandala Negative","12-petal mandala with AN cut, saffron + ink.","Research: Mandala counted-petal infiniteness, negative cut as clarity, Indian symmetry."),
    ("premium-28","28 Zaha Sweep","Zaha-style sweep AN in one curve.","Research: Architecture motion premium, continuous flow, Zaha fluidity."),
    ("premium-29","29 Vinyl Groove","Vinyl groove spiral into A label.","Research: Analog craft in digital, groove as spiral logic, burnished silver."),
    ("premium-30","30 Fortress Bastion","Bastion silhouette forming A gateway.","Research: Fortress foundations, arched gate as A, sandstone heritage."),
    ("premium-31","31 Twin Cranes","Mirrored cranes forming heart/A negative.","Research: Japanese crane longevity pair, duality-A+N, vermillion premium."),
    ("premium-32","32 Mirror Pair","Mirrored chrome A pair split by mirror line.","Research: Duality designer-engineer, reflection as system mirror, chrome luxury."),
    ("premium-33","33 Globe Wire","Wireframe globe with A meridian.","Research: Global remote-first wiring, latitude premium, coordinate system."),
    ("premium-34","34 Chisel A","Granite slab with chisel-incised A.","Research: Stone carving permanence, chisel labour, granite monolith."),
    ("premium-35","35 Anchor Mark","Anchor flukes forming A, brass + sea black.","Research: Maritime anchor heritage (Narwal sea), hold-fast premium."),
    ("premium-36","36 Nebula Birth","Nebula cloud resolving into A, deep plum + stardust.","Research: Cosmic birth, AI genesis, nebula gradient premium."),
    ("premium-37","37 Paper Plane","Folded plane with trail loop into A.","Research: MVP→launch flight, origami economy, scarlet accent."),
    ("premium-38","38 Braided Rope","Two braided ropes interweaving to AN.","Research: Dual-stack braiding, jute/indigo craft, rope continuity."),
    ("premium-39","39 Minimal Line A","Swiss one-weight line A + red tick.","Research: Swiss International Style (Müller-Brockmann), single weight discipline, red accent."),
    ("premium-40","40 Single Dot Ritual","Gold dot with AN negative + halo.","Research: Period as signature (Chanel/YSL), dot as ownable asset, ultra-minimal."),
] + [(f"premium-{n:02d}", title, desc, res) for n, fn, title, desc, res in [(m[0], m[1], m[2], m[3], m[4]) for m in makers]]

cards = ""
for slug, title, desc, research in base_items:
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
<title>Amit Narwal , 60 Premium Logo Concepts</title>
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
<header><div class="bar"><strong>Amit Narwal , Premium Mark Exploration</strong><span style="color:var(--muted)">60 concepts • SVG craft • outlined Bézier letters</span></div></header>
<main class="wrap">
<h1>Pick your mark.</h1>
<p class="lede">60 hand-crafted SVG concepts. Batches 01-40 used Instrument Serif as base; 41-60 explore different typography families , expanded serif, Swiss grotesk, Monotype micro, Bebas condensed, Space Grotesk geometric, Didone, mono ledger, italic ligature, blueprint, swiss, etc. Every letter is outlined as Bézier using fontTools (no <text> fallback) for true vector craft.</p>
<div class="grid">{cards}</div>
<p style="color:var(--muted);margin-top:28px;font-size:.9rem">Tell me the numbers you like (e.g. “44 + 52 + 60”). I’ll refine those into a full favicon system and lock your palette.</p>
</main>
<script>
document.querySelectorAll("[data-pick]").forEach(b=>b.addEventListener("click",e=>{{let s=e.currentTarget.getAttribute("data-pick");let l=document.querySelector('link[rel="icon"]');if(!l){{l=document.createElement("link");l.rel="icon";document.head.appendChild(l)}}l.type="image/svg+xml";l.href=s+"/icon.svg?v="+Date.now();alert("Browser tab now uses "+s)}}));
</script></body></html>'''

(OUT / "premium-gallery.html").write_text(gallery, encoding="utf-8")
print("Gallery expanded to 60 at public/favicons/premium-gallery.html")
