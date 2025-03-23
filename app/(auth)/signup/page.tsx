"use client"
import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function Signup(){
    return (
        <div className="bg-red-400 px-10 py-2 rounded-md">
            <p className="text-2xl my-4">Register<span></span></p>
            <div className="flex flex-col gap-2 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm" name="email"/>
                <Input label="Password" type="password" isRequired={true} size="sm" name="password"/>
                <Input label="Repeat Password" type="password" isRequired={true} size="sm" name="password"/>
            </div>
            <div className="flex flex-col items-center gap-2 py-3">
                <Button color="primary">Signup</Button>
                <p>
                    Do you have an account? <Link href="/login" className="underline">log in</Link>
                </p>
            </div>
        </div>
    );
}