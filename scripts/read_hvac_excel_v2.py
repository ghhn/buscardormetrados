import pandas as pd
import json
import os

file_path = r"d:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\GIOV_HVAC.xlsx"
out_path = r"d:\00_OFI_PRESUPUESTOS_progra\3_Entregable_web_buscador_de_metrados\scripts\hvac_data_utf8.json"

try:
    xl = pd.ExcelFile(file_path)
    data = {}
    for sheet_name in xl.sheet_names:
        df = pd.read_excel(file_path, sheet_name=sheet_name, header=None)
        sheet_data = []
        for index, row in df.iterrows():
            if pd.isna(row[0]): continue
            label = str(row[0]).strip()
            value = row[1]
            if label and label.lower() != 'nan' and pd.notnull(value):
                try:
                    val_float = float(value)
                    sheet_data.append({"label": label, "factor": val_float})
                except:
                    continue
        data[sheet_name] = sheet_data
    
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Success: {out_path}")
except Exception as e:
    print(f"Error: {e}")
