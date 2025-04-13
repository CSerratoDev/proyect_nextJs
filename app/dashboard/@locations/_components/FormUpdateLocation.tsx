import { Button, Input } from "@heroui/react";
import { createLocation } from "actions/locations/create";
import { API_URL} from "../../../../constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "helpers/authHeaders";
import { Locations, Manager } from "entities";
export default async function FormUpdateLocation({store} : {store : string | string[] | undefined}) {
    if (!store || store === undefined) return null;
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"],
        }
    })
    const dataManagers : Manager[] = await responseManagers.json();
    const responseLocation = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations"],
        }
    })
    const dataLocation : Locations[] = await responseLocation.json();
    let foundLocation = dataLocation.find((location) => location.locationId === +store);
    let foundManager = dataManagers.find((manager) => manager.managerId === foundLocation?.manager?.managerId);
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-3 w-full rounded-lg">
            <h1 className="text-2xl text-white text-center">Crear Tienda</h1>
            <Input defaultValue={foundLocation?.locationName} label="Nombre" placeholder="Oxxo Juriquilla" name="locationName"/>
            <Input defaultValue={foundLocation?.locationAddress} label="Dirección" placeholder="Av de la luz" name="locationAdress"/>
            <Input defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud" placeholder="100" name="locationLat"/>
            <Input defaultValue={foundLocation?.locationName[1].toString()} label="Longitud" placeholder="25" name="locationLng"/>
            <SelectManager defaultManager={foundManager?.managerId} manager = {dataManagers} location = {dataLocation} />
            <Button type="submit" color="primary">Subir</Button>
        </form>
    );
}