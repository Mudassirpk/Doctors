"use client"
import { iContext, iPatient } from "@/types";
import React, { createContext, useState } from "react";

export const user_context = createContext<iContext | null>(null);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<iPatient | null>(null);
  if(user){
    console.log(user)
  }
  return (
    <user_context.Provider value={{ user, setUser }}>
      {children}
    </user_context.Provider>
  );
}
