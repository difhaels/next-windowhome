import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import Script from "next/script";

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
  description:
    "Kami adalah spesialis dalam pembuatan dan pemasangan berbagai produk berbahan aluminium berkualitas tinggi, termasuk kusen, pintu, jendela, kitchen set, partisi, dan sekat ruangan.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kusen Aluminium Window Home - Spesialis Kusen & Pintu Aluminium",
    description:
      "Kami menyediakan layanan pemasangan kusen, pintu, dan jendela kaca berkualitas tinggi dengan hasil yang presisi dan tahan lama.",
    url: "https://kusenaluminiumwindowhome.id",
    siteName: "Kusen Aluminium Window Home",
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
      "Melayani pembuatan dan pemasangan kusen, pintu, dan jendela aluminium berkualitas tinggi untuk berbagai kebutuhan bangunan.",
    images: ["https://kusenaluminiumwindowhome.id/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-256x256.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K4CKDJMB');
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4CKDJMB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
