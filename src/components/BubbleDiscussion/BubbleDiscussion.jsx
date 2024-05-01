import React from 'react';
import './BubbleDiscussion.scss'

export default function BubbleDiscussion({message}) {
  return (
    <div key={message._id} className='conv-type'>
      {/* <span className='online'></span>  */}
        <div className='title-div'>
            <h2>{message.firstname} {message.lastname}</h2>

       </div>
        <p>{message.message}</p>
    </div>
  )
}
