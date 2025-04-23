import { Select, SelectItem } from "@heroui/react";
import { Locations, Manager } from "entities";

interface SelectManagerProps {
    manager: Manager[];
    location: Locations[];
    defaultManager?: string;
}
export default function SelectManager({manager, location, defaultManager} : SelectManagerProps) {
    const disableKey = location.map((location) => {
        if(location.manager?.managerId !== defaultManager) return location.manager?.managerId;
    }).filter((managerId) => managerId !== undefined);
    return (
        <Select defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []} label="Manager" name="manager" disabledKeys={disableKey}>
            {manager.map((manager: Manager) => {
                    return (
                        <SelectItem key={manager.managerId} >
                            {manager.managerFullName}
                        </SelectItem>
                    );
            })}
        </Select>
    );
}