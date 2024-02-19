import { redirect } from 'next/navigation';

import type { TLayout } from 'types'
import { getUserAuth } from '~/lib/auth/utils'


export default async function SignInLayout({ children }: TLayout) {
  const session= await getUserAuth();

  if(session) {
    redirect("/account")
  }


  return (
    <>{children}</>
  )
}
