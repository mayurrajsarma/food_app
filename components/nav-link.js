'use client' ;
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
    const path = usePathname() ;
    return (
        <nav className="">
                <ul className="flex gap-6 text-xl font-bold text-[#ddd6cb]">
                    <li><Link href="/meals" className={`px-4 py-2 rounded transition 
                            ${path === '/meals' 
                            ? 'bg-gradient-to-r from-[#ff8a05] to-[#f9b331] text-transparent bg-clip-text' 
                            : 'hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent hover:bg-clip-text'}
                        `}>Browse Meals</Link>
                    </li>
                    <li><Link href="/community" className={`px-4 py-2 rounded transition 
                            ${path === '/community' 
                            ? 'bg-gradient-to-r from-[#ff8a05] to-[#f9b331] text-transparent bg-clip-text' 
                            : 'hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent hover:bg-clip-text '}
                        `}>Foodies Community</Link></li>
                </ul>
            </nav>
    )
}