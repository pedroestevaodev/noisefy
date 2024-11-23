import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { PricingCards } from "@/components/dashboard/pricing/pricing-cards";
import { currentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";

const Valores = async () => {
    const user = await currentUser();

    let subscriptionPlan;
    if (user && user.id) {
        subscriptionPlan = await getUserSubscriptionPlan(user.id);
    }

    return (
        <section className="w-auto h-full flex justify-center items-start bg-noisefy-500 py-12 sm:py-20" id="lp-valores">
            <div className="flex flex-col gap-14">
                <h1 className="text-white text-center font-bold tracking-wide text-3xl sm:text-5xl uppercase" >Nossos Valores</h1>
                <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between items-start gap-12 h-auto max-w-100">
                    <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} isLanding />
                </MaxWidthWrapper>
            </div>
        </section>
    );
};

export { Valores };