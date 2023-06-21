// import { AiOutlineMenu, AiOutlineHome, AiOutlineProject,AiOutlineMail} from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { GrProjects } from "react-icons/gr";
// import { useState } from "react";
// // import One from "./One";





// let One = ({handleNav}) => {
//     let content = [
//         {
//             child: "Home",
//             Icon: <AiOutlineHome />,
//             id:"#main",
//         },
//         {
//             child: "Skills",
//             Icon: <GrProjects />,
//             id:"#skills",
//         },
//         {
//             child: "Projects",
//             Icon: <AiOutlineProject />,
//             id:"#Projects",
//         },
//         {
//             child: "Resume",
//             Icon: <BsPerson />,
//             id:"#Resume"
//         },
//         {
//             child: "Contact",
//             Icon: <AiOutlineMail />,
//             id:"#Contact",
//         },
//    ]
// let child = content.map((E) => {
//     return (
       
//         < >
//             <a onClick={handleNav} key={E} href={E.id} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
//                 {E.Icon}
//                 <span className="pl-4">{ E.child }</span>
//                 </a>
//         </>
//     )
// })
//     return (
//         <>
//             <div className="fixed md:hidden w-full h-sceen bg-white/90 flex flex-col justify-center items-center z-20">
//                 {child}
//             </div>
     
//         </>
//     )
// }


// let Nav = () => {
  

//     let [show, SetShow] = useState(false);
    
 
//     const handleNav = () => {
//         SetShow(!show);
//       };
  
  
//     return (
//         < >
//         {/**z-[99] */}
//             <AiOutlineMenu size={30} onClick={ handleNav } className="fixed cursor-pointer top-4 right-4 z-[99] md:hidden" />
//                 { show ? <One /> : '' }
               
//             <div  className="md:block hidden fixed top-[25%]  z-10"
              
//             >
//                 <div className="flex flex-col">
//                     <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
//                 <AiOutlineHome size={20}/>
//                     </a>
//                     <a href="#skills" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
//                 <GrProjects size={20}/>
//                     </a>
//                     <a href="#Projects"  title="Projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
//                 <AiOutlineProject size={20}/>
//                     </a>
//                     <a href="#Resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
//                 <BsPerson size={20}/>
//                     </a>
//                     <a href="#Contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
//                 <AiOutlineMail size={20}/>
//                     </a>
//                 </div>
//                 </div>
              
            
           
//         </>
//     )
// }

// export default Nav

import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

let One = ({ handleNav }) => {
  let content = [
    {
      child: "Home",
      Icon: <AiOutlineHome />,
      id: "#main",
    },
    {
      child: "Skills",
      Icon: <GrProjects />,
      id: "#skills",
    },
    {
      child: "Projects",
      Icon: <AiOutlineProject />,
      id: "#Projects",
    },
    {
      child: "Resume",
      Icon: <BsPerson />,
      id: "#Resume",
    },
    {
      child: "Contact",
      Icon: <AiOutlineMail />,
      id: "#Contact",
    },
  ];

  let child = content.map((E) => {
    return (
      <>
        <a
          onClick={handleNav}
          key={E.child}
          href={E.id}
          className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
          {E.Icon}
          <span className="pl-4">{E.child}</span>
        </a>
      </>
    );
  });

  return (
    <>
      <div className="fixed md:hidden w-full h-sceen bg-white/90 flex flex-col justify-center items-center z-20">
        {child}
      </div>
    </>
  );
};

let Nav = () => {
  let [show, setShow] = useState(false);

  const handleNav = () => {
    setShow(!show);
  };

  return (
    <>
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className="fixed cursor-pointer top-4 right-4 z-[99] md:hidden"
      />
      {show ? <One handleNav={handleNav} /> : ""}
          <div className="md:block hidden fixed top-[25%]  z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#skills"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#Projects"
            title="Projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#Resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#Contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;

