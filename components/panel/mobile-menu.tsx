"use client"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Package2, PanelLeft, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

function MenuItem({ href, children, isActive }: { href: string, children: React.ReactNode, isActive: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
                {
                    "text-foreground": isActive,
                }
            )}
        >
            {children}
        </Link>
    )
}

export default function MobileMenu() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Ocultar menú</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                        href="#"
                        className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                        <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    {
                        siteConfig.sidebarItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                href={item.href}
                                isActive={pathname === item.href}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.title}
                            </MenuItem>
                        ))
                    }
                    <MenuItem
                        href="/panel/settings"
                        isActive={pathname === "/panel/settings"}
                    >
                        <Settings className="h-5 w-5" />
                        Configuración
                    </MenuItem>
                </nav>
            </SheetContent>
        </Sheet>
    )
}