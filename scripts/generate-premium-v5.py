"""Generate premium-61..80 — brand-idea concepts, each with a distinct metaphor."""
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

P61 = wrap("Amit Narwal — The Infinite Kiln",
'''
<defs><linearGradient id="g61a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E3A66B"/><stop offset="60%" stop-color="#C87E4B"/><stop offset="100%" stop-color="#8A4E2A"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#1A1612"/>
<!-- kiln bowl base -->
<path d="M128 340 C128 410 384 410 384 340 L352 340 C352 386 160 386 160 340 Z" fill="#A65B33" opacity=".7"/>
<!-- continuous line: potter wheel → infinity → A -->
<path d="M128 340 C188 340 196 302 256 302 C316 302 324 340 384 340 C324 340 316 378 256 378 C196 378 188 340 128 340 Z" fill="none" stroke="url(#g61a)" stroke-width="18" stroke-linecap="round"/>
<path d="M196 302 C232 302 236 256 256 256 C276 256 280 302 316 302" fill="none" stroke="url(#g61a)" stroke-width="18" stroke-linecap="round"/>
<path d="M256 256 L256 136 M256 136 L212 214 M256 136 L300 214" fill="none" stroke="url(#g61a)" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="256" cy="118" r="13" fill="#E3A66B"/>
''', bg="#1A1612")

P62 = wrap("Amit Narwal — Narwhal Horn Compass",
'''
<defs><linearGradient id="g62a" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E9D8A6"/><stop offset="100%" stop-color="#B8985A"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#081018"/>
<circle cx="256" cy="256" r="186" fill="none" stroke="#D9B96A" stroke-width="5"/>
<circle cx="256" cy="256" r="156" fill="none" stroke="#D9B96A" stroke-width="2" opacity=".5"/>
<!-- compass ticks -->
<g stroke="#D9B96A" stroke-width="4" stroke-linecap="round">
<path d="M256 70 L256 96"/><path d="M256 416 L256 442"/><path d="M70 256 L96 256"/><path d="M416 256 L442 256"/>
<path d="M124 124 L142 142"/><path d="M388 124 L370 142"/><path d="M124 388 L142 370"/><path d="M388 388 L370 370"/>
</g>
<!-- tusk needle spiral -->
<path d="M256 256 C286 234 312 264 288 292 C260 324 214 296 228 256 C246 208 318 202 334 262" fill="none" stroke="url(#g62a)" stroke-width="16" stroke-linecap="round"/>
<!-- needle triangle -->
<path d="M256 156 L280 256 L256 236 L232 256 Z" fill="#E9D8A6"/>
<circle cx="256" cy="256" r="12" fill="#081018" stroke="#E9D8A6" stroke-width="6"/>
<!-- N hint -->
<path d="M214 324 L214 286 L246 324 L246 286" fill="none" stroke="#D9B96A" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
''', bg="#081018")

P63 = wrap("Amit Narwal — Madhubani Pulse",
'''
<rect width="512" height="512" rx="88" fill="#101B33"/>
<!-- warp lines -->
<g stroke="#E8A23B" stroke-width="6" stroke-linecap="round" opacity=".9">
<path d="M96 128 L416 128"/><path d="M96 168 L416 168"/><path d="M96 208 L416 208"/><path d="M96 344 L416 344"/><path d="M96 384 L416 384"/>
</g>
<!-- weft gaps forming A -->
<g stroke="#F5F1E8" stroke-width="6" stroke-linecap="round">
<path d="M128 304 L128 240"/><path d="M168 304 L168 232"/><path d="M208 304 L208 224"/><path d="M248 304 L248 216"/><path d="M288 304 L288 224"/><path d="M328 304 L328 232"/><path d="M368 304 L368 240"/>
</g>
<!-- AN warp block -->
<path d="M164 296 L256 112 L348 296 M204 248 L308 248" fill="none" stroke="#E8A23B" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
<!-- dot accents -->
<g fill="#C73E2E"><circle cx="128" cy="344" r="9"/><circle cx="384" cy="344" r="9"/><circle cx="256" cy="96" r="9"/></g>
''', bg="#101B33")

