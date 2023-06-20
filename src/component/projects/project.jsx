import Data from './src.jsx'

let Project = () => {
    return (
        <>
            <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
                <h1 className='text-4xl font-bold text-center text-[#001b5e]'>projects</h1>
                <p className='text-center py-8'>
                    The challenges I faced while creating my project pushed me to think critically and seek creative solutions. <br /> </p>
                
                <div className='grid sm:grid-cols-3 gap-10'>
                    <Data/>
                </div>
         </div>
        </>
    )
}

export default Project;