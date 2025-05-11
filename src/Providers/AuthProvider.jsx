import React, { createContext, useEffect, useState } from 'react'
import auth from '../components/firebase.init';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";




export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const provider = new GoogleAuthProvider();
  const signInGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  const signInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = profile =>{
    if(auth.currentUser){
      return updateUserProfile(auth.currentUser, profile);
    }
    return Promise.reject("No user is currently logged in.");
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return()=>{
      unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signInGoogle,
    signInUser,
    signOutUser,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
