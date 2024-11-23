import { redirect } from "next/navigation";
import { Icons } from "@/components/common/Icons";
import { BillingInfo } from "@/components/dashboard/BillingInfo";
import { DashboardHeader } from "@/components/dashboard/Header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { auth } from "@/services/auth";

const BillingPage = async () => {
	const session = await auth();

	if (!session?.user.id) {
		redirect("/dashboard");
	}

	const userSubscriptionPlan = await getUserSubscriptionPlan(session.user.id);

	return (
		<>
			<DashboardHeader
				heading="Pagamento"
				text="Gerencie sua assinatura e informações de pagamento."
			/>
			<div className="grid gap-8">
				<Alert className="!pl-14">
					<Icons.warning />
					<AlertTitle>Este é um aplicativo de demonstração.</AlertTitle>
					<AlertDescription className="text-balance">
						Este software de demonstração é um aplicativo desenvolvido para fins educacionais, usando um ambiente de teste do Stripe. Você pode encontrar uma lista de números de cartão de teste na{" "}
						<a
							href="https://stripe.com/docs/testing#cards"
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-8"
						>
							documentação do Stripe
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