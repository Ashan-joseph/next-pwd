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
                        <p className="mt-2 mb-4">
                        Scan Qr code and redeem the voucher
                        </p>
                        
                    </div>
                    <a href="/report">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">View Reports</h2>
                            <p className="mt-2 mb-4">
                            View redemption details and download report
                            </p>  
                        </div>
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
