import React,{Component} from "react";

export default class Ist extends Component{
    render(){
        console.log("render",this.props)
        return(
<div><h1>Welcome {this.props.name}</h1></div>
        )
    }

}