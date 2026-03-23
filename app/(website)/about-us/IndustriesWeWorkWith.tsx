"use client"
import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoArrowForwardCircle } from "react-icons/io5";

const IndustriesWeWorkWith = ({ industriesWeWorkWith }: any) => {
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
    const [isActive, setIsActive] = useState<number | null>(null);
    const [visibleCards, setVisibleCards] = useState(3);
    const [index, setIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 640) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(4);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);

        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    const totalItems = industriesWeWorkWith?.list?.length || 0;
    const maxIndex = Math.max(totalItems - visibleCards, 0);

    const handleNext = () => {
        if (index < maxIndex) {
            setIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    return (
        <div
            ref={ref}
            className={`py-[3rem] lg:py-[4rem]`}
            style={{
                backgroundImage: `url(${industriesWeWorkWith?.bgImg?.src})`,
            }}
        >
            <MaxWidthWrapper>
                {industriesWeWorkWith?.code === '01' && (
                    <div>
                        <div
                            className={`flex w-full justify-between transition-all duration-1000 lg:w-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
                        >
                            <Heading
                                breakIndex={3}
                                isDecVarticle={true}
                                textColor={industriesWeWorkWith?.textColor}
                                headingParts={industriesWeWorkWith?.headingParts}
                                description={industriesWeWorkWith?.description}
                            />
                        </div>

                        <div className='flex flex-col-reverse lg:flex-col'>
                            <div className="flex justify-center lg:justify-start py-[1rem] lg:py-[3rem]">
                                <IoArrowForwardCircleOutline
                                    size={50}
                                    onClick={handlePrev}
                                    className={`rotate-180 cursor-pointer text-white hover:text-[#FB9100] ${index === 0 ? 'cursor-not-allowed opacity-40' : ''}`}
                                />
                                <IoArrowForwardCircleOutline
                                    size={50}
                                    onClick={handleNext}
                                    className={`cursor-pointer text-white hover:text-[#FB9100] ${index >= maxIndex ? 'cursor-not-allowed opacity-40' : ''}`}
                                />
                            </div>

                            <div className="overflow-hidden py-[1rem]">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out -mx-4"
                                    style={{
                                        transform: `translateX(-${index * (100 / visibleCards)}%)`,
                                    }}
                                >

                                    {industriesWeWorkWith?.list?.map((item: any, idx: number) => (
                                        <div
                                            key={idx}
                                            onMouseEnter={() => setIsActive(idx)}
                                            onMouseLeave={() => setIsActive(null)}
                                            className="flex flex-col justify-center items-center px-4 transition-all duration-300 ease-in-out"
                                            style={{
                                                minWidth: `${100 / visibleCards}%`,
                                            }}
                                        >

                                            <div className="relative inline-block">
                                                <Image
                                                    src={item?.img}
                                                    width={419}
                                                    height={502}
                                                    alt="img"
                                                />
                                                <div className='absolute bottom-[2rem] left-0 w-full px-6 py-3 flex justify-between items-center bg-white text-center'>

                                                    <p className='font-bold text-left'>
                                                        {item?.btn}
                                                    </p>

                                                    <IoIosArrowRoundForward
                                                        size={35}
                                                        className={`text-black ${isHover ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95' : 'rotate-[310deg]'}`}
                                                    />

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </MaxWidthWrapper>
        </div>
    );
};

export default IndustriesWeWorkWith;