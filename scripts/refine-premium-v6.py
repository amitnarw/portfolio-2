"""Refine premium-61..80 — second pass: fix legibility, geometry and craft.

Rewrites only the SVGs; the 80-card gallery already points at these paths.
"""
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "favicons"


def wrap(title, body, bg="#0A0A0A"):
    esc = title.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="{esc}">
<title>{esc}</title>
<rect width="512" height="512" rx="88" fill="{bg}"/>
{body}
</svg>'''


def save(num, svg):
    d = OUT / f"premium-{num:02d}"
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(svg, encoding="utf-8")
    print(f"premium-{num:02d} refined")


# ---------------------------------------------------------------- 61
P61 = wrap(
    "Amit Narwal — The Infinite Kiln",
    '''
<defs>
<linearGradient id="k61" x1="0" y1="0" x2=".4" y2="1">
<stop offset="0%" stop-color="#F0B47A"/><stop offset="55%" stop-color="#C87E4B"/><stop offset="100%" stop-color="#8A4E2A"/>
</linearGradient>
</defs>
<!-- potter's wheel, two ellipses -->
<ellipse cx="256" cy="398" rx="132" ry="26" fill="none" stroke="#8A4E2A" stroke-width="10" opacity=".55"/>
<ellipse cx="256" cy="368" rx="112" ry="22" fill="none" stroke="url(#k61)" stroke-width="14"/>
<ellipse cx="256" cy="368" rx="52" ry="10" fill="none" stroke="#E3A66B" stroke-width="6" opacity=".7"/>
<!-- rising A thrown on the wheel -->
<path d="M256 140 L168 352 M256 140 L344 352 M198 288 L314 288"
      fill="none" stroke="url(#k61)" stroke-width="26"
      stroke-linecap="round" stroke-linejoin="round"/>
<!-- kiln flame dot at apex -->
<path d="M256 96 C274 112 278 128 264 142 C256 150 246 148 242 138 C236 124 244 110 256 96 Z" fill="#F0B47A"/>
''',
    bg="#1A1612",
)

# ---------------------------------------------------------------- 62
def p62():
    cx, cy = 256, 262
    turns = 2.35
    steps = 240
    pts = []
    for i in range(steps + 1):
        t = i / steps
        ang = -math.pi / 2 + t * turns * 2 * math.pi
        r = 12 + t * 62
        pts.append((cx + r * math.cos(ang), cy + r * math.sin(ang)))
    spiral = "M " + " L ".join(f"{x:.1f} {y:.1f}" for x, y in pts)
    ex, ey = pts[-1]
    # tangent at the end
    dx, dy = ex - pts[-2][0], ey - pts[-2][1]
    L = math.hypot(dx, dy) or 1
    dx, dy = dx / L, dy / L
    nx, ny = -dy, dx
    head = (
        f"M {ex + dx * 30:.1f} {ey + dy * 30:.1f} "
        f"L {ex + nx * 16:.1f} {ey + ny * 16:.1f} "
        f"L {ex - nx * 16:.1f} {ey - ny * 16:.1f} Z"
    )
    body = f'''
