import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const UPLOAD_DIR = path.join(__dirname, 'public', 'assets', 'uploads');

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === 'GET' && req.url === '/') {
        // Serve upload form
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload de Imagens - Porto Implantes</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #333;
            margin-bottom: 10px;
            font-size: 28px;
        }
        p {
            color: #666;
            margin-bottom: 30px;
        }
        .upload-area {
            border: 3px dashed #667eea;
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            background: #f8f9ff;
            cursor: pointer;
            transition: all 0.3s;
            margin-bottom: 20px;
        }
        .upload-area:hover {
            border-color: #764ba2;
            background: #f0f1ff;
        }
        .upload-area.dragover {
            border-color: #764ba2;
            background: #e8e9ff;
            transform: scale(1.02);
        }
        input[type="file"] {
            display: none;
        }
        .file-icon {
            font-size: 48px;
            margin-bottom: 15px;
        }
        select, button {
            width: 100%;
            padding: 15px;
            margin-bottom: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
            font-family: inherit;
        }
        select {
            background: white;
            cursor: pointer;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        .preview {
            margin-top: 20px;
            text-align: center;
        }
        .preview img {
            max-width: 100%;
            max-height: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .message {
            padding: 15px;
            border-radius: 10px;
            margin-top: 20px;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 2px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 2px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🦷 Upload de Imagens</h1>
        <p>Faça upload das imagens do site Porto Implantes</p>
        
        <div class="upload-area" id="uploadArea">
            <div class="file-icon">📁</div>
            <p><strong>Clique aqui</strong> ou arraste a imagem</p>
            <input type="file" id="fileInput" accept="image/*">
        </div>

        <select id="imageType">
            <option value="">Selecione onde usar esta imagem...</option>
            <option value="doctor_implant_hero_new.jpg">🦷 Implantologia (Hero)</option>
            <option value="alinhadores_hero_new.jpg">😁 Alinhadores (Hero)</option>
            <option value="facetas_hero_new.jpg">✨ Facetas (Hero)</option>
            <option value="facetas_hero_new.png">✨ Facetas (Segunda Seção)</option>
            <option value="attendant_avatar.jpg">👩‍💼 Atendente Chatbot</option>
            <option value="branqueamento_hero_v2.jpg">💎 Branqueamento (Hero)</option>
            <option value="clear_aligners_realistic.jpg">🦷 Aparelho Transparente (Card)</option>
            <option value="logo_header.png">🏥 Logotipo do Site</option>
            <option value="implantologia_highlight.jpg">📸 Implantologia (Destaque/Sala)</option>
            <option value="home_hero_new.jpg">🏠 Home (Hero/Capa)</option>
        </select>

        <button id="uploadBtn" disabled>Fazer Upload</button>

        <div id="preview" class="preview"></div>
        <div id="message"></div>
    </div>

    <script>
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const imageType = document.getElementById('imageType');
        const uploadBtn = document.getElementById('uploadBtn');
        const preview = document.getElementById('preview');
        const message = document.getElementById('message');
        let selectedFile = null;

        uploadArea.addEventListener('click', () => fileInput.click());
        
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            handleFile(e.dataTransfer.files[0]);
        });

        fileInput.addEventListener('change', (e) => {
            handleFile(e.target.files[0]);
        });

        imageType.addEventListener('change', checkReady);

        function handleFile(file) {
            if (!file || !file.type.startsWith('image/')) {
                showMessage('Por favor, selecione uma imagem válida', 'error');
                return;
            }
            selectedFile = file;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.innerHTML = \`<img src="\${e.target.result}" alt="Preview">\`;
            };
            reader.readAsDataURL(file);
            
            checkReady();
        }

        function checkReady() {
            uploadBtn.disabled = !(selectedFile && imageType.value);
        }

        uploadBtn.addEventListener('click', async () => {
            if (!selectedFile || !imageType.value) return;

            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('filename', imageType.value);

            uploadBtn.disabled = true;
            uploadBtn.textContent = 'Enviando...';

            try {
                const response = await fetch('/upload', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    showMessage('✅ Imagem enviada com sucesso!', 'success');
                    setTimeout(() => {
                        selectedFile = null;
                        preview.innerHTML = '';
                        fileInput.value = '';
                        imageType.value = '';
                        uploadBtn.textContent = 'Fazer Upload';
                        message.innerHTML = '';
                    }, 2000);
                } else {
                    throw new Error('Erro no upload');
                }
            } catch (error) {
                showMessage('❌ Erro ao enviar imagem', 'error');
                uploadBtn.disabled = false;
                uploadBtn.textContent = 'Fazer Upload';
            }
        });

        function showMessage(text, type) {
            message.innerHTML = \`<div class="message \${type}">\${text}</div>\`;
        }
    </script>
</body>
</html>
    `);
    } else if (req.method === 'POST' && req.url === '/upload') {
        let body = [];
        req.on('data', chunk => body.push(chunk));
        req.on('end', () => {
            const buffer = Buffer.concat(body);
            const boundary = req.headers['content-type'].split('boundary=')[1];
            const parts = buffer.toString('binary').split('--' + boundary);

            let filename = '';
            let imageData = null;

            parts.forEach(part => {
                if (part.includes('name="filename"')) {
                    filename = part.split('\r\n\r\n')[1].split('\r\n')[0];
                }
                if (part.includes('name="image"')) {
                    const imageStart = part.indexOf('\r\n\r\n') + 4;
                    const imageEnd = part.lastIndexOf('\r\n');
                    imageData = Buffer.from(part.substring(imageStart, imageEnd), 'binary');
                }
            });

            if (filename && imageData) {
                const filepath = path.join(UPLOAD_DIR, filename);
                fs.writeFileSync(filepath, imageData);
                console.log(`✓ Imagem salva: ${filename}`);
                res.writeHead(200);
                res.end('OK');
            } else {
                res.writeHead(400);
                res.end('Bad Request');
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`\n🚀 Servidor de upload rodando em: http://localhost:${PORT}`);
    console.log(`📁 Salvando imagens em: ${UPLOAD_DIR}\n`);
    console.log(`Abra http://localhost:${PORT} no navegador para fazer upload!\n`);
});
