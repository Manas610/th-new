'use client';

import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';

function HeaderTH() {
  return (
    <Navbar fluid className="py-6">
      <Navbar.Brand href="https://flowbite-react.com" className="text-black dark:text-white">
        <Image src="../app/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
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