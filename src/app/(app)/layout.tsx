import type { TLayout } from "types";
import { Toaster } from "~/components/ui/sonner";


export default async function AppLayout({ children }: TLayout) {
  return (
    <main>
      {children}
      <Toaster richColors />
    </main>
  )
}