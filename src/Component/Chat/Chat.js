import React, { useEffect, useState } from 'react';
import { user } from '../Join/Join';
import socketIO from 'socket.io-client';
import './Chat.css'
import sendIcon from '../../images/4751665.png'
import Message from '../Message/Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import timesIcon from '../../images/svg-close-icon-27.jpg'
import logo from '../../images/message-icon-png-6.png'


const ENDPOINT = 'https://uichat-wallet.herokuapp.com/';
const socket = socketIO(ENDPOINT, {transports: ['websocket']}); 

const Chat = () => {

  const [id, setId] = useState('');
  const [messages, setMessages] = useState([])
  
  const send = () => {
    const socket = socketIO(ENDPOINT, {transports: ['websocket']}); 

    const message = document.getElementById('chatInput').value;
    socket.emit('message', {message, id});
    document.getElementById('chatInput').value = '';
  }

  useEffect(() => {
    const socket = socketIO(ENDPOINT, {transports: ['websocket']}); 

    socket.on('connect', () => {
      alert('connected')
      setId(socket.id)
    })

    socket.emit('joined', {user});

    socket.on("welcome", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    })

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    })

    socket.on('leave', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    })
    // socket.on('sendMessage', (data) =>{
    //   setMessages([...messages, data]);
    //   console.log(data.user, data.message, data.id);
    // })
    return() => {
      socket.emit('disconnect');
      socket.off();
    }
    
  }, []);

  useEffect(() => {
    socket.on('sendMessage', (data) =>{
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    })
    return () =>{
      socket.off()
    }
  }, [messages])


  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'>
          <div className='logoDiv'>
            <img src={logo} alt="" />
            <h3>uiChat</h3>
          </div>
          <a href="/"><img className='closeIcon' src={timesIcon} alt="" /></a>
        </div>
        <ReactScrollToBottom className='chatBox'>
          {
            messages.map(item => <Message user={item.id===id? '': item.user} message={item.message} classes={item.id===id? 'right':'left'}/>)
          }
        </ReactScrollToBottom>
        <div className='chatInput-box'>
          <input onKeyPress={(event) => event.key === "Enter" ? send() : null} type="text" id='chatInput' />
          <button onClick={send}><img src={sendIcon} alt="Send" /></button>
        </div>
      </div>
    </div>
  );
};

export default Chat;