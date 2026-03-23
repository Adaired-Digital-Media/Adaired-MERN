'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface SliderProps {
    data: any[];
    colors: any;
    SocialMediaCheck: any;
    setOpen?: any;
    open?: boolean;
}

export default function ImpToBusinessSlider({
    data,
    colors,
    SocialMediaCheck,
    setOpen,
    open,
}: SliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="mx-auto w-full pt-[1rem] px-[1rem] lg:px-[10rem]">
            <Swiper
                modules={[Autoplay]}
                loop
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {data?.map((item: any, idx: number) => (
                    <SwiperSlide key={idx} className="flex">
                        <div
                            className="relative my-[1rem] flex h-[40rem] md:h-[38rem] lg:h-[36rem] w-full flex-col rounded-[1rem] border bg-white p-[2rem] transition-all duration-500"
                            style={{
                                borderColor: colors?.borderColor,
                                backgroundColor: colors?.cardColor || '#FFFFFF',
                            }}
                        >

                            {/* Icon + Number */}
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                                    <Image
                                        src={item?.icon}
                                        width={60}
                                        height={60}
                                        alt="icon"
                                    />
                                </div>

                                <h1 className="ml-auto text-[4rem] text-[#F1F1F1]">
                                    0{idx + 1}
                                </h1>
                            </div>

                            {/* Title */}
                            <h3
                                className="mb-[0.5rem] mt-[2rem]"
                                style={{ color: colors?.textColor }}
                            >
                                {item?.name}
                            </h3>

                            {/* Description */}
                            <div className="flex-grow">
                                {item?.description?.map((dec: any, index: number) => {
                                    if (typeof dec === 'string') {
                                        return (
                                            <p key={index} className="py-3">
                                                {dec}
                                            </p>
                                        );
                                    }

                                    if (typeof dec === 'object') {
                                        return (
                                            <div key={index} className="py-3">
                                                {dec?.desctioption && (
                                                    <p className="pb-2 font-semibold">
                                                        {dec.desctioption}
                                                    </p>
                                                )}

                                                {dec?.list && (
                                                    <ul className="space-y-3">
                                                        {dec.list.map((listItem: any, i: number) => (
                                                            <li key={i}>
                                                                {listItem?.des?.map(
                                                                    (d: string, di: number) => (
                                                                        <div
                                                                            key={di}
                                                                            className="flex items-start gap-3"
                                                                        >
                                                                            <Image
                                                                                src={SocialMediaCheck}
                                                                                width={17}
                                                                                height={23}
                                                                                alt="check"
                                                                                className="shrink-0 mt-1 w-[14px] h-auto sm:w-[17px]"
                                                                            />
                                                                            <p className="text-left">{d}</p>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        );
                                    }

                                    return null;
                                })}
                            </div>

                            {/* Button */}
                            {item?.button && (
                                <p
                                    onClick={() => setOpen && setOpen(!open)}
                                    className="absolute-[2rem] mt-auto flex cursor-pointer w-fit items-center justify-center gap-2 pt-6 text-[#FB9100] lg:justify-start"
                                >
                                    <span className="text-[16px]">{item.button}</span>
                                    <MdOutlineArrowOutward />
                                </p>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Dots */}
            <div className="mt-6 flex justify-center gap-3">
                {data?.map((_: any, index: number) => (
                    <div
                        key={index}
                        className={`h-1.5 w-4 rounded-full transition-transform ${activeIndex === index ? 'w-8' : 'w-4'
                            }`}
                        style={{
                            backgroundColor:
                                activeIndex === index
                                    ? colors?.activeDot
                                    : colors?.inactiveDot,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}