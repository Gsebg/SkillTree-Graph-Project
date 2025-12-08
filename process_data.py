import pandas as pd
import json
import os
import re

EXCEL_FILE = "PERKS.xlsx"
ASSETS_DIR = "assets" # Asegúrate de que esta carpeta exista junto al script

SHEETS_MAP = {
    "Body": "Body", 
    "Reflexes": "Reflexes",
    "Technical Ability": "Technical Ability",
    "Intelligence": "Intelligence",
    "Cool": "Cool"
}

all_trees = {}

def normalize_name(name):
    """Convierte 'Run 'N' Gun' a 'runngun' para comparar archivos facilmente."""
    if not isinstance(name, str): return ""
    # Quitar todo lo que no sea letra o numero y pasar a minuscula
    return re.sub(r'[^a-z0-9]', '', name.lower())

def find_icon_path(tree_name, perk_title):
    """Busca la imagen en la carpeta assets/TreeName"""
    tree_folder = os.path.join(ASSETS_DIR, tree_name)
    if not os.path.exists(tree_folder):
        return None
    
    normalized_title = normalize_name(perk_title)
    
    # Listar archivos en la carpeta
    for filename in os.listdir(tree_folder):
        if filename.lower().endswith(('.webp', '.png', '.jpg')):
            # Normalizar nombre del archivo (sin extension)
            name_without_ext = os.path.splitext(filename)[0]
            normalized_filename = normalize_name(name_without_ext)
            
            # Comparar
            if normalized_title == normalized_filename:
                # Retornamos ruta relativa para el navegador (usando / no \)
                return f"assets/{tree_name}/{filename}"
    
    return None # No encontrado

def clean_split(value):
    val_str = str(value).strip()
    if (pd.isna(value) or val_str == "" or val_str == "0" or val_str == "0.0" or val_str.lower() == "nan"):
        return []
    val_str = val_str.replace(',', ';') 
    return [x.strip().split('.')[0] for x in val_str.split(';') if x.strip()]

def process_excel():
    if not os.path.exists(EXCEL_FILE):
        print(f"ERROR: Falta el archivo {EXCEL_FILE}")
        return

    print(f"Procesando {EXCEL_FILE} e integrando ASSETS...")

    for tree_key, sheet_name in SHEETS_MAP.items():
        try:
            df = pd.read_excel(EXCEL_FILE, sheet_name=sheet_name, dtype=str)
        except Exception as e:
            print(f"Error en {sheet_name}: {e}")
            continue

        df.columns = [str(c).strip() for c in df.columns]
        tree_nodes = {}
        
        # PASO 1: Crear Nodos
        for _, row in df.iterrows():
            raw_id = row.get('ID')
            if pd.isna(raw_id) or str(raw_id).strip() == '': continue
            
            node_id = str(raw_id).split('.')[0]
            title = str(row.get('Title', 'Unknown'))
            next_perks = clean_split(row.get('next perk ID', ''))
            
            # Buscar Icono
            icon_path = find_icon_path(tree_key, title)
            
            descriptions = []
            for i in range(1, 4):
                val = row.get(f'Level {i}', '')
                if not pd.isna(val) and str(val).strip() != '':
                    descriptions.append(str(val).strip())
            
            max_level = len(descriptions)
            if max_level == 0: max_level = 1

            tree_nodes[node_id] = {
                "id": node_id,
                "title": title,
                "icon": icon_path,          # <--- NUEVO CAMPO
                "levelReq": int(float(row.get('Level', 0))) if row.get('Level') else 0,
                "parents": [], 
                "children": next_perks,
                "descriptions": descriptions,
                "state": "state-blocked",
                "maxLevel": max_level,
                "currentLevel": 0
            }

        # PASO 2: Calcular Padres
        for parent_id, node_data in tree_nodes.items():
            for child_id in node_data['children']:
                if child_id in tree_nodes:
                    tree_nodes[child_id]['parents'].append(parent_id)

        # PASO 3: Disponibilidad
        for node_id, node_data in tree_nodes.items():
            if len(node_data['parents']) == 0:
                node_data['state'] = 'state-available'

        all_trees[tree_key] = tree_nodes
        print(f"  > {sheet_name}: {len(tree_nodes)} nodos procesados.")

    js_content = f"const CYBERPUNK_DATA = {json.dumps(all_trees, indent=4)};"
    with open("skills_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("¡Listo! skills_data.js actualizado con imágenes.")

if __name__ == "__main__":
    process_excel()