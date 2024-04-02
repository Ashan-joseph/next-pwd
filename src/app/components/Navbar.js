'use client'
import React from 'react'
import { useRouter } from "next/navigation"

const Navbar = () => {
    const router = useRouter();

    function logout() {
        router.push("/")
    }

    return (
        <div>
            <nav className=" bg-blue-900 py-4 ">
                <div className="px-3 text-right">
                    <button  onClick={logout} className='text-white mr-10'>Logout</button >
                </div>
            </nav>
        </div>
    )
}

export default Navbar
