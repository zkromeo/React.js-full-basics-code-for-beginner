import React,{Component} from "react";

export default class Class extends Component{
    constructor(){
        super();
            this.state={
                data:("Romeo")
    }
        
    }
    fun(){
        alert("Welcome bro")
        this.setState({data:"Khan"})
    }
    render(){
        return(
            <div className="App">
                <h1>Welcome bro</h1>
                <h2>{this.state.data}</h2> 
                <button onClick={()=>{this.fun()}}>Click me</button></div>
        )

        
    }

}