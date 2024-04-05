import React from 'react'

const ReportCard = ({voucher}) => {

    return (
        <>            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold text-center">Ref No: {voucher.voucher_ref_no}</h2> <hr />               
                    <div>                        
                        <div className="mt-2 mb-4 text-center">                           
                                <div>Product Type: {voucher.product_name}</div>                                   
                                <div className="col-start-3">Denomination: {voucher.denomination}</div>                                    
                                <div>Reference No: {voucher.transaction_ref_no}</div>
                                <div>Redeem date: {voucher.redeemed_date}</div>                      
                        </div>
                    </div>     
            </div>           
        </>
    )
}

export default ReportCard
