import Link from 'next/link'
import { UserCheck2Icon, LogIn } from "lucide-react"

import { getUserAuth } from '~/lib/auth/utils'
import { cn } from '~/lib/utils'
import { routes } from '~/config/routes'
import { buttonVariants } from '../ui/button'


export async function LoginButton() {
  const { signinRoute, pagesRoute } = routes;

  const session = await getUserAuth();
  const user = session?.user;


  return (
    <Link
      href={user ? pagesRoute() : signinRoute()}
      className={cn(buttonVariants({
        variant: user ? "destructive" : "default",
        size: "icon",
      }))}
    >
      {user
        ? <UserCheck2Icon />
        : <LogIn />
      }
    </Link>
  )
}
