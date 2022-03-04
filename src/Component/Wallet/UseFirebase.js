import { useState, useEffect } from 'react';
import { 
  getAuth ,
  createUserWithEmailAndPassword , 
  signInWithEmailAndPassword , 
  onAuthStateChanged ,
  updateProfile, 
  getIdToken, 
  signOut 
} from "firebase/auth";
// import axios from 'axios';
import InitFirebase from './Firebase/FirebaseInit';


// firebase init app
InitFirebase();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [authToken, setAuthToken] = useState('')

  const auth = getAuth();

  // register
  const registerUser = (email, password, name, location, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('')
      const newUser = {email, displayName: name};
      setUser(newUser);
      // save user in to Db
      saveUserInDB(email, name, 'POST');
      // send name after creation
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      
      const destination = location?.state?.from || '/';
      history.replace(destination)
      
    })
    .catch((error) => {
      const errorMessage = error.message;
      setAuthError(errorMessage)
      // ..
    })
    .finally(() => setLoading(false));
  }

  // login
  const loginUser = (email, password, location, history) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history.replace(destination)
      setAuthError('')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setAuthError(errorMessage)
    })
    .finally(() => setLoading(false));
  }
  
  // logout 
  const logOut = () => {
    setLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setLoading(false));
  }

  // save user data in db
  const saveUserInDB = (email, displayName, method) => {
    const user = {email, displayName};
    fetch('http://localhost:8550/AddAccount', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => console.log(res))
  }

  // observe user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken => {
          setAuthToken(idToken)
        })
      } else {
        setUser({})
      }
      setLoading(false);
    });
    return () => unSubscribe;
  }, [])

  useEffect(() => {
    fetch(`https://doctors-port.herokuapp.com/AddUsers/admin/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))

  }, [user.email]);


  return {
    user,
    loading,
    registerUser,
    loginUser,
    admin,
    logOut,
    authError,
    authToken
  }
};

export default UseFirebase;