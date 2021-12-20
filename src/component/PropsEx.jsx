import React from "react";

// function Greet(){
//     return <h1>Hello world</h1>
// }

const PropsEx = (props) => {
    console.log(props);
    return (
    <div>
        <h1>Hello {props.name}</h1> 
        <h1>Hello {props.heroName}</h1>
        <h1>Children : {props.children}</h1>
        <br/>
    </div>
    )
    
}

export default PropsEx;