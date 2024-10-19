import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { ChildrenProps } from "@/types/nextjs";

const DashboardLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="relative flex min-h-screen w-full">
            <DashboardSidebar links={[]} />

            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 flex h-14 lg:h-[60px] bg-background z-50 xl:px-8">
                    <MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
                        <MobileSheetSidebar links={[]} />

                        <div className="flex-1 w-full">
                            <SearchCommand links={[]} />
                        </div>

                        <ModeToggle />
                        <UserAccountNav />
                    </MaxWidthWrapper>
                </header>

                <main className="flex-1 p-4 xl:px-8">
                    <MaxWidthWrapper className="flex flex-col gap-4 lg:gap-6 h-full px-0 max-w-7xl">
                        {children}
                    </MaxWidthWrapper>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;