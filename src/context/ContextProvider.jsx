import React, { createContext, useState, useEffect } from "react";

import { initializeApp  } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebase = initializeApp({
    apiKey: "AIzaSyDCzS5BrVPmq5dB7A06tCMc4kS14QAIWsU",
    authDomain: "best-staking.firebaseapp.com",
    projectId: "best-staking",
    storageBucket: "best-staking.appspot.com",
    messagingSenderId: "76389989604",
    appId: "1:76389989604:web:44d2758405b03b292600f1",
    measurementId: "G-02ER6CY9SY"
});

const auth = getAuth();
const firestore = getFirestore(); 

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState("");
    const [tokenSearched, setTokenSearched] = useState("");
    const [tokenList, setTokenList] = useState([]);
    const [registerPageOpen, setRegisterPageOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        passwordCheck:""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTokenSearched("");
        setTokenSearched(searchInput);
        console.log(tokenSearched);
    }

    const openRegisterPage = () => {
        setRegisterPageOpen(true);
    }

    const closeRegisterPage = () => {
        setRegisterPageOpen(false);
    }

    const handleFormDataChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
        console.log(formData);
    }

    const handleRegistration = async () => {
        try {
            createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )
            closeRegisterPage();
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return(
        <Context.Provider value={{
            handleChange,
            handleSubmit,
            tokenList,
            registerPageOpen,
            openRegisterPage,
            closeRegisterPage,
            handleRegistration,
            handleFormDataChange,
            formData
        }}
        >
            {children}
        </Context.Provider>
    )

}