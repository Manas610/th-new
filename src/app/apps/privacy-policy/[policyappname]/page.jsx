import privacypolicyData from "@/data/privacypolicyData.json"
import { redirect } from "next/navigation";

function page({params}) {

    const app = privacypolicyData.apps.find(a => a.title.toLowerCase() === params.policyappname.toLowerCase());

    if (!app) {  
        redirect('/apps')
    }

  return (
    <div className="mx-32 my-32">
      <div className="bg-green-200 px-16 rounded-3xl">
          <div className="flex flex-col items-center py-16">
            <span className="font-bold text-4xl">Privacy Policy of {app.title}</span>
          </div>
            <hr className="border"/>
            <p className="py-8 text-slate-600">{app.intro}</p>
          <div className="py-8">
            <span className="text-2xl font-semibold">Information Collection and Use</span>
            <p className="pt-8 text-slate-600">{app.informationCollection.data}</p>
            {app.informationCollection.links.map((link => <a className="text-blue-600" href={link.url}>{link.name}</a>))}
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
            <p className="pt-8 text-slate-600">{app.serviceProviders.reasons.map(reason => <p>{reason}</p>)}</p>
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
  )
}

export default page
