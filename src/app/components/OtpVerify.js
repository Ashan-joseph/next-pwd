import React, { useState } from 'react'
import { verifyClientOtp } from '../action'
import {toast} from 'react-hot-toast'

const OtpVerify = ({userCode,verificationCode,setpasswordChangeView,accessToken,setOtpVerify}) => {

    const[buttonName, setButtonName] = useState('SUBMIT')

    function chnageButtonName(){
        setButtonName('PLEASE WAIT ...')
    }

    async function submitOtp(formData){
        const otp = formData.get('otp')
        const response = await verifyClientOtp(otp,userCode,verificationCode,accessToken)

        if(response.error == false){
            toast.success(response.message)
            setOtpVerify(false)
            setpasswordChangeView(true)
            setButtonName('SUBMIT')
        }else{
            toast.error(response.message)
            setButtonName('SUBMIT')
        }
    }

    return (
        <div>
            <div>
                <form className="flex flex-col mt-3" action={submitOtp}>
                    <input type="text" name="otp" className="border rounded-lg p-1 border-gray-800 py-2" placeholder="OTP" />                
                    <button onClick={chnageButtonName} type="submit" className="bg-green-500 rounded-lg mt-5 text-white py-2">{buttonName}</button>                    
                </form>
            </div>
        </div>
    )
}

export default OtpVerify
