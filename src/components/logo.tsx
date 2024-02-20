import Link from "next/link"
import { Mountain } from "lucide-react"

import { routes } from "~/config/routes"


export default function Logo() {
  const { homeRoute } = routes;

  return (
    <Link
      href={homeRoute()}
      className="hover:scale-125 transition ease-out"
    >
      <Mountain className="scale-[1.75]" />
    </Link>
  )
} 
