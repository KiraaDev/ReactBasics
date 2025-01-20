import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-around p-5 bg-slate-100'>
            <div>
                <img src="https://avatars.githubusercontent.com/u/123292825?v=4" alt="" className='h-20 ' />
            </div>
            <ul className='flex gap-5 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </nav>
    )
}

export default Navbar
