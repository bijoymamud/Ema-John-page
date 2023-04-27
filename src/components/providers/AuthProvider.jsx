import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);






const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }


    //! Observe user auth state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });


        //! stop observing while unmounting
        return () => {
            return unsubscribe;
        }

    }, [])


    const authInfo = {
        user,
        createUser,
        singIn,
        setUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;