'use client';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import LaunchMobileAppCardBg from '../../../../public/assets/images/services/mobileAppDevelopment/LaunchMobileAppCardBg.png';
import Image from 'next/image';

const LaunchMobileApp = ({ handleClick, idx, isVisible, cardData }: any) => {
    //test
    return (
        <div className={`relative min-h-[480px] lg:min-h-[450px] rounded-2xl transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{
                transitionDelay: `${idx * 280}ms`,
            }}
        >
            <Image
                src={LaunchMobileAppCardBg}
                fill
                alt="hero bg"
                priority
                className="relative pointer-events-none rounded-2xl object-fill lg:object-cover"
            />

            <Image
                src={cardData?.bgImg}
                alt="hero image"
                width={cardData?.imgWidth}
                height={cardData?.imgHeight}
                priority
                className={`absolute ${cardData?.clampWidth} ${cardData?.code === '01' ? 'lg:mr-[1rem]' : ''} bottom-0 right-0 pointer-events-none rounded-2xl`}
            />
            <div
                className='absolute w-full p-[2rem] md:p-[4rem] lg:p-[3rem] h-full'
            >
                <h1 
                className="text-center text-white lg:text-left font-light">
                    {cardData?.heading}
                </h1>

                {cardData?.heading1?.map((heading: any, i: number) => (
                    <h1
                        key={i}
                        className="text-center text-white lg:text-left">
                        {heading}
                    </h1>
                ))}

                {cardData?.description?.map((desc: any, i: number) => (
                    <p
                        key={i}
                        className={`${cardData?.code === '01' ? 'lg:mr-[14rem]' : ''} py-[2rem] text-white font-semibold text-center lg:text-left`}>
                        {desc}
                    </p>
                ))}

                <div className="absolute lg:pt-0 pt-[2rem] sm:px-[7rem] sm:p-[3rem] md:p-[4rem] lg:px-0">
                    <SaveAndCancel
                        name={cardData?.buttonName}
                        isIcon={true}
                        isBold={true}
                        isBgWhite={true}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default LaunchMobileApp;
