import React from 'react'

const QrSuccess = ({props}) => {
    return (
        <div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">                
                <div className='text-center justify-center'>
                    <h2 className="text-2xl font-bold">Voucher can be redeemed</h2>
                    <p className="mt-2 mb-4">
                        Merchant : {props.merchantName}
                    </p>
                    <p className="mt-2 mb-4">
                        Amount : {props.amount}
                    </p>
                    <p className="mt-2 mb-4">
                        Expire Date : {props.expire_date}
                    </p>
                    <a href="/home" className="inline-block bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2 hover:bg-gray-700">
                        Home
                    </a>
                    <a href="" className="ml-2 inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                        Redeem
                    </a>
                </div>
            </div>
        </div>
    )
}

export default QrSuccess
