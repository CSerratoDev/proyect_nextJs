import Header from "./_components/header";
import Sidebar from "./_components/_sidebar/sidebar";

export default function LayoutDashboard({
    children, locations
}:  Readonly<{ 
    children: React.ReactNode;
    locations: React.ReactNode; 
}>) {
    return (
        <div className="bg-orange-50 text-black">
            <Header/>
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}
                {locations}
            </div>
        </div>
    );
}