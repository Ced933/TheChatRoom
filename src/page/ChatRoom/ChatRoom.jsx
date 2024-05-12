import React, { useEffect, useState } from 'react';
import './ChatRoom.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BubbleDiscussion from '../../components/BubbleDiscussion/BubbleDiscussion';
import MyBubbleDiscussion from '../../components/MyBubbleDiscussion/MyBubbleDiscussion';
import { io } from "socket.io-client";



const socket = io.connect("http://localhost:5002");
export default function ChatRoom() {



    
    const  [arrayData,setArrayData ] =useState([])
    const user = useSelector(state => state.user.userInfo)
    // const [keyPost, setKeyPost] = useState('')
    // console.log(keyPost);
    
    // a chaque fois que je recois un message j'ai une alerte 
    


// console.log(arrayData);
// console.log(window.scrollY)
// console.log(window.innerHeight)

const[message,setMessage]= useState('');
const[messageRecieve,setMessageRecieve]= useState('')
let firstname = user.firstname; 
let lastname =  user.lastname;

console.log(messageRecieve)
useEffect(()=>{
    const getMessage = async ()=>{
       await axios.get('http://localhost:5002/post').then((res)=> setArrayData(res.data))

    }
    getMessage();
socket.on("recieve_message", (data) =>{
    setMessageRecieve(data.message);
    // si on ne met pas cette ligne le socket oi va se jouer plusieur fois 
    return ()=> socket?.off('recieve_message')
   
})
   },[socket])

const handleSubmit = (e)=>{

e.preventDefault();

if(message.length <1){
    // si l'input est vide alors on envoie rien 
    return false 
}else{

    console.log(message)
    // l'element dans lequel on va faire apparaitre le chat
    let boxchat = document.querySelector('.chat-box');
    // la création de la html css de la boite de dialogue 
    boxchat.innerHTML += `
    <div class='conv-type-main-user'>
        <div class='title-div'>
        <h2>${user.firstname} ${user.lastname}</h2>
        <i onClick={handleDeleteMessage} class="fa-solid fa-trash"></i>
        </div>
        <p>${message}</p>
    </div>
    ` 
    // on reset le fomulaire 
    document.getElementById('form').reset();
    // on vide la variable message sinon elle gardera en mémoire le dernier message 
    setMessage('')
    // a chaque message on est mis au pied de la conversation 
    document.getElementById('chatbox').scrollTo(0, document.body.scrollHeight);
    // on crée le message dans la base de donnée 
    axios.post('http://localhost:5002/post', {message,firstname,lastname}).then(result => {
            console.log(result)
    })
    socket.emit("send_message",{message:message})
    
}

}


  return (
    <div className='container-chatroom'>
        <div className='body-chat'>

       
        <div className='header-chat'>
            <h4>Chatroom</h4>
        </div>
        <div className='chat-box' id='chatbox'>

            {
               arrayData.map( (message,index)=>{
                // si dans la conversation on retouve les message de ce compte alors ils se mettent à droite en vert 
               if(user.firstname === message.firstname && user.lastname === message.lastname){
                return <MyBubbleDiscussion key={index} setArrayData={setArrayData} item={message._id} arrayData={arrayData} message={message} />
               }
            //    else if (messageRecieve !== ''){
            //    console.log('new message')
            //    }
               else{
               return <BubbleDiscussion key={index}  message={message}  />
               }
               }) 

            }

            {/* {
                messageRecieve  ==! '' ? <BubbleDiscussion  message={messageRecieve} /> : null
            } */}


                
        </div>
        <form id='form' onSubmit={handleSubmit} className='div-submit'>

            <input className='input-text' placeholder='Message' onInput={(e)=>setMessage(e.target.value)} type="text" />
            {/* <input className='input-btn'  type="submit" value="Envoyer"/> */}
           {
            message.length < 1 ? <button className='input-submit-not-allow'><i className="fa-solid fa-paper-plane"></i></button> :  <button className='input-btn'><i className="fa-solid fa-paper-plane"></i></button>
           } 
        </form>

        </div>
    </div>
  )
}
