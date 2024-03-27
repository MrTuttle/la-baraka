import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";
import FooterSite from "./components/FooterSite";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Baraka",
  description:
    "La Baraka, Bar, Restaurant, Chambres d'Hôtes à Sainte-Croix-Vallée-Française",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme>
              <NavBar />
              <Suspense fallback={<Loading />}>
                <main>
                  <div className=" min-h-screen animate-appearpage">
                    {children}
                  </div>
                </main>
              </Suspense>
              <FooterSite />
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
