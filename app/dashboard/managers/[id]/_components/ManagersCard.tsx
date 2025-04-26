import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Manager } from "entities";
import Link from "next/link";

export default function ManagersCard({mgr} : {mgr: Manager}) {
    return (
        <Card className="mx-20 py-2 bg-cyan-50 text-[#252525] text-center">
        <CardHeader>
            <p className="w-full">
                <b className="text-2xl">{mgr.managerFullName}</b>
            </p>
        </CardHeader>
        <Divider/>
        <CardBody className="flex flex-row flex-grow-0 items-center gap-5 justify-center">
            <div className="flex flex-col text-lg">
                <p className="w-full">
                    Email: <b>{mgr.managerEmail}</b>
                </p>
                <p className="w-full">
                    Teléfono: <b>{mgr.managerPhoneNumber}</b>
                </p>
                <p className="w-full">
                    Salario: <b>${mgr.managerSalary}</b>
                </p>
                <p className={mgr.location ? "" : "hidden"}>
                    Tienda: {" "} 
                        <Link 
                            href={{
                                pathname: `/dashboard`,
                                query: {
                                    store: mgr?.location?.locationId
                                }
                            }}
                        >
                            <b className="underline">{mgr?.location?.locationName}</b>
                        </Link>
                </p>
            </div>
             {
                mgr.location ? (
                    <>
                        
                    </>
                ) : (<p> No tiene Tienda</p>)
             }
        </CardBody>
    </Card>
    )
}