<defs><linearGradient id="k62" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="#F2E4B8"/><stop offset="100%" stop-color="#B8985A"/></linearGradient></defs>
<circle cx="256" cy="256" r="184" fill="none" stroke="#D9B96A" stroke-width="6"/>
<circle cx="256" cy="256" r="152" fill="none" stroke="#D9B96A" stroke-width="2" opacity=".4"/>
<g stroke="#D9B96A" stroke-width="5" stroke-linecap="round">
<path d="M256 72 L256 98"/><path d="M256 414 L256 440"/><path d="M72 256 L98 256"/><path d="M414 256 L440 256"/>
<path d="M126 126 L145 145"/><path d="M386 126 L367 145"/><path d="M126 386 L145 367"/><path d="M386 386 L367 367"/>
</g>
<g stroke="#D9B96A" stroke-width="3" opacity=".55">
<path d="M256 98 L256 110"/><path d="M256 402 L256 414"/><path d="M98 256 L110 256"/><path d="M402 256 L414 256"/>
</g>
<path d="{spiral}" fill="none" stroke="url(#k62)" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
<path d="{head}" fill="#F2E4B8"/>
<circle cx="256" cy="262" r="11" fill="#081018" stroke="#F2E4B8" stroke-width="7"/>
<circle cx="256" cy="382" r="6" fill="#D9B96A" opacity=".8"/>
'''
    return wrap("Amit Narwal — Narwhal Horn Compass", body, bg="#081018")


# ---------------------------------------------------------------- 63
def p63():
    pat = [
        "0001000",
        "0011100",
        "0110110",
        "1100011",
        "1111111",
        "1100011",
        "1100011",
    ]
    cell, gap = 34, 4
    ox, oy = 256 - (7 * cell) / 2, 256 - (7 * cell) / 2
    cells = []
    for r, row in enumerate(pat):
        for c, ch in enumerate(row):
            x = ox + c * cell
            y = oy + r * cell
            if ch == "1":
                fill = "#E8A23B" if (r + c) % 2 == 0 else "#D98F2B"
            else:
                fill = "#1B2A50" if (r + c) % 2 == 0 else "#16244A"
            cells.append(
                f'<rect x="{x + gap/2:.1f}" y="{y + gap/2:.1f}" width="{cell-gap}" height="{cell-gap}" rx="5" fill="{fill}"/>'
            )
    # weave threads
    threads = []
    for i in range(8):
        y = oy + i * cell
        threads.append(f'<path d="M{ox:.1f} {y:.1f} L{ox+7*cell:.1f} {y:.1f}" stroke="#E8A23B" stroke-width="1.5" opacity=".18"/>')
        x = ox + i * cell
        threads.append(f'<path d="M{x:.1f} {oy:.1f} L{x:.1f} {oy+7*cell:.1f}" stroke="#E8A23B" stroke-width="1.5" opacity=".18"/>')
    body = "\n".join(cells) + "\n" + "\n".join(threads)
    body += '''
<g fill="#C73E2E"><circle cx="120" cy="120" r="7"/><circle cx="392" cy="120" r="7"/><circle cx="120" cy="392" r="7"/><circle cx="392" cy="392" r="7"/></g>
<rect x="112" y="112" width="288" height="288" fill="none" stroke="#E8A23B" stroke-width="3" opacity=".35"/>
'''
    return wrap("Amit Narwal — Madhubani Pulse", body, bg="#101B33")


# ---------------------------------------------------------------- 64
def p64():
    cx, cy = 256, 256
    petals = []
    for k in range(8):
        a = math.radians(k * 45 - 90)
        left = a - math.radians(14)
        right = a + math.radians(14)
        r1, r2 = 64, 150

        def pt(ang, r):
            return cx + r * math.cos(ang), cy + r * math.sin(ang)

        x0, y0 = pt(left, r1)
        x1, y1 = pt(a - math.radians(18), 122)
        tx, ty = pt(a, r2)
        x2, y2 = pt(a + math.radians(18), 122)
        x3, y3 = pt(right, r1)
        petals.append(
            f'<path d="M{x0:.1f} {y0:.1f} Q{x1:.1f} {y1:.1f} {tx:.1f} {ty:.1f} '
            f'Q{x2:.1f} {y2:.1f} {x3:.1f} {y3:.1f} Z" fill="#E8D9FF" opacity=".95"/>'
        )
        dx, dy = pt(a, r2 + 14)
        petals.append(f'<circle cx="{dx:.1f}" cy="{dy:.1f}" r="9" fill="#C9A86A"/>')
    body = "\n".join(petals)
    body += '''
