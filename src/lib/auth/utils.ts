// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "~/server/auth";


export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return session;
};