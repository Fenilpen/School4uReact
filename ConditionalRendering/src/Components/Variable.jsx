import React, { Component } from 'react'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'

const Variable = () => {

    const option = "a"
    const content = <h1>hello how are you</h1>

    if(option === "a"){
        content = <ComponentA/>
    }else if (option === "b" ){
        content = <ComponentB/>
    }else if (option === "c"){
        content = <ComponentC/>
    }else {
        content = <h1>Other component</h1>
    }

    return(
        <>
        <div>{content}</div>
        </>
        
    )
}

export default App


// store JSX in a variable
// helps keep return statement clean and readable