<circle cx="256" cy="256" r="62" fill="#241A3D" stroke="#E8D9FF" stroke-width="8"/>
<circle cx="256" cy="256" r="46" fill="none" stroke="#C9A86A" stroke-width="2" opacity=".55"/>
<path d="M236 284 L256 226 L276 284 M244 264 L268 264" fill="none" stroke="#E8D9FF"
      stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
'''
    return wrap("Amit Narwal — Cell & Petal", body, bg="#171126")


# ---------------------------------------------------------------- 65
P65 = wrap(
    "Amit Narwal — The Keystone",
    '''
<defs><linearGradient id="k65" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#D6C7A4"/><stop offset="100%" stop-color="#AD9C7A"/></linearGradient></defs>
<!-- arch band -->
<path d="M88 404 A168 168 0 0 1 424 404 L360 404 A104 104 0 0 0 152 404 Z" fill="url(#k65)"/>
<!-- stone joints -->
<g stroke="#1F1E1A" stroke-width="5" opacity=".85">
<path d="M152 404 L152 372"/><path d="M360 404 L360 372"/>
<path d="M131 336 L163 352"/><path d="M381 336 L349 352"/>
<path d="M171 272 L199 296"/><path d="M341 272 L313 296"/>
<path d="M230 236 L238 268"/><path d="M282 236 L274 268"/>
</g>
<!-- keystone with A cut -->
<path d="M226 108 L286 108 L304 244 L208 244 Z" fill="#E8D9B0"/>
<path d="M232 108 L280 108 L292 244 L220 244 Z" fill="none" stroke="#1F1E1A" stroke-width="3" opacity=".25"/>
<path d="M256 136 L232 214 M256 136 L280 214 M242 190 L270 190"
      fill="none" stroke="#1F1E1A" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<!-- ground -->
<path d="M96 420 L416 420" stroke="#B8A98A" stroke-width="6" stroke-linecap="round" opacity=".55"/>
''',
    bg="#1F1E1A",
)

# ---------------------------------------------------------------- 66 (kept, tightened)
P66 = wrap(
    "Amit Narwal — Sea Mark",
    '''
<rect x="72" y="72" width="368" height="368" fill="none" stroke="#123047" stroke-width="6"/>
<rect x="88" y="88" width="336" height="336" fill="none" stroke="#123047" stroke-width="2" opacity=".55"/>
<g stroke="#123047" stroke-width="2" opacity=".3">
<path d="M88 120 L424 120"/><path d="M88 392 L424 392"/><path d="M120 88 L120 424"/><path d="M392 88 L392 424"/>
</g>
<polygon points="256,104 282,230 408 256 282,282 256,408 230,282 104 256 230 230" fill="#123047"/>
<polygon points="256,152 274,238 360 256 274,274 256,360 238,274 152 256 238 238" fill="#E8DFC8"/>
<g fill="none" stroke="#123047" stroke-width="5" stroke-linecap="round">
<path d="M112 336 C142 316 172 356 202 336 C232 316 262 356 292 336"/>
<path d="M112 364 C142 344 172 384 202 364 C232 344 262 384 292 364"/>
</g>
<path d="M232 312 L256 244 L280 312 M240 290 L272 290" fill="none" stroke="#C73E2E" stroke-width="9"
      stroke-linecap="round" stroke-linejoin="round"/>
<text x="316" y="344" font-family="Georgia, serif" font-size="19" letter-spacing="1" fill="#123047">28.6N</text>
<text x="316" y="368" font-family="Georgia, serif" font-size="19" letter-spacing="1" fill="#123047">77.2E</text>
''',
    bg="#E8DFC8",
)

# ---------------------------------------------------------------- 67
def p67():
    A = ["01110", "10001", "11111", "10001", "10001"]
    N = ["10001", "11001", "10101", "10011", "10001"]
    step, r = 38, 12
    total = step * 4
    ox, oy = 92, 256 - total / 2
    dots = []
    # faint grid
    for gr in range(7):
        for gc in range(12):
            dots.append(
                f'<circle cx="{76+gc*32}" cy="{96+gr*54}" r="3" fill="#C6FF3D" opacity=".12"/>'
            )
    for col, ch in enumerate(A):
        for row, v in enumerate(ch):
            if v == "1":
                dots.append(
                    f'<circle cx="{ox+col*step}" cy="{oy+row*step}" r="{r}" fill="#C6FF3D"/>'
                )
    ox2 = 92 + total + 56
    for col, ch in enumerate(N):
        for row, v in enumerate(ch):
            if v == "1":
                dots.append(
                    f'<circle cx="{ox2+col*step}" cy="{oy+row*step}" r="{r}" fill="#C6FF3D"/>'
                )
    body = "\n".join(dots)
    body += '''
