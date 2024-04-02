import React from 'react'

const QrFail = ({props}) => {
    return (
        <div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">                
                <div className='text-center justify-center'>
                    <h2 className="text-2xl font-bold">{props.message}</h2>

                    <a href="/home" className="inline-block bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2">
                        Home
                    </a>                   
                </div>
            </div>
        </div>
    )
}

export default QrFail
