'use client';

import { Accordion } from 'flowbite-react';

function AccordionTH() {
  return (
    <>
    <div className="flex justify-center pb-8">
      <span className=" font-medium p-1 px-6 text-center text-blue-dark bg-blue-light rounded inline-block">
        Why Choose Us
      </span>
    </div>
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Works on Quality</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We are committed to delivering the highest quality work and exceptional customer service.
          All of our projects are rigorously tested to ensure they are functional, visually appealing, and user-friendly.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Works On Customer Statisfaction</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          At our company, customer satisfaction is our top priority. We strive to exceed our clients&apos; expectations and we are dedicated to providing 
          a personalized and responsive service to ensure their complete satisfaction.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>In-depth Reasearch</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          We conduct in-depth research to understand the target audience, industry trends and consumer insights, which allows us to create effective and impactful solutions for our clients. 
          We ensure that our solutions are aligned with the latest industry trends and technologies.</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  );
}

export default AccordionTH;
