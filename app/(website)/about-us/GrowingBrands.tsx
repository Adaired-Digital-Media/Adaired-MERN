'use client';
import React from 'react';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import Heading from '@/app/components/common/Heading';

import client_1 from '../../../public/assets/IndustryLeaders/Group 1000005063.png';
import client_2 from '../../../public/assets/IndustryLeaders/Group 1000005064.png';
import client_3 from '../../../public/assets/IndustryLeaders/Group 1000005065.png';
import client_4 from '../../../public/assets/IndustryLeaders/Group 1000005066.png';
import client_5 from '../../../public/assets/IndustryLeaders/Group 1000005068.png';
import client_6 from '../../../public/assets/IndustryLeaders/Group 1000005069.png';
import client_7 from '../../../public/assets/IndustryLeaders/Group 1000005072.png';
import client_8 from '../../../public/assets/IndustryLeaders/Group 1000005073.png';
import client_9 from '../../../public/assets/IndustryLeaders/Group 1000005075.png';
import client_10 from '../../../public/assets/IndustryLeaders/Group 1000005076.png';
import client_11 from '../../../public/assets/IndustryLeaders/Group 1000005077.png';
import client_12 from '../../../public/assets/IndustryLeaders/Group 1000005078.png';
import client_13 from '../../../public/assets/IndustryLeaders/Group 1000005063.png';
import client_14 from '../../../public/assets/IndustryLeaders/Group 1000005069.png';

import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const GrowingBrands = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  const data = [
    client_1,
    client_2,
    client_3,
    client_4,
    client_5,
    client_6,
    client_7,
    client_8,
    client_9,
    client_10,
    client_11,
    client_12,
    client_13,
    client_14,
  ];

  const half = Math.ceil(data.length / 2);
  const row1 = data.slice(0, half);
  const row2 = data.slice(half);

  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];

  return (
    <div
      ref={ref}
      className="overflow-hidden bg-[#F5F5F5] py-[3rem] lg:py-[4rem]"
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <Heading
            headingParts={[{text:'Trusted by Growing Brands', color:"#000000", weight:700}]}
            description=""
            isInCenter={true}
          />
        </div>

        <div className="relative mt-4 lg:my-4">
          <div className="flex w-max animate-marquee gap-[1rem] lg:gap-[2rem]">
            {row1Duplicated.map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className={`group relative flex-shrink-0 transition-all duration-700 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <Image
                  src={client}
                  alt="client logo"
                  width={242}
                  height={121}
                  className="h-9 lg:h-full w-full transform object-contain transition-transform duration-300 ease-out group-hover:scale-110 mt-2"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-4 lg:my-4">
          <div className="flex w-max animate-marquee [animation-direction:reverse] gap-[1rem] lg:gap-[2rem]">
            {row2Duplicated.map((client, idx) => (
              <div
                key={`r2-${idx}`}
                className={`group relative flex-shrink-0 transition-all duration-700 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <Image
                  src={client}
                  alt="client logo"
                  width={242}
                  height={121}
                  className="h-9 lg:h-full w-full transform object-contain transition-transform duration-300 ease-out group-hover:scale-110 mt-2"
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default GrowingBrands;