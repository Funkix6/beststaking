import React, { useContext } from "react";
import Input from './Input';
import { Context } from '../context/ContextProvider';

const Register = () => {
    const { handleRegistration, closeRegisterPage, formData, handleFormDataChange} = useContext(Context);

    const handleSubmit = (e) => {
        const { firstName, lastName, email, password, passwordCheck} = formData;
        e.preventDefault();

        if(!firstName || !lastName || !email || !password || !passwordCheck) {
            alert("Please check that you have filled all the informations in the form.");
            return;
        };

        if(password != passwordCheck) {
            alert("Please make sur both passwords entered are the exact same.")
            return;
        }

        handleRegistration();
        closeRegisterPage();
    }

    return(
        <div className="container mx-auto fixed z-50">
            <div className="flex justify-center px-6 my-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                    ></div>
                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        First Name
                                    </label>
                                    <Input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder='First name'
                                        type='text'
                                        name='firstName'
                                        handleFormDataChange={handleFormDataChange}
                                    />
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Last Name
                                    </label>
                                    <Input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder="Last name"
                                        type='text'
                                        name='lastName'
                                        handleFormDataChange={handleFormDataChange}
                                    />
                                </div>
                            </div>
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
                                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Confirm Password
                                    </label>
                                    <Input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        placeholder="Comfirm Password"
                                        type='password'
                                        name='passwordCheck'
                                        handleFormDataChange={handleFormDataChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Register Account
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
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="./index.html"
                                >
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;