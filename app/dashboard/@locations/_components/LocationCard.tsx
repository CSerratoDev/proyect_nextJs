import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import axios from "axios";
import { API_URL} from "../../../../constants";
import { Locations } from "entities";
import Link from "next/link";
import { authHeaders } from "helpers/authHeaders";

export default async function LocationCard({store} : {store: string | string[] | undefined}) {
    if(!store) return null;
    let {data} = await axios.get<Locations>(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
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