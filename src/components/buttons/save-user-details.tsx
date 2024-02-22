"use client"

import { useFormStatus } from "react-dom"

import { Button } from "../ui/button"


export function SaveUserDetailsButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      variant={pending ? "destructive" : "default"}
    >
      {pending ? "Saving..." : "Save"}
    </Button>
  )
}