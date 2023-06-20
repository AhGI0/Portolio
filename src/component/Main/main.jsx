import {TypeAnimation} from 'react-type-animation'
import { BsGithub,BsLinkedin,BsMedium } from "react-icons/bs";
let Main = () => {
    return (
        <div id="main">
            <img className="w-full  h-screen object-cover object-left scale-x-[-1]" src="./main.avif" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'
                       >I'm Ahmed Gibran </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'
                    >I'm a 
                    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
 2000,
       "Coder",
        2000,
        'Tech Entusiast ',
       
      ]}
      wrapper="span"
      cursor={true}
    //   speed={50}
      style={{ fontSize: '1em', paddingLeft:"5px" }}
      repeat={Infinity}
    />

                    </h2>
                    <div className=' flex justify-between pt-6 max-w-[200px] w-full'
                    
                    >
                   <a href="https://medium.com/@ahmedsaye23156" target={"_blank"}><BsMedium size={30}/> </a>
                  <a href="https://www.linkedin.com/in/ahmed-gibran-a67487228/" target={"_blank"}>    <BsLinkedin size={30}/></a>  
                        <a href="https://github.com/ahmedsayedjobran1" target={"_blank"}> <BsGithub size={30}/></a>
                    </div>
                    
</div>

            </div>
        </div>

    )
}
export default Main