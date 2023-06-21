import "./globals.css";
import { Inter } from "next/font/google";
import ReactQueryWrapper from "@/lib/ReactQueryWrapper";
import ContextProvider from "@/Context/Context";
import SessionProviderWrapper from "@/lib/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors",
  description: "Search Doctors, Get Cured",
};

// components
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <SessionProviderWrapper>
            <Header />
            <ReactQueryWrapper>{children}</ReactQueryWrapper>
            <Footer />
          </SessionProviderWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
