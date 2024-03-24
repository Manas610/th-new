import { FaLaptop } from "react-icons/fa6";
import { AiOutlineMobile } from "react-icons/ai";

function ServiceSection() {
  return (
    <div className="mb-12">
        <div className="flex justify-center pb-8">
            <span className="font-medium p-1 px-6 text-center text-red-700 bg-red-100 rounded inline-block">
                Our Services
            </span>
        </div>
        <div className="mb-16">
            <p className="text-black flex flex-col text-center text-4xl font-bold">
                The Range of Services That we Provide
            </p>
        </div>  
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 lg:m-8">
            <div className="bg-blue-600 inline-block w-auto rounded h-80 hover:shadow-xl shadow-black">
                <div className="my-4"><FaLaptop className="text-6xl mx-auto" /></div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">Web Development</div>
                <div><p className="p-4">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
            </div>
            <div className="bg-yellow-300 inline-block w-auto rounded h-80 hover:shadow-xl shadow-black">
                <div className="my-4"><AiOutlineMobile className="text-6xl mx-auto"/></div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">App Development</div>
                <div><p className="p-4">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
            </div>
            <div className="bg-green-400 inline-block w-auto rounded h-80 hover:shadow-xl shadow-black">
                <div className="my-4"><span className="text-6xl flex flex-col text-center">Logo</span></div>
                <div className="flex flex-col text-center pt-4 font-semibold text-lg">Logo Designing</div>
                <div><p className="p-4">
                We design and develop mobile apps that are user-friendly and visually appealing
                 to give a seamless experience to the users.
                </p></div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection
