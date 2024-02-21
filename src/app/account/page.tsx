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
      "space-y-12": true,
    })}>
      <div className={classNames({
        "font-bold": true,
        "space-y-1": true,
      })}>
        <h1 className="text-4xl">
          Welcome to your account {" "}
          <span className="">{user?.name}</span>
        </h1>
      </div>

      <PlanSettings
        subscriptionPlan={subscriptionPlan}
        session={session}
      />
    </section>
  );
}
