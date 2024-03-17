import AccordionTH from "@/components/Accordion";
import HeroSection from "@/components/HeroSection";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-100 p-12">
        <div>
          <HeroSection />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 min-h-screen">
          <div>
            <p className="text-black">Photo</p>
          </div>
          <div>
            <span className="bg-red-100 p-1 rounded text-red-700 font-medium my-4">About Tycoon Hamlet</span>
            <p className="my-4 font-extrabold text-black text-4xl">We Are Fully Integrated Digital Business</p>
            <p className="text-black pr-8 my-4 mr-16 leading-6 font-sans text-justify">Our company specializes in creating stunning, user-friendly websites that are tailored to meet the unique needs 
            of our clients. We offer a wide range of web development services, including website design, e-commerce development, 
            and custom web application development. Our team of experienced developers and designers work closely with clients 
            to understand their goals and create a website that will help them achieve success online. We pride ourselves on 
            delivering high-quality work and exceptional customer service. Whether you're a small startup or a large corporation, 
            we have the skills and expertise to help take your online presence to the next level.</p>
            <div className="mt-8">
                <Button outline gradientDuoTone="greenToBlue">
                    Get Started <span className='font-extrabold pl-2'>&#x2192;</span>
                </Button>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <AccordionTH />
          </div>
          <div className="sm:col-span-4">
            <p className="text-black">Hello</p>
          </div>
        </div>
      </div>
    </main>
  );
}
