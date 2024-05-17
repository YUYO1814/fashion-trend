import Product from "@/components/store/product";
import { getProducts } from "@/data/products";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function MainPage() {
    const products = await getProducts();

    return (
        <div className="grid md:grid-cols-4 p-4 gap-4">
            <aside>
                <Card>
                    <CardHeader>
                        <CardTitle>Filtros</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>Filters</p>
                        <p>sas</p>
                    </CardContent>
                </Card>
            </aside>
            <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}