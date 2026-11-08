"""Generate premium-81..100 — two formal families:
   A. Pixelated (81-90)
   B. Poster Bebas (91-100)
Also writes public/favicons/pixel-bebas-gallery.html
"""
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

BASE = Path(__file__).resolve().parent
ROOT = BASE.parent
FONTS = BASE / ".fonts"
TOOLS = BASE / ".tools"
OUT = ROOT / "public" / "favicons"
OUT.mkdir(parents=True, exist_ok=True)

sys.path.insert(0, str(TOOLS))
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

CANVAS = 512


def wrap(title, body, bg="#0A0A0A"):
    esc = title.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="{esc}">
<title>{esc}</title>
<rect width="512" height="512" rx="88" fill="{bg}"/>
{body}
</svg>'''


# ---------------------------------------------------------------- Bebas helpers
def bebas_glyph(tt, ch, font_px, x_px, baseline_px):
    upem = tt["head"].unitsPerEm
    scale = font_px / upem
    gs = tt.getGlyphSet()
    pen = SVGPathPen(gs)
    tp = TransformPen(pen, (scale, 0, 0, -scale, x_px, baseline_px))
    gs[ch].draw(tp)
    return pen.getCommands(), gs[ch].width * scale


def bebas_pair(text="AN", font_px=330, overlap=0.0, x_center=256.0, dy=0.0):
    tt = TTFont(str(FONTS / "BebasNeue-Regular.ttf"))
    upem = tt["head"].unitsPerEm
    scale = font_px / upem
    cap = getattr(tt["OS/2"], "sCapHeight", int(upem * 0.7)) * scale
    baseline = CANVAS / 2 + cap / 2 + dy
    gs = tt.getGlyphSet()
    adv = [gs[ch].width * scale for ch in text]
    ov = font_px * overlap
    total = sum(adv) - ov * (len(text) - 1)
    x = x_center - total / 2
    paths = []
    for i, ch in enumerate(text):
        d, w = bebas_glyph(tt, ch, font_px, x, baseline)
        paths.append(d)
        x += w - ov
    return paths, baseline, cap


# ---------------------------------------------------------------- 81 mosaic
def p81():
    pat = ["0011100", "0100010", "0100010", "0100010",
           "1111111", "0100010", "0100010", "0100010"]
    cell, gap = 38, 6
    ox, oy = 256 - (7 * cell) / 2, 256 - (8 * cell) / 2
    stones = ["#D8C7A8", "#C9B48F", "#E4D6BA", "#BFA986", "#E0CFAF"]
    body = []
    for r, row in enumerate(pat):
        for c, ch in enumerate(row):
            if ch != "1":
                continue
            x = ox + c * cell
            y = oy + r * cell
            col = stones[(r * 5 + c * 3) % len(stones)]
            body.append(
                f'<rect x="{x+gap/2}" y="{y+gap/2}" width="{cell-gap}" height="{cell-gap}" rx="3" fill="{col}"/>'
            )
            body.append(
                f'<path d="M{x+gap/2+3} {y+gap} L{x+gap/2+3} {y+cell-gap-3}" stroke="#F0E4CC" stroke-width="2" opacity=".35"/>'
            )
    return wrap("Amit Narwal — Mosaic Terra", "\n".join(body), bg="#1B3A6B")


# ---------------------------------------------------------------- 82 dither
def p82():
    def seg_dist(px, py, ax, ay, bx, by):
        dx, dy = bx - ax, by - ay
        L2 = dx * dx + dy * dy
        t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / L2))
        return math.hypot(px - (ax + t * dx), py - (ay + t * dy))

    strokes = [
        (256, 96, 148, 416, 46),
        (256, 96, 364, 416, 46),
        (204, 304, 308, 304, 30),
    ]

    def cover(x, y):
        d = min(seg_dist(x, y, *s[:4]) - s[4] / 2 for s in strokes)
        return max(0.0, min(1.0, 0.5 - d / 3.0))

    bayer = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]
    cols, cell, ox, oy = 20, 22, 36, 36
    body = []
    for r in range(cols):
        for c in range(cols):
            acc = 0.0
            for sy in range(4):
                for sx in range(4):
                    acc += cover(ox + c * cell + (sx + 0.5) * cell / 4,
                                 oy + r * cell + (sy + 0.5) * cell / 4)
            cov = acc / 16
            t = (bayer[r % 4][c % 4] + 0.5) / 16
            if cov <= 0.02:
                continue
            if cov >= t:
                fill = "#15150F"
            elif cov >= t * 0.55:
                fill = "#6E6E63"
            else:
                continue
            body.append(
                f'<rect x="{ox+c*cell}" y="{oy+r*cell}" width="{cell-1}" height="{cell-1}" fill="{fill}"/>'
            )
    body.append('<rect x="36" y="36" width="440" height="440" fill="none" stroke="#15150F" stroke-width="3" opacity=".25"/>')
    return wrap("Amit Narwal — Dither", "\n".join(body), bg="#F2EFE6")


# ---------------------------------------------------------------- 83 voxel
def p83():
    pat = ["01110", "10001", "10001", "11111", "10001", "10001", "10001"]
    cell, off = 44, 10
    ox, oy = 256 - (5 * cell + off) / 2, 256 - (7 * cell + off) / 2 + off
    body = []

    def cube(x, y):
        return (
            f'<rect x="{x}" y="{y}" width="{cell}" height="{cell}" fill="#6E8196" stroke="#0B1220" stroke-width="2"/>'
            f'<polygon points="{x},{y} {x+off},{y-off} {x+cell+off},{y-off} {x+cell},{y}" fill="#E6EDF3"/>'
            f'<polygon points="{x+cell},{y} {x+cell+off},{y-off} {x+cell+off},{y+cell-off} {x+cell},{y+cell}" fill="#93A6BA"/>'
        )

    for r, row in enumerate(pat):
        for c, ch in enumerate(row):
            if ch == "1":
                body.append(cube(ox + c * cell, oy + r * cell))
    return wrap("Amit Narwal — Voxel", "\n".join(body), bg="#0B1220")


# ---------------------------------------------------------------- 84 cross-stitch
def p84():
    pat = ["01110", "10001", "10001", "11111", "10001", "10001", "10001"]
    cell, arm = 47, 15
    ox, oy = 256 - 2.5 * cell, 256 - 3.5 * cell
    body = [
        f'<g stroke="#1F3A5F" stroke-width="1" opacity=".045">' +
        "".join(f'<path d="M0 {y} L512 {y}"/>' for y in range(24, 512, 8)) +
        "".join(f'<path d="M{x} 0 L{x} 512"/>' for x in range(24, 512, 8)) +
        "</g>"
    ]
    for r, row in enumerate(pat):
        for c, ch in enumerate(row):
            if ch != "1":
                continue
            x = ox + c * cell
            y = oy + r * cell
            shade = "#5F7D63" if (r + c) % 3 == 0 else "#547259"
            body.append(
                f'<g stroke-linecap="round">'
                f'<g stroke="#3C5341" stroke-width="8" transform="translate(2 3)">'
                f'<path d="M{x-arm} {y-arm} L{x+arm} {y+arm}"/><path d="M{x+arm} {y-arm} L{x-arm} {y+arm}"/></g>'
                f'<g stroke="{shade}" stroke-width="6">'
                f'<path d="M{x-arm} {y-arm} L{x+arm} {y+arm}"/><path d="M{x+arm} {y-arm} L{x-arm} {y+arm}"/></g>'
                f"</g>"
            )
    body.append('<path d="M120 96 C86 118 78 150 96 172" fill="none" stroke="#C26A4A" stroke-width="3" stroke-dasharray="7 7" stroke-linecap="round"/>')
    return wrap("Amit Narwal — Cross-Stitch", "\n".join(body), bg="#EFE7D4")


# ---------------------------------------------------------------- 85 scanline
def p85():
    body = []
    for y in range(24, 512, 18):
        body.append(f'<path d="M0 {y} L512 {y}" stroke="#7CFF6B" stroke-width="1" opacity=".04"/>')
    apex_y, base_y = 110, 404
    for y in range(120, 402, 15):
        t = (y - apex_y) / (base_y - apex_y)
        half = 23
        lc = 256 - 108 * t
        rc = 256 + 108 * t
        segs = [(lc - half, lc + half), (rc - half, rc + half)]
        if 294 <= y <= 332:
            segs.append((190, 322))
        for x0, x1 in segs:
            body.append(f'<rect x="{x0:.1f}" y="{y}" width="{x1-x0:.1f}" height="9" fill="#7CFF6B"/>')
            body.append(f'<rect x="{x0:.1f}" y="{y}" width="2" height="9" fill="#FF5A5A" opacity=".55"/>')
            body.append(f'<rect x="{x1-2:.1f}" y="{y}" width="2" height="9" fill="#5AA8FF" opacity=".55"/>')
    body.append('<rect x="24" y="24" width="464" height="464" rx="52" fill="none" stroke="#7CFF6B" stroke-width="3" opacity=".18"/>')
    return wrap("Amit Narwal — Scanline", "\n".join(body), bg="#050A05")


# ---------------------------------------------------------------- 86 barcode
def p86():
    bars = [(12, 4), (5, 4), (16, 4), (7, 5), (10, 4), (4, 5), (14, 4),
            (6, 4), (18, 5), (5, 4), (12, 4), (7, 5), (9, 4), (16, 4),
            (5, 4), (12, 5), (7, 4), (10, 4), (14, 4), (5, 4), (12, 4)]
    x = 96
    body = []
    for w, gap in bars:
        body.append(f'<rect x="{x}" y="112" width="{w}" height="288" fill="#101820"/>')
        x += w + gap
    # guard rails
    body.append('<path d="M96 392 L392 392" stroke="#101820" stroke-width="5"/>')
    body.append('<path d="M96 120 L392 120" stroke="#101820" stroke-width="3" opacity=".8"/>')
    # punched A
    a_path, baseline, cap = bebas_pair("A", font_px=300, overlap=0.0, x_center=250)
    body.append(f'<path d="{a_path[0]}" fill="#F5F1E8" stroke="#101820" stroke-width="4"/>')
    body.append('<text x="96" y="94" font-family="monospace" font-size="18" letter-spacing="4" fill="#101820">AN—86</text>')
    body.append('<text x="392" y="440" text-anchor="end" font-family="monospace" font-size="18" letter-spacing="4" fill="#101820">SCAN / SHIP</text>')
    return wrap("Amit Narwal — Barcode Pixel", "\n".join(body), bg="#F5F1E8")


# ---------------------------------------------------------------- 87 serif pixel
def p87():
    font = ImageFont.truetype(str(FONTS / "InstrumentSerif-Regular.ttf"), 410)
    img = Image.new("L", (CANVAS, CANVAS), 0)
    d = ImageDraw.Draw(img)
    d.text((256, 256), "A", fill=255, font=font, anchor="mm")
    cell, n = 32, 16
    body = []
    for r in range(n):
        for c in range(n):
            tile = img.crop((c * cell, r * cell, (c + 1) * cell, (r + 1) * cell))
            v = tile.resize((1, 1), Image.BOX).getpixel((0, 0))
            if v < 55:
                continue
            if v > 190:
                fill = "#FBEBBB"
            elif v > 120:
                fill = "#DCC58D"
            else:
                fill = "#B2965F"
            body.append(
                f'<rect x="{c*cell+3}" y="{r*cell+3}" width="{cell-6}" height="{cell-6}" rx="4" fill="{fill}"/>'
            )
    return wrap("Amit Narwal — Serif Pixel", "\n".join(body), bg="#14110D")


# ---------------------------------------------------------------- 88 8-bit sprite
def p88():
    pat = [
        "....##....",
        "...####...",
        "...####...",
        "..######..",
        "..##..##..",
        ".##....##.",
        ".##....##.",
        "###....###",
        "##########",
        "##########",
        "##......##",
        "##......##",
    ]
    cell = 34
    ox = 256 - 5 * cell
    oy = 256 - 6 * cell
    cells = [(c, r) for r, row in enumerate(pat) for c, ch in enumerate(row) if ch == "#"]
    body = []
    # silhouette outline
    for c, r in cells:
        body.append(f'<rect x="{ox+c*cell-3}" y="{oy+r*cell-3}" width="{cell+6}" height="{cell+6}" fill="#111321"/>')
    for c, r in cells:
        x, y = ox + c * cell, oy + r * cell
        body.append(f'<rect x="{x}" y="{y}" width="{cell}" height="{cell}" fill="#E8613C"/>')
        top = any((c + dc, r - 1) not in cells for dc in (-1, 0, 1))
        if top:
            body.append(f'<rect x="{x}" y="{y}" width="{cell}" height="8" fill="#FFB07A"/>')
        left = (c - 1, r) not in cells
        if left:
            body.append(f'<rect x="{x}" y="{y}" width="7" height="{cell}" fill="#FF9A66"/>')
        bottom = (c, r + 1) not in cells
        if bottom:
            body.append(f'<rect x="{x}" y="{y+cell-7}" width="{cell}" height="7" fill="#A83A1E"/>')
    body.append(f'<rect x="{ox-40}" y="{oy-40}" width="{10*cell+80}" height="{12*cell+80}" rx="14" fill="none" stroke="#E8613C" stroke-width="4" opacity=".35"/>')
    return wrap("Amit Narwal — 8-Bit Sprite", "\n".join(body), bg="#111321")


# ---------------------------------------------------------------- 89 tile fleur
def p89():
    n, cell = 13, 36
    ox = oy = 256 - (n * cell) / 2
    R, r = 5.0, 2.1
    star = []
    for k in range(16):
        ang = math.radians(-90 + k * 22.5)
        rad = R if k % 2 == 0 else r
        star.append((6 + rad * math.cos(ang), 6 + rad * math.sin(ang)))

    def inside(px, py):
        res = False
        j = len(star) - 1
        for i in range(len(star)):
            xi, yi = star[i]
            xj, yj = star[j]
            if (yi > py) != (yj > py) and px < (xj - xi) * (py - yi) / (yj - yi) + xi:
                res = not res
            j = i
        return res

    body = []
    for row in range(n):
        for col in range(n):
            if not inside(col, row):
                continue
            x = ox + col * cell
            y = oy + row * cell
            rad = math.hypot(col - 6, row - 6)
            if rad < 1.6:
                fill = "#F0E8D8"
            elif rad < 3.0:
                fill = "#D9B96A"
            else:
                fill = "#D4623C" if (col + row) % 2 else "#C05431"
            body.append(f'<rect x="{x+2}" y="{y+2}" width="{cell-4}" height="{cell-4}" rx="2" fill="{fill}"/>')
    for gx, gy in ((26, 26), (486, 26), (26, 486), (486, 486)):
        body.append(f'<circle cx="{gx}" cy="{gy}" r="6" fill="#D9B96A"/>')
    return wrap("Amit Narwal — Tile Fleur", "\n".join(body), bg="#14213D")


# ---------------------------------------------------------------- 90 mono pixel
def p90():
    A = ["01110", "10001", "10001", "11111", "10001", "10001", "10001"]
    N = ["10001", "11001", "10101", "10011", "10001", "10001", "10001"]
    cell = 30
    ox, oy = 92, 256 - 3.5 * cell
    body = []
    for col in range(5):
        for row in range(7):
            if A[row][col] == "1":
                body.append(f'<rect x="{ox+col*cell}" y="{oy+row*cell}" width="{cell-4}" height="{cell-4}" fill="#0A0A0A"/>')
    ox2 = ox + 5 * cell + 42
    for col in range(5):
        for row in range(7):
            if N[row][col] == "1":
                body.append(f'<rect x="{ox2+col*cell}" y="{oy+row*cell}" width="{cell-4}" height="{cell-4}" fill="#0A0A0A"/>')
    body.append('<rect x="72" y="72" width="368" height="368" fill="none" stroke="#0A0A0A" stroke-width="4"/>')
    body.append('<rect x="84" y="84" width="344" height="344" fill="none" stroke="#0A0A0A" stroke-width="1" opacity=".35"/>')
    return wrap("Amit Narwal — Mono Pixel", "\n".join(body), bg="#FFFFFF")


# ---------------------------------------------------------------- 91 roundel v2
def p91():
    a, n = [bebas_pair("AN", font_px=205, overlap=0.01)[0][i] for i in range(2)]
    body = f'''
