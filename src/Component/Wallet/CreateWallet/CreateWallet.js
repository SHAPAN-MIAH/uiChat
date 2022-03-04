import React from 'react';
import CreateWalletForm from './../CreateWalletForm/CreateWalletForm';
import './CreateWallet.css'

const CreateWallet = () => {
  return (
    <div className=' createWalletContainer'>
      <div>
      <CreateWalletForm/>
      </div>
    </div>
  );
};

export default CreateWallet;