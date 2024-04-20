import React, { useState } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

export default function Register() {
// variable name 
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
// regex 
let checkName = /^[a-zA-Zéï\-/ ]+$/.test(firstName);
let checkLastName = /^[a-zA-Zéï\-/ ]+$/.test(lastName);
let checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
// error message 
const [errorMessageName, setErrorMessageName] = useState(false)
const [errorMessageLastName, setErrorMessageLastName] = useState(false)
const [errorEmail, setErrorEmail] = useState(false)
const [errorPassword, setErrorPassword] = useState(false)
const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)




const handleSubmit = (e)=>{
    e.preventDefault();

    // si le prenom passe pas le check ou que son prenom ne fait pas plus de 3 lettre alors false 
    if(!checkName || firstName.length < 3 ){
        setErrorMessageName(true)
        console.log('recommance')
        return false
        
    }
    else{
        console.log(firstName)
        setErrorMessageName(false)
        
    }
// --------
    if(!checkLastName || firstName.length < 2){
        setErrorMessageLastName(true)
        console.log('recommance')
        return false
    } else{
        console.log(lastName)
        setErrorMessageLastName(false)
        
    }
    // --------
    if(!checkEmail){
        setErrorEmail(true)
        console.log('recommance')
        return false
    } else{
        console.log(lastName)
        setErrorEmail(false)
        
    }

    if(password.length < 8){
        setErrorPassword(true)
        console.log('recommance')
        return false
    } else{
        console.log(lastName)
        setErrorPassword(false)
        
    }
    
    if(password !== confirmPassword){
        setErrorConfirmPassword(true)
        console.log('recommance')
        return false
    }else{
        console.log(confirmPassword)
        setErrorConfirmPassword(false)

    }

    // créer le user en base de données apres l'enregistrement 

    fetch('http://localhost:5002/user',{
        method: "POST",
        body: JSON.stringify({
            firstName: firstName ,
            lastName: lastName,
            email: email,
             password: password,
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json())
    .then((json) => console.log(json));

    // console.log(lastName)
    // console.log(email)
    // console.log(password)
    // console.log(confirmPassword)
    // effacer le fomulaire apres envoie 
    document.getElementById('form').reset();
    // réinitialiser toutes les variables 
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
}

  return (
    <div className="container-register">
        
        <h1 className='title-register'>REGISTER</h1>
        <form id='form' onSubmit={handleSubmit} className='form-register'>
            <input className="input-login" onInput={(e)=>setFirstName(e.target.value)} type="text" placeholder="First name"/>
            {
                errorMessageName ? <p className='error-message'>Le prenom doit contenir plus de 3 caractères sans caractère spéciaux</p> :null
            }
            <input className="input-login" onInput={(e)=>setLastName(e.target.value)} type="text" placeholder="Last name"/>
            {
                errorMessageLastName ? <p className='error-message'>Le nom doit contenir plus de 3 caractères sans caractère spéciaux</p> :null
            }
            <input className="input-login" onInput={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            {
                errorEmail ? <p className='error-message'>Ceci n'est pas un mail</p> :null
            }
            <input className="input-login" onInput={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            {
                errorPassword ? <p className='error-message'>Le mot de passe doit contenir au moins 8 caractères</p> :null
            }
            <input className="input-login" onInput={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
            {
                errorConfirmPassword ? <p className='error-message'>Cela ne correspond au mot de passe</p> :null
            }
            <input className="btn-submit" type="submit" value='valider'/>
            <Link to="/" className="btn-link">You have an account ?</Link>
        </form>
  </div>
  )
}
