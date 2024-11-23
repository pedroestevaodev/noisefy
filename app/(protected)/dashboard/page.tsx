import { EmptyPlaceholder } from "@/components/common/EmptyPlaceholder";
import { DashboardHeader } from "@/components/dashboard/Header";

const DashboardPage = async () => {
    return (
        <>
            <DashboardHeader heading="Dashboard" />
            <EmptyPlaceholder>
                <EmptyPlaceholder.Icon name="post" />
                <EmptyPlaceholder.Title>Em Desenvolvimento</EmptyPlaceholder.Title>
                <EmptyPlaceholder.Description>
                    Ainda estamos implementando esta página.
                </EmptyPlaceholder.Description>
            </EmptyPlaceholder>
        </>
    );
};

export default DashboardPage;