"use client"

import { useState } from "react";

import { useAuth } from "~/hooks/useAuth";
import { SaveUserDetailsButton } from "~/components/buttons/save-user-details";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { changeUserDetails } from "~/actions/change-user-details";


type TProps= {
  name: string;
  email: string;
}


export default function InputDetails({name, email}: TProps) {
  const { userData } = useAuth();
  const [userDetails, setUserDetails] = useState({
    name: name,
    email: email
  });

  
  return (
    <form
      className="space-y-5"
      action={() => changeUserDetails(
        String(userData?.id),
        userDetails.name,
        userDetails.email
      )}
    >
      <div>
        <Label className="font-bold text-muted-foreground">
          Change Name
        </Label>
        <Input
          placeholder="Your name"
          value={userDetails.name}
          onChange={e => setUserDetails((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>

      <div>
        <Label className="font-bold text-muted-foreground">
          Change Email
        </Label>
        <Input
          placeholder="Your email"
          value={userDetails.email}
          onChange={e => setUserDetails((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <SaveUserDetailsButton />
    </form>
  )
}
