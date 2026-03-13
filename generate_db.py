import urllib.request
import json
import codecs
import os
import re

top_conocidas = {
    'AR', 'BR', 'US', 'CA', 'MX', 'GB', 'FR', 'DE', 'IT', 'ES', 'CN', 'JP', 'IN', 'RU', 'AU', 'KR', 'ZA', 'EG', 'SA', 'TR', 'SE', 'CH'
}

# 1. Intenta cargar colores y filtros existentes para no perder personalización
existing_data = {}
if os.path.exists("db.js"):
    with open("db.js", "r", encoding="utf-8") as f:
        content = f.read()
        # Regex simple para extraer objetos de db.js sin parsear JS completo
        # { name: '...', iso: '...', tag: '...', color: '...', filters: [...] }
        matches = re.findall(r'\{\s*name:\s*\'(.+?)\',\s*iso:\s*\'(.+?)\',\s*tag:\s*\'(.+?)\',\s*color:\s*\'(.+?)\',\s*filters:\s*\[(.+?)\]\s*\}', content)
        for m in matches:
            name, iso, tag, color, filters_raw = m
            filters = [f.strip().strip("'").strip('"') for f in filters_raw.split(',')]
            existing_data[iso.lower()] = {'color': color, 'filters': filters}

# url = "https://restcountries.com/v3.1/all"
# req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
# with urllib.request.urlopen(req) as response:
#     data = json.loads(response.read().decode())

with open("all_countries.json", "r", encoding="utf-8") as f:
    data = json.load(f)

countries = []

for c in data:
    iso = c.get('cca2', '').lower()
    if not iso: continue
    
    # Name
    name = c.get('translations', {}).get('spa', {}).get('common', c.get('name', {}).get('common', ''))
    
    # Tag logic
    tags = []
    
    # Continents
    continents = c.get('continents', [])
    for cont in continents:
        if cont == 'South America' or cont == 'North America':
            tags.append('América')
        elif cont == 'Europe':
            tags.append('Europa')
        elif cont == 'Asia':
            tags.append('Asia')
        elif cont == 'Africa':
            tags.append('África')
        elif cont == 'Oceania':
            tags.append('Oceanía')

    # Spanish speaking
    langs = c.get('languages', {})
    if 'spa' in langs:
        tags.append('Habla Hispana')

    # Top Conocidas
    if iso.upper() in top_conocidas:
        tags.append('top')

    # Color y Filtros extra (preservar lo existente si existe)
    color = '#000000'
    if iso in existing_data:
        color = existing_data[iso]['color']
        # Agregar filtros manuales que no detectamos automáticamente (como 'top')
        for f in existing_data[iso]['filters']:
            if f not in tags:
                tags.append(f)

    code3 = c.get('cca3', '')
    
    countries.append({
        'name': name,
        'iso': iso,
        'tag': code3,
        'color': color,
        'filters': tags
    })

# Sort by name
countries.sort(key=lambda x: x['name'])

# Write to a JS file
with codecs.open("db.js", "w", "utf-8") as f:
    js_content = "const db = [\n"
    for i, c in enumerate(countries):
        line = f"  {{ name: '{c['name']}', iso: '{c['iso']}', tag: '{c['tag']}', color: '{c['color']}', filters: {json.dumps(c['filters'], ensure_ascii=False)} }}"
        js_content += line + (",\n" if i < len(countries) - 1 else "\n")
    js_content += "];\n"
    f.write(js_content)
