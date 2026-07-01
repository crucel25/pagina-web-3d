import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optimocredit Pro — Demo 3D Cinemático",
  description: "Demo técnico de exploded view con React Three Fiber + GSAP ScrollTrigger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
