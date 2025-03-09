import Frame from "@/components/Frame";
import Product from "@/components/Product";

export const metadata = {
  title: "Produk Kami - Kusen Aluminium Window Home",
  description: "Temukan berbagai produk aluminium berkualitas tinggi, termasuk pintu, jendela, partisi, dan kitchen set dengan desain modern dan tahan lama.",
  openGraph: {
    title: "Produk Kami - Kusen Aluminium Window Home",
    description: "Lihat berbagai pilihan produk aluminium terbaik untuk rumah dan bangunan Anda, dibuat dengan material berkualitas tinggi.",
    url: "https://kusenaluminiumwindowhome.id/product",
    images: [{ url: "https://kusenaluminiumwindowhome.id/og-produk.png", width: 2516, height: 1158 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Produk Kami - Kusen Aluminium Window Home",
    description: "Jelajahi koleksi pintu, jendela, dan partisi aluminium berkualitas tinggi untuk berbagai kebutuhan bangunan.",
    images: ["https://kusenaluminiumwindowhome.id/og-produk.png"],
  },
};

export default function Page() {
  return (
    <Frame>
      <Product full={true}/>
    </Frame>
  );
}
