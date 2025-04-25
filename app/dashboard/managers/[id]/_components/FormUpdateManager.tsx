import { Button, Input } from "@heroui/react"
import updateManager from "actions/managers/update"
import { Manager } from "entities"

export default function FormUpdateManager({manager}: {manager: Manager}) {
    const updateMgrWithId = updateManager.bind(null, manager.managerId)
    return (
        <form action={updateMgrWithId}>
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
            <Button color="primary" type="submit">Actualizar</Button>
        </form>
    )
}