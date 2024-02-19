"use client"

import { signIn } from "next-auth/react"
import classNames from "classnames"

import { Button } from "~/components/ui/button"


export default function SignInButtonGroup() {
  return (
    <div className={classNames({
      "flex flex-col items-center justify-center gap-4": true,
      "mx-auto": true,
      "w-[25rem]": true,
      "border": true,
    })}>
      <Button
        className="w-full"
        onClick={() => signIn("github", {
          callbackUrl: "/account"
        })}
      >
        Sign In with GitHub
      </Button>


      <Button
        className="w-full"
        onClick={() => signIn("discord", {
          callbackUrl: "/account"
        })}
      >
        Sign In with Discord
      </Button>
    </div>
  )
}
