'use client';

import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Heading from '@/app/components/common/Heading';
import Image from 'next/image';

const HowItStarted = ({ howItStarted }: any) => {
  return (
    <section className="py-10 md:py-16 bg-[#FFF8F0]">
      <MaxWidthWrapper>
        <Heading
          isInCenter={true}
          headingParts={howItStarted?.headingParts}
        />

        <div className="relative mt-12">
          
          {/* CENTER LINE (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-[#F28F17] to-white rounded-full" />

          <div className="space-y-16">
            {howItStarted?.timeline?.map((item: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center"
                >
                  {/* DOT */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#F28F17] rounded-full z-10" />

                  {/* LEFT SIDE */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'
                    }`}
                  >
                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-md">
                      <h3 className="text-[#F28F17] text-lg font-semibold">
                        {item.title}
                      </h3>

                      {item.desc?.map((text: string, i: number) => (
                        <p key={i} className="text-black mt-4">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE IMAGE */}
                  <div
                    className={`w-full md:w-1/2 mt-6 md:mt-0 ${
                      isEven ? 'md:pl-12' : 'md:order-1 md:pr-12'
                    }`}
                  >
                    <div className="flex justify-center">
                      <Image
                        src={item.img}
                        alt="timeline image"
                        width={500}
                        height={300}
                        className="rounded-xl w-full max-w-[500px] h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItStarted;
