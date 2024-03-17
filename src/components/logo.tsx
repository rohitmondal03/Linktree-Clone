import Link from "next/link"
import { Orbit } from "lucide-react"

import { routes } from "~/config/routes"


export default function Logo() {
  const { homeRoute } = routes;

  return (
    <Link
      href={homeRoute()}
      className="hover:scale-125 hover:rotate-[180deg] transition ease-out duration-500 -z-10"
    >
      <Orbit className="scale-[1.5]" />
    </Link>
  )
} 
