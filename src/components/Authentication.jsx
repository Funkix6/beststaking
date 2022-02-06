import React, { useContext } from 'react';
import Input from './Input';
import { Context } from '../context/ContextProvider';

const Authentication = () => {
    const { formData, handleFormDataChange, handleAuth, closeAuthPage, openRegisterPage} = useContext(Context);
    
    const handleSubmit = (e) => {
        const { email, password } = formData;
        e.preventDefault();

        if(!email || !password ) {
            alert("Please enter your credentials to login.");
            return;
        };

        handleAuth();
        closeAuthPage();
    }

    return(
        <div className="container mx-auto fixed z-50">
            <div className="flex justify-center px-6 my-12">
                <div className="lg:w-1/4 md:w-1/2 w-full flex">
                    <div className="w-full bg-white p-5 rounded-lg ">
                        <h3 className="py-4 text-2xl text-center break-normal font-semibold border-b "> Connect using an existing account </h3>
                        <form className="px-8 pt-8 pb-8 mb-4 bg-white rounded w-full">
                            <div className="mb-4 md:flex md:justify-between" />
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Email
                                </label>
                                <Input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder="Email"
                                    type='email'
                                    name='email'
                                    handleFormDataChange={handleFormDataChange}
                                />
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Password
                                    </label>
                                    <Input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder="Password"
                                        type='password'
                                        name='password'
                                        handleFormDataChange={handleFormDataChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-1/2 lg:px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 hover:cursor-pointer"
                                    onClick={openRegisterPage}
                                >
                                    No account? Register here!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;