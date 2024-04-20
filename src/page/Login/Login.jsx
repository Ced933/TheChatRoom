import React, { useState } from "react";
import './Login.scss';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  // freezc@gmail.com 667ekipe 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
axios.defaults.withCredentials =true;

// const usertoken = req.headers.authorization;
// const tokenSplit = usertoken.split(" ");
// const decoded = jwt.verify(tokenSplit[1], "secret-key");
// console.log(decoded);
console.log(document.cookie);
  const handleSubmitLogin = (e)=>{
    e.preventDefault(e)
    console.log(email)
    console.log(password)
    axios.post('http://localhost:5002/login', {email,password})
    .then(result => {
      console.log(result)

      if(result.data.status === "success"){
        let id = result.data.user._id;
        navigate(`/profil/${id}`)
      }
    })
  }
  return (<div className="container-login">
    <h1>LOGIN</h1>
    <form onSubmit={handleSubmitLogin}>
    {/* onInput={(e)=>setEmail(e.target.value)} onInput={(e)=>setPassword(e.target.value)} */}
      <input className="input-login" onInput={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
      <input className="input-login"  onInput={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      <input className="btn-submit" type="submit" value='valider'/>
      <Link to="/register" className="btn-link">You haven't an account ?</Link>
    </form>
  </div>
  )
}