<circle cx="404" cy="398" r="16" fill="none" stroke="#C6FF3D" stroke-width="3"/>
<rect x="399" y="393" width="10" height="10" fill="#C6FF3D"/>
'''
    return wrap("Amit Narwal — Pulse Dots", body, bg="#101010")


# ---------------------------------------------------------------- 68
P68 = wrap(
    "Amit Narwal — Marble Grain",
    '''
<defs>
<linearGradient id="k68s" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="#EEEAE0"/><stop offset="100%" stop-color="#D3CEC2"/></linearGradient>
<linearGradient id="k68g" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#D9B45B"/><stop offset="100%" stop-color="#8C6A1E"/></linearGradient>
</defs>
<circle cx="256" cy="256" r="178" fill="url(#k68s)"/>
<circle cx="256" cy="256" r="178" fill="none" stroke="#BDB6A6" stroke-width="3" opacity=".8"/>
<!-- secondary veins -->
<g fill="none" stroke="#9A9384" stroke-width="3" opacity=".45" stroke-linecap="round">
<path d="M96 148 C168 172 196 156 232 190 C262 218 250 250 286 268"/>
<path d="M330 96 C342 150 320 176 348 214 C368 242 404 246 420 276"/>
<path d="M120 352 C170 340 196 362 232 344 C272 324 300 348 340 330"/>
</g>
<!-- gold A vein -->
<path d="M256 136 L166 382 M256 136 L346 382 M192 302 L320 302"
      fill="none" stroke="url(#k68g)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="256" cy="136" r="13" fill="#D9B45B"/>
''',
    bg="#DEDBD3",
)

# ---------------------------------------------------------------- 69
P69 = wrap(
    "Amit Narwal — Brutal Reset",
    '''
<rect x="116" y="140" width="210" height="252" fill="#1A1A1A"/>
<rect x="116" y="140" width="210" height="20" fill="#FF5A1F"/>
<!-- A cut through the block -->
<path d="M221 178 L172 352 M221 178 L270 352 M188 292 L254 292"
      fill="none" stroke="#B8B8B0" stroke-width="28" stroke-linecap="square"/>
<!-- reset arc -->
<path d="M382 158 A68 68 0 1 1 330 122" fill="none" stroke="#FF5A1F" stroke-width="15" stroke-linecap="round"/>
<polygon points="318,96 352,128 312,142" fill="#FF5A1F"/>
<!-- datum line -->
<path d="M96 414 L416 414" stroke="#1A1A1A" stroke-width="6" opacity=".5"/>
''',
    bg="#B8B8B0",
)

# ---------------------------------------------------------------- 70 (kept, tightened)
P70 = wrap(
    "Amit Narwal — Thread & Needle",
    '''
<path d="M366 100 L196 270" stroke="#1F3A5F" stroke-width="12" stroke-linecap="round"/>
<path d="M196 270 L172 294" stroke="#1F3A5F" stroke-width="6" stroke-linecap="round"/>
<circle cx="378" cy="88" r="15" fill="none" stroke="#1F3A5F" stroke-width="6"/>
<path d="M362 122 C304 184 384 240 322 302 C262 362 342 400 286 440"
      fill="none" stroke="#C73E2E" stroke-width="6" stroke-dasharray="11 10" stroke-linecap="round"/>
