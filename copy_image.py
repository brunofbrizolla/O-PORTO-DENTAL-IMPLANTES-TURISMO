import shutil
import os
from pathlib import Path

# Find the most recent jpg in temp storage
temp_dir = Path(r"C:\Users\Lenovo\.gemini\antigravity\brain\tempmediaStorage")
dest_dir = Path(r"c:\Users\Lenovo\Downloads\POrto implantes\portoimplantes.pt\public\assets\uploads")

# Get all jpg files sorted by modification time
jpg_files = sorted(temp_dir.glob("*.jpg"), key=lambda x: x.stat().st_mtime, reverse=True)

if jpg_files:
    latest_image = jpg_files[0]
    dest_file = dest_dir / "implante_3d_hero.jpg"
    
    print(f"Copying: {latest_image.name}")
    print(f"To: {dest_file}")
    
    shutil.copy2(latest_image, dest_file)
    print(f"✓ Successfully copied!")
else:
    print("No jpg files found in temp directory")
