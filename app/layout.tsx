import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Byte Basha",
  description: "At ByteBasha, we pride ourselves on being leaders in the digital landscape, providing cutting-edge software services, comprehensive e-commerce solutions, and top-tier tech skill training. Our name, ByteBasha, combines the digital essence of 'Byte' with Basha' a title of respect, reflecting our commitment to excellence and authority in the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
