'use client';

import { useState } from 'react';
import { useRef, useEffect } from "react";
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import Heading from '@/app/components/common/Heading';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const TechStackMobile = ({ techStackMobile }: any) => {
    const [isActiveTab, setIsActiveTab] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
    const tabRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const activeTab = tabRefs.current[isActiveTab];

        if (activeTab && window.innerWidth < 1024) {
            activeTab.scrollIntoView({
                behavior: "smooth",
                inline: isActiveTab === 0 ? "start" : "center",
                block: "nearest",
            });
        }

        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: 0,
                behavior: "smooth"
            });
            setActiveSlide(0);
        }
    }, [isActiveTab]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const totalSlides = techStackMobile?.list?.[isActiveTab]?.length || 0;

        const interval = setInterval(() => {
            setActiveSlide((prev) => {
                let nextSlide = prev + 1;

                if (nextSlide >= totalSlides) {
                    nextSlide = 0;
                }

                slider.scrollTo({
                    left: slider.clientWidth * nextSlide,
                    behavior: "smooth",
                });

                return nextSlide;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isActiveTab]);

    return (
        <section ref={ref}>
            <MaxWidthWrapper className="py-[3rem] lg:py-[4rem]">
                <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <Heading
                        breakIndex={techStackMobile?.breakIndex}
                        headingParts={techStackMobile?.headingParts}
                        description={techStackMobile?.description}
                        isInCenter={true}
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <div className={`w-fit px-4 lg:px-0 mb-[2rem] lg:mb-[3rem] mt-[2rem] flex overflow-hidden justify-start lg:justify-center gap-[1rem] lg:rounded-full lg:border lg:border-[#3051B3C]/17 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                        {techStackMobile?.navItems?.map((item: any, idx: number) => (
                            <p
                                key={idx}
                                ref={(el) => { tabRefs.current[idx] = el }}
                                onClick={() => setIsActiveTab(idx)}
                                className={`my-auto cursor-pointer rounded-full border border-[#3051B3C]/17 lg:border-none px-[2.3rem] py-[0.5rem] lg:py-[0.8rem] whitespace-nowrap transition-all duration-300 ease-in-out ${isActiveTab === idx
                                    ? "bg-[#FB9100] lg:scale-105"
                                    : "hover:bg-[#FB9100] group"
                                    }`}
                            >
                                <p className={`lg:hidden text-[14px] lg:text-[16px] transition-all duration-300 ease-in-out ${isActiveTab === idx
                                    ? "text-white"
                                    : "group-hover:text-white"
                                    }`}>
                                    {techStackMobile?.mobileNavItems[idx]}
                                </p>

                                <p className={`hidden lg:inline text-[14px] lg:text-[16px] transition-all duration-300 ease-in-out ${isActiveTab === idx
                                    ? "text-white"
                                    : "group-hover:text-white"
                                    }`}>
                                    {item}
                                </p>
                            </p>
                        ))}
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    className={`lg:grid lg:grid-cols-5 lg:gap-[2rem] flex overflow-hidden gap-[1rem] pb-4 snap-x snap-mandatory transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                >
                    {techStackMobile?.list?.[isActiveTab]?.map((cards: any, index: number) => (
                        <div
                            key={index}
                            className="snap-center min-w-[99%] lg:min-w-0 px-[1rem] py-[2rem] border rounded-[2rem] flex flex-col gap-[2rem] items-center justify-between"
                        >
                            <div className="h-[88px] flex items-center justify-center">
                                <Image
                                    src={cards.image}
                                    alt="icon"
                                    width={100}
                                    height={88}
                                    className="object-contain"
                                />
                            </div>

                            <p className="text-center text-[16px]">{cards.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-4 lg:hidden">
                    {techStackMobile?.list?.[isActiveTab]?.map((_: any, i: number) => (
                        <div
                            key={i}
                            className={`h-2 w-2 rounded-full ${activeSlide === i ? 'bg-[#FB9100]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                <p className='text-center pt-[2rem]'>{techStackMobile?.ContentDescription}</p>
            </MaxWidthWrapper>
        </section >
    );
};

export default TechStackMobile;