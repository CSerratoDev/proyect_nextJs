"use server";
import { revalidateTag } from "next/cache";
import { API_URL} from "../../constants";
import { authHeaders } from "helpers/authHeaders";
import { Locations } from "entities";
import { redirect } from "next/navigation";

export async function updateLocation(store: string, formData: FormData) {
    let location : any = {};
    let locationLatLng = [0, 0];
    for (const key of formData.keys()) {
        const value = formData.get(key);
        if (value) {       
            if (key === "locationLat"){
                locationLatLng[0] = +value;
            } else if (key === "locationLng"){
                locationLatLng[1] = +value;
            } else {
                location[key] = formData.get(key);
            }   
        }
    }
    location.locationLatLng = locationLatLng;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        method: "PATCH",
        body: JSON.stringify(location),
        headers: {
            'content-type': 'application/json',
            ...(await authHeaders())
        }
    })
    const {locationId}: Locations = await response.json();
    if (response.status === 200) {
        revalidateTag("dashbo0rd:locations")
        revalidateTag(`dashbo0rd:locations:${store}`);
        redirect(`/dashboard`)
    }
}