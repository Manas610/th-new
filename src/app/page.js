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
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 pb-32 md:mx-16">
          <div>
            <Image className="rounded-lg" src="/images/home/tycoon-office-2.jpeg" alt="Hero pic 2" width={800} height={800} />
          </div>
          <div className="my-auto">
            <span className="bg-blue-light p-1 rounded md:px-6 text-blue-dark font-medium my-4">About Tycoon Hamlet</span>
            <p className="my-4 font-extrabold text-black text-4xl">We Are Fully Integrated Digital Business</p>
            <p className="text-slate-600 md:pr-8 my-4 leading-6 font-sans text-justify">Our company specializes in creating stunning, 
            user-friendly websites that are tailored to meet the unique needs 
            of our clients. We offer a wide range of web development services, including website design, e-commerce development, 
            and custom web application development. Our team of experienced developers and designers work closely with clients 
            to understand their goals and create a website that will help them achieve success online. We pride ourselves on 
            delivering high-quality work and exceptional customer service. Whether {"you're"} a small startup or a large corporation, 
            we have the skills and expertise to help take your online presence to the next level.</p>
            <div className="mt-8">
              <button className="wave-button relative overflow-hidden bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block">
                Get Started &#10132;
              </button>
            </div>
          </div>
        </div>
        <div className="sm:mx-16">
          <ServiceSection />
        </div>
        <div className="grid gap-16 md:grid-cols-12 my-32 md:mx-16">
          <div className="sm:col-span-5 my-auto">
            <Image className="heroSectionPic" src="/images/laptop.jpeg" alt="Hero Pic 1" width={800} height={800} />
          </div>
          <div className="sm:col-span-7">
            <AccordionTH />
          </div>
        </div>
      </div>
    </main>
  );
}
