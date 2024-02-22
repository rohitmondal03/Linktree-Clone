import classNames from "classnames";

import InputDetails from "./Input-details";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { getUserAuth } from "~/lib/auth/utils";


export default async function SettingPage() {
  const session= await getUserAuth();
  const user= session?.user;


  return (
    <section className={classNames({
      "space-y-12": true,
    })}>
      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-muted-foreground text-xl">
          Manage account and website settings.
        </p>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>Account details</CardTitle>
        </CardHeader>

        <CardContent>
          <InputDetails 
            email={String(user?.email)}
            name={String(user?.name)}
          />
        </CardContent>
      </Card>
    </section>
  );
}
