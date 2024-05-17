import prisma from "@/prisma";

export async function getProducts(store: boolean = false) {
    return await prisma.product.findMany({
        include: {
            category: true,
        },
        where: {
            ...store ? { status: "ACTIVE" } : {},
        }
    });
}

export async function getProductById(id: string) {
    return await prisma.product.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
        },
    });
}