P64 = wrap("Amit Narwal — Cell & Petal",
'''
<rect width="512" height="512" rx="88" fill="#171126"/>
<!-- neuron soma -->
<circle cx="256" cy="256" r="62" fill="#E8D9FF"/>
<circle cx="256" cy="256" r="34" fill="#7C6AA8"/>
<circle cx="256" cy="256" r="14" fill="#E8D9FF"/>
<!-- petal branches -->
<g fill="none" stroke="#E8D9FF" stroke-width="12" stroke-linecap="round">
<path d="M256 194 C256 148 220 128 188 100"/>
<path d="M306 220 C354 198 372 158 392 118"/>
<path d="M318 256 C364 256 392 266 424 290"/>
<path d="M306 292 C354 314 372 354 392 394"/>
<path d="M256 318 C256 364 220 384 188 412"/>
<path d="M206 292 C158 314 140 354 120 394"/>
<path d="M194 256 C148 256 120 246 88 222"/>
<path d="M206 220 C158 198 140 158 120 118"/>
</g>
<!-- nodes -->
<g fill="#C9A86A"><circle cx="188" cy="100" r="14"/><circle cx="392" cy="118" r="14"/><circle cx="424" cy="290" r="14"/><circle cx="392" cy="394" r="14"/><circle cx="188" cy="412" r="14"/><circle cx="120" cy="394" r="14"/><circle cx="88" cy="222" r="14"/><circle cx="120" cy="118" r="14"/></g>
<!-- A inside soma -->
<path d="M236 280 L256 224 L276 280 M244 262 L268 262" fill="none" stroke="#171126" stroke-width="9" stroke-linecap="round"/>
''', bg="#171126")

P65 = wrap("Amit Narwal — The Keystone",
'''
<rect width="512" height="512" rx="88" fill="#1F1E1A"/>
<!-- arch stones -->
<g fill="#B8A98A">
<path d="M120 384 L120 296 A136 136 0 0 1 392 296 L392 384 L344 384 L344 296 A88 88 0 0 0 168 296 L168 384 Z"/>
</g>
<!-- joints -->
<g stroke="#1F1E1A" stroke-width="5">
<path d="M120 340 L168 340"/><path d="M344 340 L392 340"/>
<path d="M140 296 L168 296"/><path d="M344 296 L372 296"/>
<path d="M188 236 L204 252"/><path d="M324 236 L308 252"/>
<path d="M256 160 L256 190"/>
</g>
<!-- keystone A -->
<path d="M240 160 L272 160 L300 238 L268 238 L256 208 L244 238 L212 238 Z" fill="#E8D9B0"/>
<path d="M248 218 L264 218" stroke="#1F1E1A" stroke-width="6" stroke-linecap="round"/>
<!-- base horizon -->
<path d="M96 404 L416 404" stroke="#B8A98A" stroke-width="6" stroke-linecap="round" opacity=".5"/>
''', bg="#1F1E1A")

P66 = wrap("Amit Narwal — Sea Mark",
'''
<rect width="512" height="512" rx="88" fill="#E8DFC8"/>
<!-- chart border -->
<rect x="72" y="72" width="368" height="368" fill="none" stroke="#123047" stroke-width="6"/>
<rect x="88" y="88" width="336" height="336" fill="none" stroke="#123047" stroke-width="2" opacity=".55"/>
<!-- compass star -->
<polygon points="256,108 284,228 404,256 284,284 256,404 228,284 108,256 228,228" fill="#123047"/>
<polygon points="256,158 276,236 354,256 276,276 256,354 236,276 158,256 236,236" fill="#E8DFC8"/>
<!-- wave lines -->
<g fill="none" stroke="#123047" stroke-width="5" stroke-linecap="round">
<path d="M120 336 C150 316 180 356 210 336 C240 316 270 356 300 336"/>
<path d="M120 368 C150 348 180 388 210 368 C240 348 270 388 300 368"/>
</g>
<!-- A in compass -->
<path d="M232 304 L256 236 L280 304 M240 282 L272 282" fill="none" stroke="#C73E2E" stroke-width="10" stroke-linecap="round"/>
<!-- coordinates -->
<text x="320" y="352" font-family="Georgia, serif" font-size="20" letter-spacing="2" fill="#123047">28.6N</text>
<text x="320" y="376" font-family="Georgia, serif" font-size="20" letter-spacing="2" fill="#123047">77.2E</text>
''', bg="#E8DFC8")

P67 = wrap("Amit Narwal — Pulse Dots",
'''
<rect width="512" height="512" rx="88" fill="#101010"/>
<!-- 5x5 dot matrix, dots forming AN -->
<g fill="#C6FF3D">
<!-- A dots -->
<circle cx="148" cy="140" r="12"/><circle cx="196" cy="140" r="12"/><circle cx="244" cy="140" r="12"/>
<circle cx="124" cy="188" r="12"/><circle cx="268" cy="188" r="12"/>
<circle cx="148" cy="236" r="12"/><circle cx="196" cy="236" r="12"/><circle cx="244" cy="236" r="12"/>
<circle cx="124" cy="284" r="12"/><circle cx="268" cy="284" r="12"/>
<circle cx="100" cy="332" r="12"/><circle cx="292" cy="332" r="12"/>
<!-- N dots -->
<circle cx="340" cy="140" r="12"/><circle cx="412" cy="140" r="12"/>
<circle cx="340" cy="188" r="12"/><circle cx="366" cy="188" r="12"/><circle cx="412" cy="188" r="12"/>
<circle cx="340" cy="236" r="12"/><circle cx="390" cy="236" r="12"/><circle cx="412" cy="236" r="12"/>
<circle cx="340" cy="284" r="12"/><circle cx="412" cy="284" r="12"/>
<circle cx="340" cy="332" r="12"/><circle cx="412" cy="332" r="12"/>
</g>
<!-- cursor dot -->
<circle cx="412" cy="380" r="18" fill="#C6FF3D"/>
<circle cx="412" cy="380" r="8" fill="#101010"/>
''', bg="#101010")

