import {React ,useState} from "react"


function Users() {
  const [data,setData]=useState(0);
  function Update(){
    setData(data+1)
  }

    return (
      <div className="App">
      <h1>Hello Users !Romeo</h1>
      <h2>
        {data}
      </h2>
      <button onClick={Update}>Click me</button>
      </div>
    );
  }
  
  export default Users;