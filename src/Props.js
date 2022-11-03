import React from "react";

export default function About(Props){
return(
    <div style={{backgroundColor:"skyblue" ,margin:10}}>
        <h1>welcome {Props.Name} </h1>
        <h2>Email: {Props.Email}</h2>
        <h4>Adress:{Props.other.address}</h4>
    </div>
)
}