"use client"
import { SessionProvider } from "next-auth/react";

import React, { Children } from "react";

type Props = { children: React.ReactNode };

function SessionProviderWrapper({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionProviderWrapper;
