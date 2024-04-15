import React from "react";
import './Login.scss';
import { Link } from "react-router-dom";

export default function Login() {
  return (<div className="container-login">
    <h1>LOGIN</h1>
    <form>
      <input className="input-login" type="email" placeholder="Email"/>
      <input className="input-login" type="password" placeholder="Password" />
      <input className="btn-submit" type="submit" value='valider'/>
      <Link to="/register" className="btn-link">You haven't an account ?</Link>
    </form>
  </div>
  )
}
