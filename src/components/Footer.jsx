import React from 'react'

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <div className='footer' ><p>Copyright &copy; {year}</p></div>
  )
}

export default Footer