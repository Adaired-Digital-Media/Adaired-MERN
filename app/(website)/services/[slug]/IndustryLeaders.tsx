'use client';
import React from 'react';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import Heading from '@/app/components/common/Heading';

import client_1 from '../../../../public/assets/IndustryLeaders/Group 1000005063.png';
import client_2 from '../../../../public/assets/IndustryLeaders/Group 1000005064.png';
import client_3 from '../../../../public/assets/IndustryLeaders/Group 1000005065.png';
import client_4 from '../../../../public/assets/IndustryLeaders/Group 1000005066.png';
import client_5 from '../../../../public/assets/IndustryLeaders/Group 1000005068.png';
import client_6 from '../../../../public/assets/IndustryLeaders/Group 1000005069.png';
import client_7 from '../../../../public/assets/IndustryLeaders/Group 1000005072.png';
import client_8 from '../../../../public/assets/IndustryLeaders/Group 1000005073.png';
import client_9 from '../../../../public/assets/IndustryLeaders/Group 1000005075.png';
import client_10 from '../../../../public/assets/IndustryLeaders/Group 1000005076.png';
import client_11 from '../../../../public/assets/IndustryLeaders/Group 1000005077.png';
import client_12 from '../../../../public/assets/IndustryLeaders/Group 1000005078.png';

import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const IndustryLeaders = ({ industryLeaders }: any) => {
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
  ];

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-[#01040A] to-[#051C40] py-[3rem] lg:py-[4rem]"
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={7}
            headingParts={industryLeaders?.headingParts}
            description={industryLeaders?.description}
            textColor={industryLeaders?.textColor}
            isInCenter={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 pt-[1rem]">
          {data?.map((client, idx) => (
            <div
              key={idx}
              className={`group flex items-center justify-center overflow-hidden transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} `}
              style={{
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              <Image
                src={client}
                width={225}
                height={90}
                alt="client logo"
                className="my-0 transform transition-transform duration-300 ease-out group-hover:scale-110 md:my-4"
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default IndustryLeaders;