<path d="M158 372 L232 196 L306 372" fill="none" stroke="#1F3A5F" stroke-width="16"
      stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="19 10"/>
<path d="M190 310 L274 310" stroke="#1F3A5F" stroke-width="13" stroke-linecap="round" stroke-dasharray="15 8"/>
<g stroke="#1F3A5F" stroke-width="3" opacity=".35">
<path d="M108 132 L148 132"/><path d="M108 156 L148 156"/><path d="M108 180 L148 180"/>
</g>
''',
    bg="#F0E8D8",
)

# ---------------------------------------------------------------- 71 (kept)
P71 = wrap(
    "Amit Narwal — Eclipse Twins",
    '''
<defs><radialGradient id="k71" cx=".5" cy=".5" r=".5">
<stop offset="0%" stop-color="#FFF3C4"/><stop offset="70%" stop-color="#FFD976"/><stop offset="100%" stop-color="#C9A86A"/>
</radialGradient></defs>
<circle cx="256" cy="256" r="168" fill="url(#k71)"/>
<circle cx="306" cy="230" r="150" fill="#0A0A0A"/>
<path d="M256 88 A168 168 0 0 1 424 256" fill="none" stroke="#FFF3C4" stroke-width="6" stroke-linecap="round"/>
<path d="M192 342 L256 194 L320 342 M218 294 L294 294" fill="none" stroke="#FFD976" stroke-width="14"
      stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="256" cy="154" r="9" fill="#FFF3C4"/>
''',
    bg="#0A0A0A",
)

# ---------------------------------------------------------------- 72
P72 = wrap(
    "Amit Narwal — Mason's Mark",
    '''
<rect x="96" y="96" width="320" height="320" rx="14" fill="#9E9E98"/>
<rect x="96" y="96" width="320" height="320" rx="14" fill="none" stroke="#77776F" stroke-width="3"/>
<rect x="120" y="120" width="272" height="272" fill="none" stroke="#77776F" stroke-width="2" opacity=".6"/>
<!-- incised bevel highlight -->
<g stroke="#CBCBC3" stroke-width="18" stroke-linecap="square" stroke-linejoin="miter" opacity=".55" transform="translate(-4 -4)">
<path d="M300 352 L300 168 L356 352 L356 168"/>
<path d="M150 352 L206 172 M206 352 L150 172 M150 352 L206 352"/>
</g>
<g stroke="#2A2A28" stroke-width="18" stroke-linecap="square" stroke-linejoin="miter">
<path d="M300 352 L300 168 L356 352 L356 168"/>
<path d="M150 352 L206 172 L262 352 M168 292 L238 292"/>
</g>
<g stroke="#6E6E66" stroke-width="2" opacity=".8">
<path d="M300 352 L300 168 L356 352 L356 168"/>
</g>
<!-- mason square -->
<path d="M232 386 L282 386 L282 374" fill="none" stroke="#2A2A28" stroke-width="5"/>
<circle cx="256" cy="398" r="6" fill="#2A2A28"/>
''',
    bg="#8A8A86",
)

# ---------------------------------------------------------------- 73 (tightened)
P73 = wrap(
    "Amit Narwal — Harbor Light",
    '''
<path d="M236 210 L88 138 L88 282 Z" fill="#FFD976" opacity=".22"/>
<path d="M236 210 L424 112 L424 308 Z" fill="#FFD976" opacity=".14"/>
<path d="M214 380 L234 164 L278 164 L298 380 Z" fill="#E6F4F3"/>
<rect x="228" y="136" width="56" height="26" fill="#C73E2E"/>
<rect x="232" y="244" width="48" height="16" fill="#C73E2E"/>
<circle cx="256" cy="192" r="21" fill="#FFD976"/>
<path d="M236 348 L256 282 L276 348 M244 326 L268 326" fill="none" stroke="#0A2A33" stroke-width="9"
      stroke-linecap="round" stroke-linejoin="round"/>
