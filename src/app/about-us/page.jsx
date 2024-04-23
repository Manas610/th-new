"use client"

function page() {
  return (
    <div className="min-h-screen">
        <div className="my-32">
            <div className="bg-blue-dark h-72 flex flex-col justify-center items-center">
                <span className="text-white text-7xl font-semibold">About Us</span>
            </div>
        </div>

        <div className="lg:mx-16 md:mx-8 mx-4 md:grid md:grid-cols-2 flex flex-col">
            <div className="lg:m-16 md:m-8 m-4 mb-8">
                <span className="text-4xl font-bold">The Best Solutions for Best Business</span>
            </div>
            <div className="text-slate-600 sm:grid sm:grid-cols-2 flex flex-col gap-8 mb-8 mx-4">
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
    </div>
  )
}

export default page
