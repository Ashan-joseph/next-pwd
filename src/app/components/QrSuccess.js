'use client'
import React from 'react'

const QrSuccess = ({props}) => {

    return (
        <div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">                
                <div className='text-center justify-center'>
                    <h2 className="text-2xl font-bold">{props.message}</h2>
                    <p className="mt-2 mb-4">
                        Merchant : {props.data.merchantName}
                    </p>
                    <p className="mt-2 mb-4">
                        Amount : {props.data.amount}
                    </p>
                    <p className="mt-2 mb-4">
                        Expire Date : {props.data.expire_date}
                    </p>
                    <a href="/home" className="bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2 ">
                        Home
                    </a>
                    <a href="/redeem" className="ml-2  bg-green-500 text-white rounded-lg px-4 py-2 border-green-600">
                        Redeem
                    </a>
                </div>
            </div>
        </div>
    )
}

export default QrSuccess
