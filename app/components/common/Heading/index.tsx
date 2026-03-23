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
  textColor?: string;
  className?: string;
  isDecVarticle?: boolean;
  description2?: string;
  isPara2?: boolean;
  headingWidth?: string;
  breakIndex?: number;
  isLabel?: boolean;
  spanBreakIndex?: number;
  isCapitalize?: boolean;
  headingParts?: any;
  isLastParaBold?: boolean;
}

const Heading = ({
  subTitle,
  title,
  span,
  spanColor,
  description,
  isInCenter,
  textColor,
  className,
  isH1,
  isDecVarticle,
  description2,
  isPara2,
  headingWidth,
  breakIndex,
  isLastParaBold,
  isVarticle,
  isLabel,
  isCapitalize,
  headingParts,
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
                    className={`flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
                    style={{
                      backgroundColor: textColor || '#000000',
                      border: textColor || '#000000',
                    }}
                  >
                    <Image
                      src={star}
                      width={18}
                      height={17}
                      alt=""
                      className="mb-auto"
                    />
                    <span
                      className={`my-auto uppercase`}
                      style={{ color: textColor || '#000000' }}
                    >
                      {subTitle}
                    </span>
                  </div>
                </div>
                <div className="mt-[1px] md:mt-[15px]">
                  {isH1 ? (
                    <h1 className={`text-center capitalize`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className="text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]"
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h1>
                  ) : (
                    <h2 className={`text-center capitalize`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className="text-[clamp(1.6rem,2.188vw,2.188rem)] leading-[clamp(2rem,3.125vw,3.125rem)]"
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h2>
                  )}
                </div>
              </div>
              <div className="px-0 lg:px-[20%]">
                {/* <p
                  className={`py-4 text-center`}
                  style={{ color: textColor || '#000000' }}
                >
                  {description}
                </p> */}
                {Array.isArray(description) ? (
                  description.map((item: string, index: number) => (
                    <p
                      key={index}
                      className={`py-4 text-center`}
                      style={{ color: textColor || '#000000' }}
                    >
                      {item}
                    </p>
                  ))
                ) : (
                  <p
                    className={`py-4 text-center`}
                    style={{ color: textColor || '#000000' }}
                  >
                    {description}
                  </p>
                )}
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
                    className={`my-auto uppercase xl:text-[14px]`}
                    style={{
                      color: textColor || '#000000',
                      border: textColor || '#000000',
                    }}
                  >
                    {subTitle}
                  </span>
                </div>
                <div className="mb-auto mt-3 h-0.5 w-[8rem] bg-[#D7EBFF]"></div>
                <div className={`mt-[-1rem] ${headingWidth}`}>
                  {isH1 ? (
                    <h1 className={`capitalize`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className="text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]"
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h1>
                  ) : (
                    <h2 className={`capitalize`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className="text-[clamp(1.6rem,2.188vw,2.188rem)] leading-[clamp(2rem,3.125vw,3.125rem)]"
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h2>
                  )}
                </div>
              </div>
              <div className={`${isDecVarticle && 'pt-[1rem]'}`}>
                {/* <p className="pt-4" style={{ color: textColor || '#000000' }}>
                  {description}
                </p> */}
                {Array.isArray(description) ? (
                  description.map((item: string, index: number) => (
                    <p
                      key={index}
                      className={`py-4 text-center`}
                      style={{ color: textColor || '#000000' }}
                    >
                      {item}
                    </p>
                  ))
                ) : (
                  <p
                    className={`py-4 text-center`}
                    style={{ color: textColor || '#000000' }}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {isInCenter ? (
            <div className="">
              <div className="md:flex` w- block gap-3">
                {isLabel && (
                  <div className="flex justify-center">
                    <div
                      className={`flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
                      style={{ color: textColor || '#000000' }}
                    >
                      <Image
                        src={star}
                        width={18}
                        height={17}
                        alt=""
                        className="mb-auto"
                      />
                      <span
                        className={`my-auto uppercase`}
                        style={{
                          color: textColor || '#000000',
                          border: textColor || '#000000',
                        }}
                      >
                        {subTitle}
                      </span>
                    </div>
                  </div>
                )}
                <div className="">
                  {isH1 ? (
                    <h1 className={`text-center capitalize`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className="text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]"
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h1>
                  ) : (
                    <h2 className={`text-center capitalize`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className="text-[clamp(1.6rem,2.188vw,2.188rem)] leading-[clamp(2rem,3.125vw,3.125rem)]"
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h2>
                  )}
                </div>
              </div>
              {description && (
                <div className="px-0 lg:px-[15%]">
                  {Array.isArray(description) ? (
                    description.map((item: string, index: number) => {
                      const isLast = description.length - 1 === index;
                      return (
                        <p
                          key={index}
                          className={`mx-auto w-[100%] py-4 text-center lg:w-[80%] ${isLast && isLastParaBold && 'font-bold'}`}
                          style={{ color: textColor || '#000000' }}
                        >
                          {item}
                        </p>
                      );
                    })
                  ) : (
                    <p
                      className={`mx-auto w-[100%] py-4 text-center lg:w-[80%]`}
                      style={{ color: textColor || '#000000' }}
                    >
                      {description}
                    </p>
                  )}
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
                    <span
                      className="my-auto uppercase"
                      style={{
                        color: textColor || '#000000',
                        border: textColor || '#000000',
                      }}
                    >
                      {subTitle}
                    </span>
                  </div>
                )}
                <div className="mt-[0.8rem] md:mt-[8px] lg:mt-[0.5rem]">
                  {isH1 ? (
                    <h1 className={``}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className={`text-center text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)] ${isCapitalize && 'capitalize'} lg:text-left`}
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h1>
                  ) : (
                    <h2 className={`text-center capitalize lg:text-left`}>
                      {headingParts
                        ?.flatMap((part: any) =>
                          part.text.split(' ').map((word: string) => ({
                            word,
                            color: part.color,
                            weight: part.weight,
                          }))
                        )
                        .map((item: any, i: number) => (
                          <span
                            key={i}
                            style={{
                              color: item.color,
                              fontWeight: item.weight,
                            }}
                            className={`text-center text-[clamp(1.6rem,2.188vw,2.188rem)] leading-[clamp(2rem,3.125vw,3.125rem)] ${isCapitalize && 'capitalize'} lg:text-left`}
                          >
                            {item.word}{' '}
                            {breakIndex === i + 1 && (
                              <br className="hidden md:block" />
                            )}
                          </span>
                        ))}
                    </h2>
                  )}
                </div>
              </div>
              <div className={`${isDecVarticle && 'pt-[0rem]'}`}>
                {Array.isArray(description) ? (
                  description.map((item: string, index: number) => {
                    const isLast = description.length - 1 === index;
                    return (
                      <p
                        key={index}
                        className={`pt-4 text-center lg:text-left ${isLast && isLastParaBold && 'font-bold'}`}
                        style={{ color: textColor || '#000000' }}
                      >
                        {item}
                      </p>
                    );

                  })
                ) : (
                  <p
                    className={`pt-4 text-center lg:text-left`}
                    style={{ color: textColor || '#000000' }}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Heading;
