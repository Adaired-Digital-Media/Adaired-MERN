"use client";
import { ExpectSectionData } from '@/@core/data/website/Homepage';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import Image from 'next/image';
import CountUp from '../CountUp';
import { useState } from 'react';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import adaireddigitalmarketingteam from '../../../public/assets/team/1st..jpg';
import adaireddigitalmarketingteam_2 from '../../../public/assets/team/2nd..jpg';
import adaireddigitalmarketingteam_3 from '../../../public/assets/team/3rd..jpg';

const Expect = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [hover, setHover] = useState(null);
  const { image, subTitle, title, description, records } = ExpectSectionData;
  return (
    <section className="1bg-[#F5F5F580]">
      <MaxWidthWrapper className="py-[3rem] lg:py-[4rem]">
        <div
          className={`grid grid-cols-1 gap-[1rem] transition-all duration-1000 lg:grid-cols-2 lg:gap-[2rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <div className="flex justify-center lg:justify-start">
            <Heading
              isLabel={true}
              subTitle={subTitle}
              title={title}
              span=""
              breakIndex={5}
              description={''}
            />
          </div>
          <p>{description}</p>
        </div>

        <div className="relative grid grid-cols-1 gap-[1rem] pt-2 md:pt-7 lg:grid-cols-2 xl:gap-[2rem]">
          {/* Content Section */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-16 opacity-0'
            }`}
          >
            {/* LG */}
            <Image
              src={adaireddigitalmarketingteam}
              alt="adaired-digital-marketing-team"
              fill
              className="hidden w-full rounded-3xl object-cover p-1 lg:block"
            />

            {/* MD / Tablet */}
            <Image
              src={adaireddigitalmarketingteam_2}
              alt="adaired-digital-marketing-team"
              width={800}
              height={550}
              sizes="(min-width: 768px) 100vw"
              className="hidden w-full rounded-3xl object-cover p-1 md:block lg:hidden"
            />

            {/* Mobile */}
            <Image
              src={adaireddigitalmarketingteam_3}
              alt="adaired-digital-marketing-team"
              width={800}
              height={350}
              sizes="100vw"
              className="block w-full rounded-3xl object-cover p-1 md:hidden"
            />
          </div>

          <div className="flex-1 p-2 text-center lg:text-left">
            {/* Points Section */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
              {records?.map((record, idx: any) => {
                const isHovered = hover === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                    }}
                    className={`rounded-3xl border-[1px] border-[#00000026]/10 p-[1.8rem] transition-all duration-700 lg:p-[1rem] xl:px-[1.75rem] xl:py-[1.5rem] 1360:p-[1rem] 1400:p-[1rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${
                      isHovered
                        ? 'bg-gradient-to-br from-[#FB9100] to-[#000000]'
                        : 'bg-white'
                    } `}
                  >
                    <div
                      className={`text-left text-xl font-semibold transition-colors duration-300 3xl:text-[50px] ${isHovered ? 'text-white' : 'text-[#FB9100]'} `}
                    >
                      <CountUp end={record.number} />
                      {record.suffix}
                      <span className="1360:text-[13px] 1400:text-[15px] 3xl:text-[20px]">
                        {record.suffix2}
                      </span>
                    </div>

                    <p
                      className={`py-[0.5rem] text-left font-bold transition-colors duration-300 xl:pb-[1rem] xl:pt-[1.25rem] ${isHovered && 'text-white'} `}
                    >
                      {record.name}
                    </p>

                    <p
                      className={`text-left transition-colors duration-300 1400:text-[14px] 1470:text-[18px] 1600:text-[18px] ${isHovered && 'text-white'} `}
                    >
                      {record.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Expect;
