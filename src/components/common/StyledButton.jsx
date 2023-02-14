import React from 'react'

const StyledButton = ({className,children}) => {
  return (
    <button className={`styled-button ${className}`}>
        {children}
    </button> 
  )
}

export default StyledButton