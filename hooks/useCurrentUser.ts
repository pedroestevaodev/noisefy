import { useSession } from "next-auth/react";

const useCurrentUser = () => {
    const session = useSession();

    if (!session.data) return undefined;

    return session.data.user;
};

export default useCurrentUser;