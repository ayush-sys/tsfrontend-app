"use client";

import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { MdLocalPhone } from "@react-icons/all-files/md/MdLocalPhone";
import { IoChatbubble } from "@react-icons/all-files/io5/IoChatbubble";

const contactMethods = [
  {
    icon: SiGmail,
    title: "Email",
    description: "Drop your concern at our official mail.",
    details: "hello@merakiui.com",
  },
  {
    icon: MdLocalPhone,
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    details: "+91 999999999",
  },
  {
    icon: IoChatbubble,
    title: "Chat support",
    description: "Drop a hi to our official chat support.",
    details: "Start conversation",
  },
];

export default function Contact() {
  return (
    <section className="bg-inherit lg:my-4 sm:my-2" id="contact">
      <div className="container px-6 py-12 mx-auto tracking-wide text-neutral">
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-semibold">Contact us</h1>

          <p className="mt-3 font-medium text-gray-500">
            Get in touch with our friendly team, we will support with your
            queries!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map(
            ({ icon: Icon, title, description, details }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <span className="p-3 bg-neutral text-neutral-content rounded-2xl">
                  <Icon className="w-6 h-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-gray-500">{description}</p>
                <p className="mt-2 text-gray-500">{details}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
