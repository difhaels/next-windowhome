import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema MongoDB
const ProductSchema = new mongoose.Schema({
  category: String,
  imageUrl: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// **Fungsi Upload Folder ke Cloudinary + Simpan ke MongoDB**
const uploadFolder = async (folderPath, category) => {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️ Folder "${folderPath}" tidak ditemukan.`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    if (!fs.lstatSync(filePath).isFile()) continue; // Skip jika bukan file

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: `windowhome/${category}`,
        public_id: path.parse(file).name, // Gunakan nama file asli
      });

      // Simpan ke MongoDB
      await Product.create({
        category,
        imageUrl: result.secure_url,
        name: path.parse(file).name, // Simpan nama file tanpa ekstensi
      });

      console.log(`✅ ${file} berhasil diupload dan disimpan!`);
    } catch (error) {
      console.error(`❌ Gagal upload ${file}:`, error);
    }
  }
};

// **Jalankan Upload untuk Setiap Kategori**
const startUpload = async () => {
  await uploadFolder("public/pintu", "pintu");
  await uploadFolder("public/jendela", "jendela");
  await uploadFolder("public/kitchenset", "kitchenset");
  await uploadFolder("public/lainnya", "lainnya");

  console.log("🚀 Semua gambar berhasil diupload dan disimpan ke MongoDB!");
  mongoose.connection.close();
};

startUpload();
