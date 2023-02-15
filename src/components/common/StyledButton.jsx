import React from 'react'

const StyledButton = ({className,children,type}) => {
  return (
    <button className={`styled-button ${className}`} type={type}>
        {children}
    </button> 
  )
}

export default StyledButton