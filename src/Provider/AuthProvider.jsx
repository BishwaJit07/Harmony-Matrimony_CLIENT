import { createContext, useState, useEffect } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);

            // get and set token!!!!
            if (currentUser) {
                axios.post('https://soulmates-server.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching token:', error);
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem('access-token');

                setLoading(false);
            }
        });

        // Return the cleanup function to unsubscribe from the onAuthStateChanged observer.
        return () => {
            unsubscribe();
        };
    }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount.

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