<circle cx="256" cy="256" r="172" fill="#C8321F"/>
<circle cx="256" cy="256" r="172" fill="none" stroke="#0A0A0A" stroke-width="10" opacity=".12"/>
<path d="{a}" fill="#F5F1E8"/><path d="{n}" fill="#F5F1E8"/>
'''
    return wrap("Amit Narwal — Roundel Vermillion", body, bg="#0A0A0A")


# ---------------------------------------------------------------- 92 roundel ink
def p92():
    a, n = [bebas_pair("AN", font_px=205, overlap=0.01)[0][i] for i in range(2)]
    body = f'''
<circle cx="256" cy="256" r="172" fill="#F5F1E8"/>
<circle cx="256" cy="256" r="150" fill="none" stroke="#141414" stroke-width="2" opacity=".35"/>
<path d="{a}" fill="#141414"/><path d="{n}" fill="#141414"/>
<circle cx="256" cy="410" r="7" fill="#C8321F"/>
'''
    return wrap("Amit Narwal — Roundel Ink", body, bg="#0A0A0A")


# ---------------------------------------------------------------- 93 split roundel
def p93():
    a, n = [bebas_pair("AN", font_px=205, overlap=0.01)[0][i] for i in range(2)]
    body = f'''
<defs>
<clipPath id="left"><rect x="0" y="0" width="256" height="512"/></clipPath>
<clipPath id="right"><rect x="256" y="0" width="256" height="512"/></clipPath>
</defs>
<circle cx="256" cy="256" r="172" fill="#F5F1E8"/>
<path d="M256 84 A172 172 0 0 0 256 428 Z" fill="#C8321F"/>
<g clip-path="url(#left)"><path d="{a}" fill="#F5F1E8"/><path d="{n}" fill="#F5F1E8"/></g>
<g clip-path="url(#right)"><path d="{a}" fill="#141414"/><path d="{n}" fill="#141414"/></g>
<path d="M256 84 L256 428" stroke="#141414" stroke-width="6" opacity=".9"/>
'''
    return wrap("Amit Narwal — Split Roundel", body, bg="#0A0A0A")


# ---------------------------------------------------------------- 94 swiss grid
def p94():
    tt = TTFont(str(FONTS / "BebasNeue-Regular.ttf"))
    upem = tt["head"].unitsPerEm
    scale = 330 / upem
    cap = tt["OS/2"].sCapHeight * scale
    baseline = 256 + cap / 2
    gs = tt.getGlyphSet()
    a_d, a_w = bebas_glyph(tt, "A", 330, 96, baseline)
    n_d, n_w = bebas_glyph(tt, "N", 330, 96 + a_w - 4, baseline)
    body = f'''
