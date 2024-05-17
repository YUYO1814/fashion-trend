"use client"

import { 
    Package2, 
    Settings, 
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SidebarItem from "@/components/panel/sidebar-item";
import { siteConfig } from "@/config/site";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    {
                        siteConfig.sidebarItems.map((item, index) => (
                            <SidebarItem
                                key={index}
                                title={item.title}
                                href={item.href}
                                icon={<item.icon className="h-5 w-5" />}
                                isActive={pathname === item.href}
                            />
                        ))
                    }
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                    <SidebarItem
                        title="Configuración"
                        href="/panel/settings"
                        icon={<Settings className="h-5 w-5" />}
                        isActive={pathname === "/panel/settings"}
                    />
                </nav>
            </aside>
        </>
    )
}