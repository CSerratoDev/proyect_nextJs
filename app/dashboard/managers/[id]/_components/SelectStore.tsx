'use client';

import { Select, SelectItem } from "@heroui/react";
import { Locations } from "entities";

export default function SelectStore({ stores, defaultStore }: { stores: Locations[]; defaultStore: number }) {
    const disableStores = stores
        .filter(store => store.manager !== undefined && store.locationId !== defaultStore)
        .map(store => String(store.locationId));

    return (
        <Select
            defaultSelectedKeys={defaultStore ? [String(defaultStore)] : undefined}
            label="Tienda"
            name="location"
            disabledKeys={disableStores}
        >
            {stores.map(store => (
                <SelectItem key={String(store.locationId)}>
                    {store.locationName}
                </SelectItem>
            ))}
        </Select>
    );
}