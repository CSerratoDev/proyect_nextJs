import { Button, Input } from "@heroui/react";
import { createLocation } from "actions/locations/create";
import { API_URL, TOKEN_NAME } from "../../../../constants";
import axios from "axios";
import SelectManager from "./SelectManager";
import { cookies } from "next/headers";
export default async function FormNewLocation() {
    const token = (await cookies()).get(TOKEN_NAME)?.value;
    const {data} = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation}>
            <Input label="Nombre" name="locationName"/>
            <Input label="Dirección" name="locationAdress"/>
            <Input label="Latitud" name="locationLat"/>
            <Input label="Longitud" name="locationLng"/>
            <SelectManager manager = {data} />
            <Button type="submit">Subir</Button>
        </form>
    );
}