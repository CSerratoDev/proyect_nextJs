'use server'

import axios from "axios";
import { TOKEN_NAME, API_URL } from "../../constants";
import { cookies } from "next/headers";

export default async function DeleteLocation(){
    const token = (await cookies()).get(TOKEN_NAME)?.value;
    axios.delete(`${API_URL}/locations/`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}