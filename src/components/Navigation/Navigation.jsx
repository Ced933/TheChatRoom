import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { useDispatch, useSelector } from 'react-redux';


export default function Navigation() {
  const user = useSelector( state => state.user.userInfo)
  // console.log(user)

const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch({
      type:'user/userInfo',
      payload:{
        isConnect:'no',
        id:'',
        firstname: '',
        lastname:'',
        email:'',
      }
    })
  }
  return (
    <nav className='nav-container'>
        <div className='nav'>

        <div><NavLink to='/'>ChatRoom</NavLink></div>
       
          {
            user.isConnect === 'yes' ?  ( <ul><li><NavLink to='chat'>ChatRoom</NavLink></li> <li><NavLink to='profil/:id' >Profil</NavLink></li>
            <li><NavLink onClick={handleLogout} to='/'>Logout</NavLink></li></ul>) : (<ul><li><NavLink to='/register'>Sign up</NavLink></li>
              <li><NavLink className='sign-in' to='/'>Sign In</NavLink></li></ul>)
          }  
           
            
        
        </div>
    </nav>
  )
}
