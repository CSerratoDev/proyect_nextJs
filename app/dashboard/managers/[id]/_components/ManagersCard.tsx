import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Manager } from "entities";
import Link from "next/link";
import UpdateManager from "./UpdateManager";

export default function ManagersCard({ mgr }: { mgr: Manager }) {
    const hasLocation = !!mgr.location;

    return (
        <Card className="mx-3 hx-3 bg-white text-[#252525] text-wrap text-center">
            <CardHeader>
                <p className="w-full"><b>{mgr.managerFullName}</b></p>
            </CardHeader>
            <Divider className="bg-black" />
            <CardBody className="flex flex-row flex-grow-0 items-center gap-3 justify-center">
                <div className="flex flex-col text-lg">
                    <p className="truncate text-md">Email: <b>{mgr.managerEmail}</b></p>
                    <p className="truncate text-md">Teléfono: <b>{mgr.managerPhoneNumber}</b></p>
                    <p className="truncate text-md">Salario: <b>${mgr.managerSalary}</b></p>
                    {hasLocation ? (
                        <p>
                            Tienda:{" "}
                            <Link href={{ pathname: `/dashboard`, query: { store: mgr.location.locationId } }}>
                                <b className="truncate text-md underline decoration-red-500 dark:hover:text-red-400 hover:after:content-['📍']">{mgr.location.locationName}</b>
                            </Link>
                        </p>
                    ) : (
                        <p>No tiene Tienda</p>
                    )}
                </div>
            </CardBody>
        </Card>
    );
}