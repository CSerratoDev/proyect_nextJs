"use client"
import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-zinc-100 w-screen h-screen overflow-hidden grid">
            <div className="place-content-center place-self-center place-items-center text-center">
                <div className="flex flex-col items-center bottom-10 relative">
                    <Image
                        src="/store.svg"
                        alt="logo"
                        width={100}
                        height={60}
                    />
                </div>
                {children}
            </div>
        </div>
    );
}