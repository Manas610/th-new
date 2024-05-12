import HeroSection from "../logos/components/HeroSection"
import CarouselTH from "./components/Carousel";
import websitesData from "@/data/websitesData.json";

const page = () => {
  return (
    <div>
        <HeroSection name="WEB - PORTFOLIO" image1={"/images/web/laptop-pic.png"} image2={"/images/web/hero-2.png"}/>
        <div className="md:mx-16 my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {websitesData.map((card) => (
                <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="w-full relative group">
                        <CarouselTH />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
                        <p className="mb-4">{card.description}</p>
                        <a href={card.url} className="inline-block bg-blue-dark text-white px-6 py-2 rounded">Visit</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default page;
