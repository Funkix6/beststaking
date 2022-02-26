import React, { createContext, useState, useEffect } from "react";

import { initializeApp  } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, reauthenticateWithRedirect} from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore"

const firebase = initializeApp({
    apiKey: "",
    authDomain: "best-staking.firebaseapp.com",
    projectId: "best-staking",
    storageBucket: "best-staking.appspot.com",
    messagingSenderId: "76389989604",
    appId: "1:76389989604:web:44d2758405b03b292600f1",
    measurementId: "G-02ER6CY9SY"
});

const auth = getAuth();
const db = getFirestore();


export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");
    const [tokenSearched, setTokenSearched] = useState("");
    const [tokenList, setTokenList] = useState([]);
    const [registerPageOpen, setRegisterPageOpen] = useState(false);
    const [authPageOpen, setAuthPageOpen] = useState(false);
    const [user, setUser] = useState();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        passwordCheck:""
    });

    const resetFormData = () => {
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            passwordCheck:""
        });
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTokenSearched("");
        setTokenSearched(searchInput);
        console.log(tokenSearched);
    }

    const openRegisterPage = () => {
        authPageOpen ? closeAuthPage() : false
        setRegisterPageOpen(true);
    }

    const closeRegisterPage = () => {
        setRegisterPageOpen(false);
    }
    
    const openAuthPage = () => {
        registerPageOpen ? closeRegisterPage() : false;
        setAuthPageOpen(true);
        resetFormData()
    }

    const closeAuthPage = () => {
        setAuthPageOpen(false);
        setFormData();
        resetFormData();
    }

    const handleFormDataChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
        console.log(formData);
    }

    const handleRegistration = async () => {
        try {
            
            const usersRef = doc(db, `Users/${formData.email}`);
            const usersSnap = await getDoc(usersRef);

            if(usersSnap.exists()){
                alert("Email already used. Please choose another or connect if you have an account");
                return;
            }

            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )

            if(!userCredentials) {
                console.log("User was not created");
                return;
            }

            setDoc(
                usersRef, 
                {
                    First_Name: formData.firstName,
                    Last_Name: formData.lastName,
                    Email: formData.email,
                    Last_Connection: serverTimestamp()
                }
            );
            
            setUser(userCredentials.user);
            closeRegisterPage();
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    const handleAuth = async () => {
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            setUser(userCredentials.user);
            console.log(user)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const logUserOut = async () => {
        await signOut(auth);
        setUser();
        console.log("Logged out ! Good bye :)")
    }

    const getCoinList = async () => {
        try {
            const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            const coinList = await res.json();
            setTokenList(coinList)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getCoinList();
    }, [])

    return(
        <Context.Provider value={{
            handleChange,
            handleSubmit,
            tokenList,
            registerPageOpen,
            openRegisterPage,
            closeRegisterPage,
            openAuthPage,
            closeAuthPage,
            authPageOpen,
            handleAuth,
            handleRegistration,
            handleFormDataChange,
            formData,
            user,
            logUserOut,
            setSearchInput,
            searchInput
        }}
        >
            {children}
        </Context.Provider>
    )

}
