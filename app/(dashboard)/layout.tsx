import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    const apiLimitCount = await getApiLimitCount()
    return (
        <div className="relative h-full">
            <div className="hidden md:flex h-full md:flex-col md:w-72
            md:fixed md:inset-y-0 bg-gray-800">
                <Sidebar apiLimitCount={apiLimitCount}/>
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout