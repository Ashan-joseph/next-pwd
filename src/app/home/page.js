import React from 'react'
import Navbar from '../components/Navbar'
import { getMerchantSession } from '../action'
import Report from '../components/Report'

export default async function page(){
    const session = await getMerchantSession()

    return (
        <div>
            <Navbar />
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold flex items-center justify-center">Redeem Vouchers</h2>                        
                        </div>
                    
                        {session.is_report_enabled ? <Report /> : " "}
                    </div>
                </div>
            </section>
        </div>
    )
}

