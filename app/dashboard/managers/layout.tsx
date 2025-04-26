import { ReactNode } from "react";
import ManagerCard from "./_components/ManagerCard";

export default function LayoutManagers({ children, count }: { children : ReactNode, count: ReactNode }) {
    return (
        <>
            <div className="bg-gray-200 w-4/12 h-[90vh] max-h-[90vh] overflow-y-auto overflow-hidden">
                <ManagerCard/>
            </div>    
            <div className="flex flex-col w-7/12 justify-center items-center gap-5">
                <div>{children}</div>
                <div>{count}</div>
            </div>
        </>
    )
}