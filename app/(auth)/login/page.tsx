"use client";
import { Button, Input} from "@heroui/react";
import Link from "next/link";
import { API_URL } from "../../../constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [submit, setSubmit] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        setSubmit(true);
        e.preventDefault();
        const formData = new FormData(e.target);
        const authData = {
            userEmail : formData.get("userEmail") as string,
            userPassword : formData.get("userPassword") as string,
        }
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(authData),
                credentials: "include",
              });              
            if (response.status === 201) router.push("/dashboard");
                setSubmit(false)
            } catch (error) {
                setSubmit(false);
        }
        return;
    }

    return (
        <form className="bg-[#252525] px-10 py-5 rounded-md" onSubmit={handleSubmit}>
            <p className="text-white text-2xl my-4">Login</p>
            <div className="flex flex-col gap-2 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired size="sm" />
                <Input label="Password" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2 py-3">
                <Button className="bg-[#B2183A] text-white" variant="shadow"  type="submit" disabled={submit}>
                    {submit ? "Enviando..." : "Login"}
                </Button>
                <p>Don't have an account? <Link href="/signup" className="underline text-white">Sign Up</Link></p>
            </div>
        </form>
    );
}
