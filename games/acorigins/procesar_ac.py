import pandas as pd
import json
import re
import random
import os

# Lista ampliada de 53+ Jeroglíficos
egyptian_symbols = [
    "𓀀", "𓀁", "𓀂", "𓀃", "𓀄", "𓀅", "𓀆", "𓀇", "𓀈", "𓀉", "𓀊", 
    "𓀋", "𓀌", "𓀍", "𓀎", "𓀏", "𓀐", "𓀑", "𓀒", "𓀓", "𓀔", "𓀕",
    "𓁂", "𓁃", "𓁄", "𓁅", "𓁆", "𓁇", "𓁈", "𓁉", "𓁊", "𓁋", "𓁌",
    "𓁍", "𓁎", "𓁏", "𓁐", "𓁑", "𓁒", "𓁓", "𓁔", "𓁕", "𓁖", "𓁗",
    "𓆣", "𓆤", "𓆥", "𓆦", "𓆧", "𓆨", "𓆩", "𓆪", "𓆫", "𓆬", "𓆭",
    "𓋹", "𓋺", "𓋻", "𓋼", "𓋽", "𓋾", "𓋿", "𓌀", "𓌁", "𓌂", "𓌃"
]

def slugify(text):
    text = str(text).lower().strip()
    text = re.sub(r'[^a-z0-9]+', '_', text)
    return text.strip('_')

def process_ac_origins():
    excel_file = "ACorigin.xlsx"
    
    if not os.path.exists(excel_file):
        print(f"❌ Error: No encuentro '{excel_file}'")
        return

    sheets_config = { "Hunter": "Hunter", "Warrior": "Warrior", "Seer": "seer" }
    all_skills = {}
    name_to_id = {}
    raw_data = []

    print(f"Leyendo {excel_file}...")

    # 1. Leer y mapear
    for group_name, sheet_name in sheets_config.items():
        try:
            df = pd.read_excel(excel_file, sheet_name=sheet_name)
            for _, row in df.iterrows():
                raw_name = str(row['Skill']).replace('*', '').strip()
                if raw_name == 'nan': continue
                
                skill_id = slugify(raw_name)
                name_to_id[raw_name] = skill_id
                name_to_id[str(row['Skill']).strip()] = skill_id 
                
                raw_data.append({ "group": group_name, "row": row, "id": skill_id, "clean_name": raw_name })
        except Exception as e:
            print(f"⚠️ Error en hoja '{sheet_name}': {e}")

    # Mezclar símbolos para evitar repeticiones consecutivas
    random.shuffle(egyptian_symbols)
    
    # 2. Construir nodos
    for i, item in enumerate(raw_data):
        row = item['row']
        skill_id = item['id']
        
        req_raw = str(row['Requirement'])
        parents = []
        initial_state = "locked"
        
        if "Already unlocked" in req_raw:
            initial_state = "selected"
        elif req_raw != "nan" and req_raw != "N/A":
            req_names = re.split(r'[\r\n]+', req_raw)
            for req_name in req_names:
                req_name = req_name.strip()
                if req_name in name_to_id:
                    parents.append(name_to_id[req_name])
        
        # Asignar icono usando módulo para rotar si se acaban (aunque con 53 es difícil)
        icon = egyptian_symbols[i % len(egyptian_symbols)]

        points = 0
        try: points = int(row['Skill Points required'])
        except: points = 0

        all_skills[skill_id] = {
            "id": skill_id,
            "title": item['clean_name'],
            "group": item['group'],
            "description": str(row['description']),
            "points": points,
            "icon": icon,
            "parents": parents,
            "state": initial_state,
            "x": 0, "y": 0 # Se sobrescribirá con layout_config.js en el frontend
        }

    js_content = "const AC_ORIGINS_DATA = " + json.dumps(all_skills, indent=4) + ";"
    with open("skills_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"✅ skills_data.js actualizado con {len(all_skills)} habilidades y nuevos iconos.")

if __name__ == "__main__":
    process_ac_origins()