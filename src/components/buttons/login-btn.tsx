import Link from 'next/link'

import { getUserAuth } from '~/lib/auth/utils'
import { cn } from '~/lib/utils'
import { routes } from '~/config/routes'
import { buttonVariants } from '../ui/button'


export async function LoginButton() {
  const { signinRoute, accountRoute } = routes;

  const session = await getUserAuth();
  const user = session?.user;


  return (
    <Link
      href={user ? accountRoute() : signinRoute()}
      className={cn(buttonVariants({
        variant: "default"
      }))}
    >
      {user ? "Dashboard" : "Login"}
    </Link>
  )
}
