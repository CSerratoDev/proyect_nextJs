import { CiCoffeeCup } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { LuTruck, LuUser, LuUsers } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar(){
    return(
        <nav className="fixed bottom-0 w-full bg-white flex flex-row justify-around items-center py-3 md:static md:w-auto md:h-[90vh] md:flex-col md-justify-start md:gap-10 md:px-3 md:py-3">
            <NavItem icon={<GoHomeFill className="text-4xl text-black"/>} path="/dashboard"/>
            <NavItem icon= {<LuTruck className="text-4xl text-black"/>} path="/dashboard/providers"/>
            <NavItem icon={<CiCoffeeCup className="text-4xl text-black"/>} path="/dashboard/products"/>
            <NavItem icon={<LuUser className="text-4xl text-black"/>} path="/dashboard/managers"/>
            <NavItem icon={<LuUsers className="text-4xl text-black"/>} path="/dashboard/employees"/>
        </nav>
    )
}