import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import ModeToggle from "@/components/common/ModeToggle";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MobileSheetSidebar from "@/components/dashboard/MobileSheetSidebar";
import SearchCommand from "@/components/dashboard/SearchCommand";
import UserAccountNav from "@/components/dashboard/UserAccountNav";
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
                <header className="sticky top-0 flex h-14 lg:h-[60px] bg-background px-4 xl:px-8 z-50">
                    <MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
                        <MobileSheetSidebar links={filteredLinks} />

                        <div className="flex-1 w-full">
                            <SearchCommand links={filteredLinks} />
                        </div>

                        {/*<ModeToggle />          DESATIVANDO O MODO ESCURO INFELIZMENTE, NÃO TEMOS TEMPO PARA ADIONAR ISSO AGORA         */}
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