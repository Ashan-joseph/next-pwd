import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <div>
            <Navbar />
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold">Redeem Vouchers</h2>                        
                    </div>
                    
                    <a href="/report">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">View Reports</h2>
                        </div>
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
