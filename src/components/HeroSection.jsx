"use client"

import { Button } from 'flowbite-react';

function HeroSection() {
  return (
    <div className="min-h-screen grid gap-4 sm:grid-cols-2">
        <div className="justify-center items-center flex flex-col md:p-12">
            <div className="text-black">
                <p className="text-4xl font-bold">Elevate your brand with a Custom Website</p>
                <p>Unleash the power of web for your business with our innovative web solutions and our best in class digital sevices</p>
            </div>
            <div className="mt-8">
                <Button outline gradientDuoTone="greenToBlue">
                    Get Started <span className='font-extrabold pl-2'>&#x2192;</span>
                </Button>
            </div>
        </div>
        <div className="hidden sm:block">
            <p className="text-black">Hello there?</p>
        </div>
    </div>
  )
}

export default HeroSection
