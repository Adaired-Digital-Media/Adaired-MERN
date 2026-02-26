'use client';
import { SolutionsSectionData } from '@/@core/data/website/Homepage';
import React, { useState } from 'react';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import Image from 'next/image';
import img from '../../../public/assets/images/home/solutions.png';
import Mask from '../../../public/assets/images/home/Mask group.png';

import {
  useImageReveal,
  useZoomOnView,
} from '@/@core/hooks/useScrollAnimations';
import SaveAndCancel from '../common/SaveAndCancel';
import GetQuoteModal from '../popup/GetQuoteModal';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

export interface ISolution {
  subTitle: string;
  title: string;
  description: string[];
}
const Solutions = ({ data }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  const [open, setOpen] = useState(false);
  const { subTitle, title, points, description, cursive } =
    SolutionsSectionData;
  const { ref: imageRef, className: imageClass } = useImageReveal({
    direction: 'left',
    delay: 350,
  });

  const { ref: zoomRef, className: zoomClass } = useZoomOnView({
    delay: 200,
    once: true,
  });

  return (
    <section className="">
      <MaxWidthWrapper className="pb-[5rem] pt-[3rem] lg:py-[4rem]">
        <div
          ref={ref}
          className="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-[3rem] xl:gap-[5rem]"
        >
          {/* Image Section */}
          <div className="relative mx-auto mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
            {/* CENTER IMAGE */}
            <div
              className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-16 opacity-0'
              }`}
            >
              <Image
                src={img}
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

          {/* Content Section */}
          <div
            className={`my-auto flex-1 transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
          >
            {/* Points Section */}
            <Heading
              isLabel={data?.subTitle && true}
              subTitle={data?.subTitle}
              title={data?.title}
              span=""
              description={data?.description}
            />
            {data?.button && (
              <div className="flex justify-center lg:justify-start">
                <SaveAndCancel
                  name={'Get Your Free Website Audit'}
                  isIcon={true}
                  buttonWidth={'!w-[20rem]'}
                  handleClick={() => setOpen(!open)}
                  className="rem] mt-[2rem]"
                />
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Solutions;
