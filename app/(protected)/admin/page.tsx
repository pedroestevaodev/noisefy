import DashboardHeader from "@/components/dashboard/Header";

const AdminPage = async () => {
    return (
        <>
            <DashboardHeader
                heading="Admin Panel"
                text="Access only for users with ADMIN role."
            />
            <div className="flex flex-col gap-5">
                Hello, Admin!
            </div>
        </>
    );
};

export default AdminPage;