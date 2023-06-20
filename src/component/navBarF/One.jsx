import { AiOutlineMenu, AiOutlineHome, AiOutlineProject,AiOutlineMail} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";


let One = () => {
    let content = [
        {
            child: "Home",
            Icon:<AiOutlineHome/>
        },
        {
            child: "Work",
            Icon:<GrProjects/>
        },
        {
            child: "Projects",
            Icon:<AiOutlineProject/>
        },
        {
            child: "Resume",
            Icon:<BsPerson/>
        },
        {
            child: "Contact",
            Icon:<AiOutlineMail/>
        },
   ]
let child = content.map((E) => {
    return (
       
        < >
            <a key={E} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                {E.Icon}
                <span className="pl-4">{ E.child }</span>
                </a>
        </>
    )
})
    return (
        <>
            <div className="fixed w-full h-sceen bg-white/90 flex flex-col justify-center items-center z-20">
                {child}
            </div>
     
        </>
    )
}

export default One;