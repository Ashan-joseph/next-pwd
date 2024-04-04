'use client'
import React, { useEffect, useState } from 'react'
import { redeemQr } from '../action'
import { redirect } from 'next/navigation'

export default function RedeemQr(refernece){

    const [redeemResult, setredeemResult] = useState({
        'error' : null,
        'data': null,
        'message' : null
    })

    async function redeemVoucher(formData){
        const redeemResponse = await redeemQr(formData.get('qrcode')); 

        if(redeemResponse.error == true){
            redirect('/redeem/error')
        }else{
            redirect('/redeem/success')
        }
    }

    return (

        <>
            <form className=" mt-3" action={redeemVoucher}>
                <input type="hidden" name="qrcode" className="border rounded-lg p-1 border-gray-800 py-2" value={refernece.qrcode}/>
        
                <a href="/home" className="inline-block bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2 ">
                    Home
                </a>
                <button type="submit" className="ml-2  bg-green-500 text-white rounded-lg px-4 py-2 ">
                    Redeem
                </button>
            </form> 
        </>            

    )
}

