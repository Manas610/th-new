import Image from "next/image"
import ServiceSection from "@/app/portfolio/logos/components/ServiceSection"

function page() {
  return (
    <div>
        <div className="min-h-screen">
            <div className="mt-60 mb-36 py-32 glassmorphism animated-gradient grid gap-4 grid-cols-4">
                <span className="text-8xl flex flex-col text-center col-span-3">Logo Portfolio</span>
                <div>
                    <Image className="heroSectionPic col-span-1" src="/images/laptop.jpeg" width={100} height={100}/>
                </div>
            </div>
            <div className="mx-16 my-16">
                <span className="text-black text-6xl underline underline-offset-[16px]">Our Recent Project</span>
                <span className="text-6xl"> ✨</span>
            </div>
            <ServiceSection />
            <div className="flex flex-col justify-center items-center my-16">
                <button className="bg-red-500 rounded px-4 py-2">Get A logo Now</button>
            </div>
            <div className="mx-16 my-16">
                <span className="text-black text-6xl underline underline-offset-[16px]">Our App Logos</span>
                <span className="text-6xl"> 📱</span>
            </div>
            <ServiceSection />
            <div className="flex flex-col justify-center items-center my-16">
                <button className="bg-red-500 rounded px-4 py-2">Get A logo Now</button>
            </div>
            <div className="mx-16 my-16">
                <span className="text-black text-6xl underline underline-offset-[16px]">Brand Logos</span>
                <span className="text-6xl"> 🛍️</span>
            </div>
            <ServiceSection />
            <div className="flex flex-col justify-center items-center my-16">
                <button className="bg-red-500 rounded px-4 py-2">Get A logo Now</button>
            </div>
            <div className="mx-16 my-16">
                <span className="text-black text-6xl underline underline-offset-[16px]">Website Logos</span>
                <span className="text-6xl"> 🖥️</span>
            </div>
            <ServiceSection />
            <div className="flex flex-col justify-center items-center my-16">
                <button className="bg-red-500 rounded px-4 py-2">Get A logo Now</button>
            </div>
        </div>
    </div>
  )
}

export default page
