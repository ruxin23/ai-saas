import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="relative h-full">
            <div className="hidden md:flex h-full md:flex-col md:w-72
            md:fixed md:inset-y-0 z-[80]">
                <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout