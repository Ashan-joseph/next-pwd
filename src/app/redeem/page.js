'use client'
import {useEffect, useState, React} from 'react'
import { Html5QrcodeScanner } from "html5-qrcode";
import Navbar from '../components/Navbar';
import {toast} from 'react-hot-toast'
import { validateQrCode } from '../action';
import QrSuccess from '../components/QrSuccess';
import QrFail from '../components/QrFail';
import { Audio } from 'react-loader-spinner'

const page = () => {

    const [scanResult, setScanResult] = useState({
        'error' : null,
        'data': null,
        'message' : null
    })

    const [qrCode, setqrCode] = useState(null)

    useEffect(() =>{
        const scanner = new Html5QrcodeScanner('reader',{
            qrbox:{
            width: 10000,
            height:10000
            },
            fps: 2,
        })

        scanner.render(success,error)

        async function success(result){
            scanner.clear()
            const response = await validateQrCode(result)
            setScanResult(response)
            setqrCode(result)
        }

        function error(error){
            //toast.error('An error Occured')
        }
    },[])

    return (
        <>
            <Navbar />
            <div className="max-w-lg items-center justify-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div id="reader">
                    </div> 
                        {scanResult.error == null ? <ProgressBar height="80"width="80"radius="9"color="green"ariaLabel="loading"  wrapperStyle={{}} wrapperClass="" />
                            : 
                        <>
                            {scanResult.error == true ?  <QrFail props={scanResult} /> :  <QrSuccess props={scanResult} qrcode={qrCode} status={1}/>}
                        </> }                
                </div>     
            </div>
        </>

    )
}

export default page
