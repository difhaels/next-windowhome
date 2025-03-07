import { connectDB } from "@/lib/mongodb"; // Koneksi ke MongoDB
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const { category, name, imagePath } = await req.json();
    
    // Upload ke Cloudinary
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: `windowhome/${category}`, // Simpan di Cloudinary dengan folder kategori
    });

    // Simpan ke MongoDB
    const db = await connectDB();
    const collection = db.collection("products");
    const product = await collection.insertOne({
      category,
      name,
      imageUrl: result.secure_url,
      createdAt: new Date(),
    });

    return Response.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}
