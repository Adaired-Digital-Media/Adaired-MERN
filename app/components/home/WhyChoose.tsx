"use client";
import { WhyChooseSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import useHoverZoom from '@/@core/hooks/useHoverZoom';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const WhyChoose = () => {
  const { subTitle, title, span, description, points } = WhyChooseSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <section className="relative py-[3rem] lg:pb-[0rem] lg:pt-[4rem]">
      {/* <Image src={chooseUsBg} fill alt="d" className="object-cover" priority /> */}
      <div ref={ref} className="relative z-20">
        <MaxWidthWrapper>
          <div
            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
          >
            <Heading
              breakIndex={5}
              isLabel={true}
              subTitle={subTitle}
              title={title}
              span={span}
              description={description}
              isInCenter={true}
              isBgWhite={true}
            />
          </div>

          <div className="grid grid-cols-1 py-[1rem] md:grid-cols-2 md:gap-[1rem] lg:mt-[3rem] lg:grid-cols-4 lg:gap-3 xl:gap-[1.5rem]">
            {points?.map((item, idx: any) => {
              const hovered = isHover === idx;
              const zoom = useHoverZoom({
                scaleIn: 1.1,
                scaleOut: 0.9,
              });
              return (
                <div
                  key={idx}
                  {...zoom.handlers}
                  onMouseEnter={() => setIsHover(idx)}
                  onMouseLeave={() => setIsHover(1)}
                  className={`relative transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                  style={{
                    transitionDelay: `${idx * 120}ms`,
                  }}
                >
                  <div
                    className={`my-2 cursor-pointer rounded-3xl border-[1px] border-[#FB910040] bg-[#FFF8F0] p-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl md:my-0 md:h-[20rem] lg:mt-[-2.5rem] lg:h-[23rem] lg:p-[0.8rem] xl:h-[24rem] xl:p-[1.5rem]`}
                  >
                    <div className="flex justify-center lg:justify-start">
                      <Image
                        src={item.icon}
                        width={70}
                        height={70}
                        alt="img"
                        className="rounded-xl border-[1px] border-[#FB910040] bg-[#FEDAAA66] p-3.5 text-[#000000] lg:h-[55px] lg:w-[55px] xl:h-[70px] xl:w-[70px]"
                      />
                    </div>
                    <h3 className={`py-4`}>
                      {item?.title}
                      <br></br>
                      {item?.span}
                    </h3>
                    <p className={`text-center text-[#323232B2] lg:text-left`}>
                      {/* {item?.description.length > 140
                        ? item?.description.slice(0, 140) + '...'
                        : item?.description} */}
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default WhyChoose;
