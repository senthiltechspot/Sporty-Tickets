import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IndexProvider } from "@/context/IndexProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sporty Tickets",
  description: "Developed by senthilTechSpot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IndexProvider>{children}</IndexProvider>
      </body>
    </html>
  );
}
