"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavItemProps {
    icon: ReactNode
    path: string
}

const NavItem = ({icon, path}: NavItemProps) => {
    const pathName = usePathname();
    return(
        <Link href={path} className="w-full flex justify-center">
            <span className={pathName === path  ? "bg-purple-700 w-7/12 flex justify-center rounded-md transition-colors " : "w-auto"}>{icon}</span>
        </Link>
    )
}
export default NavItem;