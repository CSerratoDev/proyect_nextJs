import Image from "next/image";

export default function Header (){
    return (
        <div className="w-screen h-20 bg-[#252525] flex flex-row justify-center items-center px-10">
            <Image
                src="/store.svg" 
                width={40} 
                height={40} 
                alt="logo"
                draggable={false}
                loading="lazy"
            />
        </div>
    )
}
