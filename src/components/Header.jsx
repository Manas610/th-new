'use client';

import { Navbar } from 'flowbite-react';
import '@/css/button.css'
// import Image from 'next/image';

function HeaderTH() {
  return (
    <Navbar fluid className={`py-6 fixed top-0 left-0 right-0 z-50`} >
      <Navbar.Brand href="https://flowbite-react.com" className="text-black dark:text-white">
        {/* <Image src="../app/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={32} height={32}/> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold">Tycoon Hamlet</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
          <button className="wave-button relative overflow-hidden bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block">
            Get Started
          </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className='text-base'>Home</Navbar.Link>
        <Navbar.Link href="#" className='text-base'>About</Navbar.Link>
        <Navbar.Link href="#" className='text-base'>Services</Navbar.Link>
        <Navbar.Link href="#" className='text-base'>Pricing</Navbar.Link>
        <Navbar.Link href="#" className='text-base'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderTH;