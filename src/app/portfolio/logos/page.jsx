import ServiceSection from "@/app/portfolio/logos/components/ServiceSection";
import HeroSection from "./components/HeroSection";
import servicedata from "@/data/serviceData.json"

function page() {
  return (
    <div>
      <div className="min-h-screen">
        <HeroSection name="LOGO"/>
        <div className="mx-16 my-16">
          <span className="text-4xl font-semibold lg:text-5xl underline underline-offset-8 lg:underline-offset-[16px]">
            Our Recent Project
          </span>
          <span className="lg:text-5xl text-4xl"> ✨</span>
        </div>
        <ServiceSection data={servicedata}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-red-500 rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>
        <div className="mx-16 my-16">
          <span className="text-black text-4xl font-semibold lg:text-5xl underline underline-offset-8 lg:underline-offset-[16px]">
            Our App Logos
          </span>
          <span className="lg:text-5xl text-4xl"> 📱</span>
        </div>
        <ServiceSection data={servicedata}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-red-500 rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>
        <div className="mx-16 my-16">
          <span className="text-black text-4xl font-semibold lg:text-5xl underline underline-offset-8 lg:underline-offset-[16px]">
            Brand Logos
          </span>
          <span className="lg:text-5xl text-4xl"> 🛍️</span>
        </div>
        <ServiceSection data={servicedata}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-red-500 rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>
        <div className="mx-16 my-16">
          <span className="text-black text-4xl font-semibold lg:text-5xl underline underline-offset-8 lg:underline-offset-[16px]">
            Website Logos
          </span>
          <span className="lg:text-6xl text-4xl"> 🖥️</span>
        </div>
        <ServiceSection data={servicedata}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-red-500 rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
