import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import PageBanner from "@/app/components/PageBanner";
import { Icons } from "@/app/components/UI/Icons";
import Link from "next/link";
import Image from "next/image";
import reachout from "../../../public/assets/700_650.png";
import type { Metadata } from "next";
import ContactForm from "@/app/components/form/ContactForm";

export const metadata: Metadata = {
  title: "Contact Adaired – Speak with Our Team Today!",
  description:
    "Need to ask something or just want to say hi? Our Contact page is where you can reach out easily. We're here to listen and help. Let's chat!",
  alternates: {
    canonical: "https://www.adaired.com/contact",
  },
};

const Contact = () => {
  return (
    <>
      {/* <PageBanner title="Contact Us" /> */}
      <PageBanner
        subTitle={"CONTACT US"}
        headingParts={[{ text: "Get In Touch", color: "#000000", weight: 700 }]}
      />

      <section className="py-12 lg:py-24">
        {/* Cards */}
        <ContactCards />

        {/* Image and Form */}
        <MaxWidthWrapper className="flex flex-col gap-14 lg:flex-row">
          <div className="flex-1 lg:w-1/2">
            {/* <ContactDetails /> */}
            <div className="relative h-[360px] sm:h-[720px] lg:h-full w-full">
              <Image
                src={reachout}
                fill
                alt="About Image"
                className="rounded-3xl border-[#e3e3e3] object-cover p-1"
              />
            </div>
          </div>

          <div className="flex-1 lg:w-1/2">
            <ContactForm />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.519824675396!2d76.73770197613055!3d30.67564718838826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed5cb98c5777%3A0x8a21444801a080f9!2sAdAired%20Digital%20Media!5e0!3m2!1sen!2sin!4v1708674125637!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-96 w-full border-none"
          title="Adaired Digital Media Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;

// const ContactDetails = () => {
const ContactCards = () => {
  return (
    <div className="py-12">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-3 lg:gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl bg-[#F9FCFF] flex flex-col items-center justify-center pt-[5rem] pb-[2rem] px-[1rem] lg:px-[2rem]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-[77px] w-[77px] lg:h-[88px] lg:w-[88px] flex items-center justify-center rounded-full bg-[#1b5b97]">
              <Link
                href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Map className="h-9 w-9 text-white" />
              </Link>
            </div>

            <p className="text-center font-semibold">
              <Link
                href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
                target="_blank"
                rel="noopener noreferrer"
              >
                B-509, 5th Floor, Bestech Business Towers, Sector 66, SAS Nagar,
                Punjab 160066
              </Link>
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl bg-[#F9FCFF] flex flex-col items-center justify-center pt-[5rem] pb-[2rem] px-[1rem] lg:px-[2rem]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-[77px] w-[77px] lg:h-[88px] lg:w-[88px] flex items-center justify-center rounded-full bg-[#1b5b97]">
              <Link
                href="tel:+91-8907200008"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Phone className="h-9 w-9 text-white" />
              </Link>
            </div>

            <p className="text-center font-semibold">
              Need assistance? Call us at <br />
              <Link
                href="tel:+91-8907200008"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#6694FF]"
              >
                +91-89072 00008{" "}
              </Link>
              <span className="text-black inline-block font-bold">(HR)</span>
              <br />
              <Link
                href="tel:+91-8907300008"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#6694FF]"
              >
                +91-89073 00008{" "}
              </Link>
              <span className="text-black inline-block font-bold">(SALES)</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl bg-[#F9FCFF] flex flex-col items-center justify-center pt-[5rem] pb-[2rem] px-[1rem] lg:px-[2rem]">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-[77px] w-[77px] lg:h-[88px] lg:w-[88px] flex items-center justify-center rounded-full bg-[#1b5b97]">
              <Link
                href="mailto:info@adaired.com?subject=Adaired Support&body=Hi Adaired Team,"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Mail className="h-9 w-9 text-white" />
              </Link>
            </div>

            <p className="font-semibold flex gap-2">
              General Inquiries -
              <Link
                href="mailto:info@adaired.com?subject=Adaired Support&body=Hi Adaired Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6694FF] font-semibold inline-block"
              >
                info@adaired.com
              </Link>
            </p>

            <p className="font-semibold flex gap-2">
              HR Department -
              <Link
                href="mailto:hr@adaired.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6694FF] font-semibold inline-block"
              >
                hr@adaired.com
              </Link>
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>

    // OLD CODE

    // Pre-Commented

    // <div className="p-2 text-center md:text-left">
    //   <h5 className="relative inline font-nunito text-lg text-[#515151] sm:text-xl md:pl-20">
    //     <div className="absolute -left-1/2 top-1/2 h-px w-16 -translate-y-1/2 transform bg-[#A7A9AC] md:left-0"></div>
    //     <div className="absolute -right-1/2 top-1/2 h-px w-16 -translate-y-1/2 transform bg-[#A7A9AC] font-nunito font-normal md:hidden"></div>
    //     Ready To Elevate?
    //   </h5>
    //   <h2 className="font-dm text-[1.688rem] font-normal md:text-4xl">
    //     Get In Touch
    //   </h2>
    //   <p className="py-3 text-justify text-base sm:text-lg md:text-left">
    //     Welcome to Adaired, your one-stop destination for comprehensive
    //     digital marketing solutions. Every ambitious entrepreneur needs a
    //     digital marketing partner like us. To get started, please fill out the
    //     form on this page. We&apos;ll promptly connect with you to discuss
    //     your project and provide a personalized plan tailored to your business
    //     objectives.
    //   </p>
    // </div>

    // Active Code

    // <Heading
    //       subTitle={'Ready To Elevate?'}
    //       title={'Get In Touch'}
    //       span={''}
    //       description={
    //         "Welcome to Adaired, your one-stop destination for comprehensive digital marketing solutions. Every ambitious entrepreneur needs a digital marketing partner like us. To get started, please fill out the form on this page. We'll promptly connect with you to discuss your project and provide a personalized plan tailored to your business objectives."
    //       }
    //     />
    //     <div className="grid grid-cols-12 gap-5 py-6">
    //       <div className="col-span-12 flex flex-col items-center gap-3 border p-5 text-center md:flex-row md:items-start md:gap-5 md:text-left">
    //         <Icons.Map className="h-12 w-12 flex-none rounded border p-2 text-[#1b5b97]" />
    //         <div>
    //           <p>We&apos;re located at</p>
    //           <Link
    //             href="https://maps.app.goo.gl/CEMtUbQd1246YQ3c7"
    //             className="font-semibold"
    //           >
    //             B-509, 5th Floor, Bestech Business Towers, Sector 66, SAS Nagar,
    //             Punjab 160066
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="col-span-12 flex flex-col items-center gap-3 border p-5 text-center sm:col-span-6 md:flex-row md:items-start md:gap-5 md:text-left lg:col-span-12">
    //         <Icons.Phone className="h-12 w-12 flex-none rounded border p-2 text-[#1b5b97]" />
    //         <div>
    //           <p>Need assistance? Call us at</p>

    //           // <Link href="tel:+1 (205) 273-6006" className="block font-semibold">
    //             // +1 (205) 273-6006
    //           // </Link>

    //       <Link href="tel:+91-8907200008" className="block font-semibold">
    //         +91-8907200008
    //       </Link>
    //       <Link href="tel:+91-8907300008" className="block font-semibold">
    //         +91-8907300008
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="col-span-12 flex flex-col items-center gap-3 border p-5 text-center sm:col-span-6 md:flex-row md:items-start md:gap-5 md:text-left lg:col-span-12">
    //     <Icons.Mail className="h-12 w-12 flex-none rounded border p-2 text-[#1b5b97]" />
    //     <div>
    //       <p>Helpdesk</p>
    //       <Link
    //         href="mailto:info@adaired.com?subject=Adaired Support&body=Hi Adaired Team,"
    //         className="block font-semibold"
    //       >
    //         <span>General Inquiries - </span>{' '}
    //         <span className="text-sky-600">info@adaired.com</span>
    //       </Link>
    //       <Link href="mailto:hr@adaired.com" className="block font-semibold">
    //         <span>HR Department - </span>{' '}
    //         <span className="text-sky-600">hr@adaired.com</span>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // </div >
  );
};
