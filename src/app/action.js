"use server"
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
        const result = {'error':false,data:details}
        return result;
    }else{
        const result = {'error':true,data:null}        
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