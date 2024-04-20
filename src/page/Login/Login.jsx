import React, { useEffect, useState } from "react";
import './Login.scss';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Login() {
  // freezc@gmail.com 667ekipe 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const [arrayDataUser, setArrayDataUser] = useState([])
  const dispatch = useDispatch();
// axios.defaults.withCredentials =true;
const [passwordError, setPasswordError] = useState(false)

let checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
useEffect(()=>{
  axios.get('http://localhost:5002/user').then((res)=> setArrayDataUser(res.data))
},[])
let userFind = arrayDataUser.filter(user => user.email.includes(email))
// console.log(userFind[0].email);
  const handleSubmitLogin = async (e)=>{
    e.preventDefault(e)
    console.log(email)
    console.log(password)
// si aucun email ne correspond au mail auquel je suis entrain de tapé dans l'input alors on affiche l'error 
    if(userFind.length < 1){

      setPasswordError(true)
    }
else if(email === userFind[0].email && password === userFind[0].password  ){
  setPasswordError(false)
  await axios.post('http://localhost:5002/login', {email,password})
  .then(result => {
    console.log(result)
    if(result.data.status === "success"){
  
      dispatch({
        type:'user/userInfo',
        payload:{
          isConnect:'yes',
          id:result.data.user._id,
          firstname: result.data.user.firstname,
          lastname: result.data.user.lastname,
          email: result.data.user.email,
        }
      })
      let id = result.data.user._id;
      navigate(`/profil/${id}`)
    }
  })

}else{
setPasswordError(true)
}



   
  }
  return (<div className="container-login">
    <h1>LOGIN</h1>
    <form onSubmit={handleSubmitLogin}>
    {/* onInput={(e)=>setEmail(e.target.value)} onInput={(e)=>setPassword(e.target.value)} */}
      <input className="input-login" onInput={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
      <input className="input-login"  onInput={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
      {
        passwordError && <p>l'email ou password est incorrect</p>
      }
      <input className="btn-submit" type="submit" value='valider'/>
      <Link to="/register" className="btn-link">You haven't an account ?</Link>
    </form>
  </div>
  )
}
