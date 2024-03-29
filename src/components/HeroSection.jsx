"use client"

import '@/css/button.css'
import Image from 'next/image'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="min-h-screen grid gap-4 sm:grid-cols-2 pt-12">
        <div className="justify-center items-center flex flex-col md:p-12 py-12">
            <div>
                <h1 className="text-6xl font-bold leading-tight px-4 pb-8">Elevate your brand with a Custom Website</h1>
                <p className="pl-4 text-lg text-slate-500">Unleash the power of web for your business with our innovative web solutions and our best in class digital sevices</p>
            </div>
            <Link href="https://tycoonhamlet.com" target='_blank' className="mt-8">
                <button className="wave-button relative overflow-hidden bg-red-500 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline inline-block">
                    Get Started &#10132;
                </button>
            </Link>
        </div>
        <div className="relative hidden blob-container sm:block">
            <Image className="heroSectionPic" src="/images/laptop.jpeg" width={800} height={800}/>
        </div>
    </div>
  )
}

export default HeroSection
