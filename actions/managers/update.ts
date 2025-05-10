"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function updateManager(managerId : string, formData: FormData){
     let manager : any = {};
        for (const key of formData.keys()) {
            manager[key] = formData.get(key);
        }
    const response = await fetch (`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {
            ...(await authHeaders()),
            "content-type": "application/json"
        },
    });
    if (response.status === 200){
        revalidateTag("dashboard:managers");
        redirect("/dashboard/managers");
    };
}