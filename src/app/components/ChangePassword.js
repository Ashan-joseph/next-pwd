import React, { useState } from 'react'
import { resetClientPassword } from '../action'
import {toast} from 'react-hot-toast'
import { useRouter  } from "next/navigation"

const ChangePassword = ({userCode,resetPassword,accessToken}) => {

    const[buttonName, setButtonName] = useState('SUBMIT')

    function chnageButtonName(){
        setButtonName('PLEASE WAIT ...')
    }

    const router = useRouter();

    async function submitPassword(formData){

        const password = formData.get('password')
        const passwordConfirmation = formData.get('passwordCnf')

        const response = await resetClientPassword(userCode,resetPassword,password,passwordConfirmation,accessToken)
        

        if(response.error == false){
            toast.success(response.message)
            setButtonName('SUBMIT')
            router.push("/")

        }else{
            toast.error(response.message)
            setButtonName('SUBMIT')
            router.push("/signup")
        }

    }

    return (
        <div>
            <form className="flex flex-col mt-3" action={submitPassword}>
                <input type="password" name="password" className="border rounded-lg p-1 border-gray-800 py-2" placeholder="password" />
                <input type="password" name="passwordCnf" className="border rounded-lg p-1 border-gray-800 py-2 mt-2" placeholder="confirm passwrd" />                        
                <button onClick={chnageButtonName} type="submit" className="bg-green-500 rounded-lg mt-5 text-white py-2">{buttonName}</button>                    
            </form>
        </div>
    )
}

export default ChangePassword
