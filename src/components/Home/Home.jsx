import React, { useContext } from "react";
import { Header, Search, Footer } from "./";
import { Context } from '../../context/ContextProvider'

const Home = () => {
    const { registerPageOpen } = useContext(Context)
    return(
        <div className="bg-gradient">
            <Header />
            <Search />
            <Footer />
        </div>
    )
}

export default Home;