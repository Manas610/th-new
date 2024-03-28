'use client';

import { Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import '@/css/button.css'
// import Image from 'next/image';

function HeaderTH() {

  const pathname = usePathname()

  return (
    <Navbar fluid className="py-4 fixed top-0 left-0 right-0 z-50 glassmorphism navbar bottom-shadow" >
      <Navbar.Brand href="/" className="text-black dark:text-white">
        {/* <Image src="../app/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={32} height={32}/> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold lg:pl-16">Tycoon Hamlet</span>
      </Navbar.Brand>
      <div className="flex md:order-2 lg:pr-16">
          <button className="wave-button relative overflow-hidden bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block">
            Get Started
          </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className={`text-base ${pathname === '/' ? 'active' : ''} nav-link`}>Home</Navbar.Link>
        <Navbar.Link href="#" className='text-base nav-link'>About</Navbar.Link>
        <Navbar.Link href="#" className='text-base nav-link'>Services</Navbar.Link>
        <Navbar.Link href="#" className='text-base nav-link'>Pricing</Navbar.Link>
        <Navbar.Link href="#" className='text-base nav-link'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderTH;