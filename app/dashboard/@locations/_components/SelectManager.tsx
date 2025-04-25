import { Select, SelectItem } from "@heroui/react";
import { Locations, Manager } from "entities";

interface SelectManagerProps {
    managers: Manager[];
    location?: Locations[];
    defaultManager?: string;
}
export default function SelectManager({managers, location, defaultManager} : SelectManagerProps) {
    const disableKey = location
    ?.filter(loc => loc.manager?.managerId && loc.manager.managerId !== defaultManager)
    .map(loc => loc.manager!.managerId);
    return (
        <Select 
            defaultSelectedKeys={
                defaultManager ? [defaultManager] : undefined
            } 
            label="Manager" 
            name="manager" 
            disabledKeys={
                disableKey
            }
        >
            {managers.map((mgr: Manager) => (
                <SelectItem key={mgr.managerId}>
                    {mgr.managerFullName}
                </SelectItem>
            ))}
        </Select>
    );
}