import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "../../../../constants";
import { Locations } from "entities";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function LocationCard({store} : {store: string | string[] | undefined}) {
    if(!store) return null;
    const token = (await cookies()).get(TOKEN_NAME)?.value;
    let {data} = await axios.get<Locations>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return (
        <Card>
            <CardHeader>
                <b className="w-full"> Tienda:{data.locationName}</b>
            </CardHeader>
            <Divider/>
            <CardBody> 
                <p className="w-full">
                    Manager:
                    <Link href={{ pathname : `/dashboard/managers` }}>
                        <b>{data.manager?.managerFullName}</b>
                    </Link>
                </p>
            </CardBody>
        </Card>
     )   
}