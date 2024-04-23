import React, { useEffect, useState } from 'react';
import './ChatRoom.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BubbleDiscussion from '../../components/BubbleDiscussion/BubbleDiscussion';
import MyBubbleDiscussion from '../../components/MyBubbleDiscussion/MyBubbleDiscussion';

export default function ChatRoom() {
    const  [arrayData,setArrayData ] =useState([])
    const user = useSelector(state => state.user.userInfo)
    // const [keyPost, setKeyPost] = useState('')
    // console.log(keyPost);
    useEffect(()=>{
         axios.get('http://localhost:5002/post').then((res)=> setArrayData(res.data))
    },[])
   



console.log(arrayData);
console.log(window.scrollY)
console.log(window.innerHeight)

const[message,setMessage]= useState('')
let firstname = user.firstname; 
let lastname =  user.lastname;



const handleSubmit = (e)=>{
e.preventDefault();


if(message.length <1){
    return false 
}else{

    console.log(message)

    let boxchat = document.querySelector('.chat-box');
    boxchat.innerHTML += `
    <div class='conv-type-main-user'>
    <div class='title-div'>
    <h2>${user.firstname} ${user.lastname}</h2>
    <i onClick={handleDeleteMessage} class="fa-solid fa-trash"></i>
</div>
                    <p>${message}</p>
                </div>
    ` 
    document.getElementById('form').reset();
    // on vide la variable message sinon elle gardera en mémoire le dernier message 
    setMessage('')
    // a chaque message on est mis au pied de la conversation 
    document.getElementById('chatbox').scrollTo(0, document.body.scrollHeight);
    
    axios.post('http://localhost:5002/post', {message,firstname,lastname}).then(result => {
    
            console.log(result)
           
    
    })
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
               else{
               return <BubbleDiscussion key={index} message={message} />
               }
               }) 

            }


                
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
