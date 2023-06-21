let Data = () => {
   let items= [
        {
            src: "./Work1.png",
           name: "Spotify Clone ",
           tech: "React Js & Mui",
           gitHub:"/"
        },
        {
            src: "./work2.png",
            name: "YpuTube Clone ",
            tech: "ReactJs & Mui",
            gitHub:"/"
           
        },
        {
            src: "./work3.png",
            name: "Gym App",
            tech: "ReactJs & Mui",
            gitHub:"/"
        },
        {
            src: "./work4.png",
            name: "DashBoard ",
            tech: "ReactJs & Mui",
            gitHub:"/"
        },
      
    ]
    let item = items.map((e) => {
        return (
            <>
                <div className="relative flex items-center justify-center h-auto w-full  group  hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
                   >
                <img  className="rounded-xl group-hover:opacity-10 shadow-2xl" src={ e.src } alt="/" />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl font-bold trtacking-wider text-center text-white " >{ e.name }</h3>
                        <p className="pb-4 font-bold pt-2 text-white text-center ">{ e.tech}</p>
                        <a href={e.gitHub}>
                            <p className="text-center p-3 rounded-ld bg-white text-gary-700 font-bold  cursor-pointer text-lg rounded-lg">More Info</p>
                        </a>
                </div>
                </div>
            </>
     )
 })

    return (
        <>
    {item}
        </>
    )
}

export default Data;