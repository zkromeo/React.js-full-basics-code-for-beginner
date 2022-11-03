import React from "react";

function CompProps(props){
    return(
<div><h2>Welcome</h2>
<button onClick={props.data}>Alert</button>
</div>

    )
}
export default CompProps;