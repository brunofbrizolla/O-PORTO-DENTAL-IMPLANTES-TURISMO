from PIL import Image
import os

# Path to the uploaded image collection
source_image = r"C:\Users\Lenovo\.gemini\antigravity\brain\tempmediaStorage\media__1770857893879.jpg"
output_dir = r"c:\Users\Lenovo\Downloads\POrto implantes\portoimplantes.pt\public\assets\uploads"

try:
    # Open the main image
    img = Image.open(source_image)
    width, height = img.size
    print(f"Original image size: {width}x{height}")
    
    # The image appears to be a 2x3 grid (2 columns, 3 rows)
    # Calculate individual image dimensions
    img_width = width // 2
    img_height = height // 3
    
    # Define the positions and names for each image based on the grid
    images_map = [
        # Row 1
        {"box": (0, 0, img_width, img_height), "name": "implante_3d_hero.jpg"},  # Top-left: 3D implant
        {"box": (img_width, 0, width, img_height), "name": "paciente_alinhador_invisivel.jpg"},  # Top-right: Patient with clear aligner
        # Row 2
        {"box": (0, img_height, img_width, img_height * 2), "name": "protese_dentaria.jpg"},  # Middle-left: Dental prosthesis
        {"box": (img_width, img_height, width, img_height * 2), "name": "homem_aparelho_transparente.jpg"},  # Middle-right: Man with clear aligner
        # Row 3
        {"box": (0, img_height * 2, img_width, height), "name": "dentista_branqueamento.jpg"},  # Bottom-left: Dentist doing whitening
        {"box": (img_width, img_height * 2, width, height), "name": "placeholder.jpg"},  # Bottom-right (if exists)
    ]
    
    # Extract and save each image
    for idx, img_info in enumerate(images_map):
        try:
            cropped = img.crop(img_info["box"])
            output_path = os.path.join(output_dir, img_info["name"])
            cropped.save(output_path, "JPEG", quality=95)
            print(f"✓ Saved: {img_info['name']}")
        except Exception as e:
            print(f"✗ Error saving {img_info['name']}: {e}")
    
    print(f"\n✅ Successfully split images into {output_dir}")
    
except FileNotFoundError:
    print(f"❌ Source image not found: {source_image}")
except Exception as e:
    print(f"❌ Error: {e}")
