import withProgressBar from "next-progressbar";

/** @type {import('next').NextConfig} */
const nextConfig = withProgressBar({
  // Konfigurasi Next.js lainnya
  images: {
    domains: ["res.cloudinary.com"],
  },
});

export default nextConfig;
