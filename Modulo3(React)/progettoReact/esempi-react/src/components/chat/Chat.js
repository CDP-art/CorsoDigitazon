import { useState } from 'react';
import './chat.css';
import Text from './components/text';
import User from './components/user';

export default function Chat() {

    const [messages, setMessages] = useState([])

    function newMessage(user, text) {
        let newMessageState = [...messages];
        newMessageState.push({ user, text });
        setMessages(newMessageState);
    }

    return (
        <div className="App">
            <h1>Chat</h1>
            <Text messages={messages}></Text>
            <User newMessage={newMessage}></User>
        </div>
    );
}


//https://codesandbox.io/s/relaxed-albattani-1mu9rq?file=/App.js