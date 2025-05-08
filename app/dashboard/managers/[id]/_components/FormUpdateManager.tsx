import { Button, Input } from "@heroui/react"
import updateManager from "actions/managers/update"
import { API_URL } from "../../../../../constants"
import { Manager } from "entities"
import { authHeaders } from "helpers/authHeaders"
import SelectStore from "./SelectStore"

export default async function FormUpdateManager({manager}: {manager: Manager}) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...(await authHeaders()),
        }
    })
    const stores = await responseStores.json()
    return (
        <form action={updateManagerWithId} className="rounded-md flex flex-col flex-grow-0 gap-3">
            <h1 className="text-2xl text-[#252525] flex justify-center p-3"><b>Actualizar Manager</b></h1>
            <Input required={true} label="Nombre Completo" defaultValue={manager.managerFullName} placeholder="Pedro Fernandez" name="managerFullName"/>
            <Input required={true} label="Correo Electronico" defaultValue={manager.managerEmail} placeholder="p.fer@oxxo.com" name="managerEmail"/>
            <Input required={true} label="Salario" defaultValue={String(manager.managerSalary)} placeholder="100000" name="120000"/>
            <Input required={true} label="Telefono" defaultValue={manager.managerPhoneNumber} placeholder="55-5555-5555" name="managerPhoneNumber"/>
            <SelectStore stores={stores} defaultStore={manager.location?.locationId}/>
            <div className="flex justify-end">
                <Button type="submit" className="w-1/3" variant="shadow" color="success">Actualizar</Button>
            </div>
        </form>
    )
}