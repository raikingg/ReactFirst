import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")

  const userData = (e) => {
    console.log(name, email, mobile)
    let data = { name, email, mobile }
    const res = axios.post("http://localhost:3000/user", data)
    alert("data has been saved in api")
  }


  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /> <br />
      <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /> <br />
      <input type="text" value={mobile} onChange={(e) => { setMobile(e.target.value) }} /> <br /> <br />
      <button type="button" onClick={userData}>Button</button>
    </div>
  );
}

export default App;
