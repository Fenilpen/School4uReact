import { useState } from "react"


function Inputbox ({onChange}) {

const [color,setColor] = useState(null)


    return(
        <>
        <input onChange={onChange} type="text" />
        
        </>
    )
}


export {Inputbox}
