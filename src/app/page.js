
import Image from 'next/image'
import Link from 'next/link'
import Login from './components/Login'
import Navbar from './components/Navbar'

export default async function Home() {

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <div className="flex items-center justify-center">
            <Image src="/rewardzpay.png" width={200} height={120} alt="rewardzpay" priority/>
          </div>
            <Login/>
          <div className="flex flex-col">
            <Link href='/signup' className="bg-white-500 border border-green-600 rounded-lg text-black py-2"><div className='flex items-center justify-center'>SIGN UP</div></Link>        
          </div>
        </div>
      </div>
    </>
  )
}
