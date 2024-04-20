import React from 'react';
import './Profil.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Profil() {

  const user = useSelector(state => state.user.userInfo)
  return (
    <div className='container-profil'>
        <div className='profil-box'>
            <div className='div-img'>

                {/* <img className='img-profil' src="./Profile-PNG-Image.png" alt="" /> */}
            </div>
            <h2>Profil details</h2>
            <h3>Name : {user.firstname} {user.lastname }</h3>
            {/* <p>Age : 35 yo</p> */}
            <p>Email : {user.email} </p>
            <Link className='delete-account-btn'>Supprimer mon compte </Link>
        </div>
    </div>
  )
}
