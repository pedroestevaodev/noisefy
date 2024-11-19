import { PricingCards } from "@/components/dashboard/pricing/pricing-cards";
import { currentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";

const PricingPage = async () => {
    const user = await currentUser();

    let subscriptionPlan;
    if (user && user.id) {
        subscriptionPlan = await getUserSubscriptionPlan(user.id);
    }

    return (
        <div className="flex w-full flex-col gap-16 py-8 md:py-8">
            <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
        </div>
    );
};

export default PricingPage;