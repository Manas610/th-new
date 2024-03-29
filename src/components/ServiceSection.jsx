import { FaLaptop } from "react-icons/fa6";
import { AiOutlineMobile } from "react-icons/ai";
import { TbBrandItch } from "react-icons/tb";

import Link from "next/link";

function ServiceSection() {
  return (
    <div className="mb-12">
        <div className="flex justify-center pb-8">
            <span className="font-medium p-1 px-6 text-center text-red-700 bg-red-100 rounded inline-block">
                Our Services
            </span>
        </div>
        <div className="mb-16">
            <p className="flex flex-col text-center text-4xl font-bold">
                The Range of Services That we Provide
            </p>
        </div>  
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 lg:m-8">
            <div className="bg-blue-100 inline-block w-auto rounded h-80 hover:shadow-xl hover:shadow-slate-200">
                <div className="my-8">
                    <div className="flex justify-center relative blob-container-sm-web">
                        <FaLaptop className="text-5xl mx-auto z-10 text-white" />
                    </div>
                </div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">Web Development</div>
                <div><p className="p-8 text-slate-700">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
            </div>
            <Link href="/portfolio/apps">
            <div className="bg-red-100 inline-block w-auto rounded h-80 hover:shadow-xl hover:shadow-slate-200">
                <div className="my-8">
                    <div className="flex justify-center relative blob-container-sm-app">
                        <AiOutlineMobile className="text-5xl mx-auto z-10 text-white"/>
                    </div>
                </div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">App Development</div>
                <div><p className="p-8 text-slate-700">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
            </div>
            </Link>
            <Link href="/portfolio/logos">
            <div className="bg-green-100 inline-block w-auto rounded h-80 hover:shadow-xl hover:shadow-slate-200">
                <div className="my-8">
                    <div className="flex justify-center relative blob-container-sm-logo">
                        <TbBrandItch className="text-5xl mx-auto z-10 text-white"/>
                    </div>
                </div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">Logo Designing</div>
                <div><p className="p-8 text-slate-700">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default ServiceSection
