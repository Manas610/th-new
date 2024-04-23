"use client"

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

function page() {
  return (
    <div className="min-h-screen">
      
      <div className="mt-32">
        <div className="bg-blue-dark h-72 flex flex-col justify-center items-center">
            <span className="text-white text-7xl font-semibold">Contact Us</span>
        </div>
      </div>

    <div className="flex justify-center items-center bg-gray-100 my-16">
      <form className="flex max-w-md flex-col gap-4 rounded-3xl border-2 p-8">
        <span className="font-bold">Plaese Fill the Form</span>
        <hr />
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
        <div className="grid grid-cols-2 gap-4">
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
      </form>
    </div>

    </div>
  )
}

export default page
