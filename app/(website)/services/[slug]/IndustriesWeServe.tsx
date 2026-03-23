"use client"
import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import React, { useState } from 'react';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { IoIosArrowRoundForward } from 'react-icons/io';

const IndustriesWeServe = ({ industriesWeServe }: any) => {
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
    const [isHover, setIsHover] = useState<number | null>(null);
    return (
        <div
            ref={ref}
            className={`py-[3rem] lg:py-[4rem] ${industriesWeServe?.bgColor}`}
        >
            <MaxWidthWrapper>
                {industriesWeServe?.code === '01' && (
                    <div className='flex flex-col items-center'>
                        <div
                            className={`flex w-full justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
                        >
                            <Heading
                                isInCenter={true}
                                headingParts={industriesWeServe?.headingParts}
                                description={industriesWeServe?.description}
                            />
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${industriesWeServe?.gridCols} gap-[1.5rem] pt-4`}>
                            {industriesWeServe?.list?.map((item: any, idx: number) => (
                                <div
                                    onMouseEnter={() => setIsHover(idx)}
                                    onMouseLeave={() => setIsHover(null)}
                                    key={idx}
                                    className={`group relative inline-block transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                    style={{
                                        transitionDelay: `${idx * 280}ms`,
                                    }}
                                >
                                    <div className='overflow-hidden rounded-[1.3rem]'>
                                        <Image
                                            src={item?.img}
                                            width={industriesWeServe?.imgWidth}
                                            height={industriesWeServe?.imgHeight}
                                            alt="img"
                                            className='hover:scale-105 transition-all duration-500'
                                        />
                                    </div>

                                    <div className={`absolute bottom-[2rem] left-0 w-full px-6 py-3 flex justify-between items-center text-center gap-2`}>
                                        <p className='font-bold text-left text-white'>
                                            {item?.btn}
                                        </p>

                                        <div
                                            className='bg-[#FFFFFF]/40 rounded-full p-1 cursor-pointer group-hover:bg-white transition-all duration-500'>
                                            <IoIosArrowRoundForward
                                                size={30}
                                                className={`text-white group-hover:text-black ${isHover === idx ? 'rotate-[360deg] transition-all duration-700 ease-out active:scale-95' : 'rotate-[310deg]'}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </MaxWidthWrapper>
        </div>
    );
};

export default IndustriesWeServe;