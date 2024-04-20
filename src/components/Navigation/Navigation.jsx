import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';


export default function Navigation() {
  return (
    <nav className='nav-container'>
        <div className='nav'>

        <div><h3>ChatRoom</h3></div>
        <ul>
            <li><NavLink to='/register'>Sign up</NavLink></li>
            <li><NavLink className='sign-in' to='/'>Sign In</NavLink></li>
            <li><NavLink to='/chat'>ChatRoom</NavLink></li>
            <li><NavLink to='/profil'>Profil</NavLink></li>
        </ul>
        </div>
    </nav>
  )
}
