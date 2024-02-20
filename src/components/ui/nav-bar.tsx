import classNames from "classnames"

import Logo from "../logo"
import { ModeToggle } from "../buttons/mode-toggle"
import { LoginButton } from "../buttons/login-btn"


export default function Navbar() {
  return (
    <nav className={classNames({
      "flex items-center justify-around": true,
      "py-10 px-16": true,
    })}>
      <Logo />

      <div className="flex items-center gap-6">
        <LoginButton />
        <ModeToggle />
      </div>
    </nav>
  )
}
