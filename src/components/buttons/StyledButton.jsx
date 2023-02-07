import React from 'react'

const StyledButton = ({type,children}) => {
  return (
    <button className={`styled-button ${type}`}>
        {children}
    </button> 
  )
}

export default StyledButton