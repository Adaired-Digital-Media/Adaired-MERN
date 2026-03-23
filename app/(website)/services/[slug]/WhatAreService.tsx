'use client';
import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import GetQuoteModal from '@/app/components/popup/GetQuoteModal';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import { BsCheckAll } from 'react-icons/bs';
import CldImage from '@/app/components/UI/CldImage';

const WhatAreService = ({ whatareaiseo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <div>
      {whatareaiseo?.isVariant === '04' && (
        <div
          className={`relative py-[3rem] lg:py-0`}
          style={{
            backgroundColor: whatareaiseo?.bgColor,
            paddingTop: whatareaiseo?.customPadding?.split(',')[0] || '6rem',
            paddingBottom: whatareaiseo?.customPadding?.split(',')[1] || '6rem',
          }}
        >
          <MaxWidthWrapper
            isRowReverse={whatareaiseo?.isRowReverse}
            customPaddingRight={whatareaiseo?.customPaddingRight}
            customPaddingLeft={whatareaiseo?.customPaddingLeft}
            className={`block ${whatareaiseo?.isRowReverse && 'flex-row-reverse'} justify-between lg:flex`}
            style={{ gap: whatareaiseo?.customGap || '4rem' }}
          >
            <div
              className={`my-auto w-[100%] lg:w-[${`${whatareaiseo.width}%`}] transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <Heading
                className="flex justify-center lg:justify-start"
                headingParts={whatareaiseo?.headingParts}
                spanColor="text-[#FBD04F]"
                breakIndex={whatareaiseo?.breakIndex}
                // isBgWhite={whatareaiseo?.bgColor && true}
              />
              <div className="">
                {whatareaiseo?.data?.map((item: any, index: number) => {
                  const isLast = whatareaiseo?.data.length - 1 === index;
                  return (
                    <div
                      key={index}
                      className={`transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                      style={{ transitionDelay: `${index * 280}ms` }}
                    >
                      <p
                        className={`py-3 text-center lg:text-justify ${isLast && whatareaiseo?.isLastParaBold && 'font-bold'}`}
                        style={{ color: whatareaiseo?.textColor }}
                      >
                        {item?.desctioption}
                      </p>

                      {item?.list?.length > 0 && (
                        <div
                          className={`grid w-fit space-y-1 py-2 ${item?.isListSingle ? 'grid-cols-1' : 'grid-cols-1 gap-4 py-2 md:grid-cols-2'} `}
                        >
                          {item?.list?.map(
                            (listItem: any, listIndex: number) => (
                              <div
                                key={listIndex}
                                className="flex items-start gap-2"
                              >
                                {item?.isListSingle ? (
                                  <BsCheckAll
                                    size={22}
                                    style={{ color: item?.listTextColor }}
                                  />
                                ) : (
                                  <BiSolidBadgeCheck
                                    size={25}
                                    className="text-[#FB9100]"
                                  />
                                )}
                                <p
                                  className={`text-left ${item?.isListBold && 'font-bold'}`}
                                  style={{
                                    color: item?.listTextColor || '#000000',
                                  }}
                                >
                                  {listItem}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center lg:justify-start">
                {whatareaiseo?.button && (
                  <SaveAndCancel
                    name={whatareaiseo?.button}
                    isIcon={true}
                    isBgWhite={true}
                    isHoverBgBlue={true}
                    handleClick={() => setOpen(!open)}
                    className="my-[2rem]"
                  />
                )}
              </div>
            </div>
            <div
              ref={ref}
              className={`my-auto w-[100%] lg:w-[${`${100 - whatareaiseo.width}%`}] transform pt-[2rem] transition-all delay-200 duration-1000 lg:h-[var(--img-h)] lg:w-[var(--img-w)] lg:pt-0 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-16 opacity-0'
              }`}
              style={
                {
                  '--img-w': whatareaiseo?.imgWidth,
                  '--img-h': whatareaiseo?.imgHight,
                } as React.CSSProperties
              }
            >
              {typeof whatareaiseo?.img === 'string' ? (
                <CldImage
                  src={whatareaiseo?.img}
                  alt={whatareaiseo?.name}
                  width={whatareaiseo?.imgWidth}
                  height={whatareaiseo?.imgHight}
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={whatareaiseo?.img}
                  alt={whatareaiseo?.name}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
};

export default WhatAreService;
