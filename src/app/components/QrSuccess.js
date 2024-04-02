'use client'
import React from 'react'
import RedeemQr from '../components/RedeemQr'

const QrSuccess = ({props,qrcode,status}) => {

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
                    {status && <RedeemQr qrcode={qrcode} />} 
                </div>
            </div>
        </div>
    )
}

export default QrSuccess
