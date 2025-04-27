"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function deleteProvider(providerId: string, formData: FormData) {
    const response = await fetch (`${API_URL}/providers/${providerId}`, {
        method: "DELETE",
        headers: {
            ...(await authHeaders())
        }
    })
    if ( response.status === 200 ){    
        revalidateTag("dashboard:managers");
        redirect("/dashboard/providers");
    }
}