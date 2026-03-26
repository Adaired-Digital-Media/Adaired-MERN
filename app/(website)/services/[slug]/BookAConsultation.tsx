'use client';
import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/components/popup/GetQuoteModal';
import Mask from '../../../../public/assets/images/services/WhiteLabel/whiteLabelSocialMedia/MaskDots.png';
import CldImage from '@/app/components/UI/CldImage';

const BookAConsultation = ({ buildlinks }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.25);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {buildlinks?.isVariant === '03' && (
        <div
          className={`py-[3rem] lg:py-0`}
          style={{
            backgroundImage: `url(${buildlinks?.bgImg?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: buildlinks?.customPadding?.split(',')[0] || '6rem',
            paddingBottom: buildlinks?.customPadding?.split(',')[1] || '6rem',
            backgroundColor: buildlinks?.bgColor,
          }}
        >
          <MaxWidthWrapper
            customPaddingRight={buildlinks?.customPaddingRight}
            customPaddingLeft={buildlinks?.customPaddingLeft}
            style={{ gap: buildlinks?.customGap || '4rem' }}
            className="block justify-between lg:flex"
          >
            <div
              className={`my-auto w-[100%] p-[0rem] transition-all duration-1000 lg:p-0 lg:w-[${`${buildlinks.width}%`}] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}
              style={{
                paddingBottom: buildlinks?.customPadding?.split(',')[0],
              }}
            >
              <Heading
                breakIndex={buildlinks?.breakIndex}
                isH1={true}
                headingParts={buildlinks?.headingParts}
                span={buildlinks?.span}
                className=""
              />

              <div className="space-y-4">
                {buildlinks?.data?.map((item: any, index: number) => {
                  const isFirst = 0 === index;
                  return (
                    <p
                    key={index}
                      className={`${isFirst && buildlinks?.isFirstParaBold && 'font-bold'}`}
                      style={{
                        color: buildlinks?.textColor || 'text-[#000000]',
                      }}
                    >
                      {item?.desctioption}
                    </p>
                  );
                })}
              </div>

              {buildlinks?.button && (
                <div className="mx-auto w-fit lg:mx-0">
                  <SaveAndCancel
                    name={buildlinks?.button}
                    isIcon={true}
                    isBgWhite={true}
                    handleClick={() => setOpen(!open)}
                    className="mt-[3rem]"
                  />
                </div>
              )}
            </div>

            <div
              ref={ref}
              className={`w-[100%] lg:w-[${`${100 - buildlinks.width}%`}] group order-1 flex justify-center justify-items-center transition-all duration-1000 lg:order-2 lg:justify-end lg:justify-items-end lg:p-0 lg:pt-0 ${buildlinks?.isCode02 ? 'items-end' : 'items-center'}`}
            >
              <div className="relative mx-auto flex-1">
                <div
                  className={`flex ${buildlinks?.isMask ? 'mx-[1rem] my-[1rem] items-center justify-center md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem]' : 'items-end justify-end'} transition-all duration-1000 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-16 opacity-0'
                  }`}
                >
                  {typeof buildlinks?.img === 'string' ? (
                    <CldImage
                      src={buildlinks?.img}
                      alt={buildlinks?.name}
                      width={buildlinks?.imgWidth}
                      height={buildlinks?.imgHight}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={buildlinks?.img}
                      alt={buildlinks?.name}
                      width={buildlinks?.imgWidth}
                      height={buildlinks?.imgHight}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>

                {/* MASK – TOP RIGHT */}
                {buildlinks?.isMask && (
                  <Image
                    src={Mask}
                    alt="Mask Image"
                    width={246}
                    height={136}
                    className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
                  />
                )}

                {/* MASK – BOTTOM LEFT */}
                {buildlinks?.isMask && (
                  <Image
                    src={Mask}
                    alt="Mask Image"
                    width={246}
                    height={136}
                    className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
                  />
                )}
              </div>
            </div>
          </MaxWidthWrapper>
          <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default BookAConsultation;
