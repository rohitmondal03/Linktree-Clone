"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import classNames from "classnames"

import { sideNav } from "~/config/marketing"
import { cn } from "~/lib/utils"
import { buttonVariants } from "./button"


export default function SideNavBar() {
  const pathName = usePathname();


  return (
    <aside className={classNames({
      "flex flex-col gap-y-3": true,
    })}>
      {sideNav.map((link) => (
        <Link
          href={link.href}
          className={cn(buttonVariants({
            variant: pathName === link.href ? "secondary" : "ghost",
            size: "lg",
            className: "w-full flex justify-start items-center gap-4",
          }))}
          key={link.href}
        >
          <link.Icon /> {link.title}
        </Link>
      ))}
    </aside>
  )
}
