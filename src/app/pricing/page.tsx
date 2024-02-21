import Link from 'next/link';
import { CheckCircle2Icon } from 'lucide-react';

import { storeSubscriptionPlans } from '~/config/subscriptions'
import { getUserSubscriptionPlan } from '~/lib/stripe/subscription';
import { cn } from '~/lib/utils';
import { getUserAuth } from '~/lib/auth/utils';
import { ManageUserSubscriptionButton } from './ManageSubscription';
import { buttonVariants } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/components/ui/card'


export default async function PricingPage() {
  const session = await getUserAuth();
  const subscriptionPlan = await getUserSubscriptionPlan();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {storeSubscriptionPlans.map((plan) => (
        <Card
          key={plan.id}
          className={
            plan.name === subscriptionPlan.name ? "border-primary" : ""
          }
        >
          {plan.name === subscriptionPlan.name ? (
            <div className="w-full relative">
              <div className="text-center px-3 py-1 bg-secondary-foreground text-secondary text-xs  w-fit rounded-l-lg rounded-t-none absolute right-0 font-semibold">
                Current Plan
              </div>
            </div>
          ) : null}
          <CardHeader className="mt-2">
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2 mb-8">
              <h3 className="font-bold">
                <span className="text-3xl">Rs. {plan.price}</span> {"/"}{plan.recurring}
              </h3>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={`feature_${i + 1}`} className="flex gap-x-2 text-sm">
                  <CheckCircle2Icon className="text-green-400 h-5 w-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex items-end justify-center">
            {session?.user.email ? (
              <ManageUserSubscriptionButton
                userId={session.user.id}
                email={session.user.email || ""}
                stripePriceId={plan.stripePriceId}
                stripeCustomerId={subscriptionPlan?.stripeCustomerId}
                isSubscribed={!!subscriptionPlan.isSubscribed}
                isCurrentPlan={subscriptionPlan?.name === plan.name}
              />
            ) : (
              <div>
                <Link
                  href="/account"
                  className={cn(buttonVariants({
                    variant: "ghost",
                    className: "text-center",
                  }))}
                >
                  Add Email to Subscribe
                </Link>
              </div>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
