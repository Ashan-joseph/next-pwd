import React from 'react'
import Navbar from './components/Navbar'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-lg items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className='text-center justify-center'>
                        <h2 className="text-2xl font-bold">Cannot Redeem Successfully!</h2>

                        <a href="/home" className="inline-block bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2">
                            Home
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
