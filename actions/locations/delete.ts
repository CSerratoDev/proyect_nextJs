'use server'

import { authHeaders } from "helpers/authHeaders";
import { API_URL } from "../../constants";

export default async function DeleteLocation(formDate: FormData) {
    const locationId = formDate.get("deleteValue")
    if(!locationId) return;
    fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders()
        }
    })
}