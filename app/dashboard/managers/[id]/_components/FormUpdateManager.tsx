import { Button, Input } from "@heroui/react";
import updateManager from "actions/managers/update";
import { API_URL } from "../../../../../constants";
import { Manager } from "entities";
import { authHeaders } from "helpers/authHeaders";
import SelectStore from "./SelectStore";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: await authHeaders(),
    });
    const stores = await responseStores.json();
    const {managerId} = manager;
    const updateManagerWithId = updateManager.bind(null, managerId)

    return (
        <form action={updateManagerWithId} className="rounded-md flex flex-col gap-3">
            <h1 className="text-2xl text-[#252525] flex justify-center p-3 font-bold">Actualizar Manager</h1>
            <Input defaultValue={manager.managerFullName} label="Nombre Completo" placeholder="Pedro Fernandez" name="managerFullName"/>
            <Input defaultValue={manager.managerEmail} label="Correo Electrónico" placeholder="p.fer@oxxo.com" name="managerEmail"/>
            <Input defaultValue={String(manager.managerSalary)} label="Salario" placeholder="100000" name="managerSalary"/>
            <Input defaultValue={manager.managerPhoneNumber} label="Teléfono" placeholder="55-5555-5555" name="managerPhoneNumber"/>
            <SelectStore stores={stores} defaultStore={manager.location?.locationId} />
            <div className="flex justify-end">
                <Button type="submit" className="w-1/3" variant="shadow" color="success">
                    Actualizar
                </Button>
            </div>
        </form>
    );
}