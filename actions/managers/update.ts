"use server"

import { revalidateTag } from "next/cache";
import { API_URL } from "../../constants";
import { authHeaders } from "helpers/authHeaders";
import { redirect } from "next/navigation";

export default async function updateManager(managerId : string){
    
    const response = await fetch (`${API_URL}/managers/${managerId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            ...(await authHeaders())
        },
    });
    if (response.status === 200){
        revalidateTag("dashboard:managers");
        redirect("/dashboard/managers");
    };
}