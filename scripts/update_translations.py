import json
import os

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pt_path = os.path.join(base_dir, 'src', 'Locales', 'pt.json')
    en_path = os.path.join(base_dir, 'src', 'Locales', 'en.json')

    print(f"Reading PT file: {pt_path}")
    pt_data = load_json(pt_path)
    
    print(f"Reading EN file: {en_path}")
    if os.path.exists(en_path):
        en_data = load_json(en_path)
    else:
        en_data = {}

    missing_count = 0
    for key, value in pt_data.items():
        if key not in en_data:
            print(f"Missing key in EN: {key}")
            en_data[key] = f"MISSING: {value}"
            missing_count += 1

    if missing_count > 0:
        print(f"Found {missing_count} missing keys. Updating EN file...")
        save_json(en_path, en_data)
        print("EN file updated.")
    else:
        print("No missing keys found.")

if __name__ == "__main__":
    main()
