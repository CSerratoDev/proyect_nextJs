'use client'

import { Select, SelectItem } from "@heroui/react"
import { Locations } from "entities"

export default function SelectStore({stores, defaultStore}: {stores: Locations[], defaultStore: number}) {
    const disableStores = stores.map((store: Locations) => {
        if(store.manager !== undefined && store.locationId !== defaultStore) {
            return String (store.locationId)
        }
    }).filter((storeId) => storeId !== undefined)
    return (
        <Select 
            defaultSelectedKeys={
                defaultStore ? [String(defaultStore)] : undefined 
            }
            label="Tienda"
            name="location"
            disabledKeys={
                disableStores
            }
        >
            {
                stores.map((store: Locations) => (
                    <SelectItem key={String(store.locationId)}>
                        {store.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}