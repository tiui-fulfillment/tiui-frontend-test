import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})


export const metadata: Metadata = {
  title: "To-Do List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${montserrat.className}`}>{children}</body>
    </html>
  );
}
