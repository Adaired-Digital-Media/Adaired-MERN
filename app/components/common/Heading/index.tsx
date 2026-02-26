//

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import star from '../../../../public/assets/icons/star.png';

export interface IHeading {
  subTitle?: String;
  title?: String;
  span?: String;
  spanColor?: string;
  isH1?: boolean;
  description?: string;
  isInCenter?: boolean;
  isVarticle?: boolean;
  isBgWhite?: boolean;
  className?: string;
  isDecVarticle?: boolean;
  description2?: string;
  isPara2?: boolean;
  headingWidth?: string;
  breakIndex?: number;
  isLabel?: boolean;
  spanBreakIndex?: number;
  isCapitalize?: boolean;
}

const Heading = ({
  subTitle,
  title,
  span,
  spanColor,
  description,
  isInCenter,
  isBgWhite,
  className,
  isH1,
  isDecVarticle,
  description2,
  isPara2,
  headingWidth,
  breakIndex,
  spanBreakIndex,
  isVarticle,
  isLabel,
  isCapitalize,
}: IHeading) => {
  const safeTitle = title ?? '';
  const safeSpan = span ?? '';

  const words = safeTitle.split(' ');
  const spans = safeSpan.split(' ');

  return (
    <div className={className}>
      {isVarticle ? (
        <div className="">
          {isInCenter ? (
            <div className="">
              <div className="md:flex` w- block gap-3">
                <div className="flex justify-center">
                  <div
                    className={` ${isBgWhite ? 'border-[#000000]/50 bg-[#FFFFFF]' : 'border-[#FFFFFF]/50 bg-transparent'} flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
                  >
                    <Image
                      src={star}
                      width={18}
                      height={17}
                      alt=""
                      className="mb-auto"
                    />
                    <span
                      className={`my-auto uppercase ${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}
                    >
                      {subTitle}
                    </span>
                    {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
                  </div>
                </div>
                <div className="mt-[1px] md:mt-[15px]">
                  {isH1 ? (
                    <h1
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}
                    </h1>
                  ) : (
                    <h2
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}
                    </h2>
                  )}
                </div>
              </div>
              <div className="px-0 lg:px-[20%]">
                <p
                  className={`${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'} py-4 text-center`}
                >
                  {description}
                </p>
              </div>
            </div>
          ) : (
            <div className={`${''}`}>
              <div className="flex gap-[2rem]">
                <div className="flex h-fit gap-2">
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt=""
                    className="mb-auto"
                  />
                  <span
                    className={`my-auto uppercase ${isBgWhite ? 'text-[#111111]' : 'text-white'} xl:text-[14px]`}
                  >
                    {subTitle}
                  </span>
                </div>
                <div className="mb-auto mt-3 h-0.5 w-[8rem] bg-[#D7EBFF]"></div>
                <div className={`mt-[-1rem] ${headingWidth}`}>
                  {isH1 ? (
                    <h1 className={`capitalize`}>
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}
                    </h1>
                  ) : (
                    <h2
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-white'}`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}
                    </h2>
                  )}
                </div>
              </div>
              <div className={`${isDecVarticle && 'pt-[1rem]'}`}>
                <p className="pt-4">{description}</p>
                {isPara2 && <p className="py-4">{description2}</p>}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {isInCenter ? (
            <div className=" ">
              <div className="md:flex` w- block gap-3">
                {isLabel && (
                  <div className="flex justify-center">
                    <div
                      className={` ${isBgWhite ? 'border-[#000000]/50 bg-[#FFFFFF]' : 'border-[#FFFFFF]/50 bg-transparent'} flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
                    >
                      <Image
                        src={star}
                        width={18}
                        height={17}
                        alt=""
                        className="mb-auto"
                      />
                      <span
                        className={`my-auto uppercase ${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}
                      >
                        {subTitle}
                      </span>
                      {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
                    </div>
                  </div>
                )}
                <div className="">
                  {isH1 ? (
                    <h1
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}
                    </h1>
                  ) : (
                    <h2
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}
                    </h2>
                  )}
                </div>
              </div>
              {description && (
                <div className="px-0 lg:px-[15%]">
                  <p
                    className={`${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'} mx-auto w-[80%] py-4 text-center`}
                  >
                    {description}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div
              className={`${isDecVarticle && 'grid grid-cols-1 lg:grid-cols-2 lg:gap-[10rem]'}`}
            >
              <div className="md:flex` block w-full justify-center justify-items-center gap-3 md:justify-center md:justify-items-center lg:w-fit lg:justify-start lg:justify-items-start">
                {isLabel && (
                  <div className="flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem]">
                    <Image
                      src={star}
                      width={18}
                      height={17}
                      alt=""
                      className="mb-auto"
                    />
                    <span className="my-auto uppercase text-[#000000]">
                      {subTitle}
                    </span>
                  </div>
                )}
                <div className="mt-[0.8rem] md:mt-[8px] lg:mt-[0.5rem]">
                  {isH1 ? (
                    <h1
                      className={`text-center ${isCapitalize && 'capitalize'} lg:text-left ${isBgWhite ? 'text-[#ffffff]' : 'text-[#000000]'}`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}

                      <span className={`${spanColor}`}>{span}</span>
                    </h1>
                  ) : (
                    <h2
                      className={`text-center capitalize lg:text-left ${isBgWhite ? 'text-[#ffffff]' : 'text-[#000000]'}`}
                    >
                      {breakIndex !== undefined ? (
                        <>
                          {words.slice(0, breakIndex).join(' ')}
                          <br className="hidden md:block" />
                          {" "}
                          {words.slice(breakIndex).join(' ')}
                        </>
                      ) : (
                        words.join(' ')
                      )}

                      <span
                        className={`pl-3 pt-[0.25rem] text-center font-poppins text-[1.6rem] font-semibold leading-[2rem] ${spanColor} md:text-[2.25rem] md:leading-[2.75rem] lg:text-left lg:text-[1.8rem] lg:leading-[2.5rem] xl:text-[2.188rem] xl:leading-[3.125rem] 1360:text-[2rem] 1360:leading-[2.6rem] 2xl:leading-[1.6] 3xl:text-[2.188rem]`}
                      >
                        {/* {span} */}
                        {spanBreakIndex !== undefined ? (
                          <>
                            {spans.slice(0, spanBreakIndex).join(' ')}
                            <br className="hidden md:block" />
                            {" "}
                            {spans.slice(spanBreakIndex).join(' ')}
                          </>
                        ) : (
                          spans.join(' ')
                        )}
                      </span>
                    </h2>
                  )}
                </div>
              </div>
              <div className={`${isDecVarticle && 'pt-[0rem]'}`}>
                {Array.isArray(description)? (
                  description.map((item: string, index: number) => (
                    <p
                      key={index}
                      className={`${isBgWhite ? 'text-[#FFFFFF]' : ''} pt-4 text-center lg:text-left`}
                    >
                      {item}
                    </p>
                  ))
                ) : (
                  <p
                    className={`${isBgWhite ? 'text-[#FFFFFF]' : ''} pt-4 text-center lg:text-left`}
                  >
                    {description}
                  </p>
                )}
                {isPara2 && <p className="py-4">{description2}</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Heading;
