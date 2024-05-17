"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import Link from "next/link";
import { capitalize } from "@/lib/utils";

type Breadcrumb = {
    id: number;
    title: string;
    href: string;
}

export default function BreadcrumbsSite() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

    useEffect(() => {
        const paths = pathname.split("/").filter(Boolean);
        const breadcrumbs: Breadcrumb[] = [];

        paths.reduce((acc, path) => {
            const href = `${acc}/${path}`;
            breadcrumbs.push({
                id: (Math.floor(Math.random() * 6) + 1) * path.length,
                title: capitalize(path),
                href,
            });

            
            return href;
        }, "");
        
        setBreadcrumbs(breadcrumbs);
    }, [pathname]);

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {
                    breadcrumbs.map((breadcrumb, index) => {
                        if (index === breadcrumbs.length - 1) {
                            return (
                                <BreadcrumbItem key={breadcrumb.id}>
                                    <BreadcrumbPage>
                                        {breadcrumb.title}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            )
                        }

                        return (
                            <>
                                <BreadcrumbItem key={breadcrumb.id}>
                                    <BreadcrumbLink asChild>
                                        <Link href={breadcrumb.href}>
                                            {breadcrumb.title}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator key={index - breadcrumb.id} />
                            </>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}
