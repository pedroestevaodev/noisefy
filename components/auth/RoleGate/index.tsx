'use client';

import { FormError } from "@/components/common/FormError";
import useCurrentRole from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
};

const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
    const role = useCurrentRole();

    if (role !== allowedRole) {
        return (
            <FormError message="Você não tem permissão para visualizar este conteúdo!" />
        );
    }

    return (
        <>{children}</>
    );
};

export default RoleGate;