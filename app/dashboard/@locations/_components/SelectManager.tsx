import { Select, SelectItem } from "@heroui/react";
import { Manager } from "entities";

export default function SelectManager({manager}: {manager: Manager[]}) {
    return (
        <Select name="manager">
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