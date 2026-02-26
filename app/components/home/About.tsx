"use client";
import { AboutSectionData } from '@/@core/data/website/Homepage';
import React from 'react';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import Image from 'next/image';
import img from '../../../public/assets/images/home/aboutus.png';
import teamimg from '../../../public/assets/team/1st.jpg';
import teamimg_2 from '../../../public/assets/team/2nd.jpg';
import teamimg_3 from '../../../public/assets/team/3rd.jpg';
import about_graph from '../../../public/assets/images/home/about_graph.png';
import Mask from '../../../public/assets/images/home/Mask group.png';
import check from '../../../public/assets/icons/blue_check.png';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const About = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const { subTitle, title, points, description, cursive } = AboutSectionData;

  return (
    <section className="">
      <MaxWidthWrapper className="pb-[3rem] lg:py-[4rem]">
        <div
          ref={ref}
          className="flex flex-col-reverse gap-[3rem] lg:flex-row lg:justify-between lg:gap-[3rem] 1400:gap-[1rem] 1680:gap-[2rem] 3xl:gap-[5.25rem]"
        >
          {/* Image Section */}
          <div
            ref={ref}
            className={`w-[100%] transition-all duration-700 lg:w-[45%] ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-16 opacity-0'
            }`}
          >
            {/* LG */}
            <Image
              src={teamimg}
              alt="adaired-digital-marketing-team"
              fill
              className="hidden w-full rounded-3xl object-cover p-1 lg:block"
            />

            {/* MD / Tablet */}
            <Image
              src={teamimg_2}
              alt="adaired-digital-marketing-team"
              width={800}
              height={550}
              sizes="(min-width: 768px) 100vw"
              className="hidden w-full rounded-3xl object-cover p-1 md:block lg:hidden"
            />

            {/* Mobile */}
            <Image
              src={teamimg_3}
              alt="adaired-digital-marketing-team"
              width={800}
              height={350}
              sizes="100vw"
              className="block w-full rounded-3xl object-cover p-1 md:hidden"
            />
          </div>
          <div className="relative mx-auto hidden w-full justify-center lg:w-[50%]">
            {/* CENTER IMAGE */}
            <div
              className={`relative mx-[1.5rem] my-[2.5rem] aspect-[615/685] w-[clamp(14rem,65vw,45.063rem)] overflow-hidden transition-all duration-1000 lg:mx-[3.5rem] lg:my-[2.5rem] lg:w-[clamp(14rem,55vw,39.063rem)] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} `}
            >
              <Image
                src={img}
                alt="About Image"
                fill
                className="rounded-[20px] object-cover"
                priority
              />
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute left-[clamp(-1rem,-2vw,0rem)] top-[clamp(1.5rem,8vw,8.5rem)] flex animate-zoomPulse gap-2 rounded-xl border border-black/10 bg-white px-2 py-1 lg:top-[clamp(1.5rem,4vw,3.5rem)] lg:px-4 lg:py-2">
              <Image src={check} width={18} height={18} alt="check" />
              <p className="font-outfit text-[12px] text-black lg:text-[15.62px]">
                100% Business Growth
              </p>
            </div>

            {/* MASK – TOP RIGHT */}
            <Image
              src={Mask}
              alt="Mask Image"
              width={246}
              height={136}
              className="absolute right-[clamp(0rem,0vw,0rem)] top-[clamp(0rem,0vw,0rem)] -z-10"
            />

            {/* MASK – BOTTOM LEFT */}
            <Image
              src={Mask}
              alt="Mask Image"
              width={246}
              height={136}
              className="absolute bottom-[clamp(0rem,0vw,0rem)] left-[clamp(0.5rem,0.5vw,0.5rem)] -z-10"
            />

            {/* ABOUT GRAPH – BOTTOM RIGHT */}
            <div
              className={`absolute bottom-[clamp(0rem,0vw,0rem)] right-[clamp(-1rem,-4vw,0rem)] aspect-[276/215] w-[clamp(8rem,22vw,25.25rem)] transition-all delay-300 duration-700 lg:w-[clamp(8rem,18vw,17.25rem)] ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} `}
            >
              <Image
                src={about_graph}
                alt="Graph Image"
                width={276}
                height={215}
                className=""
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`flex-1 p-2 text-left transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
          >
            {/* Points Section */}
            <Heading
              isLabel={true}
              subTitle={subTitle}
              title={title}
              span=""
              description={description}
              isPara2={true}
              description2={` We've helped brands transform their digital presences, build loyal
              audiences, and exceed their growth goals. When you work with us,
              you are investing in outcomes rather than simply marketing.`}
            />

            <div className="gap-5 space-y-8 py-6 sm:flex-row">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-4 transition-all duration-700 lg:flex-row lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* ICON */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#FEE9CC99]">
                    <Image
                      src={point.icon}
                      alt={point.title}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-center text-xs font-bold lg:text-left">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-center font-montserrat lg:text-left">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
