"use client"

import '@/css/button.css'
import Link from 'next/link'
import { TbBrandAppgallery } from 'react-icons/tb';

function HeroSection() {
  return (
    <div className="min-h-screen grid gap-4 sm:grid-cols-2 pt-12">
        <div className="justify-center items-center flex flex-col md:p-12 py-12">
            <div>
                <h1 className="md:text-6xl text-4xl font-bold leading-tight px-4 pb-8">Elevate your brand with a Custom Website</h1>
                <p className="pl-4 text-lg text-slate-500">Unleash the power of web for your business with our innovative web solutions and our best in class digital sevices</p>
            </div>
            <Link href="https://tycoonhamlet.com" target='_blank' className="mt-8">
                <button className="wave-button relative overflow-hidden bg-blue-dark text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline inline-block">
                    Get Started &#10132;
                </button>
            </Link>
        </div>
        {/* <div className="relative hidden blob-container sm:block py-8">
            <Image className="heroSectionPic" src="/images/laptop.jpeg" width={800} height={800}/>
        </div> */}
        <div className="relative blob-container hidden sm:block py-8">
            <div className="z-10 relative">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="rounded-lg shadow-md overflow-hidden group cursor-pointer">
                            <div className="flex justify-center items-center h-48 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <TbBrandAppgallery className="text-6xl text-black group-hover:text-white" />
                            </div>
                            <div className="p-4 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <p className="text-xl font-semibold text-black group-hover:text-white flex justify-center">Card {item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10"></div>
        </div>

    </div>
  )
}

export default HeroSection
