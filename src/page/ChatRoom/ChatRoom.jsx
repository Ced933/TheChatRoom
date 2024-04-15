import React, { useEffect, useState } from 'react';
import './ChatRoom.scss';

export default function ChatRoom() {
    const  [arrayData,setArrayData ] =useState([])

    useEffect(()=>{
         fetch('http://localhost:5002/post').then((res)=>res.json()).then(data => setArrayData (data))
    },[])
 
console.log(arrayData);

const[message,setMessage]= useState('')

const handleSubmit = (e)=>{
e.preventDefault();
console.log(message)

}


  return (
    <div className='container-chatroom'>
        <div className='body-chat'>

       
        <div className='header-chat'>
            <h4>Chatroom</h4>
        </div>
        <div className='chat-box'>
            {
               arrayData.map( (message)=>{
               
               return <div key={message._id} className='conv-type'>
                <h2>{message.author}</h2>
                <p>{message.message}</p>
            </div>
               }) 

            }
                
        </div>
        <form onSubmit={handleSubmit} className='div-submit'>

            <input className='input-text' onInput={(e)=>setMessage(e.target.value)} type="text" />
            <input className='input-btn'  type="submit" value="Envoyer"/>
        </form>

        </div>
    </div>
  )
}
