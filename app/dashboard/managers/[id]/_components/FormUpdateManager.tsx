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
        <form action={updateMgrWithId} className="rounded-md">
            <h1> Actualizar Manager </h1>
            <Input
                defaultValue={manager.managerFullName}
                placeholder="Pedro Fernandez"
                name="managerFullName"
            />
            <Input
                defaultValue={manager.managerEmail}
                placeholder="p.fer@oxxo.com"
                name="managerEmail"
            />
            <Input
                defaultValue={String(manager.managerSalary)}
                placeholder="100000"
                name="120000"
            />
            <Input
                defaultValue={manager.managerPhoneNumber}
                placeholder="55-5555-5555"
                name="managerPhoneNumber"
            />
            <SelectStore 
                stores={stores} 
                defaultStore={manager?.location?.locationId}
            />
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    )
}