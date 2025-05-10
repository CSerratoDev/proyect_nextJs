import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Provider } from "entities";

export default function ProviderCard({provider}: {provider: Provider}) {
    return (
        <Card className="mx-6 my-6 hover:scale-105 bg-white text-[#252525] hover:bg-[#252525] hover:text-white">
            <CardHeader className="flex justify-center text-md"><b>{provider.providerName}</b></CardHeader>
            <Divider className="bg-black"/>
            <CardBody className="flex justify-start text-sm">
                <p>Correo: <b>{provider.providerEmail}</b></p>
                <p>Telefono: <b>{provider.providerPhoneNumber}</b></p>
                {provider?.products?.length !== 0 ? (
                    <p>Tiene <b>{provider.products?.length}</b> producto</p>
                ) : (
                    <p>No tiene productos</p>
                )}    
            </CardBody>
        </Card>
    )
}