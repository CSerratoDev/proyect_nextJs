import Image from "next/image";

export default function Header (){
    return (
        <div className="w-screen h-[10vh] bg-orange-200 flex flex-row items-center px-4">
            <Image 
                src="/shop.svg" 
                width={50} 
                height={0} 
                alt="logo"
                draggable={false}
            />
        </div>
    )
}
