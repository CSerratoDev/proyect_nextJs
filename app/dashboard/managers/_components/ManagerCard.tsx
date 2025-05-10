import { API_URL } from "../../../../constants";
import { Manager } from "entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "helpers/authHeaders";
import Link from "next/link";

export default async function ManagerCard () {
    const response = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
            ...(await authHeaders())
        },
        next: { 
            tags: ["dashboard:managers"],    
        },
    });
    const data: Manager[] = await response.json();
    return  (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {data.map((mgr) => {
                return (
                    <Link key={mgr.managerId} href={{pathname:`/dashboard/managers/${mgr.managerId}`}}>
                        <Card className="w-64 h-32 flex flex-col justify-between hover:scale-105 transition-all duration-200 bg-white text-[#252525] hover:bg-[#252525] hover:text-white">
                            <CardHeader><p className="truncate text-md">Nombre: <b>{mgr.managerFullName}</b></p></CardHeader>    
                            <Divider className="bg-black"/>
                            <CardBody>
                                <p className="truncate text-sm"> Email: <b>{mgr.managerEmail}</b></p>
                                <p className="truncate text-sm"> Telefono: <b>{mgr.managerPhoneNumber}</b></p>    
                            </CardBody>
                        </Card>
                    </Link>
                )
            })}
        </div>
    );
}