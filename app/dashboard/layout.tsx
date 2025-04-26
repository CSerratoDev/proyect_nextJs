'use client'
import Header from "./_components/header";
import Sidebar from "./_components/_sidebar/sidebar";
import { usePathname } from "next/navigation";

export default function LayoutDashboard({
    children, locations
}:  Readonly<{ 
    children: React.ReactNode;
    locations: React.ReactNode; 
}>) {
    const path = usePathname();
    return (
        <div className="bg-gray-200 text-black">
            <Header/>
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}
                {path === "/dashboard" ? locations : null}
            </div>
        </div>
    );
}