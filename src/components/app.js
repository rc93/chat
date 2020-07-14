import React, { Component } from 'react';
import DisplayMessage from './displayMessage'
import SendMessage from './sendMessage'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            messageList:[],
            messageIndex:null
        }
    }
    getMessageList = (messageList) =>{
       this.setState({messageList})
    }
    deleteExistingMessage = (updatedList) =>{
       this.setState({messageIndex: updatedList})
    }
    render() {
        const {messageList, messageIndex} = this.state
        return (
            <div>
                <SendMessage getMessages={this.getMessageList} updatedList={messageIndex}/>
                <DisplayMessage messageList={messageList} deleteExistingMessage={this.deleteExistingMessage}/>
            </div>
        );
    }
}

export default App;