<g stroke="#141414" stroke-width="2" opacity=".22">
<path d="M96 84 L416 84"/><path d="M96 188 L416 188"/><path d="M96 340 L416 340"/><path d="M96 428 L416 428"/>
</g>
<rect x="96" y="204" width="42" height="42" fill="#C8321F"/>
<path d="{a_d}" fill="#141414"/><path d="{n_d}" fill="#141414"/>
<text x="96" y="466" font-family="Arial, sans-serif" font-size="17" letter-spacing="5" fill="#141414">SWISS / POSTER</text>
<text x="416" y="466" text-anchor="end" font-family="Arial, sans-serif" font-size="17" letter-spacing="5" fill="#141414">AN—94</text>
'''
    return wrap("Amit Narwal — Swiss Grid", body, bg="#F2EFE6")


# ---------------------------------------------------------------- 95 poster italic
def p95():
    a, n = [bebas_pair("AN", font_px=225, overlap=0.0, dy=-8)[0][i] for i in range(2)]
    body = f'''
<g transform="rotate(-7 256 256)">
<path d="{a}" fill="#141414"/><path d="{n}" fill="#141414"/>
<rect x="120" y="372" width="272" height="12" fill="#C8321F"/>
<rect x="120" y="398" width="150" height="6" fill="#141414" opacity=".55"/>
</g>
'''
    return wrap("Amit Narwal — Poster Italic", body, bg="#F5F1E8")


# ---------------------------------------------------------------- 96 outline roundel
def p96():
    a, n = [bebas_pair("AN", font_px=200, overlap=0.01)[0][i] for i in range(2)]
    body = f'''
