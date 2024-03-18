"use client"

import '@/css/button.css'

function HeroSection() {
  return (
    <div className="min-h-screen grid gap-4 sm:grid-cols-2">
        <div className="justify-center items-center flex flex-col md:p-12">
            <div className="text-black">
                <p className="text-4xl font-bold">Elevate your brand with a Custom Website</p>
                <p>Unleash the power of web for your business with our innovative web solutions and our best in class digital sevices</p>
            </div>
            <div className="mt-8">
                <button className="wave-button relative overflow-hidden bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block">
                    Get Started &#10132;
                </button>
            </div>
        </div>
        <div className="hidden sm:block">
            <p className="text-black">Photo</p>
        </div>
    </div>
  )
}

export default HeroSection
