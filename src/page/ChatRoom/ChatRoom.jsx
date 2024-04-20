import React, { useEffect, useState } from 'react';
import './ChatRoom.scss';
import axios from 'axios';

export default function ChatRoom() {
    const  [arrayData,setArrayData ] =useState([])

    useEffect(()=>{
         axios.get('http://localhost:5002/post').then((res)=> setArrayData(res.data))
    },[])
   
console.log(arrayData);
console.log(window.scrollY)
console.log(window.innerHeight)

const[message,setMessage]= useState('')

const handleSubmit = (e)=>{
e.preventDefault();
console.log(message)

let boxchat = document.querySelector('.chat-box');
boxchat.innerHTML += `
<div class='conv-type-main-user'>
                <h2>Cedric</h2>
                <p>${message}</p>
            </div>
` 
document.getElementById('form').reset();
// on vide la variable message sinon elle gardera en mémoire le dernier message 
setMessage('')
// a chaque message on est mis au pied de la conversation 
document.getElementById('chatbox').scrollTo(0, document.body.scrollHeight);

// window.addEventListener('scoll',() =>{

// })
}


  return (
    <div className='container-chatroom'>
        <div className='body-chat'>

       
        <div className='header-chat'>
            <h4>Chatroom</h4>
        </div>
        <div className='chat-box' id='chatbox'>
            {
               arrayData.map( (message)=>{
               
               return <div key={message._id} className='conv-type'>
                <h2>{message.author}</h2>
                <p>{message.message}</p>
            </div>
               }) 

            }


                
        </div>
        <form id='form' onSubmit={handleSubmit} className='div-submit'>

            <input className='input-text' placeholder='Message' onInput={(e)=>setMessage(e.target.value)} type="text" />
            <input className='input-btn'  type="submit" value="Envoyer"/>
        </form>

        </div>
    </div>
  )
}
