"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = { children: React.ReactNode };

const query_client = new QueryClient();

function ReactQueryWrapper({ children }: Props) {
  return (
    <QueryClientProvider client={query_client}>{children}</QueryClientProvider>
  );
}

export default ReactQueryWrapper;