<g fill="none" stroke="#7ECFC4" stroke-width="6" stroke-linecap="round" opacity=".85">
<path d="M84 404 C114 384 144 424 174 404 C204 384 234 424 264 404 C294 384 324 424 354 404 C384 384 414 424 444 404"/>
<path d="M84 432 C114 412 144 452 174 432 C204 412 234 452 264 432 C294 412 324 452 354 432 C384 412 414 452 444 432" opacity=".45"/>
</g>
''',
    bg="#0A2A33",
)

# ---------------------------------------------------------------- 74
P74 = wrap(
    "Amit Narwal — Paper Fold",
    '''
<defs>
<linearGradient id="k74a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F6F1E4"/><stop offset="100%" stop-color="#DFD7C4"/></linearGradient>
<linearGradient id="k74b" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D96A3F"/><stop offset="100%" stop-color="#B0442B"/></linearGradient>
</defs>
<!-- left facet -->
<polygon points="256,116 156,400 248,400 302,224" fill="url(#k74a)"/>
<!-- right facet -->
<polygon points="256,116 302,224 356,400 264,400" fill="url(#k74b)"/>
<!-- counter cut -->
<polygon points="256,238 216,306 296,306" fill="#F3EFE8"/>
<!-- crossbar fold -->
<polygon points="196,306 316,306 326,350 186,350" fill="#C9A86A"/>
<!-- fold lines -->
<g stroke="#2B2520" stroke-width="4" opacity=".25">
<path d="M256 116 L256 238"/>
<path d="M196 306 L256 292 L316 306"/>
<path d="M186 350 L256 336 L326 350"/>
</g>
<!-- apex dot -->
<circle cx="256" cy="112" r="10" fill="#C9A86A"/>
''',
    bg="#F3EFE8",
)

# ---------------------------------------------------------------- 75
P75 = wrap(
    "Amit Narwal — Inkwell",
    '''
<path d="M150 296 C150 258 188 236 256 236 C324 236 362 258 362 296 L362 388 C362 424 320 442 256 442 C192 442 150 424 150 388 Z" fill="#F5F1E8"/>
<path d="M150 296 C150 330 190 348 256 348 C322 348 362 330 362 296 C362 330 322 348 256 348 C190 348 150 330 150 296 Z" fill="#0E0E12"/>
<path d="M214 330 L256 258 L298 330 M226 306 L286 306" fill="none" stroke="#0E0E12" stroke-width="16"
      stroke-linecap="round" stroke-linejoin="round"/>
<rect x="226" y="190" width="60" height="52" fill="#F5F1E8"/>
<rect x="212" y="176" width="88" height="18" rx="9" fill="#F5F1E8"/>
<rect x="212" y="176" width="88" height="7" rx="3.5" fill="#C0C0C8"/>
<circle cx="384" cy="206" r="16" fill="#C0C0C8"/>
<path d="M384 222 L384 258" stroke="#C0C0C8" stroke-width="4" stroke-linecap="round"/>
''',
    bg="#0E0E12",
)

# ---------------------------------------------------------------- 76
def p76():
    def blob(cx, cy, rx, ry, seed, scale=1.0):
        pts = []
        for i in range(9):
            a = 2 * math.pi * i / 9
            f = 1 + 0.09 * math.sin(3 * a + seed) + 0.05 * math.cos(5 * a + seed * 1.7)
            pts.append((cx + rx * scale * f * math.cos(a), cy + ry * scale * f * math.sin(a)))
        n = len(pts)
        mids = [((pts[i][0] + pts[(i + 1) % n][0]) / 2, (pts[i][1] + pts[(i + 1) % n][1]) / 2) for i in range(n)]
        d = f"M {mids[0][0]:.1f} {mids[0][1]:.1f} "
        for i in range(n):
            px, py = pts[(i + 1) % n]
            mx, my = mids[(i + 1) % n]
            d += f"Q {px:.1f} {py:.1f} {mx:.1f} {my:.1f} "
        return d + "Z"

    def island(cx, cy, rx, ry, seed):
        return (
            f'<path d="{blob(cx, cy, rx, ry, seed)}" fill="#E8D9B0"/>'
            f'<path d="{blob(cx, cy, rx, ry, seed, 0.72)}" fill="none" stroke="#C9B98C" stroke-width="3" opacity=".9"/>'
        )
    body = island(256, 150, 32, 23, 0.4)
    body += island(190, 260, 27, 19, 1.2)
    body += island(322, 260, 27, 19, 2.1)
    body += island(144, 356, 23, 16, 0.9)
    body += island(368, 356, 23, 16, 1.8)
    # dotted A route
    body += '''
