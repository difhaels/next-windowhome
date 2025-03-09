import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import Superiority from "@/components/Superiority";
import Service from "@/components/Service";
import Product from "@/components/Product";
import Frame from "@/components/Frame";

export const metadata = {
  title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
  description:
    "Kami melayani pemasangan kusen, pintu, dan jendela aluminium berkualitas tinggi untuk rumah, kantor, dan bangunan lainnya. Produk kami presisi, tahan lama, dan estetis.",
  openGraph: {
    title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
    description:
      "Solusi terbaik untuk pemasangan kusen aluminium, pintu, dan jendela kaca dengan hasil berkualitas tinggi.",
    url: "https://kusenaluminiumwindowhome.id",
    images: [
      {
        url: "https://kusenaluminiumwindowhome.id/og-image.png",
        width: 2516,
        height: 1158,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
    description:
      "Jasa pemasangan kusen, pintu, dan jendela aluminium dengan hasil presisi dan tahan lama.",
    images: ["https://kusenaluminiumwindowhome.id/og-image.png"],
  },
};

export default function Home() {
  return (
    <Frame>
      <Banner />
      <Intro />
      <Superiority />
      <Service />
      <Product />
    </Frame>
  );
}