<circle cx="256" cy="256" r="172" fill="none" stroke="#D9B96A" stroke-width="8"/>
<circle cx="256" cy="256" r="152" fill="none" stroke="#D9B96A" stroke-width="1.5" opacity=".45"/>
<path d="{a}" fill="none" stroke="#F5F1E8" stroke-width="7" stroke-linejoin="round"/>
<path d="{n}" fill="none" stroke="#F5F1E8" stroke-width="7" stroke-linejoin="round"/>
<circle cx="256" cy="408" r="6" fill="#D9B96A"/>
'''
    return wrap("Amit Narwal — Outline Roundel", body, bg="#0A0A0A")


# ---------------------------------------------------------------- 97 duotone
def p97():
    a, n = [bebas_pair("AN", font_px=210, overlap=0.0)[0][i] for i in range(2)]
    body = f'''
<defs>
<clipPath id="top97"><rect x="0" y="0" width="512" height="300"/></clipPath>
<clipPath id="bot97"><rect x="0" y="300" width="512" height="212"/></clipPath>
</defs>
<rect x="0" y="0" width="512" height="512" rx="88" fill="#0E3B43"/>
<circle cx="256" cy="256" r="172" fill="#E8D9B0"/>
<g clip-path="url(#top97)"><path d="{a}" fill="#0E3B43"/><path d="{n}" fill="#0E3B43"/></g>
<g clip-path="url(#bot97)"><path d="{a}" fill="#D4623C"/><path d="{n}" fill="#D4623C"/></g>
<path d="M84 300 L428 300" stroke="#F0E8D8" stroke-width="3" opacity=".5"/>
'''
    return wrap("Amit Narwal — Duotone", body, bg="#0E3B43")


# ---------------------------------------------------------------- 98 stencil
def p98():
    a, n = [bebas_pair("AN", font_px=230, overlap=0.012)[0][i] for i in range(2)]
    body = f'''
