import ProductsTable from "@/components/products/products-table";
import { getProducts } from "@/data/products"
1

export default async function Products() {
    const products = await getProducts();

    return (
        <>
            <ProductsTable products={products} />
        </>
    )
}