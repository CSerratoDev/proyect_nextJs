import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Products } from "entities";

export default function ProductCard({producto} : {producto: Products}) {
    return (
        <Card className="w-64 h-32 flex bg-[#252525] text-white">
            <CardHeader></CardHeader>
            <Divider className="bg-black"/>
            <CardBody>
                <p className="truncate text-sm">Producto: <b>{producto.productName}</b></p>
                <p className="truncate text-sm">Precio: <b>{producto.price}</b></p>
            </CardBody>
        </Card>
    )
}