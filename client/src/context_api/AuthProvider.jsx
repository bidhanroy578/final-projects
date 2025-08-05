import { useEffect, useState } from 'react';
import { AuthContext } from './Auth_context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase_config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const emailSignin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const emailSignup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerForGoogle = new GoogleAuthProvider()
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, providerForGoogle)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const datas = { user, loading, emailSignin, emailSignup, googleSignin, logout }

    return (
        <AuthContext.Provider value={datas}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;