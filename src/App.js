import React,{useState} from "react"
import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Class from './Class';
import About from './Props';
import Update from "./Update"
import Input from './Input';
import Hide from './Hide';
import Form from './Form';
import Profile from './Profile';
import CompProps from './CompProps';
import Ist from "./Ist"
function App() {
  const [name,setName]=useState("Romi")
  function getData(){
    alert("welcome to props")
  }
  function Apple (){
    return(
      <div>Romeo</div>
    )
  }
  return (
    <div className="App">
    <h1>Hello my world !Romeo</h1>
    <Users />
    <Class />
    <Apple />
    <Update />
    <Input /> 
    <Hide />
    <Form /> 
    <Profile />
     <CompProps data={getData} />
    <Ist name={name} />
    <button onClick={()=>{setName("Khan")}}>Update</button>
     <About Name={"Romeo"} Email={"romeokhan@gmail.com"} other={{address:"swat" ,mobile:"2745"}} />
    <About Name={"Khan"} Email={"khan@gmail.com"} other={{address:"swat" ,mobile:"2345"}}/>
    </div>

  );
}

export default App;
