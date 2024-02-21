import {
  type LucideIcon,
  CreditCard,
  NotepadText,
  Settings,
  User
} from "lucide-react"

import { routes } from "./routes"


type TSideNav = {
  title: string;
  href: string;
  Icon: LucideIcon;
}


export const sideNav: TSideNav[] = [
  {
    title: "Account",
    href: routes.accountRoute(),
    Icon: User,
  },
  {
    title: "Pages",
    href: routes.pagesRoute(),
    Icon: NotepadText,
  },
  {
    title: "Billing",
    href: routes.billingRoute(),
    Icon: CreditCard,
  },
  {
    title: "Setting",
    href: routes.settingRoute(),
    Icon: Settings,
  },
]