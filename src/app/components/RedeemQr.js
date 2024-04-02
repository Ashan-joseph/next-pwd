
import React, { useState } from 'react'
import { redeemQr } from '../action'
import QrSuccess from '../components/QrSuccess';
import QrFail from '../components/QrFail';

export default function RedeemQr(refernece){

    const [redeemResult, setredeemResult] = useState({
        'error' : null,
        'data': null,
        'message' : null
    })

    async function redeemVoucher(formData){
        const redeemResponse = await redeemQr(formData.get('qrcode')); 
        setredeemResult(redeemResponse)

        if(redeemResponse.error == false){
            return (
                <>
                    <QrSuccess props={redeemResponse} qrcode={null} status={0}/>
                </>
            )
        }else{
            return (
                <>
                    <QrFail props={redeemResponse} />
                </>
            )
        }
    }

    return (
        <div>
            <form className=" mt-3" action={redeemVoucher}>
                <input type="hidden" name="qrcode" className="border rounded-lg p-1 border-gray-800 py-2" value={refernece.qrcode}/>
        
                <a href="/home" className="inline-block bg-white-500 text-black rounded-lg border border-green-600 px-4 py-2 ">
                    Home
                </a>
                <button type="submit" className="ml-2  bg-green-500 text-white rounded-lg px-4 py-2 ">
                    Redeem
                </button>
            </form>
        </div>
    )
}

