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
        <div>
            {data.map((mgr) => {
                return (
                    <Link key={mgr.managerId} href={{pathname:`/dashboard/managers/${mgr.managerId}`}}>
                        <Card className="mx-10 my-10 hover:scale-105 bg-white text-[#252525] hover:bg-[#252525] hover:text-white">
                            <CardHeader><p className="w-full">Nombre: <b>{mgr.managerFullName}</b></p></CardHeader>    
                            <Divider className="bg-black"/>
                            <CardBody>
                                <p className="w-full"> Email: <b>{mgr.managerEmail}</b></p>
                                <p className="w-full"> Telefono: <b>{mgr.managerPhoneNumber}</b></p>    
                            </CardBody>
                        </Card>
                    </Link>
                )
            })}
                
        </div>
    );
}