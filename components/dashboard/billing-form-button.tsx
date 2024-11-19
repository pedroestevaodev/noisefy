"use client";

import { generateUserStripe } from "@/actions/generate-user-stripe";
import { SubscriptionPlan, UserSubscriptionPlan } from "@/types/subscription";
import { useTransition } from "react";
import { Button } from "../ui/button";
import { Icons } from "../common/Icons";


interface BillingFormButtonProps {
  offer: SubscriptionPlan;
  subscriptionPlan: UserSubscriptionPlan;
  year: boolean;
}

export function BillingFormButton({
  year,
  offer,
  subscriptionPlan,
}: BillingFormButtonProps) {
  let [isPending, startTransition] = useTransition();
  const stripeId = offer.stripeIds[year ? "yearly" : "monthly"];
  if (!stripeId) {
    throw new Error("Stripe ID is null");
  }
  const generateUserStripeSession = generateUserStripe.bind(null, stripeId);

  const stripeSessionAction = () =>
      startTransition(async () => {
          await generateUserStripeSession();
      });

  const userOffer =
    subscriptionPlan.stripePriceId ===
    offer.stripeIds[year ? "yearly" : "monthly"];

  return (
    <Button
      variant={userOffer ? "default" : "outline"}
      rounded="full"
      className="w-full"
      disabled={isPending}
      onClick={stripeSessionAction}
    >
      {isPending ? (
        <>
          <Icons.spinner className="mr-2 size-4 animate-spin" /> Loading...
        </>
      ) : (
        <>{userOffer ? "Manage Subscription" : "Upgrade"}</>
      )}
    </Button>
  );
}
