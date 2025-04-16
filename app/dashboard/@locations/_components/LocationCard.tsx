import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { API_URL} from "../../../../constants";
import Link from "next/link";
import { authHeaders } from "helpers/authHeaders";
import { Locations } from "entities";

export default async function LocationCard({store} : {store: string | string[] | undefined}) {
    if(!store) return null;
    let response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...(await authHeaders())
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`],
        }
    });
    const data: Locations = await response.json();
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