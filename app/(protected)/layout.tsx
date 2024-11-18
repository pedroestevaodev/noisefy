import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { DashboardNavbar } from "@/components/dashboard/Navbar";
import { sidebarLinks } from "@/config/dashboard";
import { currentUser } from "@/lib/session";
import { ChildrenProps } from "@/types/nextjs";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: ChildrenProps) => {
    const user = await currentUser();

    if (!user) redirect("/login");

    const filteredLinks = sidebarLinks.map((section) => ({
        ...section,
        items: section.items.filter(({ authorizeOnly }) => !authorizeOnly || authorizeOnly === user.role),
    }));

    return (
        <div className="relative flex min-h-screen w-full">
            <DashboardSidebar links={filteredLinks} />

            <div className="flex flex-1 flex-col">
                <DashboardNavbar links={filteredLinks} />

                <main className="flex-1 p-4 xl:px-8">
                    <div className="flex flex-col gap-4 lg:gap-6 h-full px-0">

                    {/* <MaxWidthWrapper className="flex flex-col gap-4 lg:gap-6 h-full px-0 max-w-7xl"> */}
                        {children}
                    {/* </MaxWidthWrapper> */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;