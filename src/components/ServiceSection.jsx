import { FaLaptop } from "react-icons/fa6";
import { AiOutlineMobile } from "react-icons/ai";
import { TbBrandItch } from "react-icons/tb";

import Link from "next/link";

function ServiceSection() {
  return (
    <div className="mb-12">
        <div className="flex justify-center pb-8">
            <span className="font-medium p-1 px-6 text-center text-blue-dark bg-blue-light rounded inline-block">
                Our Services
            </span>
        </div>
        <div className="mb-16 flex flex-col text-center ">
            <span className="text-4xl font-bold">
                The Range of <span className="underline-main">Services</span> That we Provide
            </span>
        </div>  
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:gap-16 gap-8">

        {/* website card */}

            <div className="bg-sky-100 inline-block w-auto rounded-2xl h-auto hover:shadow-four ease-linear duration-200 hover:shadow-slate-200">
                <div className="my-8">
                    <div className="flex justify-center relative blob-container-sm-web">
                        <FaLaptop className="text-5xl mx-auto z-10 text-white" />
                    </div>
                </div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">Web Development</div>
                <div><p className="p-8 text-slate-600 text-justify">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
                <div className="py-4 flex flex-col items-center">
                    <Link href="/websites">
                    <button type="button" className="text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800">
                        View More
                    </button>
                    </Link>
                </div>
            </div>

            {/* app card */}

            <div className="bg-red-100 inline-block w-auto rounded-2xl h-auto hover:shadow-four ease-linear duration-200 hover:shadow-slate-200">
                <div className="my-8">
                    <div className="flex justify-center relative blob-container-sm-app">
                        <AiOutlineMobile className="text-5xl mx-auto z-10 text-white"/>
                    </div>
                </div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">App Development</div>
                <div><p className="p-8 text-slate-600 text-justify">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
                <div className="py-4 flex flex-col items-center">
                <Link href="/apps">
                    <button type="button" className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800">
                        View More
                    </button>
                </Link>
                </div>
            </div>

            {/* logo card */}

            <div className="bg-green-100 inline-block w-auto rounded-2xl h-auto hover:shadow-four ease-linear duration-200 hover:shadow-slate-200">
                <div className="my-8">
                    <div className="flex justify-center relative blob-container-sm-logo">
                        <TbBrandItch className="text-5xl mx-auto z-10 text-white"/>
                    </div>
                </div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">Logo Designing</div>
                <div><p className="p-8 text-slate-600 text-justify">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
                <div className="py-4 flex flex-col items-center">
                <Link href="/logos">
                    <button type="button" className="text-green-400 hover:text-white border border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        View More
                    </button>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection
