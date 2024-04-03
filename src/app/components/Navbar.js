'use client'
import React, { useState } from 'react'
import { useRouter,usePathname  } from "next/navigation"
import { logout } from '../action'

const Navbar = () => {
    
    const router = useRouter();
    const [logoutView, setLogoutView] = useState(usePathname())

    async function logoutUser() {
        await logout()
        router.push("/")
    }

    return (
        <div>
            <nav className=" bg-blue-900 py-4 ">
                <div className="px-3 text-right">
                    { logoutView == '/' ? " " :
                        <button  onClick={logoutUser} className='text-white mr-10'>Logout</button > 
                    }                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
