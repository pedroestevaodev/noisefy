import { CardSkeleton } from "@/components/common/CardSkeleton";
import { DashboardHeader } from "@/components/dashboard/Header";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardBillingLoading() {
	return (
		<>
			<DashboardHeader
				heading="Billing"
				text="Manage billing and your subscription plan."
			/>
			<div className="grid gap-8">
				<Skeleton className="h-28 w-full rounded-lg md:h-24" />
				<CardSkeleton />
			</div>
		</>
	);
}
