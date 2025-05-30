"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function createManager(formData: FormData) {
    let manager : any = {};
    for (const key of formData.keys()) {
        manager[key] = formData.get(key);
    }
    const response = await fetch (`${API_URL}/managers`, {
        method: "POST",
        body: JSON.stringify(manager),
        headers: {
            ...(await authHeaders()),
            "content-type": "application/json",
        }
    })
    if (response.status === 201) {
        revalidateTag("dashboard:managers");
        redirect(`/dashboard/managers`)        
    }
}