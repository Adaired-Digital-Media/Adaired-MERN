'use client';
import React from 'react';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import Image from 'next/image';

const ImpToBusinessCard = ({ handleClick, idx, isVisible, cardData }: any) => {
  return (
    <div
      className={`relative min-h-[450px] rounded-2xl overflow-hidden transition-all duration-700 
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{
        transitionDelay: `${idx * 280}ms`,
      }}
    >
      <Image
        src={cardData?.img}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-cover rounded-2xl"
      />

      <div
        className="
        absolute
        lg:left-[2.5rem] md:left-[2rem] left-[1rem]
        lg:right-[5rem] md:right-[2rem] right-[1rem]
        lg:top-[2rem] md:top-[1.5rem] top-[1rem]
        lg:bottom-[2rem] md:bottom-[1.5rem] bottom-[1rem]
        pb-[2rem]
        flex flex-col justify-between"
      >
        <div>
          <h1 className="text-center text-white lg:text-left font-light">
            {cardData?.heading}
          </h1>

          {cardData?.heading1?.map((heading: any, i: number) => (
            <h1
              key={i}
              className="text-center text-white lg:text-left"
            >
              {heading}
            </h1>
          ))}

          {cardData?.description?.map((desc: any, i: number) => (
            <p
              key={i}
              className={`text-white ${cardData?.code === 2 ? 'pt-[2rem]' : ''
                }`}
            >
              {desc}
            </p>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start lg:pt-[2rem]">
          <SaveAndCancel
            name={cardData?.buttonName}
            isIcon={true}
            isBold={true}
            isBgWhite={true}
            buttonWidth=""
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ImpToBusinessCard; 
