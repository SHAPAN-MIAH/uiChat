import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const Activity = () => {
  const [transactions, setTransactions] = useState([]);

    useEffect(()=> {
        fetch('https://thawing-falls-79270.herokuapp.com/transaction')
        .then(res => res.json())
        .then(data => setTransactions(data))
    }, [])

    // const transactions = useSelector((state) => {
    //   return state.walletBalance
    // })

  return (
    <div>
      {
        !transactions.length ? <p>You have no transactions</p> : 
        transactions.map((transaction) => <TransactionHistory key={transaction.key} transaction={transaction}></TransactionHistory>)
      }
    </div>
  );
};

export default Activity;