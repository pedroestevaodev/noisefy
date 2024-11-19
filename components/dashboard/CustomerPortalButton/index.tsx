'use client';

import { openCustomerPortal } from "@/actions/openCustomerPortal";
import { Icons } from "@/components/common/Icons";
import { Button } from "@/components/ui/button";
import { CustomerPortalButtonProps } from "@/types/components";
import { useTransition } from "react";

const CustomerPortalButton = ({ userStripeId }: CustomerPortalButtonProps) => {
    let [isPending, startTransition] = useTransition();
    const generateUserStripeSession = openCustomerPortal.bind(null, userStripeId);

    const stripeSessionAction = () => startTransition(async () => { await generateUserStripeSession() });

    return (
        <Button disabled={isPending} onClick={stripeSessionAction}>
            {isPending ? (
                <Icons.spinner className="mr-2 size-4 animate-spin" />
            ) : null}
            Abrir Portal Customizado
        </Button>
    );
};

export { CustomerPortalButton };