"use client"

import '@/css/button.css'
import Link from 'next/link'
import Image from "next/image";
import Counter from './Counter';

function HeroSection() {
  return (
    <div className="min-h-screen grid gap-4 sm:grid-cols-2 pt-12">
        <div className="animated-div justify-center items-center flex flex-col md:p-12 py-12">
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
        <div className="relative blob-container hidden sm:block py-8">
            <div className="z-10 relative">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        
                        <div className="rounded-lg shadow-md overflow-hidden group cursor-pointer">
                            <div className="flex justify-center items-center h-48 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                {/* <span className="text-8xl text-black group-hover:text-white">6+</span> */}
                                <Counter end={6} duration={500} /><span className="text-8xl text-black group-hover:text-white">+</span>
                            </div>
                            <div className="p-4 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <p className="text-xl font-semibold text-black group-hover:text-white flex justify-center">Applications</p>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-md overflow-hidden group cursor-pointer">
                            <div className="flex justify-center items-center h-48 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <Image className="animated-image" src="/images/home/graph1.png" width={150} height={150}/>
                            </div>
                            <div className="p-4 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <p className="text-xl font-semibold text-black group-hover:text-white flex justify-center">Growth</p>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-md overflow-hidden group cursor-pointer">
                            <div className="flex justify-center items-center h-48 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <Image className="animated-image" src="/images/home/digital.png" width={200} height={200}/>
                            </div>
                            <div className="p-4 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <p className="text-xl font-semibold text-black group-hover:text-white flex justify-center">Digital Presence</p>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-md overflow-hidden group cursor-pointer">
                            <div className="flex justify-center items-center h-48 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                {/* <span className="text-8xl text-black group-hover:text-white">10+</span> */}
                                <Counter end={10} duration={500} /><span className="text-8xl text-black group-hover:text-white">+</span>
                            </div>
                            <div className="p-4 bg-white group-hover:bg-blue-dark transition-colors duration-500">
                                <p className="text-xl font-semibold text-black group-hover:text-white flex justify-center">Websites</p>
                            </div>
                        </div>

                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full -z-10"></div>
        </div>

    </div>
  )
}

export default HeroSection
