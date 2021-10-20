import { useEffect } from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../components/Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out 
            setUser({});
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in

                setUser(user);
            } else {
                // User is signed out
            }
        });
    }, [])

    return {
        auth,
        user,
        error,
        logout,
        signInUsingGoogle,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
    }
};

export default useFirebase;