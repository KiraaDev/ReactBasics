import React from 'react'

function Footer() {
  return (
    <footer className=' flex justify-center flex-col items-center h-[20svh] bg-red-200'>
      <p className='font-bold underline'>FOOTER</p>
      <h1>© {new Date().getFullYear()} Gomer Gaufo JR. All Rights Reserved.</h1>
    </footer>
  )
}

export default Footer
