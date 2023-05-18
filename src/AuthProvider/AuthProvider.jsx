import React from 'react';
import { useEffect,createContext, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app)
export const AuthContex = createContext()


const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email,password)=> {
      setloading(true)
        return createUserWithEmailAndPassword(auth,email,password )
    }

    const signIN = (email, password)=> {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
      setloading(true)
      return signOut(auth)
    }
    useEffect(()=> {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
           setuser(currentUser)
           console.log("current user", currentUser);
           setloading(false)
         })
         return () => {
           return unsubscribe()
         }
       },[])

       const authInfo = {
        user,
        loading,
        createUser,
        signIN,
        logOut
     
   }
    return (
       <AuthContex.Provider value={authInfo}>
            {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;