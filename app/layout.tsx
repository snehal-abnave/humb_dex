"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // List of routes that should NOT show header and footer
  const hideLayoutRoutes = ["/login", "/signup"];

  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {!hideLayout && <Header />}
          {children}
          {!hideLayout && <Footer />}
          {!hideLayout && <ScrollToTop />}
        </Providers>
      </body>
    </html>
  );
}
