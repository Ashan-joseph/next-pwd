'use client'
import React, { useEffect, useState } from 'react'
import { getReportData,logout } from '../action'
import ReportCard from '../components/ReportCard'
import { useRouter  } from "next/navigation"

export default  function page() {

    const router = useRouter();

    async function logoutUser() {
        await logout()
        router.push("/")
    }

    const[params,setParams] = useState({
        start_date:'',
        end_date:'',
        voucher_reference:''
    })

    const [data,setData] = useState({
        error:null,
        data:null
    })

    useEffect(() => {
        async function fetchData() {
            const response = await getReportData(params)
            setData(response)
        }
        fetchData()
    },[params])

    return (
        <div>
            <nav className=" bg-blue-900 py-4 ">
                <div className="px-3 text-right">  
                    <input type='text' 
                        className='border rounded-lg p-1 border-black-700 bg-blue-900 text-white' 
                        value={params.voucher_reference} 
                        onChange={(e) => setParams({...params,voucher_reference: e.target.value})} 
                        placeholder='Search by reference no'
                    />                  
                    <button  onClick={logoutUser} className='text-white ml-4 mr-10'>Logout</button >                                         
                </div>
            </nav>
            
            <div className="max-w-xl items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {data.error == false ? 
                        data.data.map((voucher,index) => <ReportCard key={index} voucher={voucher}/> )                    
                    : 
                    <>
                        {data.error == true ? "No redemptions found": "Loading ..."}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

