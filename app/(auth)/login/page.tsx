"use client";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";
import { API_URL } from "../../../constants";

export default function Login() {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        let authData: any = {};
        authData.userEmail = formData.get("userEmail") as string;
        authData.userPassword = formData.get("userPassword") as string;
        const {data} = await axios.post(`${API_URL}/auth/login`, {
            ... authData
        }, {
            withCredentials: true,
        });
        console.log(data);
        return;
    }
        
    return (
        <form className="bg-red-400 px-10 py-5 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4">
                Login
            </p>
            <div className="flex flex-col gap-2 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired size="sm" />
                <Input label="Password" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2 py-3">
                <Button color="primary" type="submit">
                    Login    
                </Button>
                <p>
                    Don't have an account? <Link href="/signup" className="underline">Sign Up</Link>
                </p>
            </div>
        </form>
    );
}
