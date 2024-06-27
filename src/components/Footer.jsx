'use client';

import { Footer } from 'flowbite-react';
import Image from 'next/image';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterTH() {

  const currentYear = new Date().getFullYear();

  return (
    <Footer container className="rounded-none sm:px-16 px-8">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Image
              href="https://tycoonhamlet.com"
              src="/images/logo/logo-light.png"
              alt="Tycoon Hamlet Logo"
              width={142}
              height={50}
            />
            <p className="py-8 w-2/3 text-justify">Elevate and take your Business to the next level with our best quality Digital Products and Services</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about-us">About Us</Footer.Link>
                <Footer.Link href="/services">Services</Footer.Link>
                <Footer.Link href="/contact">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Footer.Link href="/websites">Websites</Footer.Link>
                <Footer.Link href="/apps">Apps</Footer.Link>
                <Footer.Link href="/logos">Logos</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contacts" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+917508565605">+91 7508565605</Footer.Link>
                <Footer.Link href="mailto: contact@tycoonhamlet.com">contact@tycoonhamlet.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="Tycoon Hamlet" year={currentYear} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterTH;

