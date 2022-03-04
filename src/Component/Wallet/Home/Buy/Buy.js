import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import './Buy.css';
import usd from '../../../../assets/images/usdicon.png';
import axios from 'axios';
import { useState } from 'react';


// Modal custom css
const popupStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '750px',
    height: '530px'
  },
};

const Buy = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [success, setSuccess] = useState('');
  const [newBalance, setNewBalance] = useState('');
  
  const handleBlur = (e) => {
    setNewBalance(e.target.value);
    e.target.value = ''
  }

  const submit = (e) => {
    e.preventDefault()
    const balance = {newBalance};

    axios.post('https://thawing-falls-79270.herokuapp.com/depositBalance', balance)
    .then(res => {
      setSuccess(true);
    })
  }
  
  return (
    <>
      <div className="buy-send-swap text-center">
        <div onClick={openModal} className="buy"><FontAwesomeIcon className="icons" icon={faDownload} /></div>
        <p>Deposit</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={popupStyles}
        contentLabel="Import Modal"
      >
        <div className="buy-modal-container">
          <div className="buy-modal-header d-flex">
            <div className="buy-header-title">
              <h4>Deposit Balance</h4>
              <p>To interact with decentralized applications using wallet, you'll need balance in your wallet.</p>
            </div>
            <span className="buy-modal-times-Icon" onClick={closeModal}><FontAwesomeIcon icon={faTimes} /></span>
          </div>
          <div className="buy-modal-content">
            <div class="row">
              <div className="col-md-12 d-flex justify-content-center">
                <div className="directly-deposit-ether">
                  <div className='text-center'>
                    <div className="eth-img d-flex align-items-center">
                      <img width="50px" src={usd} alt=""/>
                      <div className="eth-plus-icon">
                      <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                    <div className="eth-text">
                      <h6>Directly Deposit Balance</h6>
                      <small>If you already have some USD, the quickest way to get USD balance in your new wallet by direct deposit.</small>
                    </div>
                  </div>

                    <div className='mt-2 text-center deposit-container'>
                      <h6 className='mt-5'>Deposit your balance here</h6>
                      <form onSubmit={submit}>
                        <input onBlur={handleBlur} id='depositInput' name='balance' type="text" placeholder='Enter your balance amount'/>
                        <br/>
                        <input onBlur={handleBlur} id='depositInput' name='password' type="password" placeholder='Enter your password'/>
                        <br/>
                        <button id="ethBtn" type="submit">Deposit</button>
                      </form>
                    </div>
                    {success && <p style={{color: 'green', textAlign: 'center', fontFamily: 'Rajdhani'}}>Deposit successful</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Buy;