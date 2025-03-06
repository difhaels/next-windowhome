import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cloudinary from '../lib/cloudinary.js';

// Fix __dirname untuk ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadFolder = async (folderName) => {
  const folderPath = path.join(process.cwd(), 'public', folderName); // Path dari root

  if (!fs.existsSync(folderPath)) {
    console.error(`Error: Folder ${folderPath} tidak ditemukan.`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  if (files.length === 0) {
    console.error(`Error: Folder ${folderName} kosong.`);
    return;
  }

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folderName,
    });

    console.log(`Uploaded: ${file} -> ${result.secure_url}`);
  }
};

(async () => {
  await uploadFolder('pintu');
  await uploadFolder('jendela');
  await uploadFolder('kitchenset');
})();
