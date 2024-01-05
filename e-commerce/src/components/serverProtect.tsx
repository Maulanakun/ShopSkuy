import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import React from "react";

const serverProtect = ({ children }: { children: React.ReactNode }) => {
  const cookiesStore = cookies();

  const token = cookiesStore.get("access_token");

  return <>{children}</>;
};

export default serverProtect;
