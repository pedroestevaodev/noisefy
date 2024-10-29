import SkeletonSection from "@/components/common/SkeletonSection";
import DashboardHeader from "@/components/dashboard/Header";

const DashboardSettingsLoading = () => {
	return (
		<>
			<DashboardHeader
				heading="Settings"
				text="Manage account and website settings."
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