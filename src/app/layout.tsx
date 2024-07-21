import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/aurora-background";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${inter.className}`}>
        <>{children}</>
      </body>
    </html>
  );
}
