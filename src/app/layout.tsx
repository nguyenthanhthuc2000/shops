import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "SHOP BÁN NICK NGỌC RỒNG ONLINE UY TÍN",
  keywords: "shop bán nick ngọc rồng online uy tín, nick Ngọc Rồng Online, nick Ngọc Rồng, nick Ngọc Rồng giá rẻ, nick Ngọc Rồng giá tốt, nick Ngọc Rồng giá rẻ, nick Ngọc Rồng giá tốt",
  description: "Kho nick Ngọc Rồng Online đa dạng, đầy đủ hành tinh, mọi mức giá. Tài khoản rõ nguồn gốc, bảo mật, hỗ trợ sau bán hàng tận tâm để bạn yên tâm cày cuốc, săn boss, PK cực đã.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ijDuUwuyxKWs3aUuK_SEhlHjTCkFK0ibhPQuRhPJr1k" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1ZPJC5V4PQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1ZPJC5V4PQ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
