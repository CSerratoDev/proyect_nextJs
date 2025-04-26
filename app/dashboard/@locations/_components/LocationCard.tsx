import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { API_URL} from "../../../../constants";
import Link from "next/link";
import { authHeaders } from "helpers/authHeaders";
import { Locations } from "entities";

export default async function LocationCard({store} : { store: string | string[] | undefined;}) {
    if(!store) return null;

    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...(await authHeaders())
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`],
        }
    });
    if (!response.ok) {
        console.error(`Failed to fetch location: ${response.status}`);
        return null;
    }

    const text = await response.text();
    if (!text) {
        console.warn("Empty response for location");
        return null;
    }

    const data: Locations = JSON.parse(text);
    return (
        <Card className="mx-20 py-2 bg-white text-[#252525] text-center">
            <CardHeader>
                <b className="w-full">{data.locationName}</b>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-col flex-grow-0 items-center gap-5 justify-center"> 
                <p className="w-full">
                    Manager:{" "}
                    <Link 
                        href={{ 
                            pathname : `/dashboard/managers/${data.manager?.managerId}` 
                            }}>
                        <b className="underline">{data.manager?.managerFullName}</b>
                    </Link>
                </p>
                <p className="w-full">
                    Dirección: <b>{data.locationAddress}</b>
                </p>
            </CardBody>
        </Card>
     )   
}