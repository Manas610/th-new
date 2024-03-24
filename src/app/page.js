'use client'
import AccordionTH from "@/components/Accordion";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import '@/css/button.css'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="p-12">
        <div>
          <HeroSection />
        </div>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 pb-32">
          <div>
            {/* <p className="text-black">Photo</p> */}
            <Image className="heroSectionPic" src="/images/laptop.jpeg" width={800} height={800} />
          </div>
          <div>
            <span className="bg-red-100 p-1 rounded md:px-6 text-red-700 font-medium my-4">About Tycoon Hamlet</span>
            <p className="my-4 font-extrabold text-black text-4xl">We Are Fully Integrated Digital Business</p>
            <p className="text-black md:pr-8 my-4 mr-16 leading-6 font-sans text-justify">Our company specializes in creating stunning, 
            user-friendly websites that are tailored to meet the unique needs 
            of our clients. We offer a wide range of web development services, including website design, e-commerce development, 
            and custom web application development. Our team of experienced developers and designers work closely with clients 
            to understand their goals and create a website that will help them achieve success online. We pride ourselves on 
            delivering high-quality work and exceptional customer service. Whether {"you're"} a small startup or a large corporation, 
            we have the skills and expertise to help take your online presence to the next level.</p>
            <div className="mt-8">
              <button className="wave-button relative overflow-hidden bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block">
                Get Started &#10132;
              </button>
            </div>
          </div>
        </div>
        <div>
          <ServiceSection />
        </div>
        <div className="grid gap-4 sm:grid-cols-12 my-32">
          <div className="sm:col-span-7">
            <AccordionTH />
          </div>
          <div className="sm:col-span-5">
            {/* <p className="text-black">Hello</p> */}
            <Image className="heroSectionPic" src="/images/laptop.jpeg" width={800} height={800} />
          </div>
        </div>
      </div>
    </main>
  );
}