<path d="M256 150 L190 260 L144 356 M256 150 L322 260 L368 356 M190 260 L322 260"
      fill="none" stroke="#7ECFC4" stroke-width="5" stroke-dasharray="4 12" stroke-linecap="round"/>
<g fill="#0E2A33">
<circle cx="256" cy="150" r="8"/><circle cx="190" cy="260" r="7"/><circle cx="322" cy="260" r="7"/>
<circle cx="144" cy="356" r="6"/><circle cx="368" cy="356" r="6"/>
</g>
<g fill="none" stroke="#7ECFC4" stroke-width="4" stroke-linecap="round" opacity=".35">
<path d="M72 424 C102 408 132 440 162 424 C192 408 222 440 252 424 C282 408 312 440 342 424 C372 408 402 440 432 424"/>
<path d="M72 448 C102 432 132 464 162 448 C192 432 222 464 252 448 C282 432 312 464 342 448 C372 432 402 464 432 448"/>
</g>
'''
    return wrap("Amit Narwal — Archipelago", body, bg="#0E2A33")


# ---------------------------------------------------------------- 77 (kept)
P77 = wrap(
    "Amit Narwal — Monolith Echo",
    '''
<defs><linearGradient id="k77" x1="0" y1="0" x2="1" y2="0">
<stop offset="0%" stop-color="#F5F1E8"/><stop offset="100%" stop-color="#C9BFB0"/></linearGradient></defs>
<path d="M148 400 L148 156 L212 88 L276 156 L276 400 Z" fill="url(#k77)"/>
<path d="M184 356 L212 216 L240 356 M194 312 L230 312" fill="none" stroke="#2A2A28" stroke-width="14"
      stroke-linecap="round" stroke-linejoin="round"/>
<path d="M308 400 L308 196 L356 144 L404 196 L404 400 Z" fill="#1A1A1A"/>
<path d="M308 400 L308 196 L356 144 L404 196 L404 400 Z" fill="none" stroke="#F5F1E8" stroke-width="4" opacity=".35"/>
<path d="M330 356 L330 248 L382 356 L382 248" fill="none" stroke="#F5F1E8" stroke-width="8"
      stroke-linecap="round" stroke-linejoin="round" opacity=".45"/>
<path d="M96 416 L416 416" stroke="#F5F1E8" stroke-width="4" opacity=".5"/>
''',
    bg="#2A2A28",
)

# ---------------------------------------------------------------- 78
def p78():
    # bars whose silhouette reads as A (two legs + crossbar)
    left = [(116, 300), (148, 268), (180, 232), (212, 196)]
    right = [(282, 196), (314, 232), (346, 268), (378, 300)]
    bars = []
    for x, top in left + right:
        h = 380 - top
        bars.append(
            f'<rect x="{x}" y="{top}" width="20" height="{h}" rx="10" fill="#E63946"/>'
        )
    body = "\n".join(bars)
    body += '''
<rect x="196" y="300" width="132" height="18" rx="9" fill="#E63946"/>
<path d="M116 300 L148 268 L180 232 L212 196 M282 196 L314 232 L346 268 L378 300"
      fill="none" stroke="#F5F1E8" stroke-width="4" stroke-linecap="round" opacity=".55"/>
