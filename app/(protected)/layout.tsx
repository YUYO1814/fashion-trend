import Navbar from "@/components/panel/navbar";
import Sidebar from "@/components/panel/sidebar";

export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Navbar />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 sm:py-0">
                    {children}
                </main>
            </div>
        </div>
    )
}