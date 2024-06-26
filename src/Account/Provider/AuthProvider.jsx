import React, { createContext, useEffect, useState } from 'react';
import { EmailAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, reauthenticateWithCredential, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const reauthenticateUser = (email, password) => {
        setLoading(true);
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(email, password);
        return reauthenticateWithCredential(user, credential);
    };

    const deleteAccount = (user) => {
        setLoading(true);
        return deleteUser(user);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                axios.post("https://bistro-boss-server-mahfuzur-rahman.vercel.app/jwt", { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data);
                        const token = data.data.token;
                        localStorage.setItem("access-token", token);
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem("access-token")
                setLoading(false)
            }


            console.log("User: ", currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        googleSignIn,
        logOut,
        reauthenticateUser,
        deleteAccount
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;