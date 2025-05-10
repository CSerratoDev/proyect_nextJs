import { Button, Input } from "@heroui/react";
import { createLocation } from "actions/locations/create";
import { API_URL } from "../../../../constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "helpers/authHeaders";
import { Locations, Manager } from "entities";

export default async function FormNewLocation({ store }: { store: string | string[] | undefined }) {
    if (store) return null;

    const [dataManagers, dataLocations] = await Promise.all([
        fetch(`${API_URL}/managers`, {
            headers: { ...(await authHeaders()) },
            next: { tags: ["dashboard:managers"] },
        }).then((res) => res.json() as Promise<Manager[]>),
        fetch(`${API_URL}/locations`, {
            headers: { ...(await authHeaders()) },
            next: { tags: ["dashboard:locations"] },
        }).then((res) => res.json() as Promise<Locations[]>),
    ]);

    return (
        <form action={createLocation} className="bg-[#252525] py-2 px-4 flex flex-col gap-3 w-full rounded-lg">
            <h1 className="flex text-2xl text-white justify-center">Crear Tienda</h1>
            <Input required label="Nombre" placeholder="Oxxo Juriquilla" name="locationName" />
            <Input required label="Dirección" placeholder="Av de la luz" name="locationAdress" />
            <Input required label="Latitud" placeholder="100" name="locationLat" />
            <Input required label="Longitud" placeholder="25" name="locationLng" />
            <SelectManager managers={dataManagers} location={dataLocations} />
            <Button color="success" type="submit">Actualizar</Button>
        </form>
    );
}
