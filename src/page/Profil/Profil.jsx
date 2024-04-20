import React from 'react';
import './Profil.scss';
import { Link } from 'react-router-dom';

export default function Profil() {
  return (
    <div className='container-profil'>
        <div className='profil-box'>
            <div className='div-img'>

                <img className='img-profil' src="./melvaz.png" alt="" />
            </div>
            <h2>Profil details</h2>
            <h3>Name : Melani Vasquez</h3>
            {/* <p>Age : 35 yo</p> */}
            <p>Email : vaz@gmail.com</p>
            <Link className='delete-account-btn'>Supprimer mon compte </Link>
        </div>
    </div>
  )
}
