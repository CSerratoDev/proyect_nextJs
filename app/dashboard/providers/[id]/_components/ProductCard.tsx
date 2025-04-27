import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Products } from "entities";

export default function ProductCard({producto} : {producto: Products}) {
    return (
        <Card className="mx-10 my-10 hover:scale-105 bg-white text-[#252525] hover:bg-[#252525] hover:text-white">
            <CardHeader className="flex justify-center text-xl"><b>{producto.productName}</b></CardHeader>
            <Divider className="bg-black"/>
            <CardBody>
                <p>Producto: <b>{producto.productName}</b></p>
                <p>Precio: <b>{producto.price}</b></p>
            </CardBody>
        </Card>
    )
}