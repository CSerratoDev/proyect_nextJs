import { CiCoffeeCup } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { LuTruck, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar(){
    return(
        <nav className="w-1/12 h-[90vh] bg-[#252525] flex flex-col items-center justify-center gap-10">
            <NavItem icon={
                <GoHomeFill className="text-4xl text-white"/>}
                path="/dashboard"
            />
            <NavItem icon= {
                <LuTruck className="text-4xl text-white"/>}
                path="/dashboard/providers"
            />
            <NavItem icon={  
                <CiCoffeeCup className="text-4xl text-white"/>}
                path="/dashboard/products"
            />
            <NavItem icon={
                <LuUser className="text-4xl text-white"/>}
                path="/dashboard/managers"
            />
            <NavItem icon={
                <LuUsers className="text-4xl text-white"/>}
                path="/dashboard/employees"
            />
        </nav>
    )
}