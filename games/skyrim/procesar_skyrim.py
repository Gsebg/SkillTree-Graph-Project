import pandas as pd
import json
import re
import os

def clean_perk_name_and_rank(raw_name):
    """
    Separa el nombre del perk de su rango máximo.
    Ejemplo: "Juggernaut (5)" -> nombre: "Juggernaut", max_rank: 5
    Ejemplo: "Novice Illusion" -> nombre: "Novice Illusion", max_rank: 1
    """
    # Limpiar asteriscos y espacios extra
    clean_str = str(raw_name).replace('*', '').strip()
    
    # Buscar patrón de paréntesis al final con un número
    match = re.search(r'^(.*?)\s*\((\d+)\)$', clean_str)
    
    if match:
        name = match.group(1).strip()
        max_rank = int(match.group(2))
        return name, max_rank
    else:
        return clean_str, 1

def parse_requirements(raw_req):
    """
    Convierte la cadena de requerimientos en una lista.
    Maneja 'None', 'OR', 'or' y comas.
    """
    if pd.isna(raw_req) or str(raw_req).lower().strip() == 'none':
        return []
    
    req_str = str(raw_req)
    
    # Normalizamos separadores: " OR ", " or ", "," -> todos a un separador común
    # Nota: En la lógica visual, trataremos todos como padres potenciales.
    req_str = re.sub(r'\s+OR\s+|\s+or\s+', ',', req_str)
    
    parts = req_str.split(',')
    
    # Limpiar espacios y quitar vacíos
    clean_reqs = [p.strip().replace('*', '') for p in parts if p.strip()]
    
    # A veces los requerimientos tienen rangos en el texto (ej: "Juggernaut (5)"), 
    # necesitamos limpiarlos para que coincidan con los IDs de los nodos padres.
    final_reqs = []
    for req in clean_reqs:
        name, _ = clean_perk_name_and_rank(req)
        final_reqs.append(name)
        
    return final_reqs

def process_skyrim_data():
    excel_file = "perks skyrim.xlsx"
    
    if not os.path.exists(excel_file):
        print(f"❌ Error: No encuentro '{excel_file}'. Asegúrate de que esté en la misma carpeta.")
        return

    # Intentamos leer todas las hojas del Excel
    try:
        # Esto lee el archivo y obtiene un diccionario {nombre_hoja: dataframe}
        xls = pd.read_excel(excel_file, sheet_name=None)
    except Exception as e:
        print(f"Error abriendo el Excel: {e}")
        return

    all_trees = {}
    
    print(f"📂 Procesando {len(xls.keys())} árboles de habilidad de Skyrim...")

    for sheet_name, df in xls.items():
        # Limpiar nombres de columnas (quitar espacios, lower case) para evitar errores
        df.columns = [str(col).strip() for col in df.columns]
        
        # Buscar columnas clave (a veces cambian mayúsculas/minúsculas)
        col_perk = next((c for c in df.columns if 'perk' in c.lower()), None)
        col_req = next((c for c in df.columns if 'requirement' in c.lower()), None)
        col_desc = next((c for c in df.columns if 'description' in c.lower()), None)
        
        if not col_perk:
            print(f"⚠️ Saltando hoja '{sheet_name}': No encontré columna 'Perk'")
            continue

        tree_data = {}
        
        for _, row in df.iterrows():
            raw_name = row[col_perk]
            if pd.isna(raw_name): continue
            
            # 1. Obtener ID y Rango
            name, max_rank = clean_perk_name_and_rank(raw_name)
            
            # 2. Obtener Requerimientos (Padres)
            parents = []
            if col_req:
                parents = parse_requirements(row[col_req])
            
            # 3. Descripción
            description = ""
            if col_desc:
                description = str(row[col_desc]).strip()
                if description == 'nan': description = ""

            # 4. Determinar estado inicial
            # Si no tiene padres, está "available" (desbloqueable), si tiene padres está "locked"
            initial_state = "available" if len(parents) == 0 else "locked"

            # Construir objeto nodo
            # Usamos el 'name' como ID porque en Skyrim los nombres son únicos dentro del árbol
            tree_data[name] = {
                "id": name,
                "title": name,
                "description": description,
                "maxRank": max_rank,
                "currentRank": 0,       # Para la lógica de puntos
                "parents": parents,     # Lista de IDs de padres
                "state": initial_state, # locked, available, purchased
                "x": 0, "y": 0          # Se llenarán con layout_config.js luego
            }
            
        all_trees[sheet_name] = tree_data
        print(f"  -> Árbol '{sheet_name}' procesado: {len(tree_data)} perks.")

    # Guardar como JS
    js_content = "const SKYRIM_DATA = " + json.dumps(all_trees, indent=4) + ";"
    
    with open("skills_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print("\n✅ ¡Éxito! 'skills_data.js' generado correctamente.")

if __name__ == "__main__":
    process_skyrim_data()