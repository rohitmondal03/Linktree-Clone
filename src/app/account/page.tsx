import { type Session } from "next-auth";

// import UserSettings from "./UserSettings";
import PlanSettings from "./PlanSettings";
import { getUserAuth } from "~/lib/auth/utils";
import { getUserSubscriptionPlan } from "~/lib/stripe/subscription";


export default async function Account() {
  const session = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <main>
      <h1 className="text-2xl font-semibold my-4">Account</h1>
      <div className="space-y-4">
        <PlanSettings
          subscriptionPlan={subscriptionPlan}
          session={session}
        />
      </div>
    </main>
  );
}
