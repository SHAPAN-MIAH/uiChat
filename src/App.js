
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Join from './Component/Join/Join';
import Chat from './Component/Chat/Chat';
import Wallet from './Component/Wallet/Wallet';
import CreateWallet from './Component/Wallet/CreateWallet/CreateWallet';
import PrivateRoute from './Component/Wallet/PrivateRoute';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="chat" element={<Chat />} />
        <Route path="wallet" element={<Wallet />} />
        {/* <Route path="wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} /> */}
        <Route path="createWallet" element={<CreateWallet />} />
    </Routes>
    </div>
  );
}

export default App;
