import math, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent / ".tools"))
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
BASE = Path(__file__).resolve().parent
ROOT = BASE.parent
FONTS = BASE / ".fonts"
OUT = ROOT / "public" / "favicons"
OUT.mkdir(parents=True, exist_ok=True)
C, U, G = 512, 32, 16
INK, PAPER, RED = "#141414", "#F2EFE6", "#C8321F"
def wrap(title, body, bg):
    esc = title.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")
    return ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"512\" height=\"512\" "    "viewBox=\"0 0 512 512\" role=\"img\" aria-label=\"" + esc + "\">\n<title>" + esc + "</title>\n"    "<rect width=\"512\" height=\"512\" rx=\"88\" fill=\"" + bg + "\"/>\n" + body + "\n</svg>")
def rs(pat, mark, bg):
    cells=[]
    for r,row in enumerate(pat):
        for c,ch in enumerate(row):
            if ch=="#":
                cells.append('<rect x="%d" y="%d" width="%d" height="%d" fill="%s"/>'%(c*U,r*U,U,U,mark))
    return wrap("Amit Narwal", "\n".join(cells), bg)
P=[
".......#....",
".#...##.....",
"##..#...#...",
"#.#.#...###.",
"..#.###.##..",
"...####.....",
"...#..#.....",
".#. #..#....",
"#..#...##...",
".##.....#...",
"........#...",
"............",
"............",
"............",
"............",
"............",]
# alternate simplest pattern Paul amended below
P1=[
"................",
"................",
"...............#",
"...............#",
"...............#",
"..............##",
".............###",
"............###.",
"...........####.",
"..........####..",
"........ #####..",
"...... ######...",
".... #####......",
"... #####.......",
".. #####........",
".. #####........",
]