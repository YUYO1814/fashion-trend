import { Product as ProductType } from "@prisma/client"
import { CardDescription, CardHeader, CardTitle, CardContent, Card } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

type ProductProps = {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    return (
        <Card className="">
            <CardHeader>
                <Image
                    src="/products/reloj.webp"
                    alt={product.name}
                    width={200}
                    height={200}
                />
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    )
}