<path d="{a}" fill="#141414"/><path d="{n}" fill="#141414"/>
<g fill="#F2EFE6">
<rect x="60" y="216" width="392" height="16"/>
<rect x="60" y="330" width="392" height="14"/>
<rect x="232" y="120" width="12" height="300"/>
</g>
<g stroke="#C8321F" stroke-width="4">
<path d="M96 408 L416 408"/>
</g>
'''
    return wrap("Amit Narwal — Stencil", body, bg="#F2EFE6")


# ---------------------------------------------------------------- 99 vertical
def p99():
    tt = TTFont(str(FONTS / "BebasNeue-Regular.ttf"))
    scale = 170 / tt["head"].unitsPerEm
    cap = tt["OS/2"].sCapHeight * scale
    a_d, a_w = bebas_glyph(tt, "A", 170, 256 - tt.getGlyphSet()["A"].width * scale / 2, 130 + cap / 2)
    n_d, n_w = bebas_glyph(tt, "N", 170, 256 - tt.getGlyphSet()["N"].width * scale / 2, 300 + cap / 2)
    body = f'''
<rect x="146" y="48" width="220" height="416" fill="#F5F1E8"/>
<path d="{a_d}" fill="#141414"/><path d="{n_d}" fill="#141414"/>
<rect x="178" y="386" width="156" height="8" fill="#C8321F"/>
<text x="256" y="430" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" letter-spacing="5" fill="#141414">AMIT NARWAL</text>
'''
    return wrap("Amit Narwal — Vertical Poster", body, bg="#0A0A0A")


# ---------------------------------------------------------------- 100 checkered
def p100():
    a, n = [bebas_pair("AN", font_px=210, overlap=0.0, dy=40)[0][i] for i in range(2)]
    sq = 32
    body = []
    for row in range(2):
        for col in range(16):
            if (row + col) % 2 == 0:
                body.append(f'<rect x="{col*sq}" y="{64+row*sq}" width="{sq}" height="{sq}" fill="#141414"/>')
    body.append('<rect x="0" y="64" width="512" height="64" fill="none" stroke="#141414" stroke-width="4"/>')
    body.append(f'<path d="{a}" fill="#C8321F"/><path d="{n}" fill="#C8321F"/>')
    body.append('<path d="M96 430 L416 430" stroke="#141414" stroke-width="4"/>')
    body.append('<text x="256" y="462" text-anchor="middle" font-family="Arial, sans-serif" font-size="15" letter-spacing="6" fill="#141414">POSTER / AN—100</text>')
    return wrap("Amit Narwal — Checkered Poster", "\n".join(body), bg="#F5F1E8")


# ---------------------------------------------------------------- write
marks = [
    (81, p81), (82, p82), (83, p83), (84, p84), (85, p85),
    (86, p86), (87, p87), (88, p88), (89, p89), (90, p90),
    (91, p91), (92, p92), (93, p93), (94, p94), (95, p95),
    (96, p96), (97, p97), (98, p98), (99, p99), (100, p100),
]
for num, fn in marks:
    d = OUT / f"premium-{num:02d}"
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(fn(), encoding="utf-8")
    print(f"premium-{num:02d} done")
