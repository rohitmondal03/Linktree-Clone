import { useSession } from "next-auth/react";


export function useAuth(){
  const session= useSession();

  return {
    userData: session.data?.user,
    status: session.status,
  }
}