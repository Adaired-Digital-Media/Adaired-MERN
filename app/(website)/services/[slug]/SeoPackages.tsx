import { useState } from "react";
import Heading from "@/app/components/common/Heading";
import Image from 'next/image';
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import SocialMediaCheck from '../../../../public/assets/images/service/SocialMediaCheck.png';
import GetQuoteModal from "@/app/components/popup/GetQuoteModal";
import { IoIosArrowRoundForward } from 'react-icons/io';

const SeoPackages = ({ seopackages }: any) => {
    const [open, setOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState(
        seopackages?.cardLength === 3 ? 1 : null
    );

    return (
        <>
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#fff9f0] py-[4rem]">
                <MaxWidthWrapper>
                    <div className="">
                        <Heading
                            headingParts={seopackages?.headingParts}
                            description={seopackages?.description}
                            isInCenter={true}
                        />
                    </div>
                    <div
                        className={`flex items-center justify-center ${seopackages?.data?.length === 2 && 'px-[0rem] lg:px-[14rem]'}`}
                    >
                        <div
                            className={`grid ${seopackages?.cardLength === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-3'} gap-[2rem] py-[4rem]`}
                        >
                            {seopackages?.data?.map((item: any, index: any) => (
                                <div
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() =>
                                        setActiveIndex(seopackages?.cardLength === 3 ? 1 : null)
                                    }
                                    className={`group relative flex h-full flex-col justify-between rounded-3xl border-2 ${activeIndex === index ? 'scale-105 border-[#FB9100] bg-gradient-to-b' : 'border-black/20 bg-white'} from-[#fff1dd] via-[#FFFFFF] to-[#FFFFFF] p-8 transition-all duration-300`}
                                >
                                    <div>
                                        {index === 1 &&
                                            seopackages?.cardLength === 3 &&
                                            item?.text && (
                                                <span className={`absolute right-5 top-5 rounded-full border-2 px-[0.7rem] py-[0.3rem] font-semibold lg:px-[1rem] lg:py-[0.5rem] ${activeIndex === index
                                                    ? 'border-[#FB9100] text-[#FB9100]'
                                                    : 'border-[#000000]/20'
                                                    }`}>
                                                    {item?.text}
                                                </span>
                                            )}

                                        <h3 className="py-[1rem]">{item.title}</h3>
                                        <p className="pb-[2rem]">{item.description}</p>
                                        <h1 className="text-center lg:text-left font-normal">
                                            {' '}
                                            {item.desc}
                                            <span className="text-[18px]">{item.span}</span>
                                        </h1>

                                        <div className="my-[2rem] h-[1px] w-full rounded bg-[#000000]/20">
                                            {' '}
                                        </div>

                                        <p className="pb-[2rem] font-bold">{item.desctioption}</p>

                                        <div className="flex flex-col gap-4">
                                            {item?.list?.map((listItem: any, i: number) => (
                                                <div
                                                    key={i}
                                                    className="flex flex-row items-start gap-4"
                                                >
                                                    <Image
                                                        src={SocialMediaCheck}
                                                        width={24}
                                                        height={25}
                                                        alt="arrow"
                                                    />
                                                    <p className="text-left">{listItem.des}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <div className="pt-[4rem]">
                                        <SaveAndCancel
                                            name={item?.button}
                                            isBgWhite={false}
                                            isHoverBgBlue={false}
                                            isIcon={true}
                                        />
                                    </div> */}

                                    <button
                                        onClick={() => setOpen(true)}
                                        className={`group mt-[2rem] px-[2rem] bg-black group-hover:bg-[#FB9100] text-white flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] font-montserrat text-xxs font-medium transition-all duration-300 ease-out active:scale-95 xl:text-xs 1366:text-[14px] 1400:text-[18px] 1470:text-[18px] 1600:text-[18px] 1680:text-[18px]`}
                                    >
                                        {item?.button}
                                        <IoIosArrowRoundForward
                                            size={25}
                                            className={`rotate-[310deg] group-hover:rotate-[360deg] transition-all duration-300 ease-out active:scale-95`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
                </MaxWidthWrapper>
            </div>
        </>
    );
};

export default SeoPackages;
