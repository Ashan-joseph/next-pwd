'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { redeemQr } from '../action'
import { ProgressBar } from 'react-loader-spinner'

async function callredeemQr(){
    const result = await redeemQr()
    return result
}

export default function page()  {

    const [response, setResponse] = useState({
        error:null,
        data:null,
        message: null
    })
    
    useEffect(() => {
        async function fetchData() {
            const result = await callredeemQr();
            setResponse(result)
        }
        fetchData()
    },[])


    return (
        <div>
            <Navbar />
            <div className="max-w-lg items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {
                    response.error == null ?                             
                        <div className='flex justify-center'>
                            <ProgressBar visible={true} height="80"width="180" borderColor="green" barColor="green"ariaLabel="loading"  wrapperStyle={{}} wrapperClass="" />
                        </div> : 
                    <>  
                        {response.error == false ? 
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">                
                                <div className='text-center justify-center'>
                                    <h2 className="text-2xl font-bold">{response.message}</h2>
                                    <p className="mt-2 mb-4">
                                        Reference No : {response.data.invoice_ref_number}
                                    </p>                                    
                                    <a href="/home" className="bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2 mt-2">
                                        Home
                                    </a>
                                </div>
                            </div>
                        : 
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">                
                                <div className='text-center justify-center'>
                                    <h2 className="text-2xl font-bold">{response.message}</h2>

                                    <a href="/home" className="inline-block bg-white-500 text-black rounded-lg border border-green-600 mt-2 px-4 py-2">
                                        Home
                                    </a>                   
                                </div>
                            </div>
                        }
                    </>
                }
                </div> 
            </div>  
        </div>
    )
}

