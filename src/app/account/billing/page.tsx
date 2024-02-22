import { getUserSubscriptionPlan } from "~/lib/stripe/subscription";
import { getUserAuth } from "~/lib/auth/utils";

import SuccessToast from "./SuccessToast";
import PlanSettings from "./PlanSettings";


export default async function Billing() {
  const subscriptionPlan = await getUserSubscriptionPlan();
  const session = await getUserAuth();

  const user = session?.user;


  return (
    <section className="min-h-[calc(100vh-57px)] ">
      <SuccessToast />

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Billing
        </h1>

        <p className="text-muted-foreground text-xl">
          Manage your bills and subscription plans.
        </p>
      </div>

      <PlanSettings 
        session={session}
        subscriptionPlan={subscriptionPlan}
      />
    </section>
  );
}
