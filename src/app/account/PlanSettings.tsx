"use client";

import Link from "next/link";
import { type Session } from "next-auth";

import { Button, buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";


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
  recurring?: string | undefined;
}


export default function PlanSettings({
  subscriptionPlan,
  session,
}: {
  subscriptionPlan: PlanSettingsProps;
  session: Session | null;
}) {
  return (
    <Card className="w-fit mx-auto">
      <CardHeader className="text-xl font-bold">
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
            Rs. {subscriptionPlan.price ? subscriptionPlan.price : 0} /
            <span className="text-muted-foreground text-sm">
              {subscriptionPlan.price === 50 ? "3 months" : subscriptionPlan.price === 100 ? "6 months" : "year"}
            </span>
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

        <div>
          <Link
            href={"/account/billing"}
            className={cn(buttonVariants({
            }))}
          >
            Billing
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
