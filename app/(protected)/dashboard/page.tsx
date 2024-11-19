import { EmptyPlaceholder } from "@/components/common/EmptyPlaceholder";
import { DashboardHeader } from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/session";

const DashboardPage = async () => {
    const user = await currentUser();

    return (
        <>
            <DashboardHeader
                heading="Dashboard"
                text={`Current Role : ${user?.role} — Change your role in settings.`}
            />
            <EmptyPlaceholder>
                <EmptyPlaceholder.Icon name="post" />
                <EmptyPlaceholder.Title>No content created</EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description>
                    You don&apos;t have any content yet. Start creating content.
                </EmptyPlaceholder.Description>
                <Button>Add Content</Button>
            </EmptyPlaceholder>
        </>
    );
};

export default DashboardPage;