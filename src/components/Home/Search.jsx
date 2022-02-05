import React, {useContext, useState} from "react";
import { FaSearch } from "react-icons/fa";
import { Context } from "../../context/ContextProvider";

const Dropdown = ({hintBoxOpen, tokenList}) => {
    return(
        <div className={`absolute w-64 mt-2 origin-top-right rounded-md shadow-lg pt-1 ${!hintBoxOpen ? "hidden" : ""}`}>
            <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                {tokenList.map((item, index) => (
                    <a 
                        className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" 
                        href="#"
                        key={item + index}
                    > 
                        {item} 
                    </a>
                ))}
            </div>
        </div>
    )
}

const Search = () => {
    const { handleChange, handleSubmit, tokenList } = useContext(Context);
    const [hintBoxOpen, setHintBoxOpen] = useState(false);

    const openHintBox = () => {
        setHintBoxOpen(true);
    }

    const closeHintBox = () => {
        setHintBoxOpen(false);
    }

    return(
        <div className='flex items-center justify-center min-h-screen'>
            <div className="flex items-center bg-white rounded-lg">
                <div className="w-full">
                    <input type="search" className=" px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                        onFocus={openHintBox}
                        onBlur={closeHintBox}
                        onChange={(e) => handleChange(e)}
                        placeholder="search"/>
                    <Dropdown hintBoxOpen={hintBoxOpen} tokenList={tokenList} />
                </div>
                <div>
                    <button type="submit" className="flex items-center btn-grad-search justify-center w-12 h-12 text-white rounded-r-lg focus:bg-blue-400"
                        onClick={(e) => handleSubmit(e)}
                    >
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search;