<path d="M196 309 L328 309" stroke="#F5F1E8" stroke-width="3" opacity=".35"/>
<circle cx="256" cy="412" r="11" fill="#E63946"/>
<circle cx="256" cy="412" r="4" fill="#0E0E12"/>
'''
    return wrap("Amit Narwal — Soundform", body, bg="#0E0E12")


# ---------------------------------------------------------------- 79 (kept)
P79 = wrap(
    "Amit Narwal — Q.E.D. Stamp",
    '''
<circle cx="256" cy="256" r="176" fill="none" stroke="#C73E2E" stroke-width="8"/>
<circle cx="256" cy="256" r="156" fill="none" stroke="#C73E2E" stroke-width="3"/>
<g stroke="#C73E2E" stroke-width="4"><path d="M256 80 L256 104"/><path d="M256 408 L256 432"/><path d="M80 256 L104 256"/><path d="M408 256 L432 256"/></g>
<path d="M184 316 L232 194 L280 316 M202 276 L262 276" fill="none" stroke="#C73E2E" stroke-width="16"
      stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300 316 L300 194 L368 316 L368 194" fill="none" stroke="#C73E2E" stroke-width="16"
      stroke-linecap="round" stroke-linejoin="round"/>
<rect x="238" y="344" width="36" height="36" fill="none" stroke="#C73E2E" stroke-width="6"/>
<text x="256" y="370" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#C73E2E">AN</text>
<text x="256" y="152" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="4" fill="#C73E2E">Q.E.D.</text>
''',
    bg="#F5F1E8",
)

# ---------------------------------------------------------------- 80
P80 = wrap(
    "Amit Narwal — Open Source",
    '''
<defs><linearGradient id="k80" x1="0" y1="0" x2="0" y2="1">
<stop offset="0%" stop-color="#9CC0A6"/><stop offset="100%" stop-color="#5C8A6C"/></linearGradient></defs>
<!-- bracket-like A legs -->
<path d="M256 128 L150 392" fill="none" stroke="url(#k80)" stroke-width="24" stroke-linecap="round"/>
<path d="M256 128 L362 392" fill="none" stroke="url(#k80)" stroke-width="24" stroke-linecap="round"/>
<!-- leg curls (bracket serifs) -->
<path d="M150 392 C142 412 158 424 176 418" fill="none" stroke="url(#k80)" stroke-width="12" stroke-linecap="round"/>
<path d="M362 392 C370 412 354 424 336 418" fill="none" stroke="url(#k80)" stroke-width="12" stroke-linecap="round"/>
<!-- crossbar -->
<path d="M198 312 L314 312" fill="none" stroke="url(#k80)" stroke-width="16" stroke-linecap="round"/>
<!-- leaves grown from the crossbar -->
<path d="M256 316 C256 286 234 270 208 270 C208 298 230 316 256 316 Z" fill="#9CC0A6"/>
<path d="M256 304 C256 274 278 258 304 258 C304 286 282 304 256 304 Z" fill="#7EA88A"/>
<path d="M256 236 C256 212 268 196 288 188 C292 210 280 230 256 236 Z" fill="#7EA88A" opacity=".9"/>
<!-- flower / period -->
<circle cx="256" cy="122" r="17" fill="#F5F1E8"/>
<circle cx="256" cy="122" r="7" fill="#0E1A14"/>
''',
    bg="#0E1A14",
)

for num, svg in [
    (61, P61), (62, p62()), (63, p63()), (64, p64()), (65, P65),
    (66, P66), (67, p67()), (68, P68), (69, P69), (70, P70),
    (71, P71), (72, P72), (73, P73), (74, P74), (75, P75),
    (76, p76()), (77, P77), (78, p78()), (79, P79), (80, P80),
]:
    save(num, svg)
print("refined 61-80")
