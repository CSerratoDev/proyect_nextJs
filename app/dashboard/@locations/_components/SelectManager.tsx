import { Select, SelectItem } from "@heroui/react";
import { Locations, Manager } from "entities";

export default function SelectManager({manager, location} : {manager: Manager[], location: Locations[]}) {
    const disableKey = location.map((location) => {
        return location.manager?.managerId;
    }).filter((managerId) => managerId !== undefined);
    return (
        <Select label="Manager" name="manager" disabledKeys={disableKey}>
            {manager.map((manager: Manager) => {
                    return (
                        <SelectItem key={manager.managerId}>
                            {manager.managerFullName}
                        </SelectItem>
                    );
            })}
        </Select>
    );
}