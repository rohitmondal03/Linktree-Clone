import classNames from "classnames"

import Logo from "../logo"
import { ModeToggle } from "../buttons/mode-toggle"
import { LoginButton } from "../buttons/login-btn"


export default function Navbar() {
  return (
    <nav className={classNames({
      "sticky top-5 left-0": true,
      "flex items-center justify-between gap-20": true,
      "py-5 px-12": true,
      "mx-auto": true,
      "w-[30rem]": true,
      "border-2 border-zinc-500 rounded-full shadow-[0_0_20px] shadow-zinc-600": true,
      "backdrop-blur-md": true,
    })}>
      <Logo />

      <div className="flex items-center gap-6">
        <LoginButton />
        <ModeToggle />
      </div>
    </nav>
  )
}
