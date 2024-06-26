import ServiceSection from "@/app/logos/components/ServiceSection";
import HeroSection from "./components/HeroSection";
import appLogoData from "@/data/logos/appLogoData.json"
import brandLogoData from "@/data/logos/brandLogoData.json"
import websiteLogoData from "@/data/logos/websiteLogoData.json"

function page() {
  return (
    <div>
      <div className="min-h-screen">
        <HeroSection name="LOGO &amp; BRANDING" image1={"/images/logo/hero_1.png"} image2={"/images/logo/hero_2.png"}/>
        {/* <div className="mx-16 my-16">
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

        <hr className="border mx-16 my-24"/> */}

        <div className="mx-16 my-16">
          <span className="text-black text-4xl font-semibold lg:text-5xl underline-main">
            App Logos
          </span>
          <span className="lg:text-5xl text-4xl"> 📱</span>
        </div>
        <ServiceSection data={appLogoData}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-blue-dark rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>

        <hr className="border mx-16 my-16"/>

        <div className="mx-16 my-16">
          <span className="text-black text-4xl font-semibold lg:text-5xl underline-main">
            Brand Logos
          </span>
          <span className="lg:text-5xl text-4xl"> 🛍️</span>
        </div>
        <ServiceSection data={brandLogoData}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-blue-dark rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>

        <hr className="border mx-16 my-16"/>

        <div className="mx-16 my-16">
          <span className="text-black text-4xl font-semibold lg:text-5xl underline-main">
            Website Logos
          </span>
          <span className="lg:text-5xl text-4xl"> 🖥️</span>
        </div>
        <ServiceSection data={websiteLogoData}/>
        <div className="flex flex-col justify-center items-center my-16">
          <button className="bg-blue-dark rounded px-4 py-2 text-white">
            Get A logo Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
