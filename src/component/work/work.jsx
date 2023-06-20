import Data from './workItem.jsx'

let Work = () => {
    console.log(Data);
    return (
        <>
            <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
                <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-7">Skills and Learning Exp</h1>
                { Data.map((item, idex) => {
                    return (
                        <div key={idex}>
                            <ol className='flex flex-col md:flex-row rlative border-l border-stone-200'>
                                <li className='mb-10 ml-4'>
                                    <div style={ {
                                        position: "absolute",
                                        borderRadius: "50%",
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: "gray",
                                        marginLeft: "-1.3rem",
                                        borderColor: "white",
                                      marginTop:".3rem"
                                    
                                        
                                        
                                    }} />
                                    <p className='flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm' style={ {
                                        fontSize: "15px",
                                        lineHeight:"1.4rem"
                                    }} >  
                                        <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] '>{ item.year}</span>
                                        <span className='text-lg font-semibold text-[#001b5e]'>{ item.title}</span>
                                        <span className='my-1 text-sm font-normal leading-none mt-2  text-stone-400 '>{ item.duration}</span>
                                        <span className='text-stone-500'>{ item.details }</span>
                                    </p>
                                </li>
                        </ol>
                        </div>
                    )
                })}
    </div>
        </>
    )
}


export default Work;