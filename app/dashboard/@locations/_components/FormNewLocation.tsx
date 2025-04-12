import { Button, Input } from "@heroui/react";
import { createLocation } from "actions/locations/create";
import { API_URL} from "../../../../constants";
import axios from "axios";
import SelectManager from "./SelectManager";
import { authHeaders } from "helpers/authHeaders";
export default async function FormNewLocation({store} : {store : string | string[] | undefined}) {
    if(store) return null;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        }
    })
    const responseLocation = await axios.get(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        }
    })
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-3 w-full rounded-lg">
            <h1 className="text-2xl text-white text-center">Crear Tienda</h1>
            <Input label="Nombre" placeholder="Oxxo Juriquilla" name="locationName"/>
            <Input label="Dirección" placeholder="Av de la luz" name="locationAdress"/>
            <Input label="Latitud" placeholder="100" name="locationLat"/>
            <Input label="Longitud" placeholder="25" name="locationLng"/>
            <SelectManager manager = {responseManagers.data} location = {responseLocation.data} />
            <Button type="submit" color="primary">Subir</Button>
        </form>
    );
}