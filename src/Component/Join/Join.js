import React, { useState } from 'react';
import './join.css'
import logo from '../../images/message-icon-png-6.png'
import {Link} from "react-router-dom";
import HeaderMenu from './../HeaderMenu/HeaderMenu';

let user;
const Join = () => {
  const sendUser = () => {
    user = document.getElementById('join').value;
    document.getElementById('join').value = '';
  }

  const [name, setName] = useState('');

  return (
    <div className='joinPage'>
      <div className='join-container'>
        <img src={logo} alt="" />
        <h1>uiChat</h1>
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Your Name' id='join' />
        <Link onClick={(event) => !name ? event.preventDefault():null} to='/chat'>
        <button onClick={sendUser} type='submit'>Login</button>
        </Link>
      </div>
      <div className='menuDiv'>
      <HeaderMenu/>
      </div>
    </div>
  );
};

export default Join;
export {user}