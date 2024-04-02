"use server"

import { cookies } from "next/headers";

export async function login(formData){

    const token = await getToken()

    if(token.error == true){
        const result = {'error':true,data:null}        
        return result;
    }

    const url  = process.env.DEALS_MIDDLEWARE+'api/rewards-login'
    const paylaod = {"email" : formData.get('email'),'password' :formData.get('password')}

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Authorization' : 'Bearer '+token.data,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
        body:JSON.stringify(paylaod),            
    })

    if(response.ok){

        const details = await response.json()

        if(details.success_code == false){

            const result = {'error':true,message:details.message}
            return result;
        }else{
            details.data.access_token = token.data
            const session = await setMerchantSession(details.data)
            const result = {'error':false,message:details.message}
            return result;
        }

    }else{
        const result = {'error':true,message:"Server error occured. Please try again"}        
        return result;
    }

}

async function getToken(){

    const url  = process.env.DEALS_MIDDLEWARE+'oauth/token'

    const paylaod = {"grant_type" : 'client_credentials','client_id' :process.env.CLIENT_ID,'client_secret': process.env.CLIENT_SECRET}

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
        body:JSON.stringify(paylaod),            
    })

    if(response.ok){
        const details = await response.json()
        let result = {'error':false,data:details.access_token}
        return result;
    }else{
        let result = {'error':true,data:null}
        return result;
    }
}

async function setMerchantSession(sessionData){

    const expire = new Date(Date.now() + 10 *1000)
    cookies().set('session', JSON.stringify(sessionData), {expire, httpOnly: true})
    
}

export async function getMerchantSession(){
    const session = cookies().get('session').value

    if(!session) {
        return null;
    }else{
        return JSON.parse(session)
    }
}

export async function validateQrCode(value){

    const sessionData = await getMerchantSession()

    const paylaod = {
        'reference_number' : value,
        'user_code' : sessionData.user_code,
        'option_type' : '1000',
        'token' : sessionData.token,
    }

    const url  = process.env.DEALS_MIDDLEWARE+'api/validate-voucher'

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+sessionData.access_token
    },
        body:JSON.stringify(paylaod),            
    })

    if(response.ok){
        const details = await response.json();
        if(details.success_code == true){
            let result = {'error':false,'data':details.data,'message': details.message}
            return result;
        }else{
            let result = {'error':true,'data':null,'message': details.message}
            return result;
        }
    }else{
        let result = {'error':true,'data':null,'message': 'Server error occured'}
        return result;
    }
}

export async function redeemQr(value){

    const sessionData = await getMerchantSession()

    const paylaod = {
        'reference_number' : value,
        'user_code' : sessionData.user_code,
        'option_type' : '1000',
        'token' : sessionData.token,
    }

    const url  = process.env.DEALS_MIDDLEWARE+'api/redeem-voucher'

    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+sessionData.access_token
    },
        body:JSON.stringify(paylaod),            
    })
console.log(paylaod)
    if(response.ok){
        const details = await response.json();
        if(details.success_code == true){
            let result = {'error':false,'data':details.data,'message': details.message}
            return result;
        }else{
            let result = {'error':true,'data':null,'message': details.message}
            return result;
        }
    }else{
        let result = {'error':true,'data':null,'message': 'Server error occured'}
        return result;
    }
}