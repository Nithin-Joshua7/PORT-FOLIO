import "./globals.css";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Nithin Joshua — Software Development Engineer",
  description:
    "Portfolio of Nithin Joshua, a Software Development Engineer building scalable backend systems and modern full-stack applications.",
  openGraph: {
    title: "Nithin Joshua — Software Development Engineer",
    description:
      "Building scalable full-stack applications with modern web technologies.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      className={`dark ${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
