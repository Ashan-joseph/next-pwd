'use client'
import React, { useState } from 'react'
import { login } from '../action'
import {toast} from 'react-hot-toast'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { useFormStatus } from "react-dom";

const authSchema = z.object({
    id: z.number().optional(),
    email: z.string().min(1,{message:"The email field is required"}).email("Invalid email provided."),
    password: z.string().min(8,{message: "The password must contain 8 characters"})
})

const Login = () => {

    const status = useFormStatus();

    async function loginMember(formData){

        const authCredential = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const result = authSchema.safeParse(authCredential) 

        if(!result.success){
            result.error.issues.forEach((issue) => {               
                toast.error(issue.message)
            })

        }else{

            const response = await login(formData)
            
            if(response.error == true){
                toast.error('Server Error Occured. Please try again') 
            }else{
                if(response.data.success_code == false){
                    toast.error(response.data.message)
                }else{
                    toast.success('Login Successful')
                    redirect('/home')
                }          
            }
        }
    }

    return (
        <>
            <form className="flex flex-col mt-3" action={loginMember}>
                <input type="text" name="email" className="border rounded-lg p-1 border-gray-800 py-2" placeholder="email" />
                <input type="password" name="password" className="border rounded-lg p-1 border-gray-800 mt-2 py-2" placeholder="password" />
                <button type="submit" className="bg-green-500 rounded-lg mt-8 text-white py-2" disabled={status.pending}>{status.pending ? 'PLEASE WAIT' : 'SIGN IN'}</button>
                <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />              
            </form>
        </>
    )
}

export default Login
