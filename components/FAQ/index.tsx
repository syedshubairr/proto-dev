import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { FAQAvatar } from "@/assets";
import { Button } from "../ui/button";

const FAQ = () => {
  return (
    <div className="container mx-auto max-w-7xl bg-black rounded-xl text-white my-20 py-4">
      <div className="text-center font-semibold text-3xl py-4">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="flex px-8 justify-center items-center my-8">
        <div className="w-[70%]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why not hire a full-time designer and developer
              </AccordionTrigger>
              <AccordionContent>
                Hiring full-time professionals can be a headache. It&apos;s
                costlier and more challenging to manage. A senior designer might
                set you back $100k+, while a developer could easily exceed
                $300k. That&apos;s a total of $500k+ when you factor in
                benefits, vacation days, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Why not hire a full-time designer and developer
              </AccordionTrigger>
              <AccordionContent>
                Hiring full-time professionals can be a headache. It&apos;s
                costlier and more challenging to manage. A senior designer might
                set you back $100k+, while a developer could easily exceed
                $300k. That&apos;s a total of $500k+ when you factor in
                benefits, vacation days, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Why not hire a full-time designer and developer
              </AccordionTrigger>
              <AccordionContent>
                Hiring full-time professionals can be a headache. It&apos;s
                costlier and more challenging to manage. A senior designer might
                set you back $100k+, while a developer could easily exceed
                $300k. That&apos;s a total of $500k+ when you factor in
                benefits, vacation days, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Why not hire a full-time designer and developer
              </AccordionTrigger>
              <AccordionContent>
                Hiring full-time professionals can be a headache. It&apos;s
                costlier and more challenging to manage. A senior designer might
                set you back $100k+, while a developer could easily exceed
                $300k. That&apos;s a total of $500k+ when you factor in
                benefits, vacation days, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Why not hire a full-time designer and developer
              </AccordionTrigger>
              <AccordionContent>
                Hiring full-time professionals can be a headache. It&apos;s
                costlier and more challenging to manage. A senior designer might
                set you back $100k+, while a developer could easily exceed
                $300k. That&apos;s a total of $500k+ when you factor in
                benefits, vacation days, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[30%] flex-col justify-center items-center px-24">
          <div className="w-full flex justify-center">
            <Image src={FAQAvatar} alt="FAQ" />
          </div>
          <p className="text-center py-6">
            Have more questions? Book a FREE intro call.
          </p>
          <div className="w-full flex justify-center">
            <Button className="bg-white p-2 text-black hover:bg-[#DADDE1] transition-colors duration-200">
              Book a Call.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