P68 = wrap("Amit Narwal — Marble Grain",
'''
<rect width="512" height="512" rx="88" fill="#D9D9D3"/>
<!-- marble slab -->
<rect x="112" y="112" width="288" height="288" rx="8" fill="#C9C9C2"/>
<!-- gold vein AN -->
<path d="M136 360 C200 340 196 260 256 240 C316 220 312 160 376 144" fill="none" stroke="#C9A86A" stroke-width="10" stroke-linecap="round"/>
<path d="M256 240 L256 152 M256 152 L212 224 M256 152 L300 224" fill="none" stroke="#C9A86A" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
<!-- secondary veins -->
<path d="M136 200 C190 190 220 220 256 240" fill="none" stroke="#1A1A1A" stroke-width="3" opacity=".3"/>
<path d="M376 320 C320 322 292 300 256 280" fill="none" stroke="#1A1A1A" stroke-width="3" opacity=".25"/>
<!-- flecks -->
<g fill="#8A8A86" opacity=".55"><circle cx="160" cy="160" r="4"/><circle cx="340" cy="200" r="4"/><circle cx="180" cy="340" r="3"/><circle cx="360" cy="360" r="4"/></g>
''', bg="#D9D9D3")

P69 = wrap("Amit Narwal — Brutal Reset",
'''
<rect width="512" height="512" rx="88" fill="#B8B8B0"/>
<!-- concrete blocks -->
<rect x="112" y="144" width="120" height="240" fill="#1A1A1A"/>
<rect x="232" y="240" width="120" height="144" fill="#1A1A1A"/>
<rect x="112" y="144" width="120" height="36" fill="#FF5A1F"/>
<!-- reset arrow -->
<path d="M300 168 A74 74 0 1 1 276 112" fill="none" stroke="#FF5A1F" stroke-width="16" stroke-linecap="round"/>
<polygon points="276,84 310,116 268,128" fill="#FF5A1F"/>
<!-- A cut -->
<path d="M144 336 L172 232 L200 336 M154 304 L190 304" fill="none" stroke="#B8B8B0" stroke-width="12" stroke-linecap="round"/>
<!-- N cut -->
<path d="M260 336 L260 232 L324 336 L324 232" fill="none" stroke="#B8B8B0" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
''', bg="#B8B8B0")

P70 = wrap("Amit Narwal — Thread & Needle",
'''
<rect width="512" height="512" rx="88" fill="#F0E8D8"/>
<!-- needle -->
<path d="M360 96 L184 272" stroke="#1F3A5F" stroke-width="12" stroke-linecap="round"/>
<path d="M184 272 L160 296" stroke="#1F3A5F" stroke-width="6" stroke-linecap="round"/>
<circle cx="372" cy="84" r="16" fill="none" stroke="#1F3A5F" stroke-width="6"/>
<!-- thread -->
<path d="M360 120 C300 180 380 240 320 300 C260 360 340 400 280 440" fill="none" stroke="#C73E2E" stroke-width="6" stroke-dasharray="12 10" stroke-linecap="round"/>
<!-- A stitched -->
<path d="M160 368 L232 200 L304 368" fill="none" stroke="#1F3A5F" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="18 10"/>
<path d="M190 310 L274 310" stroke="#1F3A5F" stroke-width="12" stroke-linecap="round" stroke-dasharray="14 8"/>
<!-- fabric stitches -->
<g stroke="#1F3A5F" stroke-width="3" opacity=".35"><path d="M112 136 L150 136"/><path d="M112 160 L150 160"/><path d="M112 184 L150 184"/></g>
''', bg="#F0E8D8")

P71 = wrap("Amit Narwal — Eclipse Twins",
'''
<defs><radialGradient id="g71" cx=".5" cy=".5" r=".5"><stop offset="0%" stop-color="#FFF3C4"/><stop offset="70%" stop-color="#FFD976"/><stop offset="100%" stop-color="#C9A86A"/></radialGradient></defs>
<rect width="512" height="512" rx="88" fill="#0A0A0A"/>
<!-- gold sun -->
<circle cx="256" cy="256" r="168" fill="url(#g71)"/>
<!-- dark eclipse disc offset -->
<circle cx="300" cy="232" r="148" fill="#0A0A0A"/>
<!-- rim light -->
<path d="M256 88 A168 168 0 0 1 424 256" fill="none" stroke="#FFF3C4" stroke-width="6" stroke-linecap="round"/>
<!-- A in corona -->
<path d="M188 340 L256 190 L324 340 M214 292 L298 292" fill="none" stroke="#FFD976" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="256" cy="152" r="10" fill="#FFF3C4"/>
''', bg="#0A0A0A")

