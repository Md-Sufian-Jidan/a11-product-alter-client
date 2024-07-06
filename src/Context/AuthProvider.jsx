import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    //create user 
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //login user 
    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    // google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    // google login
    const githubProvider = new GithubAuthProvider()
    const githubLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    };
    //logOut
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth)
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
            const userEmail = currentUser?.email || user?.email;
            const loggedEmail = { email: userEmail };
            console.log('current User', currentUser);
            // if user exist then issue a token
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedEmail, { withCredentials: true })
                    .then((res) => {
                        // console.log('token response', res.data);
                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedEmail, { withCredentials: true })
                    .then((res) => {
                        // console.log(res.data);
                    })
            }
        });
        return () => {
            unsubscribe();
        }
    }, [user]);

    const userInfo = { user, isLoading, createUser, signIn, googleLogin, githubLogin, logOut, updateUserProfile, setUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default AuthProvider;