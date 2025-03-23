"use client"
import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function Login(){
    return (
        <div className="bg-red-400 px-10 py-2 rounded-md">
        <p className="text-2xl my-4">Login<span></span></p>
        <div className="flex flex-col gap-2 items-center">
            <Input label="Email" type="email" isRequired={true} size="sm" name="email"/>
            <Input label="Password" type="password" isRequired={true} size="sm" name="password"/>
            </div>
        <div className="flex flex-col items-center gap-2 py-3">
            <Button color="primary">Signup</Button>
            <p>
                Don't have an account? <Link href="/signup" className="underline">Sign Up</Link>
            </p>
        </div>
    </div>
    );
}