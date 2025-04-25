import { ReactNode } from "react";
import ManagerCard from "./_components/ManagerCard";

export default function LayoutManagers({ children, count }: { children : ReactNode, count: ReactNode }) {
    return (
        <>
            <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-y-auto overflow-hidden">
                <ManagerCard/>
            </div>    
            <div className="w-7/12">{children}{count}</div>
        </>
    )
}