P72 = wrap("Amit Narwal — Mason's Mark",
'''
<rect width="512" height="512" rx="88" fill="#8A8A86"/>
<!-- stone block -->
<rect x="104" y="104" width="304" height="304" rx="10" fill="#9A9A96"/>
<rect x="120" y="120" width="272" height="272" fill="none" stroke="#2A2A28" stroke-width="4" opacity=".55"/>
<!-- mason's incised AN -->
<g stroke="#2A2A28" stroke-linecap="round" stroke-linejoin="round">
<path d="M168 348 L232 164 L296 348" fill="none" stroke-width="20"/>
<path d="M192 288 L272 288" fill="none" stroke-width="12"/>
<path d="M296 348 L296 164 L360 348 L360 164" fill="none" stroke-width="20"/>
</g>
<!-- chisel tick marks -->
<g stroke="#2A2A28" stroke-width="4" opacity=".55"><path d="M148 372 L166 372"/><path d="M346 372 L364 372"/><path d="M256 140 L256 120"/></g>
<!-- maker's dot -->
<circle cx="256" cy="390" r="7" fill="#2A2A28"/>
''', bg="#8A8A86")

P73 = wrap("Amit Narwal — Harbor Light",
'''
<rect width="512" height="512" rx="88" fill="#0A2A33"/>
<!-- beam -->
<path d="M236 214 L92 144 L92 284 Z" fill="#FFD976" opacity=".24"/>
<path d="M236 214 L420 120 L420 308 Z" fill="#FFD976" opacity=".16"/>
<!-- lighthouse -->
<path d="M216 368 L236 168 L276 168 L296 368 Z" fill="#E6F4F3"/>
<rect x="228" y="144" width="56" height="24" fill="#C73E2E"/>
<rect x="232" y="240" width="48" height="18" fill="#C73E2E"/>
<!-- light house top -->
<circle cx="256" cy="196" r="22" fill="#FFD976"/>
<!-- A in tower -->
<path d="M234 340 L256 274 L278 340 M242 318 L270 318" fill="none" stroke="#0A2A33" stroke-width="9" stroke-linecap="round"/>
<!-- waves -->
<g fill="none" stroke="#7ECFC4" stroke-width="6" stroke-linecap="round" opacity=".8">
<path d="M96 404 C126 384 156 424 186 404 C216 384 246 424 276 404 C306 384 336 424 366 404 C396 384 426 424 456 404"/>
<path d="M96 432 C126 412 156 452 186 432 C216 412 246 452 276 432 C306 412 336 452 366 432 C396 412 426 452 456 432" opacity=".5"/>
</g>
''', bg="#0A2A33")

P74 = wrap("Amit Narwal — Paper Fold City",
'''
<rect width="512" height="512" rx="88" fill="#F3EFE8"/>
<!-- folded base -->
<polygon points="88,360 256,264 424,360 256,432" fill="#DDD8C8"/>
<polygon points="88,360 256,264 256,432" fill="#C9BFB0"/>
<!-- city towers forming A -->
<polygon points="256,120 308,264 256,264" fill="#2B2520"/>
<polygon points="204,264 256,264 256,360" fill="#C8522E"/>
<polygon points="308,264 360,264 360,360 256,360" fill="#E8845A"/>
<!-- N tower -->
<polygon points="360,264 392,264 392,380 360,380" fill="#2B2520"/>
<!-- fold lines -->
<g stroke="#F3EFE8" stroke-width="5" opacity=".8"><path d="M256 120 L256 432"/><path d="M256 264 L424 360"/><path d="M256 264 L88 360"/></g>
<!-- windows -->
<g fill="#F3EFE8"><rect x="324" y="296" width="12" height="18"/><rect x="344" y="320" width="12" height="18"/><rect x="312" y="340" width="12" height="18"/><rect x="222" y="290" width="12" height="18"/><rect x="222" y="322" width="12" height="18"/></g>
''', bg="#F3EFE8")

