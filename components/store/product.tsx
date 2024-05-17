import { Product as ProductType } from "@prisma/client"
import { CardDescription, CardHeader, CardTitle, CardContent, Card } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/lib/utils";

type ProductProps = {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    return (
        <Card className="cursor-pointer h-fit">
            <CardHeader>
                <Image
                    src="/products/reloj.webp"
                    alt={product.name}
                    width={200}
                    height={200}
                />
            </CardHeader>
            <CardContent className="bg-muted/40 py-4 flex flex-col gap-2 justify-between">
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>                
                <CardDescription className="text-lg flex-1">{formatCurrency(product.price)}</CardDescription>
            </CardContent>
        </Card>
    )
}