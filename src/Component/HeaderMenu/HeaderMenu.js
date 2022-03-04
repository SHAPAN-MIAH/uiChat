import React from 'react';
import walletIcon from '../../images/Wallet-icon.png'
import './HeaderMenu.css'

const HeaderMenu = () => {
  return (
    <div className='mt-5'>
      <div class="">
        <a href="/createWallet">
          <button class=" menuBtn" type="button">
            <img src={walletIcon} alt=""/>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeaderMenu;