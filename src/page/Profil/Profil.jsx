import React, { useState } from 'react';
import './Profil.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Profil() {

  const user = useSelector(state => state.user.userInfo);
  const [firstnameEdited, setFirstnameEdited ] = useState('')
  const [lastnameEdited, setLastnameEdited ] = useState('')
  const { id } = useParams();
  console.log(id); 

  const handleSubmitEdited = (e)=>{
    e.preventDefault();
    
    console.log(firstnameEdited)
    console.log(lastnameEdited)

    axios.put(`http://localhost:5002/user/${id}`,{
      firstName:  firstnameEdited,
      lastName: lastnameEdited,
      // email:email,
      // password:password,

    }).then(result => {
      console.log(result)
})


  }

  return (
    <div className='container-profil'>
        <div className='profil-box'>
            <div className='div-img'>

                {/* <img className='img-profil' src="./Profile-PNG-Image.png" alt="" /> */}
            </div>
            <h2>Profil details</h2>
   
    <h3>Fisrtname : {user.firstname} </h3>
    <h3>LastName : {user.lastname}</h3>

    <form onSubmit={handleSubmitEdited}>
    <input type="text" defaultValue={user.firstname}  onChange={(e)=>setFirstnameEdited(e.target.value)} />

    <input type="text" defaultValue={user.lastname}  onChange={(e)=>setLastnameEdited(e.target.value)} />
    <input type="submit" defaultValue="valider"/>
    </form>
            
            {/* <p>Age : 35 yo</p> */}
            <p>Email : {user.email} </p>
            
            <Link className='delete-account-btn'>Supprimer mon compte </Link>
        </div>
    </div>
  )
}
