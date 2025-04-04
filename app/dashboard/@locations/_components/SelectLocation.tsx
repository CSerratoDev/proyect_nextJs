'use client'
import { Select, SelectItem } from "@heroui/react";
import { Locations } from "entities";

export default function SelectLocation({locations} : {locations : Locations[]}) {
    return (
        <Select>
            {locations.map((location: Locations) => {
                return (
                    <SelectItem key={location.locationId}>
                        {location.locationName}
                    </SelectItem>
                );
            })}
        </Select>
    )    
}