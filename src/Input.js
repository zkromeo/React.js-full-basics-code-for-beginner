import React,{useState} from "react";

export default function (){
const [data,setData]=useState(null)
const [print ,setPrint]=useState(false);
    function getData(val){
console.log(val.target.value)
setData(val.target.value)
setPrint(null);
    }
    return(
        <div>
           {
            print? 
            <h1>{data}</h1>
            :null
           }
         <input type="text" onChange={getData} />  
         <button onClick={()=>{setPrint(true)}}>print </button>
        </div>
    )
}