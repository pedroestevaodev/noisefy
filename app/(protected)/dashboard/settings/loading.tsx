import SkeletonSection from "@/components/common/SkeletonSection";
import DashboardHeader from "@/components/dashboard/Header";

const DashboardSettingsLoading = () => {
	return (
		<>
			<DashboardHeader
				heading="Configurações"
				text="Gerenciar configurações de conta e site."
			/>
			<div className="divide-y divide-muted pb-10">
				<SkeletonSection />
				<SkeletonSection />
				<SkeletonSection card />
			</div>
		</>
	);
};

export default DashboardSettingsLoading;