import { useUser } from "@clerk/nextjs";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
const UserAvatar = () => {
    const { user } = useUser();
    return (
        <Avatar className="w-8 h-8">
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback>
        </Avatar>
    );
}

export default UserAvatar;