import { redirect } from "next/navigation";
import { Icons } from "@/components/common/Icons";
import { BillingInfo } from "@/components/dashboard/BillingInfo";
import { DashboardHeader } from "@/components/dashboard/Header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { currentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { auth } from "@/services/auth";

const BillingPage = async () => {
	const user = await currentUser();
	const session = await auth();

	if (!session?.user.id) {
		redirect("/dashboard");
	}

	const userSubscriptionPlan = await getUserSubscriptionPlan(session.user.id);

	return (
		<>
			<DashboardHeader
				heading="Billing"
				text="Manage billing and your subscription plan."
			/>
			<div className="grid gap-8">
				<Alert className="!pl-14">
					<Icons.warning />
					<AlertTitle>This is a demo app.</AlertTitle>
					<AlertDescription className="text-balance">
						SaaS Starter app is a demo app using a Stripe test environment. You
						can find a list of test card numbers on the{" "}
						<a
							href="https://stripe.com/docs/testing#cards"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-8"
						>
							Stripe docs
						</a>
						.
					</AlertDescription>
				</Alert>
				<BillingInfo userSubscriptionPlan={userSubscriptionPlan} />
			</div>
		</>
	);
};

export default BillingPage;