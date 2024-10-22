import { useSession } from "next-auth/react"

const useCurrentRole = () => {
    const session = useSession();

    if (!session) return undefined;

    return session.data?.user.role;
};

export default useCurrentRole;