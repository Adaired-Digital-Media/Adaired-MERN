'use client';
import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import Image from 'next/image';
import { useState } from 'react';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/components/popup/GetQuoteModal';

const ReadyToStart = ({ handleClick, className }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section ref={ref} className={`${className} relative z-20`}>
        <MaxWidthWrapper>
          <div
            className={`relative rounded-3xl bg-[#FB9100] py-[3rem] transition-all duration-1000 lg:py-[4rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <img
              src="/assets/aiseo/ReadyToStart1.png"
              alt=""
              className="absolute left-0 top-0 h-[91px] w-[150px] sm:h-[112px] sm:w-[186px] md:h-[143px] md:w-[246px] lg:h-[334px] lg:w-[576px]"
            />

            <img
              src="/assets/aiseo/ReadyToStart2.png"
              alt=""
              className="absolute bottom-0 right-0 h-[91px] w-[150px] sm:h-[112px] sm:w-[186px] md:h-[143px] md:w-[246px] lg:h-[334px] lg:w-[576px]"
            />

            <Heading
              breakIndex={5}
              isH1={true}
              headingParts={[{text:'Ready to Start Your SEO Project Today?', color:"#FFFFFF", weight:700}]}
              description={''}
              isInCenter={true}
              className="whitespace-pre-line"
            />
            <div className="flex justify-center">
              <h3 className="w-[80%] text-center text-[#FFFFFF] lg:w-[50%]">
                Boost your online visibility, attract targeted traffic, and grow
                your business with our expert SEO strategies.
              </h3>
            </div>
            <div className="flex justify-center pt-[1.5rem]">
              <SaveAndCancel
                name="Book My Free Audit"
                isBgWhite={true}
                isHoverBgBlue={true}
                isIcon={true}
                handleClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative z-10 -mt-32 h-[13vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/footer_img.png"
            alt="Footer background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default ReadyToStart;
