import React from 'react';
import { Navigate} from 'react-router-dom';
import UseAuth from './UseAuth';

const PrivateRoute = ({ children}) => {
  const {user} = UseAuth
  
    return (
      user.email ? children: <Navigate to="/createWallet"/>
    );
};

export default PrivateRoute;