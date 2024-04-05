import React from 'react'
import { verifyClientEmail } from '../action'
import {toast} from 'react-hot-toast'

const verifyEmail = ({setIsVerify,setOtpVerify,setVerificationCode,setUsercode,resetPassword,setaccessToken}) => {

    async function submitEmail(formData){
        const email = formData.get('email')

        const response = await verifyClientEmail(email,resetPassword)

        if(response.error == false){
            toast.success(response.message)
            setIsVerify(false)
            setOtpVerify(true)
            setVerificationCode(response.data.code)
            setUsercode(response.data.userCode)
            setaccessToken(response.token)
        }else{
            toast.error(response.message)
        }
        
    }

    return (
        <div>
            <form className="flex flex-col mt-3" action={submitEmail}>
                <input type="text" name="email" className="border rounded-lg p-1 border-gray-800 py-2" placeholder="email" />                
                <button type="submit" className="bg-green-500 rounded-lg mt-5 text-white py-2">VERIFY EMAIL</button>                    
            </form>
        </div>
    )
}

export default verifyEmail
