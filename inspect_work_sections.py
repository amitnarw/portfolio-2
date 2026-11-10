with open('sohub_work.html', 'r', encoding='utf-8') as f:
    work = f.read()

import re

# find colors, backgrounds, text colors
bg_colors = re.findall(r'bg-\[[^\]]+\]|bg-[a-zA-Z0-9_-]+', work)
text_colors = re.findall(r'text-\[[^\]]+\]|text-[a-zA-Z0-9_-]+', work)

print("Backgrounds:", set(bg_colors))
print("Text colors:", set(text_colors))

# Check sections in sohub_work.html
sections = re.findall(r'<section[^>]*>(.*?)</section>', work, flags=re.DOTALL)
print(f"Total sections: {len(sections)}")
for i, s in enumerate(sections):
    # print first 200 chars
    print(f"--- Section {i} ---")
    s_clean = re.sub(r'<[^>]+>', ' ', s)
    s_clean = ' '.join(s_clean.split())
    print(s_clean[:250])

