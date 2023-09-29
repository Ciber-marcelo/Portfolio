import Image from "next/image";
import logo from "../../../public/M.svg"
import Link from "next/link";

export function Header() {
   return(
      <div className="container flex items-center justify-between h-24">
         <Link href="/">
            <Image 
               className="bg-green-500 rounded-2xl"
               width={58}
               height={58}
               src={logo}
               alt="Logo Marcelo"
            />
         </Link>

         <nav className="flex items-center gap-4 sm:gap-10 font-mono">
            <Link href="/">
               <span className="color1"># </span>
               Home
            </Link>
            <Link href="/">
               <span className="color1"># </span>
               Projetos
            </Link>
         </nav>
      </div>
   )
}