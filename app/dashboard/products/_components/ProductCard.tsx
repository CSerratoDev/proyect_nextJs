import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Products } from "entities";

export default function ProductCard({producto} : {producto: Products}) {
    return (
        <Card>
            <CardHeader></CardHeader>
            <Divider/>
            <CardBody>
                <p>Producto: <b>{producto.productName}</b></p>
                <p>Precio: <b>{producto.price}</b></p>
            </CardBody>
        </Card>
    )
}