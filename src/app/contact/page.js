import Frame from "@/components/Frame";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Hubungi Kami - Kusen Aluminium Window Home",
  description: "Hubungi kami untuk konsultasi dan informasi lebih lanjut mengenai pemasangan kusen, pintu, dan jendela aluminium.",
  openGraph: {
    title: "Hubungi Kami - Kusen Aluminium Window Home",
    description: "Dapatkan informasi kontak kami dan konsultasikan kebutuhan kusen dan pintu aluminium Anda.",
    url: "https://kusenaluminiumwindowhome.id/contact",
    images: [{ url: "https://kusenaluminiumwindowhome.id/og-kontak.png", width: 1280, height: 1014 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Kami - Kusen Aluminium Window Home",
    description: "Butuh informasi lebih lanjut? Hubungi kami sekarang untuk mendapatkan solusi terbaik untuk kebutuhan aluminium Anda.",
    images: ["https://kusenaluminiumwindowhome.id/og-kontak.png"],
  },
};

export default function Page() {
  return (
    <Frame>
      <Contact />
    </Frame>
  );
}
