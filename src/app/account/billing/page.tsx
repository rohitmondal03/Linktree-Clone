import { getUserSubscriptionPlan } from "~/lib/stripe/subscription";
import SuccessToast from "./SuccessToast";
import { Card } from "~/components/ui/card";


export default async function Billing() {
  const subscriptionPlan = await getUserSubscriptionPlan();


  return (
    <div className="min-h-[calc(100vh-57px)] ">
      <SuccessToast />
      <h1 className="text-3xl font-semibold mb-4">Billing</h1>
      <Card className="p-6 mb-2">
        <h3 className="uppercase text-xs font-bold text-muted-foreground">
          Subscription Details
        </h3>
        <p className="text-lg font-semibold leading-none my-2">
          {subscriptionPlan.name}
        </p>
        <p className="text-sm text-muted-foreground">
          {!subscriptionPlan.isSubscribed
            ? "You are not subscribed to any plan."
            : subscriptionPlan.isCanceled
              ? "Your plan will be canceled on "
              : "Your plan renews on "
          }
          {subscriptionPlan?.stripeCurrentPeriodEnd
            ? subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString()
            : null
          }
        </p>
      </Card>
    </div>
  );
}
