import { AiOutlineMenu, AiOutlineHome, AiOutlineProject,AiOutlineMail} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";
import One from "./One";




let Nav = () => {
    let [show, SetShow] = useState(false);
   
    const handleNAv = () => {
        SetShow(!show);
    }
    return (
        < >
            
            <AiOutlineMenu onClick={ handleNAv } className="absolute top-4 right-4 z-[99] md:hidden" />
                { show ? <One /> : '' }
               
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                <AiOutlineHome size={20}/>
                    </a>
                    <a href="#Work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                <GrProjects size={20}/>
                    </a>
                    <a href="#Projects"  title="Projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                <AiOutlineProject size={20}/>
                    </a>
                    <a href="#Resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                <BsPerson size={20}/>
                    </a>
                    <a href="#Contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                <AiOutlineMail size={20}/>
                    </a>
                </div>
                </div>
                
           
        </>
    )
}

export default Nav