'use client';

import Image from 'next/image';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';

const MeetTheFounderSection = ({ MeetTheFounder }: any) => {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#000000] to-[#051C40] py-[3rem] lg:py-[4rem]">
      <div className="justify-center">
        <img
          src={MeetTheFounder?.heading}
          alt="Meet The Founder"
          className="mx-auto w-[95%]"
        />
      </div>

      <MaxWidthWrapper className="z-10 grid grid-cols-1 items-center justify-center gap-[3rem] pt-[3rem] lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <div className="relative my-auto aspect-[735/647] w-[clamp(14rem,65vw,45.063rem)] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={MeetTheFounder?.image}
              alt="Founder's Image"
              width={735}
              height={647}
              priority
              className="h-auto w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="justify-center lg:justify-start">
          <div className="flex justify-center lg:justify-start">
            <img
              src={MeetTheFounder?.Name}
              className="h-auto w-[530px] object-contain"
              alt="Founder's Name"
            />
          </div>

          <p className="text-base text-white sm:text-lg md:text-center lg:text-start">
            {MeetTheFounder?.designation}
          </p>

          <p className="mt-6 text-[22px] italic leading-[34px] text-white">
            "{MeetTheFounder?.Quote}"
          </p>

          <p className="my-[1rem] mt-6 font-extrabold text-white">
            {MeetTheFounder?.descriptionHeading}
          </p>

          {MeetTheFounder?.description.map((desc: any, index: number) => (
            <p key={index} className="mt-[1.5rem] text-white">
              {desc}
            </p>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MeetTheFounderSection;
