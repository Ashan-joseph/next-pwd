import React from 'react'

const ReportCard = ({voucher}) => {

    return (
        <>            
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold text-center">Ref No: {voucher.voucher_ref_no}</h2>                   
                    <div>                        
                        <div className="mt-2 mb-4 text-center">
                            Product Type: {voucher.product_name}<br/>
                            Merchant: {voucher.merchant}<br/>
                            Denomination: {voucher.denomination}<br/>
                            Location: {voucher.redeem_location}<br/>
                            Redeem date: {voucher.redeemed_date}<br/>
                            Reference No: {voucher.transaction_ref_no}<br/>
                            {/* Created date: {voucher.created_at} */}
                        </div>
                    </div>     
            </div>           
        </>
    )
}

export default ReportCard
