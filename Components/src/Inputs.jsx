import { useState } from "react"

function Inputbox ({onChange}) {
    
const [color,setColor] = useState(null)

// function handleChange(e){
//    setValue(e.target.value)
// }

    return(
        <>
        <input onChange={onChange} type="text" />
        
        </>
    )
}


export {Inputbox}
