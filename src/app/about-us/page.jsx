"use client"

import Image from "next/image";
import { FcCurrencyExchange , FcAssistant , FcIdea } from "react-icons/fc";

function page() {
  return (
    <div className="min-h-screen">
        <div className="my-32">
            <div className="bg-blue-dark h-72 flex flex-col justify-center items-center">
                <span className="text-white text-7xl font-semibold">About Us</span>
            </div>
        </div>

        <div className="lg:mx-16 md:mx-8 mx-4 md:grid lg:grid-cols-2 md:grid-cols-3 flex flex-col">
            <div className="lg:mx-16 md:mx-8 mx-4 mb-8 lg:col-span-1 md:col-span-1">
                <div className="flex flex-row justify-center">
                    <span className="bg-blue-light p-1 rounded md:px-6 font-medium my-4 text-blue-dark">About Us</span>
                </div>
                <div className="text-4xl font-bold">The Best Solutions for Best Business</div>
            </div>
            <div className="text-slate-600 sm:grid sm:grid-cols-2 flex flex-col gap-8 mb-8 mx-4 md:col-span-2 lg:col-span-1">
                <div className="col-span-1 text-justify">
                    <span>We are a team of experienced professionals who specialize in web development, app development, logo and branding, SEO optimization, digital marketing, and strategy and research.</span><br/><br/>
                    <span>Our company was founded on the principle of delivering high-quality work and exceptional customer service. We take pride in the results we achieve and we are committed to staying up-to-date with the latest industry trends and technologies.</span><br/>
                </div>
                <div className="col-span-1 text-justify">
                    <span>We understand that every client is unique and we work closely with them to understand their goals and create solutions that will help them achieve success online.</span><br/><br/>
                    <span>Whether you&apos;re a small startup or a large corporation, we have the skills and expertise to help take your online presence to the next level. We are dedicated to providing a personalized and responsive service to ensure our clients complete satisfaction.</span><br/>
                </div>
            </div>
        </div>

            <div className="lg:mx-16 md:mx-8 mx-4 my-16 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:gap-16 gap-8">

                <div className="bg-white hover:text-white group inline-block w-auto rounded-2xl h-auto hover:shadow-xl hover:shadow-slate-200 sevice-card-hover-effect">
                    <div className="my-8">
                        <div className="flex justify-center relative">
                            <div><FcIdea className="text-6xl" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col text-center pt-4 font-semibold text-lg">Quick Innovative Solution</div>
                    <div><p className="p-8 group-hover:text-white text-slate-600 text-justify">
                        We create innovative solutions that drive results and tailored to meet the unique needs of our clients.
                    </p></div>
                </div>

                <div className="bg-white hover:text-white group inline-block w-auto rounded-2xl h-auto hover:shadow-xl hover:shadow-slate-200 sevice-card-hover-effect">
                    <div className="my-8">
                        <div className="flex justify-center relative">
                            <div><FcCurrencyExchange className="text-6xl" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col text-center pt-4 font-semibold text-lg">Competitive Pricing</div>
                    <div><p className="p-8 group-hover:text-white text-slate-600 text-justify">
                        Our transparent and flexible pricing options make our services accessible to businesses of all sizes.
                    </p></div>
                </div>

                <div className="bg-white hover:text-white group inline-block w-auto rounded-2xl h-auto hover:shadow-xl hover:shadow-slate-200 sevice-card-hover-effect">
                    <div className="my-8">
                        <div className="flex justify-center relative">
                            <div><FcAssistant className="text-6xl" /></div>
                        </div>
                    </div>
                    <div className="flex flex-col text-center pt-4 font-semibold text-lg">Fast and Flexible Support</div>
                    <div><p className="p-8 group-hover:text-white text-slate-600 text-justify">
                        We provide fast and flexible support to ensure that our clients&apos; needs are met in a timely manner.
                    </p></div>
                </div>
            </div>

            <div className="lg:mx-16 md:mx-8 mx-4 ">
                <div className="md:grid md:grid-cols-2 gap-8 mx-8 flex flex-col">
                    <div><Image src={"/images/about-us/about-us.png"} width={600} height={600} /></div>
                    <div>
                        <div className="flex flex-row justify-center">
                            <span className="bg-blue-light p-1 rounded md:px-6 font-medium my-4 text-blue-dark">Our Mission</span>
                        </div>
                        <div className="text-4xl font-bold sm:px-16 px-4 my-4">Beyond conventional Businesses.</div>
                        <div className="text-justify font-sans sm:px-16 px-4 my-8 text-slate-600">Our mission is to help businesses succeed online by providing high-quality web development, app development, 
                        logo and branding, SEO optimization, digital marketing, and strategy and research services. We are dedicated to 
                        delivering innovative solutions that drive results and are tailored to meet the unique needs of our clients.</div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 mx-8 flex flex-col">
                    <div className="text-justify font-sans sm:px-16 px-4 my-8 text-slate-600 flex flex-row justify-center items-center md:order-1 order-2">Our team of experienced developers and designers work closely with clients to understand their 
                    goals and create cutting-edge websites, apps and digital marketing campaigns that drive results. 
                    We pride ourselves on providing exceptional customer service and are committed to meeting or exceeding 
                    the expectations of our clients. We strive to stay up-to-date with the latest industry trends and 
                    technologies and strive to continuously improve our services.</div>
                    <div className="md:order-2 order-1"><Image src={"/images/about-us/our-mission.png"} width={500} height={500} /></div>
                </div>
            </div>

    </div>
  )
}

export default page
