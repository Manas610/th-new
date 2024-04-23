import React from 'react';
import Image from 'next/image';

function App() {
  return (
    <div style={{
      backgroundImage: 'url("/images/beach.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }}>
      <div className="h-[36rem] bg-transparent flex flex-col justify-center items-center">
        <span className="text-6xl text-white font-bold">Our Services</span>
      </div>
      <div>
        <div className="rounded-t-3xl md:rounded-t-[4.5rem] min-h-screen bg-slate-100 lg:px-32 md:px-16 px-8 ">
          <span className="flex flex-col justify-center items-center py-16 text-4xl font-bold">Services</span>
          <div className="md:grid md:grid-cols-6 flex flex-col items-center md:gap-16 gap:8 py-8">
            <div className="col-span-2">
              <Image src={"/images/services/web.png"} alt="Web Development Image" width={350} height={350} />
            </div>
            <div className="col-span-4 p-4">
              <h1 className="p-8 text-black text-2xl font-semibold">Web Development</h1>
              <div className="text-justify">Your website is the digital doorway to your business and the first impression most customers will have of your brand. Our web development services cover everything from simple informational sites to complex web applications and e-commerce platforms. We combine modern design principles with the latest in web technologies to build stunning, high-performing websites. Our team works closely with you to ensure that the website reflects your brand&apos;s ethos and meets your specific business requirements, delivering a seamless experience for both you and your users.</div>
            </div>
          </div>
            {/* <div className="grid grid-cols-10">
              <Image className="col-span-1" src={"/images/services/web/html-d.png"} alt="Web Development Image" width={200} height={200} />
              <Image className="col-span-1" src={"/images/services/web/css-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/js-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/react-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/mongodb-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/express-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/nodejs-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/nextjs-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/bootstrap-d.png"} alt="Web Development Image" width={400} height={400} />
              <Image className="col-span-1" src={"/images/services/web/firebase-d.png"} alt="Web Development Image" width={400} height={400} />
            </div> */}

          <div className="flex flex-col md:grid md:grid-cols-6 items-center md:gap-16 gap-8 py-8">
              <div className="md:col-span-2 order-1 md:order-2">
                  <Image src={"/images/services/app.png"} alt="App Development Image" width={350} height={350} />
              </div>
              <div className="md:col-span-4 order-2 md:order-1 p-4">
                  <h1 className="p-8 text-black text-2xl font-semibold">App Development</h1>
                  <div className="text-justify">In today&apos;s digital world, mobile apps are essential tools for interacting with customers and streamlining business operations. Our app development service offers custom solutions for both iOS and Android platforms, ensuring your application is not only visually appealing but also functionally robust. Whether you&apos;re looking to create an engaging user interface, implement cutting-edge features, or ensure seamless performance, our expert developers are equipped to turn your vision into reality. With a focus on innovative design and user-centric functionality, we deliver applications that not only meet your business needs but also enhance user engagement and retention.</div>
              </div>
          </div>

          <div className="md:grid md:grid-cols-6 flex flex-col items-center md:gap-16 gap:8 py-8">
            <div className="col-span-2">
              <Image src={"/images/services/logo.png"} alt="Logo Design Image" width={400} height={400} />
            </div>
            <div className="col-span-4 p-4">
              <h1 className="p-8 text-black text-2xl font-semibold">Logo Design</h1>
              <div className="text-justify">A logo is more than just a graphic, it is a representation of your brand&apos;s identity and values. Our logo design service is committed to creating distinctive and memorable logos that resonate with your target audience. We start with a thorough understanding of your brand, market, and objectives, and then move through a creative process that blends artistry with strategy. The result is a bespoke logo that not only stands out visually but also conveys your brand&apos;s unique voice and essence, enhancing brand recognition and trust.</div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-6 flex flex-col items-center md:gap-16 gap:8 pb-16 pt-8">
            <div className="md:col-span-2 order-1 md:order-2">
              <Image src={"/images/services/SEO.png"} alt="SEO Image" width={400} height={400} />
            </div>
            <div className="md:col-span-4 order-2 md:order-1 p-4">
              <h1 className="p-8 text-black text-2xl font-semibold">SEO (Search Engine Optimization)</h1>
              <div className="text-justify">Visibility in search engines is crucial for any business looking to gain a competitive edge online. Our SEO services are designed to increase your website&apos;s visibility and draw more traffic by optimizing it for search engines. We employ a comprehensive range of SEO strategies, including keyword research, content optimization, link building, and technical SEO, to improve your rankings for relevant search terms. By enhancing your search engine presence, we help you attract more qualified traffic, increase conversions, and achieve long-term success in your digital marketing efforts.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
