"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function deleteProvider(providerId: string) {
    const response = await fetch (`${API_URL}/providers/${providerId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            ...(await authHeaders())
        }
    })
    if ( response.status === 200 ){    
        revalidateTag("dashboard:providers");
        redirect("/dashboard/providers");
    }
}