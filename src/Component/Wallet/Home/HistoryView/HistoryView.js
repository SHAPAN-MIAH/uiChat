import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import userIcon from "../../../../assets/images/950771.png";
import userIcon2 from "../../../../assets/images/avatar+circle+male+profile+user+icon-1320196710301016992.png";
import { useState } from 'react';


const HistoryView = (props) => {
  const {date, senderId, receiverId, amount, EstimatedGasFee, GasLimit, MaxPriorityFee, MaxFee} = props.transactionHistorys;

  const amountValue = parseFloat(amount);
  const gasFee = parseFloat(EstimatedGasFee);
  
  return (
    <>
      <div>
        <h6 style={{ fontFamily: "Rajdhani"}}>Status <span style={{ fontFamily: "Rajdhani", float: "right", fontSize: '14px', color: '#6ab2e4', cursor: 'pointer', fontWeight: '400'}}>View on block explorer</span></h6>
      </div>
      <div className='mb-4'>
        <p style={{fontFamily: "Rajdhani", color: 'rgb(18, 185, 18)', fontWeight: '500'}}>Confirmed <span style={{float: "right", fontSize: '14px', color: '#6ab2e4', cursor: 'pointer', fontWeight: '400'}}>Copy Transaction ID</span></p>
      </div>

      <div className='d-flex' style={{fontFamily: "Rajdhani", color: 'rgb(80, 80, 80)', fontWeight: '600'}}>
        <h6>From</h6>
        <h6 style={{fontFamily: "Rajdhani", float:'right', marginLeft: 'auto'}}>To</h6>
      </div>

      <div className='d-flex'>
        <div style={{fontFamily: "Rajdhani", width: "130px", display: 'flex'}}>
          <img style={{width: '20px', height: "20px", marginTop: '4px', marginRight: '10px'}} src={userIcon} alt=''/>
          <p> {senderId.toString().substring(0, 5)}.......{senderId.toString().substring(38)}</p>
        </div>

        <div style={{marginLeft: '30px'}}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        <div style={{fontFamily: "Rajdhani", width: "130px", display: 'flex', marginLeft: '30px'}}>
          <img style={{width: '20px', height: "20px", marginTop: '4px', marginRight: '10px'}} src={userIcon} alt=''/>
          <p> {receiverId.toString().substring(0, 5)}.......{receiverId.toString().substring(38)}</p>
        </div>
      </div>

      <div className='transactionDetail' style={{fontFamily: "Rajdhani", fontSize: '14px', borderBottom: '1px solid gainsboro'}}>
        <h6 style={{borderBottom: "1px solid gainsboro", marginTop: '20px', paddingBottom: '10px'}}>Transaction</h6>
        <p>Amount <span className='amount' style={{float: "right"}}>{amount} USD</span></p>
        <p>Transaction Fee <span className='gasFee' style={{float: "right"}}>{EstimatedGasFee} USD</span></p>
        
      </div>
      <div style={{ fontFamily: "Rajdhani"}}>
        <p>Total <span style={{float: "right"}}>{amountValue + gasFee} USD</span></p>
      </div>
      
    </>
  );
};

export default HistoryView;