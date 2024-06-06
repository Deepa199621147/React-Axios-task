import React from 'react'

const Footer = () => {
  const year = new Date();
  return (
    <footer style={{ padding: "30px", backgroundColor: 'black', color: "white" }}>
      <p className='text-center'>Copyright &#169; deepasuriyha23@gmail.com {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer