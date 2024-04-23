import privacypolicyData from "@/data/privacypolicyData.json"
import appsData from "@/data/appsData.json"
import { redirect } from "next/navigation";

function page({params}) {

    const app = privacypolicyData.apps.find(a => a.title.toLowerCase() === params.policyappname.toLowerCase());

    const appHero = appsData.apps.find(a => a.title.toLowerCase() === params.policyappname.toLowerCase());

    if (!app) {  
        redirect('/apps')
    }

  return (
    <>
    <div className="mt-32">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 bg-teal-400 h-auto md:m-16 m-8 rounded-md text-white shadow-lg">
              <div className="lg:col-span-5 md:col-span-3 sm:col-span-2 md:ml-24 ml-8 sm:mx-auto flex flex-col justify-center">
                  <div className="md:text-6xl text-4xl font-semibold">{appHero.title}</div>
                  <div className="md:text-xl text-lg mt-4">{appHero.progress} on Playstore</div>
              </div>
              <div className="flex flex-col justify-center items-center sm:h-auto bg-transparent p-4 m-4">
                  <img src={appHero.photo_path} className="sm:h-auto h-32 rounded-2xl" alt="APP Logo" />
              </div>
          </div>
        </div>

    <div className="mx-32 my-16">
      <div className="bg-green-200 px-16 rounded-3xl">
          <div className="flex flex-col items-center py-16">
            <span className="font-bold text-4xl">Privacy Policy of {app.title}</span>
          </div>
            <hr className="border-2 border-blue-second"/>
            <p className="py-8 text-slate-600">{app.intro}</p>
          <div className="py-8">
            <span className="text-2xl font-semibold">Information Collection and Use</span>
            <p className="pt-8 text-slate-600">{app.informationCollection.data}</p>
            {app.informationCollection.links.map(((link , index) => <a key={index} className="text-blue-600" href={link.url}>{link.name}</a>))}
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Log Data</span>
            <p className="py-8 text-slate-600">{app.logData}</p>
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Cookies</span>
            <p className="py-8 text-slate-600">{app.cookies}</p>
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Service Providers</span>
            <p className="pt-8 text-slate-600">{app.serviceProviders.reasons.map((reason , index) => <p key={index}>{reason}</p>)}</p>
            <p className="pb-8 text-slate-600">{app.serviceProviders.data}</p>
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Security</span>
            <p className="py-8 text-slate-600">{app.security}</p>
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Links to Other Sites</span>
            <p className="py-8 text-slate-600">{app.links}</p>
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Children&apos;s Privacy</span>
            <p className="py-8 text-slate-600">{app.childrensPrivacy}</p>
          </div>
          <div className="py-8">
            <span className="text-2xl font-semibold">Changes to This Privacy Policy</span>
            <p className="py-8 text-slate-600">{app.changes}</p>
          </div>
          <div className="pt-8 pb-8">
            <span className="text-2xl font-semibold">Contact Us</span>
            <p className="py-8 text-slate-600">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@tycoonhamlet.com.</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default page
