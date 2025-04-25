"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "helpers/authHeaders";

export default async function deleteManager(managerId: string, formData: FormData){
    const response = await fetch (`${API_URL}/managers`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            ...(await authHeaders())
        }
    })
    console.log(response)
    revalidateTag("dashboard:managers");
}