
import Image from 'next/image'
import Link from 'next/link'
import Login from './components/Login'
import Navbar from './components/Navbar'

export default async function Home() {

  return (
    <>
    <Navbar />
      <div className="max-w-lg items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-center">
            <Image src="/rewardzpay.png" width={200} height={120} alt="rewardzpay"/>
          </div>
            <Login/>
          <div className="flex flex-col">
            <Link href='/signup' className="bg-white-500 border border-green-600 rounded-lg text-black py-2"><div className='flex items-center justify-center'>SIGN UP</div></Link>        
          </div>          
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Knightsbridge Technologies. All rights reserved.
        </p>
      </div>
    </>
  )
}
