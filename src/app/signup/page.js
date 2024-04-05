'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import VerifyEmail from '../components/VerifyEmail'
import OtpVerify from '../components/OtpVerify'
import ChangePassword from '../components/ChangePassword'

const page = () => {

    const [resetPassword,setresetPassword] = useState(false)
    const [isVerify,setIsVerify] = useState(true)
    const [isOtpVerify,setOtpVerify] = useState(false)
    const [userCode, setUsercode] = useState(0)
    const [verificationCode, setVerificationCode] = useState(0)
    const [ispasswordChangeView, setpasswordChangeView] = useState(false)
    const [accessToken, setaccessToken] = useState(0)


    return (
        <div>
            <Navbar />
            <div className="max-w-lg items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    {isVerify && 
                        <VerifyEmail 
                            setIsVerify={setIsVerify} 
                            setOtpVerify={setOtpVerify} 
                            setVerificationCode={setVerificationCode} 
                            setUsercode={setUsercode}
                            resetPassword={resetPassword}
                            setaccessToken={setaccessToken}
                        />
                    }  

                    {isOtpVerify && 
                        <OtpVerify 
                            setOtpVerify={setOtpVerify}
                            userCode={userCode} 
                            verificationCode={verificationCode}
                            setpasswordChangeView={setpasswordChangeView}
                            accessToken={accessToken}
                        />
                    } 

                    {ispasswordChangeView && 
                        <ChangePassword 
                            userCode={userCode} 
                            resetPassword={resetPassword} 
                            accessToken={accessToken}
                        />
                    }

                </div>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2024 Knightsbridge Technologies. All rights reserved!
                </p>
            </div>
        </div>
    )
}

export default page
