import React from 'react';
import './MyBubbleDiscussion.scss';
import axios from 'axios';



// message = un post, arrayData =  tableau de tous les post, item = id du post sur lequel j'ai cliqué, setArraydate = pour affecter le nouveau tableau 
export default function MyBubbleDiscussion({message, arrayData, item,setArrayData}) {
// pour recupérer l'id de notre post, item est message._id qu'on a grace a notre boucle dans chatRoom


    const handleDeleteMessage = (item)=>{
        console.log('on a cliquer sur le bouton' + item)
        if(item){
            axios.delete(`http://localhost:5002/post/${item}` )
            .then(res => console.log(res));
            // retour le tableau sans mettre celui sur lequel j'ai cliqué 
            setArrayData(arrayData.filter((messageCurrent) => messageCurrent._id !== item) ) 
        }else{
            console.log("l'id n'a pas été identifié")
        }



        

        }
  return (
    <div key={message._id}  id={message._id} className='conv-type-main-user'>
        <div className='title-div'>
            <h2>{message.firstname} {message.lastname}</h2>
            <i onClick={()=>handleDeleteMessage(item)}  className="fa-solid fa-trash"></i>
        </div>
            <p>{message.message}</p>
    </div>
  )
}
