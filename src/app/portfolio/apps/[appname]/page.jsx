import { redirect } from "next/navigation"
import Rating from "../components/Rating"
import appsData from "@/data/appsData.json"

const page = ({params}) => {

    const app = appsData.apps.find(a => a.title.toLowerCase() === params.appname.toLowerCase());

    if (!app) {  
        redirect('/portfolio/apps')
    }

  return (
    <div>
        <div className="mt-32">
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 bg-teal-400 h-auto md:m-16 m-8 rounded-md text-white shadow-lg">
                <div className="lg:col-span-5 md:col-span-3 sm:col-span-2 md:ml-24 ml-8 sm:mx-auto flex flex-col justify-center">
                    <div className="md:text-6xl text-4xl font-semibold">{app.title}</div>
                    <div className="md:text-xl text-lg mt-4">{app.progress} on Playstore</div>
                </div>
                <div className="flex flex-col justify-center items-center sm:h-auto bg-sky-100 p-4 m-4 rounded-md shadow-lg">
                    <img src={app.photo_path} className="sm:h-auto h-32" alt="APP Logo" />
                </div>
            </div>
        </div>

        <div className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-8 my-32 lg:mx-24 px-8 flex flex-col">

            <div className="md:col-span-2 sm:col-span-1 items-start sm:mx-8">
                <span className="text-4xl font-semibold">Features</span>
                <ul className="list-disc pl-8 pt-8">
                    {app.features.map( (list , index) => (
                        <li key={index}>{list}</li>
                    ) )}
                </ul>
            </div>
            <div className="space-y-6 mx-auto">
                <div className="rounded-md shadow-lg bg-white border-slate-800 inline-block py-4 px-16">
                    <Rating rating={app.rating} />
                </div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-8">View on playstore</div>
                </div>
                <div className="flex flex-col"> 
                    <span className="mb-2">Tags:</span> 
                    <div className="flex flex-wrap gap-2">
                        {app.tags.map((tag, index) => (
                        <div key={index} className="bg-slate-400 rounded-lg px-2 text-white py-1 inline-block"> 
                            {tag}
                        </div>
                        ))}
                    </div>
                </div>

                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-8">Download</div>
                </div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-8">Privacy Policy</div>
                </div>
            </div>
        </div>

        <div className="md:px-16 px-8 pb-16">
            <div className="text-4xl font-semibold">Description</div>
            <div className="py-8 pr-16">{app.fdescription}</div>
            <div className="font-semibold">For support, contact at <a href={`mailto:support@tycoonhamlet.com`}>support@tycoonhamlet.com</a></div>
        </div>

        <hr className="border"/>
        <div className="flex flex-col justify-center items-center my-16">
            <div className="sm:px-16 px-4 py-8 border border-slate-600 rounded-md bg-white sm:mx-auto">
                <div className="sm:text-4xl text-2xl font-bold">Join Updates</div>
                <div className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, doloribus.</div>
                <form className="flex flex-row space-x-8 gap-8">
                    <input className="rounded-lg border-black border sm:w-96 w-auto" placeholder=" Your Email" />
                    <button className="bg-red-500 px-8 py-2 rounded-full text-white">Join</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default page;


