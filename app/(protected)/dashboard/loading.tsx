import DashboardHeader from "@/components/dashboard/Header";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoading = () => {
    return (
        <>
            {/* <DashboardHeader heading="Dashboard" text="Current Role:" /> */}
            <Skeleton className="size-full rounded-lg" />
        </>
    );
};

export default DashboardLoading;