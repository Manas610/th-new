import HeroSection from "../logos/components/HeroSection"
import ServiceSection from "./components/ServiceSection"
import appsData from "@/data/appsData.json"

function page() {
  return (
    <div className="my-36">
      <div>
        <HeroSection name="APP" />
        <div className="mx-16 my-16">
          <span className="text-4xl font-semibold lg:text-5xl underline underline-offset-8 lg:underline-offset-[16px]">
            Our Recent Project
          </span>
          <span className="lg:text-5xl text-4xl"> ✨</span>
        </div>
        <ServiceSection data={appsData.apps}  />
      </div>
    </div>
  )
}

export default page
