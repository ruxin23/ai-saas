import { UserButton } from "@clerk/nextjs"
import MobileSidebar from './mobile-sidebar'
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription";
import { ModeToggle } from "./moddle-toggle";

const Navbar = async () => {
    const apiLimitCount = await getApiLimitCount()
    const isPro = await checkSubscription()
    return (
        <div className='flex items-center p-4'>
            <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
            <div className='flex w-full justify-between'>
                <ModeToggle />
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar

