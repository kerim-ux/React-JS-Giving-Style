import React,{useState} from "react";
import "./App016.css"

function App016() {
    const[key,setKey]=useState("")
    const handleKeyDown=(event)=>{
        setKey(event.key)
    }
    return ( 
        <div className="App animate">
            <h1>Welcome</h1>
            {key&&<h2>Pressed key:{key}</h2>}
            <input className="inp" type="text" onKeyDown={handleKeyDown} placeholder='Press here'></input>
        </div>

     );
}

export default App016;