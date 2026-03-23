import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import React from 'react';
import img from '../../../../public/assets/images/needofaiseo.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import imgCorner from '../../../../public/assets/images/authLinkBuilding.png';
import Mask from '../../../../public/assets/images/home/Mask group.png';

const NearMeSearch = ({ needOfService }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div className="py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper>
        <div ref={ref} className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
          {needOfService?.isBgCornerImg ? (
            <div className="relative mx-auto mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
              {/* CENTER IMAGE */}
              <div
                className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-16 opacity-0'
                  }`}
              >
                <Image
                  src={imgCorner}
                  alt="About Image"
                  width={625}
                  height={470}
                  className="my-[0rem] aspect-[625/470] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                />
              </div>

              {/* MASK – TOP RIGHT */}
              <Image
                src={Mask}
                alt="Mask Image"
                width={246}
                height={136}
                className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
              />

              {/* MASK – BOTTOM LEFT */}
              <Image
                src={Mask}
                alt="Mask Image"
                width={246}
                height={136}
                className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
              />
            </div>
          ) : (
            <div
              ref={ref}
              className={`flex items-center justify-center transition-all duration-1000 lg:items-start lg:justify-start ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
            >
              <Image src={img} width={652} height={568} alt="fd" />
            </div>
          )}

          <div
            className={`my-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h2>{"needOfService?.heading"}</h2>
            {needOfService?.data?.map((desc: any) => {
              return (
                <p className="pt-[1rem] text-center lg:text-justify">
                  {desc?.desctioption}
                </p>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NearMeSearch;
