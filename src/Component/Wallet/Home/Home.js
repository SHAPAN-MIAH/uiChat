import React, { useEffect } from 'react';
import logo from '../../../images/4621583.png'
import userIcon from '../../../assets/images/950771.png'
// import ethereumIcon from '../../../assets/images/usdicon.png'
import './Home.css'
import Footer from './../Footer/Footer';
import Activity from './Activity/Activity';
import Account1 from './Account1/Account1';
import Buy from './Buy/Buy';
import Send from './Send/Send';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faRetweet, faUsd } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Home = () => {

  // let doneTransactions = false;
  const balances = useSelector((state) => {
    return state.walletBalance
  })

  balances.forEach(balance1 => {
    const usdBalance1 = document.querySelector('.usdBalance1');
    usdBalance1.innerHTML = balance1.Usd
  });
  balances.forEach(balance2 => {
    const usdBalance2 = document.querySelector('.usdBalance2');
    usdBalance2.innerHTML = balance2.Usd
  });

  // const [balances, setBalances] = useState([0])

  // useEffect(() => {
  //   fetch(`http://localhost:8550/balance`)
  //     .then((res) => res.json())
  //     .then((data) => setBalances(data));
  // }, []);


  return (
    <>
     <div className='home-body'>
       {/* <div className='home-header'>
          <div className="container" style={{width: "1000px", margin: "auto"}}>
            <div className="d-flex">

              <div className="home-logo">
                <img src={logo} alt=""/> 
                <h3>Wallet</h3>
              </div>

              <div className="NetworksForm-container">
                <div id="Networks">
                  <h6>
                    <FontAwesomeIcon  icon={faUsd} />
                    <span className='usdBalance1'> 100 </span> USD
                    <span className='ethBalance1'> {balances.map(balance => <span>{balance.newBalance}</span>)}</span> USD
                  </h6>
                  
                </div>
              </div>

              <div className="profile-ber">
                <div className="profile-icon walletProfileIcon">
                  <img src={userIcon} alt=""/>
                </div>
              </div>
            </div>
          </div>
       </div> */}

       <div className="container-fluid" style={{width: "1000px", margin: "auto"}}>
          <div className="home-container">
            <div className='account-container'>
              <Account1/>
            </div>
            <div className="balance-container m-auto">
              <div className='assetSendDepositSwap_container'>
              <div className=" d-flex justify-content-center mt-3">
                  <h4>ASSETS</h4>
              </div>
              <div className="eth-balance text-center mb-3">
                <h3>
                  <FontAwesomeIcon  icon={faUsd} />
                  {/* <span className='ethBalance1'> {balances.map(balance => <span>{balance.newBalance}</span>)}</span> USD */}
                  <span className='usdBalance2'> 100 </span> USD
                </h3>
                <small>Testing Balance</small>
              </div>

              <div className="buy-send-swap-container d-flex justify-content-center mb-3">
                <div className='buyDiv'>
                  <Buy/>
                </div>
                <div className='sendDiv'>
                <Send />
                </div>
                <div className="buy-send-swap text-center">
                  <div className="swap"><FontAwesomeIcon className="icons" icon={faRetweet} /></div>
                  <p>Swap</p>
                </div>
              </div>
              </div>

              <div className="assets-activity-container ">
              <div class="row">
                <div className="col-md-12">
                  <div className="activity">
                    <div className="activity-title">
                      <h4 className="act mb-2">History...</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="activity-transactions-container">
                <div className="transactions-content">
                  <Activity/>
                </div>
            </div>

            <div>
            <Footer/>
            </div>
            </div>
          </div>
        </div>
     </div>
    </>
  );
};

export default Home;