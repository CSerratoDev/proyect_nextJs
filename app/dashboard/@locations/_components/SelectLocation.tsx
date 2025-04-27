'use client'
import { Select, SelectItem } from "@heroui/react";
import { Locations } from "entities";
import { useRouter } from "next/navigation";

export default function SelectLocation({locations, store} : {locations : Locations[], store : string | string[] | undefined}) {
    const router = useRouter();
    return (
        <Select 
            placeholder="Selecciona una ubicación" 
            label="Ubicación"
            classNames={{mainWrapper: 'hover:ring-2 ring-red-500 rounded-xl transition-all'}}
            selectedKeys={store ? store : "0"}
            onChange={((e) => {
                if (e.target.value === "0" || e.target.value === "") { 
                    router.push(`/dashboard`)
                } else {
                    router.push(`/dashboard?store=${e.target.value}`)
                }
                router.push(`/dashboard?store=${e.target.value}`)})}>
            {locations.map((location: Locations) => (
                <SelectItem key={location.locationId}>
                    {location.locationName}
                </SelectItem>    
            ))}
        </Select>
    )    
}