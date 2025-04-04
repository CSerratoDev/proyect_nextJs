'use client'
import { Select, SelectItem } from "@heroui/react";
import { Locations } from "entities";
import { useRouter } from "next/navigation";

export default function SelectLocation({locations} : {locations : Locations[]}) {
    const router = useRouter();
    return (
        <Select placeholder="Selecciona una ubicación" 
            label="Ubicación"
            classNames={{
            mainWrapper: 'hover:ring-2 ring-red-500 rounded-xl transition-all',
        }}
            onChange={((e) => {
                router.push(`/dashboard?store=${e.target.value}`)
            })}    
        >
            {locations.map((location: Locations) => {
                return (
                    <SelectItem key={location.locationId} data-value={location.locationId}>
                        {location.locationName}
                    </SelectItem>
                );
            })}
        </Select>
    )    
}