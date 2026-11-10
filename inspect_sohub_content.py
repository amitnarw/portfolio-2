with open('sohub_work.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find all h1, h2, h3, p, span inside sections
sections = re.findall(r'<section[^>]*>(.*?)</section>', html, flags=re.DOTALL)
print(f"Total sections: {len(sections)}")

for i, s in enumerate(sections):
    print(f"\n==================== SECTION {i} ====================")
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', s, flags=re.DOTALL)
    print("Headings:", [re.sub(r'<[^>]+>', '', h).strip() for h in headings])
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', s, flags=re.DOTALL)
    print("Paragraphs:", [re.sub(r'<[^>]+>', '', p).strip() for p in paragraphs])
    images = re.findall(r'<img[^>]*alt="([^"]*)"', s)
    print("Images count:", len(images), images[:4])

