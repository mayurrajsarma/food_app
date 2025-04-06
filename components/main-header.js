import Link from "next/link";
import logoImg from '../assets/logo.png' ;
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {

    

    return (
        <header className="flex justify-between items-center px-4 py-8 md:px-[10%]">
            <Link  className="flex items-center gap-8 font-bold text-[#ddd6cb] uppercase tracking-wider text-2xl" href="/">
                <Image priority className="w-20 h-20 object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]" src={logoImg} alt="logo" />
                NextLevel Food
            </Link>
            <NavLink/>
            
        </header>
    )
}