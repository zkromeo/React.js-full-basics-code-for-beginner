import React,{useState}from "react";

export default function Update(){
    const[name ,setName]=useState("Romi")
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>{setName("Khan")}}>Update</button>
        </div>
    )
}