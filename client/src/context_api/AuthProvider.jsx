import { useEffect, useState } from 'react';
import { AuthContext } from './Auth_context';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase_config';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    const emailSignin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const emailSignup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
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
            if (currentUser) {
                //todo: call jwt for token and set to the local storage 
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        // console.log('jwt token is ', res.data.token)
                        localStorage.setItem('access-token', res.data.token)
                    }).catch(err => { console.log(err) })
            } else {
                // todo: else remove token from local storage 
                // console.log('jwt token cleared ')
                localStorage.removeItem('access-token')
            }
        })
        return () => unsubscribe()
    }, [])

    const datas = { user, loading, emailSignin, emailSignup, googleSignin, logout, updateUser }

    return (
        <AuthContext.Provider value={datas}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;