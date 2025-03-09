import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
  description: "Kami adalah spesialis dalam pembuatan dan pemasangan berbagai produk berbahan aluminium berkualitas tinggi, termasuk kusen, pintu, jendela, kitchen set, partisi, dan sekat ruangan.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
    description: "Kami menyediakan layanan pemasangan kusen, pintu, dan jendela kaca berkualitas tinggi dengan hasil yang presisi dan tahan lama.",
    url: "https://kusenaluminiumwindowhome.id",
    siteName: "Kusen Aluminium Window Home",
    images: [
      {
        url: "https://kusenaluminiumwindowhome.id/og-image.png",
        width: 1280,
        height: 1014,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
    description: "Melayani pembuatan dan pemasangan kusen, pintu, dan jendela aluminium berkualitas tinggi untuk berbagai kebutuhan bangunan.",
    images: ["https://kusenaluminiumwindowhome.id/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