P75 = wrap("Amit Narwal — Inkwell",
'''
<rect width="512" height="512" rx="88" fill="#0E0E12"/>
<!-- inkwell body -->
<path d="M152 300 C152 260 188 236 256 236 C324 236 360 260 360 300 L360 384 C360 420 320 440 256 440 C192 440 152 420 152 384 Z" fill="#F5F1E8"/>
<!-- ink meniscus -->
<path d="M152 300 C152 334 192 352 256 352 C320 352 360 334 360 300 C360 334 320 352 256 352 C192 352 152 334 152 300 Z" fill="#0E0E12"/>
<!-- A as meniscus cut -->
<path d="M212 328 L256 240 L300 328 M228 300 L284 300" fill="none" stroke="#0E0E12" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
<!-- neck + lip -->
<rect x="224" y="188" width="64" height="56" fill="#F5F1E8"/>
<rect x="208" y="176" width="96" height="18" rx="9" fill="#F5F1E8"/>
<!-- silver accent -->
<rect x="208" y="176" width="96" height="8" rx="4" fill="#C0C0C8"/>
<!-- ink drop -->
<circle cx="380" cy="200" r="18" fill="#C0C0C8"/>
<path d="M380 200 L380 244" stroke="#C0C0C8" stroke-width="4" stroke-linecap="round"/>
''', bg="#0E0E12")

P76 = wrap("Amit Narwal — Archipelago",
'''
<rect width="512" height="512" rx="88" fill="#0E2A33"/>
<!-- sea grad -->
<rect width="512" height="512" rx="88" fill="#0E2A33"/>
<path d="M0 320 C80 300 140 340 220 320 C300 300 360 340 440 320 L512 320 L512 512 L0 512 Z" fill="#123A44"/>
<!-- islands forming A + N -->
<g fill="#E8D9B0">
<path d="M136 300 C128 268 160 248 188 266 C212 282 204 312 180 322 C160 328 140 320 136 300 Z"/>
<path d="M228 208 C220 176 252 156 280 174 C304 190 296 220 272 230 C252 236 232 228 228 208 Z"/>
<path d="M318 292 C310 260 342 240 370 258 C394 274 386 304 362 314 C342 320 322 312 318 292 Z"/>
<path d="M256 344 C248 320 272 304 294 318 C312 330 306 354 286 362 C270 366 259 358 256 344 Z"/>
<path d="M380 356 C374 338 394 326 412 338 C426 348 420 368 404 374 C392 378 382 370 380 356 Z"/>
</g>
<!-- dashed route -->
<path d="M150 300 C200 260 230 224 256 218 C300 230 332 266 360 300" fill="none" stroke="#7ECFC4" stroke-width="4" stroke-dasharray="6 10" stroke-linecap="round"/>
<!-- A negative water cut -->
<path d="M224 306 L256 238 L288 306 M236 282 L276 282" fill="none" stroke="#0E2A33" stroke-width="8" stroke-linecap="round"/>
<!-- waves -->
<g fill="none" stroke="#7ECFC4" stroke-width="4" stroke-linecap="round" opacity=".4"><path d="M60 420 C90 405 120 435 150 420 C180 405 210 435 240 420"/><path d="M280 440 C310 425 340 455 370 440 C400 425 430 455 460 440"/></g>
''', bg="#0E2A33")

P77 = wrap("Amit Narwal — Monolith Echo",
'''
<defs><linearGradient id="g77" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#F5F1E8"/><stop offset="100%" stop-color="#C9BFB0"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#2A2A28"/>
<!-- upright monolith A -->
<path d="M148 400 L148 156 L212 88 L276 156 L276 400 Z" fill="url(#g77)"/>
<!-- A cut -->
<path d="M184 356 L212 216 L240 356 M194 312 L230 312" fill="none" stroke="#2A2A28" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
<!-- shadow/echo monolith -->
<path d="M308 400 L308 196 L356 144 L404 196 L404 400 Z" fill="#1A1A1A"/>
<path d="M308 400 L308 196 L356 144 L404 196 L404 400 Z" fill="none" stroke="#F5F1E8" stroke-width="4" opacity=".35"/>
<!-- echo N cut -->
<path d="M330 356 L330 248 L382 356 L382 248" fill="none" stroke="#F5F1E8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity=".45"/>
<!-- ground line -->
<path d="M96 416 L416 416" stroke="#F5F1E8" stroke-width="4" opacity=".5"/>
''', bg="#2A2A28")

P78 = wrap("Amit Narwal — Soundform",
'''
<rect width="512" height="512" rx="88" fill="#0E0E12"/>
<!-- waveform bars forming A -->
<g fill="#E63946">
<rect x="108" y="280" width="20" height="84" rx="10"/>
<rect x="140" y="240" width="20" height="124" rx="10"/>
<rect x="172" y="180" width="20" height="184" rx="10"/>
<rect x="204" y="220" width="20" height="144" rx="10"/>
<rect x="236" y="120" width="20" height="244" rx="10"/>
<rect x="268" y="220" width="20" height="144" rx="10"/>
<rect x="300" y="180" width="20" height="184" rx="10"/>
<rect x="332" y="240" width="20" height="124" rx="10"/>
<rect x="364" y="280" width="20" height="84" rx="10"/>
</g>
<!-- waveform line -->
<path d="M92 322 C130 322 138 300 176 300 C214 300 222 256 256 256 C290 256 298 300 336 300 C374 300 382 322 420 322" fill="none" stroke="#F5F1E8" stroke-width="4" stroke-linecap="round" opacity=".55"/>
<!-- A crossbar -->
<rect x="184" y="332" width="144" height="18" rx="9" fill="#E63946"/>
<!-- play node -->
<circle cx="256" cy="408" r="14" fill="#E63946"/>
''', bg="#0E0E12")

