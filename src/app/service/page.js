import Frame from "@/components/Frame";
import Service from "@/components/Service";

export const metadata = {
  title: "Layanan Kami - Kusen Aluminium Window Home",
  description: "Menyediakan layanan pembuatan dan pemasangan kusen aluminium, pintu, jendela kaca, kitchen set, partisi, dan berbagai kebutuhan custom lainnya.",
  openGraph: {
    title: "Layanan Kami - Kusen Aluminium Window Home",
    description: "Jelajahi berbagai layanan pemasangan kusen aluminium, pintu, dan jendela kaca dengan hasil yang presisi dan tahan lama.",
    url: "https://kusenaluminiumwindowhome.id/service",
    images: [{ url: "https://kusenaluminiumwindowhome.id/og-layanan.png", width: 2546, height: 1180 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Kami - Kusen Aluminium Window Home",
    description: "Kami menyediakan layanan profesional untuk pemasangan kusen aluminium dan pintu berkualitas tinggi.",
    images: ["https://kusenaluminiumwindowhome.id/og-layanan.png"],
  },
};

export default function Page() {
  return (
    <Frame>
      <Service />
    </Frame>
  );
}
