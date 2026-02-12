import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, 'public', 'assets', 'uploads');

console.log('\n📁 Arquivos na pasta de uploads:\n');
console.log('='.repeat(80));

try {
    const files = fs.readdirSync(uploadsDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    imageFiles.forEach(file => {
        const filepath = path.join(uploadsDir, file);
        const stats = fs.statSync(filepath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        const modifiedDate = stats.mtime.toLocaleString('pt-BR');

        console.log(`📄 ${file}`);
        console.log(`   Tamanho: ${sizeKB} KB`);
        console.log(`   Modificado: ${modifiedDate}`);
        console.log('-'.repeat(80));
    });

    console.log(`\n✅ Total: ${imageFiles.length} imagens encontradas\n`);

    // Check for the specific files we need
    const requiredFiles = [
        'doctor_implant_hero_new.jpg',
        'alinhadores_hero_new.jpg',
        'facetas_hero_new.jpg',
        'branqueamento_hero_v2.jpg',
        'clear_aligners_realistic.jpg'
    ];

    console.log('\n🎯 Status dos arquivos principais:\n');
    requiredFiles.forEach(file => {
        const exists = fs.existsSync(path.join(uploadsDir, file));
        const status = exists ? '✅' : '❌';
        console.log(`${status} ${file}`);
    });

} catch (error) {
    console.error('❌ Erro ao ler pasta:', error.message);
}
