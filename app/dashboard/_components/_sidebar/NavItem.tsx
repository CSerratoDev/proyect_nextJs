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
            <span className={pathName === path  ? "bg-[#f31260] w-10/12 flex justify-center rounded-md transition-colors " : "w-10/12"}>{icon}</span>
        </Link>
    )
}
export default NavItem;