import "@/css/button.css"
import { redirect } from "next/navigation"
import Link from "next/link" 
import Rating from "../components/Rating"
import appsData from "@/data/appsData.json"
import Image from "next/image"

const page = ({params}) => {

    const app = appsData.apps.find(a => a.title.toLowerCase() === params.appname.toLowerCase());

    if (!app) {  
        redirect('/apps')
    }

    const url = `/apps/privacy-policy/${encodeURIComponent(app.title)}`; 

    const bgColors = ['bg-red-50', 'bg-green-50', 'bg-blue-50', 'bg-yellow-50'];
    const textColors = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'];

  return (
    <>
        <div className="mt-32">
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 bg-teal-400 h-auto md:m-16 m-8 rounded-3xl text-white shadow-lg">
                <div className="lg:col-span-5 md:col-span-3 sm:col-span-2 md:ml-24 ml-8 sm:mx-auto flex flex-col justify-center">
                    <div className="md:text-6xl text-4xl font-semibold">{app.title}</div>
                    <div className="md:text-xl text-lg mt-4">{app.progress} on Playstore</div>
                </div>
                <div className="flex flex-col justify-center items-center sm:h-auto bg-transparent p-4 m-4">
                    <img src={app.photo_path} className="sm:h-auto h-32 rounded-2xl" alt="APP Logo" />
                </div>
            </div>
        </div>

        <div className="sm:grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-16 lg:mx-24 mx-4 md:p-16 p-4 rounded-3xl bg-white flex flex-col">

            <div className="lg:col-span-2 md:col-span-1 items-start sm:mx-8">
                <span className="text-4xl font-semibold">Features</span>
                <ul className="list-disc pl-8 pt-8">
                    {app.features.map( (list , index) => (
                        <li key={index}>{list}</li>
                    ) )}
                </ul>
            </div>
            <div className="space-y-6 mx-auto">
                <div className="rounded-2xl shadow-four inline-block py-4 px-16">
                    <Rating rating={app.rating} />
                </div>
                <div className="block">
                    {/* <div className="text-white rounded-md bg-red-500 inline-block py-2 px-8">View on playstore</div> */}
                    <Image src={"/images/app/google-play-badge.png"} alt="Google-Play-Store" width={250} height={250} />
                </div>
                <div className="flex flex-col"> 
                    <span className="mb-2">Tags:</span> 
                    <div className="flex flex-wrap gap-2">
                        {app.tags.map((tag, index) => {
                            const bgColor = bgColors[index % 4];
                            const textColor = textColors[index % 4];
                            return (
                                <div key={index} className={`${bgColor} ${textColor} rounded-2xl px-2 py-1 inline-block`}> 
                                    {tag}
                                </div>
                            )})}
                    </div>
                </div>

                <div className="block">
                    <a href="https://github.com/Manas610/test-apk/raw/main/aadhaarBook.apk" download>
                        <button type="button" className="text-white rounded-md bg-blue-dark inline-block py-2 px-8">Download</button>
                    </a>
                </div>
                    <div className="block">
                        <Link href={url}>
                            <div className="text-white rounded-md button-pp inline-block py-2 px-8">Privacy Policy</div>
                        </Link>
                    </div>
            </div>

            <div className="md:px-16 px-8 pb-16 lg:col-span-3 md:col-span-2">
                <div className="text-4xl font-semibold">Description</div>
                <div className="py-8 sm:pr-16">{app.fdescription}</div>
                <div className="font-semibold">For support, contact at <a href={`mailto:support@tycoonhamlet.com`}>support@tycoonhamlet.com</a></div>
            </div>
        </div>

        <div className="my-8">
            <div className="md:mx-24 sm:mx-16 mx-4 py-16 rounded-3xl bg-white sm:px-16 flex flex-col justify-center items-center">
                <div className="sm:text-4xl text-2xl font-bold">Join Updates</div>
                <div className="my-4 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, doloribus.</div>
                <form className="flex flex-row space-x-8 md:gap-8 sm:gap-4 gap-1">
                    <input className="rounded-full border-slate-300 border sm:w-80 md:w-96 w-auto text-center" placeholder="Your Email" />
                    <button className="bg-blue-dark px-8 py-2 rounded-full text-white">Join</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default page;


