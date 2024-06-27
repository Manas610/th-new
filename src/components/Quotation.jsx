'use client'

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

function Quotation({setShowQuote}) {
  return (
    <section className="quotation">
        <div id="drawer-disable-body-scrolling" className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-88 transition-transhtmlForm right-0 top-[68px] transhtmlForm-none`} tabIndex="-1" aria-labelledby="drawer-disable-body-scrolling-label" aria-modal="true" role="dialog">
            <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Plaese Fill the Form</h5>
            <button onClick={() => setShowQuote(false)} type="button" data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close Filters</span>
            </button>
            <div className="border-b pb-3"></div>
            <div>
            <div className="mb-2 block">
                <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" type="text" required shadow />
            </div>
            <div>
            <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" placeholder="name@email.com" required shadow />
            </div>
            <div>
            <div className="mb-2 block">
                <Label htmlFor="mobile" value="Mobile Number" />
            </div>
            <TextInput id="mobile" type="number" required shadow />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="company" value="Company" />
                </div>
            <TextInput id="company" type="text" shadow />
            </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="description" />
                    </div>
                <Textarea id="description" type="text" shadow />
                </div>
            <div className="grid grid-cols-2 gap-4 py-8">
            <div className="flex items-center gap-2">
                <Checkbox id="web" />
                <Label htmlFor="web">
                Website Development
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="app" />
                <Label htmlFor="app">
                App Development
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="logo" />
                <Label htmlFor="logo">
                Logo Designing
                </Label>
            </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="seo" />
                    <Label htmlFor="seo">
                    SEO
                    </Label>
                </div>
            </div>
            <Button type="submit" className="bg-blue-dark">Request A Service</Button>
        </div>
    </section>
  )
}

export default Quotation
