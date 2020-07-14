import React, {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';

const SendMessage = (props) => {
    const [messages, setMessages] = useState([])
    const [textInput, settextInput] = useState("")
    const handleTextChange = ({target}) =>{
        settextInput(target.value)
    }
    const handleMessage = () =>{
        setMessages(messages => [...messages, textInput])
        props.getMessages(messages)
    }
    useEffect(() => {
        if(props.updatedList)
        {
            setMessages(messages=>[...props.updatedList])
        }
      }, [props.updatedList]);
    
    const Button = styled.button `
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border-radius: 3px;
    `;
    return (
        <Fragment>
            <input placeholder="Enter a message" value={textInput} 
            onChange={(e)=>handleTextChange(e)}/>
            <Button onClick={handleMessage}>
                Send 
            </Button>
        </Fragment>
    );
}
export default SendMessage