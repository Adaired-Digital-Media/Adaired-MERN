'use client';
import Heading from '@/app/components/common/Heading';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import React, { useState } from 'react';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/components/popup/GetQuoteModal';
import CldImage from '@/app/components/UI/CldImage';

const NotSeeingResults = ({ notSeeingResult }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${notSeeingResult?.bgImage.src})`,
      }}
    >
      <MaxWidthWrapper className="grid w-full grid-cols-1 gap-[2rem] p-3 lg:grid-cols-2">
        <div
          className={`my-auto flex flex-col items-center text-center transition-all duration-1000 lg:items-start lg:text-left ${isVisible ? 'translate-x-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            isH1={true}
            textColor={notSeeingResult?.textColor}
            headingParts={notSeeingResult?.headingParts}
            description={notSeeingResult?.description}
          />
          <SaveAndCancel
            name={notSeeingResult?.buttonName}
            isBgWhite={true}
            isHoverBgBlue={notSeeingResult?.isBgOrange && true}
            isIcon={true}
            handleClick={() => setOpen(!open)}
            className="pt-[2rem]"
          />
        </div>

        <div
          ref={ref}
          className={`flex justify-center justify-items-center pt-2 lg:justify-end lg:justify-items-end ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          {/* <Image 
          src={notSeeingResult?.img} 
          alt="img" /> */}

          {typeof notSeeingResult?.img === 'string' ? (
                <CldImage
                  src={notSeeingResult?.img}
                  alt={notSeeingResult?.name}
                  width={notSeeingResult?.imgWidth}
                  height={notSeeingResult?.imgHight}
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={notSeeingResult?.img}
                  alt={notSeeingResult?.name}
                  className="h-full w-full object-contain"
                />
              )}
        </div>
        <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
      </MaxWidthWrapper>
    </div>
  );
};

export default NotSeeingResults;
