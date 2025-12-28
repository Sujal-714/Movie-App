 import { useState } from 'react';
import '.././App.css'
function Navbar(){
    const [isOpen,setIsOpen]=useState(false);
    return(
        <nav className="fixed w-full top-0 start-0 bg-white/30  backdrop-blur-xs pt-8 pb-4 z-50" >
            <div className="flex items-center justify-center">
                <div class="py-[13px] pl-4 pr-8 bg-white border border-stroke border-r-0 rounded-2xl rounded-br-none rounded-tr-none">
        <a href="/"><img src="/suit.svg"></img></a>
        </div>

        <ul className="hidden md:flex gap-x-12 px-6 py-[19.75px] bg-white border border-stroke">
            <li>
        <a  className="text-base font-poppins  font-medium " href="/">New Arrivals</a>
        </li>
        <li>
        <a  className="text-base  font-medium text-black/50" href="/">Men</a>
        </li>
        <li>
        <a  class="text-base font-poppins font-medium text-black/50" href="/">Women</a>
        </li>
        <li>
        <a  class="text-base font-poppins  font-medium text-black/50" href="/">Sales </a>
        </li>
        </ul>
        <div class="py-[18px] pl-8 pr-4 bg-white border  border-stroke border-l-0 rounded-2xl rounded-bl-none rounded-tl-none">
       <button class="bg-black/90 text-xs text-white py-1 px-[18px] rounded-lg leading-5"> Login</button>
       </div>
       <button onClick={()=>{setIsOpen(!isOpen)}} className='px-2 md:hidden' ><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>menu_line</title><g id="menu_line" fill='none'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#000000' d='M20 18a1 1 0 0 1 .117 1.993L20 20H4a1 1 0 0 1-.117-1.993L4 18zm0-7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z'/></g></svg></button>
        </div>
        {/* mobile menu */}
        <ul className={`${isOpen ? "flex flex-col items-start gap-x-12 px-6 py-[19.75px] bg-white border  border-stroke" : "hidden"} md:hidden`}>
            <li>
        <a  class="text-base font-poppins  font-medium " href="/">New Arrivals</a>
        </li>
        <li>
        <a  class="text-base  font-medium text-black/50" href="/">Men</a>
        </li>
        <li>
        <a  class="text-base font-poppins font-medium text-black/50" href="/">Women</a>
        </li>
        <li>
        <a  class="text-base font-poppins  font-medium text-black/50" href="/">Sales </a>
        </li>
        </ul>
        </nav>
    
    )
}

export default Navbar;

