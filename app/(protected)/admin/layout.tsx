import { currentUser } from "@/lib/session";
import { ChildrenProps } from "@/types/nextjs";
import { redirect } from "next/navigation";

const AdminDashboard = async ({ children }: ChildrenProps) => {
    const user = await currentUser();

    if (!user || user.role !== "ADMIN") redirect("/login");

    return (<>{children}</>);
};

export default AdminDashboard;