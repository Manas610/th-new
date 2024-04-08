import privacypolicyData from "@/data/privacypolicyData.json"

function page({params}) {

    const app = privacypolicyData.apps.find(a => a.title.toLowerCase() === params.policyappname.toLowerCase());

    if (!app) {  
        redirect('/portfolio/apps')
    }

  return (
    <div>
      <div className="py-24">
        Privacy Policy of {app.title}
        <p></p>
      </div>
      <div className="py-24">
        Information Collection and Use
        <p></p>
      </div>
      <div className="py-24">
        Log Data
        <p></p>
      </div>
      <div className="py-24">
        Cookies
        <p></p>
      </div>
      <div className="py-24">
        Service Providers
        <p></p>
      </div>
      <div className="py-24">
        Security
        <p></p>
      </div>
      <div className="py-24">
        Links to Other Sites
        <p></p>
      </div>
      <div className="py-24">
        Children&apos;s Privacy
        <p></p>
      </div>
      <div className="py-24">
        Changes to This Privacy Policy
        <p></p>
      </div>
      <div className="py-24">
        Contact Us
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@tycoonhamlet.com.</p>
      </div>
    </div>
  )
}

export default page
