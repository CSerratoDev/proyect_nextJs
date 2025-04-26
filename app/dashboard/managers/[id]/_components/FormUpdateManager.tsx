import { Button, Input } from "@heroui/react"
import updateManager from "actions/managers/update"
import { API_URL } from "../../../../../constants"
import { Manager } from "entities"
import { authHeaders } from "helpers/authHeaders"
import SelectStore from "./SelectStore"

export default async function FormUpdateManager({manager}: {manager: Manager}) {
    const updateMgrWithId = updateManager.bind(null, manager.managerId)
    
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...(await authHeaders()),
        }
    })
    const stores = await responseStores.json()
   
    return (
        <form action={updateMgrWithId} className="rounded-md flex flex-col flex-grow-0 gap-2">
            <h1 className="text-2xl text-[#252525] flex justify-center"> Actualizar Manager </h1>
            <Input
                required={true}
                isRequired
                label="Nombre Completo"
                defaultValue={manager.managerFullName}
                placeholder="Pedro Fernandez"
                name="managerFullName"
            />
            <Input
                required={true}
                isRequired
                label="Correo Electronico"
                defaultValue={manager.managerEmail}
                placeholder="p.fer@oxxo.com"
                name="managerEmail"
            />
            <Input
                required={true}
                isRequired
                label="Salario"
                defaultValue={String(manager.managerSalary)}
                placeholder="100000"
                name="120000"
            />
            <Input
                required={true}
                isRequired
                label="Telefono"
                defaultValue={manager.managerPhoneNumber}
                placeholder="55-5555-5555"
                name="managerPhoneNumber"
            />
            <SelectStore 
                stores={stores} 
                defaultStore={manager?.location?.locationId}
            />
            <Button color="success" type="submit">
                Actualizar
            </Button>
        </form>
    )
}