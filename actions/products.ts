"use server";

import prisma from "@/prisma";
import { ProductSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import * as z from "zod";

export async function createProduct(values: z.infer<typeof ProductSchema>) {
    const { name, price, description, stock, image, category } = values;
    const slug = name.toLowerCase().replace(/\s/g, "-");

    let status = {
        error: false,
        message: "¡Producto creado con éxito!",
    }

    try {
        await prisma.product.create({
            data: {
                name,
                price,
                description,
                stock,
                image,
                categoryId: "clwa30b210000lorxs69rwfbk",
                slug,
            },
        });
    } catch (error) {
        status = {
            error: true,
            message: "¡Hubo un error al crear el producto!",
        }
    }

    revalidatePath("/panel/products");

    return status;
}