import classNames from 'classnames'
import type { TLayout } from 'types'
import SideNavBar from '~/components/ui/side-nav-bar'


export default function ({ children }: TLayout) {
  return (
    <div className={classNames({
      "container": true,
      "grid flex-1 gap-24 md:grid-cols-[200px_1fr]": true,
      "py-10": true,
    })}>
      <div className="hidden w-[200px] flex-col md:flex">
        <SideNavBar />
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}
