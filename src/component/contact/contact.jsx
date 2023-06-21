let Contact = () => {
    return (
        <>
            <div id="Contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
       <h1 className="font-bold py-4 mb-5 text-4xl text-center text-[blue] ">Contact</h1>
                <form  action="https://getform.io/f/13ee0da2-c2ae-437c-a451-22c90dffa3fc" method="POST" encType="multipart/form-data" >
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col ">
                            <label className="uppercase text-sm py-2"  htmlFor="">Name</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                        </div>    
                        <div className="flex flex-col">
                            <label  className="uppercase text-sm py-2"  htmlFor="">Phone</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="number"/>
                        </div>       
                    </div>
                    {/** */}
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2"  >Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email"  />    
                    </div>
                    <div className="flex flex-col py-2">
                        <label  className="uppercase text-sm py-2"  >Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject"  />    
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2"  >Message</label>
                        <textarea className="border-2 rouned-lg p-3 border-gray-300" rows={ 10 } name="message">
                        
                        </textarea>    
                    </div>
                    <button className="bg-[blue] text-gray-100 mt-4 w-full p-4 rouned-lg ">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact