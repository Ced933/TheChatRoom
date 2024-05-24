import React, { useState } from 'react';
import './Profil.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function Profil() {

  const user = useSelector(state => state.user.userInfo);
  console.log(user.firstname)
  const [firstnameEdited, setFirstnameEdited ] = useState('')
  const [lastnameEdited, setLastnameEdited ] = useState('')
  const [editProfil, setEditProfil] = useState(false);
console.log(editProfil)
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id); 

  const handleSubmitEdited = (e)=>{
    e.preventDefault();

    if(firstnameEdited || lastnameEdited ){
      

    axios.put(`http://localhost:5002/user/${id}`,{
      firstName:  firstnameEdited ? firstnameEdited : user.firstname ,
      lastName: lastnameEdited ? lastnameEdited : user.lastname,
      // email:email,
      // password:password,

    }).then(result => {
      console.log(result)
})

// on change le nom dans le store aussi 
dispatch({
  type:'user/userInfo',
  payload:{
    isConnect:'yes',
    id:user._id,
    firstname: firstnameEdited ? firstnameEdited : user.firstname,
    lastname: lastnameEdited ? lastnameEdited : user.lastname,
    email: user.email,
  }
})
} else{
  console.log("ni le nom ni le prenom n'ont été changé")
  return false 
  
}

  }

const handleImage = (e)=>{
  e.preventDefault();
  
  let path = e.target[0].value;
  console.log(path)
  if( path.slice(0,12) === "C:\\fakepath\\"){

    console.log(path.slice(12))
  }else{
    console.log('il y pas de path ')
  }
  // console.log(path.slice(0,12))
  // function nameOfFile(path){
    

  // }
  
  
}
  
  return (
    <div className='container-profil'>
        <div className='profil-box'>
            {/* <div className='div-img'> */}

                {/* <img className='img-profil' src="./Profile-PNG-Image.png" alt="" /> */}
            {/* </div> */}
            <h2>Profil details</h2>
            <div className='describe-profil'>

           
            <div>

   
            <h3>Fisrt name : {user.firstname} </h3>
            <h3>Last name : {user.lastname}</h3>

           {
            editProfil ? null : <button onClick={()=>setEditProfil((prev) => !prev)}>Edit profil</button>
           } 
           
            
            {/* <p>Age : 35 yo</p> */}
            <p>Email : {user.email} </p>
            <form onSubmit={handleImage}>
                <input type="file" id='image' name='image' />
                <input type="submit" defaultValue='envoyer'/>

            </form>
            
            <Link className='delete-account-btn'>Supprimer mon compte </Link>
            
            </div>
            
            <div>
            {
              editProfil && 
              <form className='form-edited' onSubmit={handleSubmitEdited}>
              <input className='input-edited' type="text" defaultValue={user.firstname}  onChange={(e)=>setFirstnameEdited(e.target.value)} />

              <input className='input-edited' type="text" defaultValue={user.lastname}  onChange={(e)=>setLastnameEdited(e.target.value)} />
              <input className='btn-edited' type="submit" defaultValue="valider"/>
            
             <button onClick={()=>setEditProfil(false)}>Cancel</button>
            </form>
             } 
            </div>
            </div>



        </div>
    </div>
  )
}
