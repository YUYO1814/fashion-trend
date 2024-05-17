import MobileMenu from "@/components/panel/mobile-menu";
import BreadcrumbsSite from "@/components/panel/breadcrumbs-site";
import User from "@/components/user";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <MobileMenu />
            <BreadcrumbsSite />
            <User />
        </header>
    )
}