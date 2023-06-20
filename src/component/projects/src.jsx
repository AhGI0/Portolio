let Data = () => {
   let items= [
        {
            src: "./Work1.png",
           name: "Spotify Clone ",
        },
        {
            src: "./Work1.png",
           name: "Spotify Clone ",
        },
        {
            src: "./Work1.png",
           name: "Spotify Clone ",
        },
        {
            src: "./Work1.png",
           name: "Spotify Clone ",
        },
    ]
    let item = items.map((e) => {
        return (
            <>
                <div>
                <img src={ e.src } alt="/" />
                <div>
                        <h3 style={ {
                       marginTop:"10px" 
                    }}>{ e.name}</h3>
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