import React,{useState} from "react";

function Profile (){
const [login,setLogin]=useState()
//1,2,3
    return(
        <div>
            {login==1? <h1>welcome owner 1</h1>:login==2 ?<h2>welcome owner 2</h2>:<h3>welcome owner 3</h3>}
        </div>
    )
}
export default Profile;