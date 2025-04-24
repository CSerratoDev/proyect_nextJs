import { Manager } from "entities";
import { API_URL } from "../../../../constants";
import { authHeaders } from "helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function ManagerPage({
    params,
}:{
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers : {
            ...(await authHeaders()),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
        }
    });
    const data : Manager = await response.json();
    return (
            <Card className="mx-20 py-2 bg-cyan-50 text-[#252525]">
                <CardHeader>
                    <p className="w-full">
                        Nombre: <b>{data.managerFullName}</b>
                    </p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className="w-full">
                        Email: <b>{data.managerEmail}</b>
                    </p>
                    <p className="w-full">
                        Teléfono: <b>{data.managerPhoneNumber}</b>
                    </p>
                     {
                        data.location ? (
                            <>
                                <p>
                                    Tienda :<b>{data.location.locationName}</b>
                                </p>
                            </>
                        ) : (<p> No tiene Tienda</p>)
                     }
                </CardBody>
            </Card>
    );
}