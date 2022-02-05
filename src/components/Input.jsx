import React from "react"

const Input = ({ placeholder, name, type, value, handleFormDataChange }) => (
    <input 
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleFormDataChange(e, name)}
    />
)

export default Input;