P79 = wrap("Amit Narwal — Q.E.D. Stamp",
'''
<rect width="512" height="512" rx="88" fill="#F5F1E8"/>
<!-- circular stamp -->
<circle cx="256" cy="256" r="176" fill="none" stroke="#C73E2E" stroke-width="8"/>
<circle cx="256" cy="256" r="156" fill="none" stroke="#C73E2E" stroke-width="3"/>
<!-- stamp notches -->
<g stroke="#C73E2E" stroke-width="4"><path d="M256 80 L256 104"/><path d="M256 408 L256 432"/><path d="M80 256 L104 256"/><path d="M408 256 L432 256"/></g>
<!-- AN -->
<path d="M184 316 L232 194 L280 316 M202 276 L262 276" fill="none" stroke="#C73E2E" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M300 316 L300 194 L368 316 L368 194" fill="none" stroke="#C73E2E" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
<!-- QED square -->
<rect x="238" y="344" width="36" height="36" fill="none" stroke="#C73E2E" stroke-width="6"/>
<text x="256" y="370" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#C73E2E">AN</text>
<text x="256" y="152" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="4" fill="#C73E2E">Q.E.D.</text>
''', bg="#F5F1E8")

P80 = wrap("Amit Narwal — Open Source",
'''
<defs><linearGradient id="g80" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7EA88A"/><stop offset="100%" stop-color="#4E7A5E"/></linearGradient></defs>
<rect width="512" height="512" rx="88" fill="#0E1A14"/>
<!-- bracket vase -->
<path d="M172 148 L172 300 C172 360 208 392 256 392 C304 392 340 360 340 300 L340 148" fill="none" stroke="#F5F1E8" stroke-width="22" stroke-linecap="round"/>
<!-- bracket curls -->
<path d="M172 148 C144 148 132 168 132 196 L132 244" fill="none" stroke="#F5F1E8" stroke-width="16" stroke-linecap="round"/>
<path d="M340 148 C368 148 380 168 380 196 L380 244" fill="none" stroke="#F5F1E8" stroke-width="16" stroke-linecap="round"/>
<!-- stem A -->
<path d="M256 360 L256 160" stroke="url(#g80)" stroke-width="16" stroke-linecap="round"/>
<!-- leaves -->
<path d="M256 292 C226 292 208 270 208 246 C238 246 256 268 256 292 Z" fill="url(#g80)"/>
<path d="M256 256 C286 256 304 234 304 210 C274 210 256 232 256 256 Z" fill="#7EA88A"/>
<path d="M256 220 C226 220 208 198 208 174 C238 174 256 196 256 220 Z" fill="#7EA88A" opacity=".85"/>
<!-- flower A apex -->
<circle cx="256" cy="144" r="18" fill="#F5F1E8"/>
<circle cx="256" cy="144" r="8" fill="#0E1A14"/>
''', bg="#0E1A14")

