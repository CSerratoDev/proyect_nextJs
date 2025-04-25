import ManagerCard from "./_components/ManagerCard";

export default function LayoutManagers({ children }: { children : React.ReactNode }) {
    return (
        <>
            <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-y-auto overflow-hidden">
                <ManagerCard/>
            </div>    
            <div className="w-7/12">{children}</div>
        </>
    )
}