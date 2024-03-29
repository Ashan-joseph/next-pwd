import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className=" bg-blue-900 lg:flex-wrap lg:justify-start py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                  <p className='text-white'>Logout</p>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
