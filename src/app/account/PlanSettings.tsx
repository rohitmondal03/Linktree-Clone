"use client";

import Link from "next/link";
import { type Session } from "next-auth";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";


interface PlanSettingsProps {
  stripeSubscriptionId: string | null;
  stripeCurrentPeriodEnd: Date | null;
  stripeCustomerId: string | null;
  isSubscribed: boolean | "" | null;
  isCanceled: boolean;
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  stripePriceId?: string | undefined;
  price?: number | undefined;
  recurring?:string | undefined;
}


export default function PlanSettings({
  subscriptionPlan,
  session,
}: {
  subscriptionPlan: PlanSettingsProps;
  session: Session | null;
}) {
  return (
    <Card>
      <CardHeader>
        {subscriptionPlan.isSubscribed
          ? `You are currently on the ${subscriptionPlan.name} plan.`
          : `You are not subscribed to any plan.`.concat(
            !session?.user?.email || session?.user?.email.length < 5
              ? " Please add your email to upgrade your account."
              : ""
          )
        }
      </CardHeader>
      <CardContent>
        {subscriptionPlan.isSubscribed ? (
          <h3 className="font-semibold text-lg">
            Rs. {subscriptionPlan.price ? subscriptionPlan.price : 0} / {subscriptionPlan.price}
          </h3>
        ) : null}
        {subscriptionPlan.stripeCurrentPeriodEnd ? (
          <p className="text-sm mb-4 text-muted-foreground ">
            Your plan will{" "}
            {!subscriptionPlan.isSubscribed
              ? null
              : subscriptionPlan.isCanceled
                ? "cancel"
                : "renew"}
            {" on "}
            <span className="font-semibold">
              {subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString(
                "en-us"
              )}
            </span>
          </p>
        ) : null}
      </CardContent>
      <CardFooter>
        <p>Manage your subscription on Stripe.</p>
        <Link href="/account/billing">
          <Button variant="outline">Go to billing</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
