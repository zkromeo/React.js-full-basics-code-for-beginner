import React ,{useState} from "react";

export default function Form (){
    const[name,setName]=useState("")
    const[movies,setMovies]=useState(false)
    const[tnc,setTnc]=useState("")
function getFormData(event){
event.preventDefault()
console.log(name,movies,tnc)
}
    return(
        <div>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/><br  /> <br />
                <select onChange={(e)=>{setMovies(e.target.value)}}>
                    <option>Select Option</option>
                    <option>React</option>
                    <option>jScript</option>
                </select><br  /> <br />
                <input type="checkbox" onChange={(e)=>{setTnc(e.target.checked)}}/> <span>Accept term and Condition</span><br  /> <br />
                <button type="submit" >Submit</button>

            </form>
        </div>
    )
}