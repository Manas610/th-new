import { redirect } from "next/navigation"
import Rating from "../components/Rating"
import appsData from "@/data/appsData.json"

const page = ({params}) => {

    const app = appsData.apps.find(a => a.title.toLowerCase() === params.appname.toLowerCase());

    if (!app) {  
        redirect('/portfolio/apps')
    }

  return (
    <div className="min-h-screen">
        <div className="grid grid-cols-6 gap-4 mt-32 bg-slate-400 h-60">
            <div className="col-span-5 ml-24 flex flex-col justify-center">
                <div className="text-6xl">{app.title}</div>
                <div className="text-xl mt-4">{app.progress} On play Store</div>
            </div>
            <div className="flex flex-col justify-center">Photo</div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-32 ml-24">
            <div className="col-span-2">
                <span className="text-4xl font-semibold">Features</span>
                <ul className="list-disc pl-8 pt-8">
                    {app.features.map( (list , index) => (
                        <li key={index}>{list}</li>
                    ) )}
                </ul>
            </div>
            <div className="col-span-1 space-y-6">
                <div className="border-2 border-slate-800 inline-block py-2 px-1">
                    <Rating rating={app.rating} />
                </div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-1">View on playstore</div>
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
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-1">Download</div>
                </div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-1">Privacy Policy</div>
                </div>
            </div>
        </div>

        <div className="pl-24 pb-16">
            <div className="text-4xl font-semibold">Description</div>
            <div className="py-8 pr-16">{app.fdescription}</div>
            <div className="font-semibold">For support, contact at support@tycoonhamlet.com</div>
        </div>

        <hr className="border"/>
        <div className="flex flex-col justify-center items-center my-16">
            <div className="text-4xl">Join Updates</div>
            <div className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, doloribus.</div>
            <form className="flex flex-row space-x-8">
                <input className="rounded-md border-black border" placeholder=" Your Email" />
                <button className="bg-red-500 px-4 py-2 rounded-full text-white">Join</button>
            </form>
        </div>
    </div>
  )
}

export default page;


