"use client"

import classNames from "classnames";

import { Separator } from "~/components/ui/separator";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react";


export default function SignInPage() {
  return (
    <section className="py-16 space-y-9 w-fit mx-auto text-center">
      <div className="mx-auto w-fit space-y-2">
        <h1 className="text-5xl font-bold text-center">
          Welcome to {" "}
          <span className="text-amber-500">Kloutly</span>
        </h1>
        <p className="text-base text-muted-foreground">
          Sign In to your account using OAuth or with email
        </p>
      </div>

      <Separator className="h-1 bg-zinc-500" />

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
          Sign In with <span className="font-bold">&nbsp;Github</span>
        </Button>


        <Button
          className="w-full"
          onClick={() => signIn("discord", {
            callbackUrl: "/account"
          })}
        >
          Sign In with <span className="font-bold">&nbsp;Discord</span>
        </Button>
      </div>

      <p>
        OR
      </p>

      <form className="space-y-3">
        <Input
          placeholder="Enter your email..."
          className=""
        />

        <Input
          placeholder="Your password"
        />

        <Button className="w-full">
          SignIn with Email
        </Button>
      </form>
    </section>
  )
}
