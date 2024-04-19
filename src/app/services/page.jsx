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
        <div className="rounded-t-[4.5rem] min-h-screen bg-slate-100 px-32">
          <span className="flex flex-col justify-center items-center p-16 text-4xl font-bold">Services</span>
          <div className="grid grid-cols-6 gap-16">
            <div className="col-span-2">
              <Image src={"/images/laptop.jpeg"} width={500} height={500} />
            </div>
            <div className="col-span-4">
              <h1 className="p-8 text-black text-2xl font-semibold">App dev</h1>
              <div className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id, adipisci veritatis facere autem, quis odio quo at esse vel voluptate libero saepe culpa placeat ratione ullam consequatur praesentium molestias dolore ipsum! Distinctio rem aperiam pariatur qui quisquam, beatae voluptatum id. Accusamus, quae officia tempore earum placeat provident qui dolorem?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
