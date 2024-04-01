'use client';

import Image from 'next/image';
import { Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import '@/css/button.css'

function HeaderTH() {

  const pathname = usePathname()

  return (
    <Navbar fluid className="py-4 fixed top-0 left-0 right-0 z-50 glassmorphism navbar bottom-shadow" >
      <Navbar.Brand href="/" className="text-black lg:pl-16 dark:text-white">
        <Image src="/images/logo/logo_dark.png" className='responsive-image' alt="Tycoon Hamlet Logo" width={35} height={35}/>
        <span className="self-center whitespace-nowrap sm:text-xl text-sm font-semibold px-4">Tycoon Hamlet</span>
      </Navbar.Brand>
      <div className="flex md:order-2 lg:pr-16">
          <button className="wave-button relative overflow-hidden bg-red-500 text-white font-bold sm:py-2 py-1 sm:px-4 px-2 text-sm rounded focus:outline-none focus:shadow-outline inline-block">
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