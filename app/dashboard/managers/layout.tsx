import { ReactNode } from "react";
import ManagerCard from "./_components/ManagerCard";

export default function LayoutManagers({ children, count }: { children : ReactNode, count: ReactNode }) {
    return (
        <>
            <div className="flex flex-wrap justify-center py-3">
                <div className="flex flex-wrap">
                    {count}
                    {children}
                </div>
                <ManagerCard/>    
            </div>
        </>
    )
}