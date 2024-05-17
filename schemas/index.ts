import * as z from 'zod';

export const ProductSchema = z.object({
    name: z.string().min(1, {
        message: 'El nombre del producto es requerido'
    }).max(60, {
        message: 'El nombre del producto debe tener menos de 50 caracteres'
    }),
    price: z.coerce.number().gte(1, {
        message: 'El precio del producto debe ser mayor a 1'
    }),
    description: z.string().min(1, {
        message: 'La descripción del producto es requerida'
    }).max(1000, {
        message: 'La descripción del producto debe tener menos de 1000 caracteres'
    }),
    stock: z.coerce.number(),
    image: z.string(),
    category: z.string().optional(),
    status: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
})