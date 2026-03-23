"use client";
import Heading from "@/app/components/common/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React, { useEffect, useState } from "react";
import groth from "../../../../public/assets/icons/growth 2.png";
import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import DottedLine from "../../../../public/assets/Line 28.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import ranking from "../../../../public/assets/icons/rankings.svg";
import ranking2 from "../../../../public/assets/icons/rankings2.svg";
import CldImage from "@/app/components/UI/CldImage";

const KeyStats = ({ keyStats }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const [isActive, setIsActive] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // sm
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // md
      } else {
        setVisibleCards(3); // lg
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalItems = keyStats?.list?.length || 0;
  const maxIndex = totalItems - visibleCards;

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
    <div ref={ref} className={`py-[3rem] lg:py-[4rem]`}>
      <MaxWidthWrapper>
        {keyStats?.code === "01" && (
          <div>
            {keyStats?.isCarousel ? (
              <div
                className={`flex w-full justify-between transition-all duration-1000 lg:w-full ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
              >
                <Heading
                  breakIndex={6}
                  isInCenter={true}
                  subTitle={""}
                  headingParts={keyStats?.headingParts}
                />
                <div className="flex">
                  <IoArrowForwardCircleOutline
                    size={30}
                    onClick={handlePrev}
                    className={`rotate-180 cursor-pointer ${
                      index === 0 ? "cursor-not-allowed opacity-40" : ""
                    }`}
                  />
                  <IoArrowForwardCircleOutline
                    size={30}
                    onClick={handleNext}
                    className={`cursor-pointer ${
                      index >= maxIndex ? "cursor-not-allowed opacity-40" : ""
                    }`}
                  />
                </div>
              </div>
            ) : (
              <div
                className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
              >
                <Heading
                  // breakIndex={6}
                  isInCenter={true}
                  subTitle={""}
                  headingParts={keyStats?.headingParts}
                />
              </div>
            )}
            {keyStats?.isCarousel ? (
              <div className="overflow-hidden pt-[2rem]">
                <div
                  className="flex gap-[1rem] transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${index * (100 / visibleCards)}%)`,
                  }}
                >
                  {keyStats?.list?.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setIsActive(idx)}
                      onMouseLeave={() => setIsActive(null)}
                      className={`flex min-w-full flex-col items-center rounded-[1rem] border border-[#323232]/10 p-[2rem] transition-all duration-300 ease-in-out sm:min-w-[50%] lg:min-w-[32.6%] lg:items-start ${isActive === idx ? "rounded-[1rem] bg-[#FB9100]" : "bg-[#F9F9F9]"}`}
                    >
                      <Image
                        src={isActive === idx ? ranking : ranking2}
                        width={50}
                        height={50}
                        alt="img"
                      />
                      <p
                        className={`pt-[2rem] transition-colors duration-300 ${
                          isActive === idx ? "text-white" : "text-black"
                        }`}
                      >
                        {item?.desctioption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`pt-[2rem] ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"} grid grid-cols-1 gap-[1rem] lg:grid-cols-3`}
                >
                  {keyStats?.list?.slice(0, 3).map((item: any, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col items-center rounded-[1rem] border border-[#323232]/10 bg-[#F9F9F9] p-[2rem] transition-all duration-700 lg:items-start ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        style={{
                          transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                        }}
                      >
                        <Image
                          src={item?.icon || groth}
                          width={50}
                          height={50}
                          alt="img"
                        />
                        <p className="pt-[2rem]">{item?.desctioption}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-[1rem] grid grid-cols-1 gap-[1rem] lg:grid-cols-2">
                  {keyStats?.list?.slice(3, 9).map((item: any, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className={`flex flex-col items-center rounded-[1rem] border border-[#323232]/10 bg-[#F9F9F9] p-[2rem] transition-all duration-700 lg:items-start ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
                        style={{
                          transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                        }}
                      >
                        <Image
                          src={item?.icon || groth}
                          width={50}
                          height={50}
                          alt="img"
                        />
                        <p className="pt-[2rem]">{item?.desctioption}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
        {keyStats?.code === "02" && (
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
          >
            <Heading
              breakIndex={keyStats?.breakIndex}
              isInCenter={true}
              subTitle={""}
              headingParts={keyStats?.headingParts}
            />
            <div className="flex flex-col items-stretch gap-5 pt-[2rem] lg:flex-row lg:gap-[6rem]">
              <div
                className={`flex w-[100%] transform justify-center transition-all delay-200 duration-1000 lg:justify-start lg:w-[${`${keyStats.width}%`}] ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
              >
                {/* <Image
                  src={keyStats?.img}
                  alt="img"
                  width={keyStats?.imgWidth}
                  height={keyStats?.imgHeight}
                  className="object-contain"
                /> */}
                {typeof keyStats?.img === "string" ? (
                  <CldImage
                    src={keyStats?.img}
                    alt={keyStats?.name}
                    width={keyStats?.imgWidth}
                    height={keyStats?.imgHight}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={keyStats?.img}
                    alt={keyStats?.name}
                    className="h-full w-full object-contain"
                  />
                )}
              </div>

              <div
                className={`mt-7 w-[100%] space-y-4 lg:w-[${`${100 - keyStats.width}%`}]`}
              >
                {keyStats?.list?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`flex transform flex-col transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{
                      transitionDelay: `${index * 280}ms`, // 👈 stagger here
                    }}
                  >
                    {index !== 0 && (
                      <Image
                        src={DottedLine}
                        width={891}
                        height={0}
                        alt="dotted-line"
                      />
                    )}

                    <div className="flex flex-col items-center gap-8 py-4 md:flex-row lg:flex-row lg:gap-16">
                      <div className="mx-2.5 flex w-[50px] justify-center">
                        <h1 className="font-normal text-[#FB9100]">
                          {String(index + 1).padStart(2, "0")}
                        </h1>
                      </div>

                      <p className="">{item.desctioption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {keyStats?.code === "03" && (
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
          >
            <Heading
              // breakIndex={6}
              isInCenter={true}
              subTitle={""}
              headingParts={keyStats?.headingParts}
            />

            <div className="relative grid grid-cols-1 gap-[1rem] pt-[2rem] lg:grid-cols-2 lg:gap-[4rem]">
              <div className="rounded-[20px]">
                {keyStats?.list?.map((item: any, index: any) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveTab(index)}
                    onMouseLeave={() => setActiveTab(0)}
                    // className={`relative flex w-[100%] flex-col px-[2rem] py-[2rem] transition-all duration-300 ease-in-out ${activeTab === index ? `bg-[${keyStats?.bgColor}]/20 text-white` : `bg-[${keyStats?.bgColor}]/10 text-black`}`}

                    className={`relative flex w-[100%] flex-col px-[2rem] py-[2rem] transition-all duration-300 ease-in-out`}
                    style={{
                      backgroundColor:
                        activeTab === index
                          ? `${keyStats?.bgColor}B3`
                          : `${keyStats?.bgColor}1A`,
                    }}
                  >
                    <div
                      className={`flex items-start gap-8 transition-all duration-700 ease-in-out lg:items-center lg:gap-16 lg:text-left`}
                      style={{
                        transitionDelay: `${index * 280}ms`,
                      }}
                    >
                      <h2
                        className={`transition-all duration-300 ease-in-out ${activeTab === index ? `text-[${keyStats?.textColor}]` : "text-[#000000]"} `}
                      >
                        {`0${index + 1}`}
                      </h2>

                      <p
                        className={`pr-[2rem] transition-all duration-300 ease-in-out lg:text-left ${activeTab === index && `text-[${keyStats?.textColor || "text-[#000000]"}]`} ${
                          activeTab === index ? "font-semibold" : ""
                        }`}
                      >
                        {item.desctioption}
                      </p>
                    </div>
                    {activeTab === index && (
                      <div
                        className={`absolute right-0 top-0 h-full w-2 rounded-r-[1rem]`}
                        style={{
                          backgroundColor: keyStats?.bgColor || "#FFFFFF",
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              <div
                className={`relative flex items-center justify-center rounded-[20px] ${keyStats?.headingParts[0]?.text == "Must-Know Facts About White Label Social Media" ? "bg-[#FFFFFF]" : `bg-[${keyStats?.bgColor}]/10`}`}
              >
                <Image
                  src={keyStats?.img}
                  fill
                  alt="img"
                  className={`object-fill transition-opacity transition-transform duration-700 ease-in-out group-hover:scale-110`}
                />
              </div>
            </div>
          </div>
        )}
        {keyStats?.code === "04" && (
          <div>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
            >
              <Heading
                breakIndex={6}
                isInCenter={true}
                subTitle={""}
                headingParts={keyStats?.headingParts}
              />
            </div>
            <div
              className={`grid grid-cols-1 gap-4 pt-[2rem] transition-all duration-700 md:grid-cols-2 lg:grid-cols-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {keyStats?.list?.map((item: any, idx: any) => {
                const isHovered = hover === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      transitionDelay: `${idx * 280}ms`,
                    }}
                    className={`rounded-3xl border-r-[1px] border-r-[#00000026]/10 p-[1.8rem] transition-all duration-700 last:border-r-0 lg:p-[1rem] xl:px-[1.75rem] xl:py-[1.5rem] 1360:p-[1rem] 1400:p-[1rem] ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    } ${
                      isHovered
                        ? "bg-gradient-to-br from-[#FB9100] to-[#000000]"
                        : ""
                    }`}
                  >
                    <h2
                      className={`F28F17 mx-auto w-fit rounded-xl border border-[#F28F17]/10 bg-[#FFEACD] px-3 py-1 font-normal text-[#FB9100] lg:mx-0 ${
                        isHovered ? "bg-black/40 text-white" : ""
                      }`}
                    >
                      {`0${idx + 1}`}
                    </h2>

                    <h3 className={`pt-10 ${isHovered ? "text-white" : ""}`}>
                      {item?.description}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default KeyStats;
