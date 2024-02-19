import { Separator } from "~/components/ui/separator";
import SignInButtonGroup from "./_components/signin-btn-group";
import { MountainIcon } from "lucide-react";


export default function SignInPage() {
  return (
    <section className="py-40 px-10 space-y-9 w-fit mx-auto">
      <MountainIcon className="mx-auto scale-150" />

      <div className="mx-auto w-fit space-y-2">
        <h1 className="text-4xl font-bold text-center">
          Welcome back !
        </h1>
        <p className="text-base text-muted-foreground">
          Sign In to your account using GitHub and Discord
        </p>
      </div>

      <Separator className="h-1" />

      <SignInButtonGroup />
    </section>
  )
}
