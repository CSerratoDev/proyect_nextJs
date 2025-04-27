"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "../../helpers/authHeaders";

export default async function createProvider(formData: FormData) {
    let provider : any = {};
    for (const key of formData.keys()) {
        provider[key] = formData.get(key);
    }
    const response = await fetch (`${API_URL}/providers`, {
        method: "POST",
        body: JSON.stringify(provider),
        headers: {
            ...(await authHeaders() || {}),
            "content-type": "application/json",
        }
    })
    console.log(await response.json())
    if (response.status === 201) revalidateTag("dashboard:providers");
}