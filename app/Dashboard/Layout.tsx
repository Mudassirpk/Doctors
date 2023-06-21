import SessionProviderWrapper from "@/lib/SessionProvider";
import React from "react";
type props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: props) {
  return (
    <SessionProviderWrapper>
      this is root layout
      {children}
    </SessionProviderWrapper>
  );
}
