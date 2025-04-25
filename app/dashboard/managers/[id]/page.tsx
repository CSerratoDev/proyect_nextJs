import { Manager } from "entities";
import { API_URL } from "../../../../constants";
import { authHeaders } from "helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import ManagersCard from "./_components/ManagersCard";

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
           <div>
                <ManagersCard mgr={data} />
           </div>
    );
}