import React, { useState } from 'react';
import './CreateWalletForm.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateWalletForm = () => {

  const handleChange = (e) => {
    const Password = document.getElementById("password").value;
    const ConfirmPassword = document.getElementById("confirmPassword").value;
    const createWalletBtnOverlay = document.querySelector(".createWalletBtn-overlay");
    const formCheckInput = document.getElementById("formCheckInput");
    const passwordNotEnough = document.getElementById("passwordNotEnough");
    const passwordError = document.getElementById("passwordError");
    const names = document.getElementById("name").value;


    // Form Validation.
    let isFormValid = true;
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length >= 8;
      isFormValid = isPasswordValid;
      passwordNotEnough.innerHTML= "";
    };
    if(Password.length < 8){
      passwordNotEnough.innerHTML= "Password not long enough";
      createWalletBtnOverlay.style.display = "block";
    }
    if(Password !== ConfirmPassword){
      createWalletBtnOverlay.style.display = "block";
      passwordError.innerHTML= "Password doesn’t match!";

      if(Password === ""){
        createWalletBtnOverlay.style.display = "block";
      };
  
      if(ConfirmPassword === ""){
        createWalletBtnOverlay.style.display = "block";
        passwordError.innerHTML= "";
      }

    };
    if(Password === ConfirmPassword){
      passwordError.innerHTML= ""
      passwordNotEnough.innerHTML= "";
      
    };

    if(isFormValid && names && formCheckInput && Password === ConfirmPassword && Password.length >= 8 ){
        createWalletBtnOverlay.style.display = "none";
        passwordNotEnough.innerHTML= "";
    };
  };


  // Function for form submit.
  const handelSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      
    };
    // registerUser(...userData, location, history)

    // axios.post('http://localhost:8550/AddAccount', userData)
    //   .then(res => {
    //     console.log("done")
    //     // setSuccess(true);
    //   })
  };


  return (
    <div className="container" style={{width: '1000px'}}>
      <div class="row createWallet-allContent">
        <div className="col-md-6">
          <div className="form-container">
            <div className="header-text">
              <h1>Join</h1>
            </div>

            {/* Create wallet form */}

            <form className="forms" onSubmit={handelSubmit}>
              <div class="form-group formGroup">
                <label for="">Your Name</label>
                <input onChange={handleChange} type="text" name="name" id="name" autoComplete='none' class="form-control shadow-none" required/>
              </div>
              <div class="form-group formGroup">
                <label for="">New password (min 8 chars)</label>
                <input onChange={handleChange} type="password" name="password" id="password" minLength="8" class="form-control shadow-none"  required/>
                <div id="passwordNotEnough"></div>
              </div>
              <div class="form-group formGroup">
                <label for="">Confirm password</label>
                <input onChange={handleChange} type="password" name="confirmPassword" id="confirmPassword" class="form-control shadow-none" required/>
                <div id="passwordError"></div>
              </div>

              <div class="form-check">
                <label class="form-check-label">
                  <span><input type="checkbox" class="form-check-input" name="" id="formCheckInput" value="checkedValue" required/></span>
                  <span className="terms-checkbox">I have read and agree to the <a href="">Terms of Use</a></span>
                </label>
              </div>
              <Link to="/wallet">
                <button id="submitBtn" type="submit"> Create </button>  
              </Link>
              
              <br/><span className="createWalletBtn-overlay" ></span>
            </form>
            
          </div>
        </div>

        {/* content for help about password */}
        <div className="col-md-6">
          <div className="help-container">
            {/* <div className='helpvideo-container'>
              <video controls style={{ borderRadius: '5px', width: 'auto', height: '255px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                <source
                  type="video/webm"
                  src={video4}
                />
              </video>
            </div> */}
            <div className='mt-5'>
              <h3>Why do i need a password?</h3>
              <p>Passwords are an essential first-line defense for your information and assets. To keep people from accessing your account, passwords with strong conviction are a great way for you to keep your assets safe.</p>
            </div>
            <div className="tips">
              <h3>Helpful Tips</h3>
              <ul>
                <li>Never share your password with anyone.</li>
                <li>Write your password down and store it in a secure location.</li>
                <li>Do not reuse a password you already use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWalletForm;