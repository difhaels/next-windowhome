import Frame from "@/components/Frame";
import About from "@/components/About";

export const metadata = {
  title: "Tentang Kami - Kusen Aluminium Window Home",
  description: "Kami adalah spesialis di bidang aluminium yang berkomitmen menyediakan produk berkualitas tinggi dengan desain presisi dan daya tahan optimal.",
  openGraph: {
    title: "Tentang Kami - Kusen Aluminium Window Home",
    description: "Pelajari lebih lanjut tentang Kusen Aluminium Window Home, visi, misi, dan komitmen kami dalam memberikan layanan terbaik.",
    url: "https://kusenaluminiumwindowhome.id/about",
    images: [{ url: "https://kusenaluminiumwindowhome.id/og-tentang.png", width: 1280, height: 1014 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami - Kusen Aluminium Window Home",
    description: "Kenali lebih dalam siapa kami, layanan kami, dan bagaimana kami membantu mewujudkan desain rumah impian Anda.",
    images: ["https://kusenaluminiumwindowhome.id/og-tentang.png"],
  },
};

export default function Page() {
  return (
    <Frame>
      <About />
    </Frame>
  );
}
