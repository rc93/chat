import React from 'react';
const DisplayMessage = (props) => {
    const {messageList, deleteExistingMessage} = props
    const handleDeleteMessage = (messIndex) =>{
        const list = messageList.filter((m,index)=>index !==messIndex)
        deleteExistingMessage(list)
    }
    return (
        <div>
            <ul>
                {messageList && messageList.length > 0 ? messageList.map((message,index)=>{
                    return <li key={index}>{message} <button onClick={()=>{handleDeleteMessage(index)}}>Delete</button></li>
                }) : null } 
            </ul>
        </div>
    );
}

export default DisplayMessage;