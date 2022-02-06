import React, { useContext, useState } from "react";
import Register from "../Register";

import { Context } from '../../context/ContextProvider'
import Authentication from "../Authentication";

const Header = () => {
    const { registerPageOpen, openRegisterPage, authPageOpen, user, logUserOut } = useContext(Context);
    return(
        <React.Fragment>
            { registerPageOpen ? <Register /> : false }
            { authPageOpen ? <Authentication /> : false }
            <header className="bg-transparent shadow fixed w-full">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <a className="text-white text-xl font-bold md:text-2xl hover:text-gray-200" href="#"> Best Staking </a>
                        </div>

                        <div className="flex md:hidden">
                        <button type="button" className="text-gray-500 hover:white focus:outline-none focus:text-gray-200" aria-label="toggle menu">
                            {/* Ajouter le bouton pour ouvrir le menu sur mobile */}
                        </button>
                        </div>
                    </div>

                    <div className="md:flex items-center">
                        <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <a className="my-1 text-md font-semibold text-white leading-5 hover:text-gray-200 md:mx-4 md:my-0" href="#">Home</a>
                            <a className="my-1 text-md font-semibold text-white leading-5 hover:text-gray-200 md:mx-4 md:my-0" href="#">Prices</a>
                            <a className="my-1 text-md font-semibold text-white leading-5 hover:text-gray-200 md:mx-4 md:my-0" href="#">Stuff</a>
                            <a className="my-1 text-md font-semibold text-white leading-5 hover:text-gray-200 md:mx-4 md:my-0" href="#">More Stuff</a>
                            <a className="my-1 text-md font-semibold text-white leading-5 hover:text-gray-200 md:mx-4 md:my-0" href="#">Stonks</a>
                            <a className="my-1 text-md font-semibold text-white leading-5 hover:text-gray-200 md:mx-4 md:my-0" href="#">Staking</a>
                        </div>

                        <div className={`flex items-center py-2 -mx-1 md:mx-0`, (user ? 'hidden' : '')}>
                            <button 
                                className="btn-grad-primary font-semibold md:mx-2 md:w-auto"
                                onClick={openRegisterPage}
                            >
                                Login
                            </button>
                        </div>
                        <div className={`flex items-center py-2 -mx-1 md:mx-0`, (!user ? 'hidden' : '')}>
                            <button 
                                className="btn-grad-danger font-semibold md:mx-2 md:w-auto"
                                onClick={logUserOut}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    </div>

                    {/* <div className="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">
                    <a className="text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline mx-4 md:my-0" href="#">News</a>
                    </div> */}
                </nav>
            </header>          
        </React.Fragment>
    )
}

export default Header;