import React from 'react';
import './BubbleDiscussion.scss'

export default function BubbleDiscussion({message}) {
  return (
    <div key={message._id} className='conv-type'>
        <div className='title-div'>
            <h2>{message.firstname} {message.lastname}</h2>
            {/* <i onClick={handleDeleteMessage} className="fa-solid fa-trash"></i> */}
        </div>
        <p>{message.message}</p>
    </div>
  )
}
