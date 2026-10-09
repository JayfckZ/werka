import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--f-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });
const title = "WERKA - Desenvolvimento Web";
const description = "Desenvolvemos sites, sistemas e soluções digitais sob medida para empresas que precisam transformar processos, ideias e oportunidades em produtos que funcionam.";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluxy.dev.br"),
  title, description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "WERKA" },
  robots: {
    index: true,
    follow: true
  }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}><body className="font-sans antialiased">{children}</body></html>;
}
