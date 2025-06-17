import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammadrasul Shixnazarov - Full Stack Developer",
  description: "Professional resume of Muhammadrasul Shixnazarov - Full Stack Developer with expertise in JavaScript, TypeScript, Python, and modern web technologies.",
  keywords: "Full Stack Developer, JavaScript, TypeScript, Python, Next.js, Node.js, React, Web Development",
  authors: [{ name: "Muhammadrasul Shixnazarov" }],
  openGraph: {
    title: "Muhammadrasul Shixnazarov - Full Stack Developer",
    description: "Professional resume and portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
