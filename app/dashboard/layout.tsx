import Header from "./_components/header";
import Sidebar from "./_components/_sidebar/sidebar";

export default function LayoutDashboard({
    children, 
}:  Readonly<{ 
    children: React.ReactNode; 
}>) {
    return (
        <div className="bg-orange-50 text-black">
            <Header/>
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}
            </div>
        </div>
    );
}