import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import BalanceReducer from "./Reducers/BalanceReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers  = combineReducers({
  walletBalance: BalanceReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(rootReducers, composeWithDevTools())

export const persistor = persistStore(store);

export default store;