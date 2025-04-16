import Image from "next/image";

export default function Header (){
    return (
        <div className="w-screen h-[10vh] bg-[#252525] flex flex-row items-center px-10">
            <Image
                src="/store.svg" 
                width={50} 
                height={0} 
                alt="logo"
                draggable={false}
            />
        </div>
    )
}
