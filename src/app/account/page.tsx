import { getUserAuth } from "~/lib/auth/utils";
import { getUserSubscriptionPlan } from "~/lib/stripe/subscription";
import PlanSettings from "./PlanSettings";
import classNames from "classnames";


export default async function Account() {
  const session = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  const user = session?.user;


  return (
    <section className={classNames({
      "py-28 px-16": true,
      "space-y-20": true,
    })}>
      <div className={classNames({
        "font-bold text-center": true,
        "space-y-1": true,
      })}>
        <h1 className="text-3xl text-muted-foreground">Welcome to your account</h1>
        <p className="text-4xl">{user?.name}</p>
      </div>

      <PlanSettings
        subscriptionPlan={subscriptionPlan}
        session={session}
      />
    </section>
  );
}
