import Data from './src.jsx'

let Project = () => {
    return (
        <>
            <div id='Projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
                <h1 className='text-4xl font-bold text-center text-[#001b5e]'>projects</h1>
                <p className='text-center py-8'>
                I have successfully completed several full-stack projects utilizing React, Next.js, and Firebase. These projects showcase my proficiency in building robust and scalable web applications. By leveraging the power of React, I have developed intuitive user interfaces that offer seamless user experiences. Next.js has allowed me to create dynamic and server-side rendered applications, optimizing performance and SEO. Additionally, I have integrated Firebase as a back-end solution, utilizing its real-time database, authentication, and hosting features. These projects demonstrate my ability to handle end-to-end development, ensuring secure data management and efficient deployment. </p>
                
                <div className='grid sm:grid-cols-2 gap-12'>
                    <Data/>
                </div>
         </div>
        </>
    )
}

export default Project;