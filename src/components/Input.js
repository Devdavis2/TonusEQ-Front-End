import React from 'react'

const Input = props => {
  const {handleChange, name, placeholder, type, value} = props
    return (
      <>
        <label htmlFor={name}></label>
        <input
          name={name}
          id={name}
          type={type}
          value = {value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    )
}

export default Input