import { CiCoffeeCup } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { LuTruck, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar(){
    return(
        <nav className="w-1/12 h-[90vh] w-20 bg-white flex flex-col items-center justify-center gap-10">
            <NavItem icon={<GoHomeFill className="text-4xl text-black"/>}path="/dashboard"/>
            <NavItem icon= {
                <LuTruck className="text-4xl text-black"/>}
                path="/dashboard/providers"
            />
            <NavItem icon={  
                <CiCoffeeCup className="text-4xl text-black"/>}
                path="/dashboard/products"
            />
            <NavItem icon={
                <LuUser className="text-4xl text-black"/>}
                path="/dashboard/managers"
            />
            <NavItem icon={
                <LuUsers className="text-4xl text-black"/>}
                path="/dashboard/employees"
            />
        </nav>
    )
}