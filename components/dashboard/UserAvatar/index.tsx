import { Icons } from "@/components/common/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserAvatarProps } from "@/types/components";

const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
    return (
        <Avatar {...props}>
            {user.image ? (
                <AvatarImage src={user.image} alt="Picture" referrerPolicy="no-referrer" />
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.name}</span>
                    <Icons.user className="size-4" />
                </AvatarFallback>
            )}
        </Avatar>
    );
};

export { UserAvatar };