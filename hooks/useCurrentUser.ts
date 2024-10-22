import { useSession } from "next-auth/react";

const useCurrentUser = () => {
    const session = useSession();

    if (!session) return undefined;

    return session.data?.user;
};

export default useCurrentUser;