concepts = [
    (61, P61, "61 The Infinite Kiln", "Potter's wheel → infinity → A, kiln copper.", "Research: Material craft (Aesop/Rimowa), infinite loop (Amit), kiln as making process, Rand continuous-line."),
    (62, P62, "62 Narwhal Horn Compass", "Tusk as drafting compass, brass on midnight.", "Research: Narwhal tusk real spiral (Nature 2026), compass navigation craft, kamon circular discipline."),
    (63, P63, "63 Madhubani Pulse", "Warp-weft weave with AN rises, indigo + turmeric.", "Research: MadhubaniIndian folk craft, woven code metaphor, finite grid → pattern."),
    (64, P64, "64 Cell & Petal", "Neuron soma branching into petals, violet + pearl.", "Research: Neural cell organic AI, Islamic star node lattice, botanical network."),
    (65, P65, "65 The Keystone", "Arch keystone holds A, limestone + slate.", "Research: Roman arch structural logic, keystone as full-stack metaphor, masonry permanence."),
    (66, P66, "66 Sea Mark", "Nautical chart mark, navy on aged paper.", "Research: Historic sea charts, compass rose, Narwal maritime heritage + Delhic oords."),
    (67, P67, "67 Pulse Dots", "5×5 dot matrix forming AN, acid + charcoal.", "Research: Pixel-origin digital natives, dot matrix as data, Bauhaus grid logic."),
    (68, P68, "68 Marble Grain", "Gold vein in marble revealing AN.", "Research: Stone veining as organic system, luxury marble, negative space discovery."),
    (69, P69, "69 Brutal Reset", "Concrete blocks + reset arrow, signal orange.", "Research: Brutalist architecture, developer reset ritual, Albers block rigor."),
    (70, P70, "70 Thread & Needle", "Needle stitches AN, ecru + indigo.", "Research: Tailoring craft (Savile Row), code as thread, craftsmanship luxury."),
    (71, P71, "71 Eclipse Twins", "Two suns align, A in corona, obsidian + gold.", "Research: Astronomical alignment, rare event exclusivity, eclipse mark gravity."),
    (72, P72, "72 Mason's Mark", "Incised Roman mason sign, stone + chisel.", "Research: Roman mason marks 2000-year lineage, maker's authenticity, inscriptional caps."),
    (73, P73, "73 Harbor Light", "Lighthouse beam sweeps A, teal + warm gold.", "Research: Guiding product in dark, nautical navigation, beam as direction."),
    (74, P74, "74 Paper Fold City", "Origami city rises into A, paper + terracotta.", "Research: Flat sheet → system (Miura-ori), architecture model craft, paper economy."),
    (75, P75, "75 Inkwell", "Inkwell with A meniscus, ink + silver.", "Research: Writer-engineer duality, ink as author's proof, meniscus detail."),
    (76, P76, "76 Archipelago", "Five islands arranged as AN in an archipelago.", "Research: Distributed systems as geography, sea-route logic, cartographic premium."),
    (77, P77, "77 Monolith Echo", "Monolith + shadow echo, basalt + bone.", "Research: Builder and work duality, 2001 monolith, architectural permanence."),
    (78, P78, "78 Soundform", "Waveform bars form A, pulse red + graphite.", "Research: Voice AI, sound as brand, waveform as data without circuit cliché."),
    (79, P79, "79 Q.E.D. Stamp", "Proof seal with AN and Q.E.D., vermillion.", "Research: Mathematical proof authority, editorial seal, vermillion intellectual premium."),
    (80, P80, "80 Open Source", "Open bracket vase blooms a flower A, sage + ink.", "Research: Open source as growth, bracket as vessel, code → bloom metaphor."),
]

for num, svg, title, desc, research in concepts:
    d = OUT / f"premium-{num:02d}"
    d.mkdir(parents=True, exist_ok=True)
    (d / "icon.svg").write_text(svg, encoding="utf-8")
    print(f"premium-{num:02d} {title} done")

