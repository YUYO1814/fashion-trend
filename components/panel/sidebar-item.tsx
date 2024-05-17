"use client"

import { 
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
    Tooltip,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SidebarItemProps = {
    title: string;
    href: string;
    icon: React.ReactNode;
    isActive?: boolean;
}

export default function SidebarItem({ title, href, icon, isActive }: SidebarItemProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link
                        href={href}
                        className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                            {
                                "bg-accent text-accent-foreground": isActive
                            }
                        )}
                    >
                        {icon}
                        <span className="sr-only">{title}</span>
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{title}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}