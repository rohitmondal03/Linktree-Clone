import { env } from "~/env";

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  stripePriceId: string;
  price: number;
  recurring: string;
  features: Array<string>;
}


export const storeSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: "pro",
    name: "Pro",
    description: "Pro tier that offers x, y, and z features.",
    stripePriceId: env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID ?? "",
    price: 50,
    recurring: "3 months",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: "max",
    name: "Max",
    description: "Super Pro tier that offers x, y, and z features.",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_MAX_PRICE_ID ?? "",
    price: 100,
    recurring: "6 months",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: "ultra",
    name: "Ultra",
    description: "Ultra Pro tier that offers x, y, and z features.",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_ULTRA_PRICE_ID ?? "",
    price: 250,
    recurring: "1 year",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];