# ---- gallery with all 80 ----
base = [
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
("premium-11","11 Auric Monolith","Basalt slab with incised A — builder of lasting systems.","Research: Swiss architectural monogram, bone/bronze museum premium, Müller-Brockmann grid, Rams monolith."),
("premium-12","12 Signal Wave","Echolocation arcs resolving into A — sensing AI.","Research: Narwhal echolocation physics, concentric signal premium (Sonar), Gestalt resonance."),
("premium-13","13 Proof Seal","Vermillion Q.E.D. seal — verified & shipped.","Research: Mathematical proof mark, editorial seal authority, red/black intellectual premium."),
("premium-14","14 Orbital Lattice","Islamic 8-point lattice as neural mesh.","Research: Girih lattice mathematics, Escher revival, finite rules → infinite, sacred geometry."),
("premium-15","15 Ink Bloom","Sumi-e ink lotus — code to flower.","Research: Japanese ink discipline, lotus counted-petal system, brush Bézier variable width."),
("premium-16","16 Compass Cartographer","16-point star with Delhi coords.","Research: Kuyōmon nine-bodies star, kamon radial navigation, parchment cartographer heritage."),
("premium-17","17 Glass Prism","Prism refracting beam into gold A.","Research: Transparency/clarity as premium (Aesop, Teenage Eng), refraction as AI distillation."),
("premium-18","18 Feather & Node","Editorial feather meets circuit node.","Research: Writer-engineer duality, quill nostalgia (Six Pence), node = system AGI point."),
("premium-19","19 Sundial","Brass sundial — infinite time, on schedule.","Research: Heritage craft (Jaeger), gnomon as structure, paper/brass luxury oxidation."),
("premium-20","20 Folded Ribbon","One ribbon through AN to a period dot.","Research: YSL interlock discipline, single-thread continuity (Rand), dot as ownable signature."),
("premium-21","21 Roman Arch","Aqueduct arch + keystone, travertine + ink.","Research: Roman aqueduct permanence, keystone as structural node, Swiss arch premium."),
("premium-22","22 Aurora Form","Aurora curtain sweeping into A, arctic navy + mint.","Research: Aurora visual metaphor — rare light, YSL entropy, veil premium."),
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
("premium-41","41 Venetian Wedge","Expanded serif wedge, ochre + ink.","Research: Playfair heritage contrast, expanded Didone, Pentagram expanded serif."),
("premium-42","42 Swiss Grotesk AN","Single-weight Swiss AN + red tick.","Research: Müller-Brockmann Swiss grid, single-weight discipline, International Typographic Style."),
("premium-43","43 Monotype Micro","Monotype optical micro serif, thickened hairlines.","Research: Monotype optical sizing Display→Micro, hairline thickening for 16px."),
("premium-44","44 Gabardine Caps","Condensed caps, navy + gold rule.","Research: NN/g glanceable caps, condensed display for hero only."),
("premium-45","45 Acetylene Mark","Geometric sans + node, teal.","Research: Notion/Stripe silhouette system, node as AI point."),
("premium-46","46 Bodoni Shadow","Didone wedge with hard drop, stark.","Research: Didone high-contrast fashion masthead, Bodoni shock value."),
("premium-47","47 Typewriter Ledger","Mono AN with ledger rules.","Research: Teenage Engineering mono precision, manifesto ledger."),
("premium-48","48 Kunsthaus Word","Interlocked italic an, warm.","Research: Kunsthaus editorial, chirographic italic, warm minimal."),
("premium-49","49 Technical Drawing","Blueprint AN with dimensions.","Research: Engineering drawing as brand, IDEO showing the work."),
("premium-50","50 Elzevir Mono","Small-caps serif + EST tagline.","Research: Elzevir heritage small caps, Caslon print premium."),
("premium-51","51 Monoline Outline","Stroke-only AN outline.","Research: Monoline continuity, Bauhaus line, single-stroke."),
("premium-52","52 Poster Bebas","Condensed roundel poster.","Research: Bebas poster power, maximum contrast, roundel containment."),
("premium-53","53 Cut-Paper A","Paper-cut collage.","Research: Material collage, tactile craft, Mid-century print."),
("premium-54","54 Letterpress Stamp","Embossed letterpress AN.","Research: Letterpress heritage, emboss depth, analog premium."),
("premium-55","55 Universal Sans","3 squares forming A.","Research: Universal geometric sans, Bauhaus universality, grid."),
("premium-56","56 Capitol Stone","Engraved caps on granite.","Research: Roman inscriptional caps, stone permanence, carving."),
("premium-57","57 Italic Ligature","True italic ligature AN.","Research: Italic ligature tradition, pointed-pen chirography."),
("premium-58","58 Barcode AN","Barcode strokes with AN negative.","Research: Data as brand without circuit cliché, barcode system logic."),
("premium-59","59 Ledger Serif","Folio ledger AN with №26.","Research: Ledger accounting precision, folio as proof."),
("premium-60","60 Minimalist Mark","Single dot + minimal AN.","Research: Chanel simplicity keynote, dot as ownable period."),
]
all_items = base + [(f"premium-{n:02d}", title, desc, res) for n, svg, title, desc, res in concepts]

cards = ""
for slug, title, desc, research in all_items:
    cards += f'''
    <article class="card">
      <div class="thumb"><img src="{slug}/icon.svg" alt=""/></div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div class="research"><b>Research:</b> {research}</div>
      <div class="pick"><button data-pick="{slug}">Use in tab</button><span>icon.svg 512</span></div>
    </article>'''

gallery = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Amit Narwal — 80 Brand Concepts</title>
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
<header><div class="bar"><strong>Amit Narwal — Brand Concept Exploration</strong><span style="color:var(--muted)">80 concepts • each a full idea, not just a letter</span></div></header>
<main class="wrap">
<h1>Pick your mark.</h1>
<p class="lede">80 hand-crafted SVG concepts. Batches 01-40 explored symbol metaphors; 41-60 explored typography; 61-80 are brand ideas — each one a complete concept with a different material, metaphor and palette (kiln, compass, Madhubani weave, neuron, keystone, sea chart, pixel grid, marble, brutalist block, embroidery, eclipse, mason mark, lighthouse, origami city, inkwell, archipelago, monolith echo, waveform, proof stamp, open-source bloom). Every mark is outlined Bézier, flat-colour, monochrome-safe.</p>
<div class="grid">{cards}</div>
<p style="color:var(--muted);margin-top:28px;font-size:.9rem">Tell me the numbers you like (e.g. “62 + 71 + 80”). I’ll take those into full identity-system refinement.</p>
</main>
<script>
document.querySelectorAll("[data-pick]").forEach(b=>b.addEventListener("click",e=>{{let s=e.currentTarget.getAttribute("data-pick");let l=document.querySelector('link[rel="icon"]');if(!l){{l=document.createElement("link");l.rel="icon";document.head.appendChild(l)}}l.type="image/svg+xml";l.href=s+"/icon.svg?v="+Date.now();alert("Browser tab now uses "+s)}}));
</script></body></html>'''

(OUT / "premium-gallery.html").write_text(gallery, encoding="utf-8")
print("Gallery expanded to 80 cards.")
