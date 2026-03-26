"use client";
import React from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Heading from "@/app/components/common/Heading";

import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";

const LeadingTools = ({ leadingTools }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const row1 = leadingTools?.list?.slice(0, 7) || [];
  const row2 = leadingTools?.list?.slice(7, 14) || [];
  // const row3 = leadingTools?.list?.slice(20, 30) || [];

  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];
  // const row3Duplicated = [...row3, ...row3];

  const duplicatedList = [
    ...(leadingTools?.list || []),
    ...(leadingTools?.list || []),
  ];

  return (
    <div
      ref={ref}
      className={`overflow-hidden bg-cover ${leadingTools?.bgColor} ${leadingTools?.isGapTop
          ? "pb-[3rem] lg:pb-[4rem]"
          : "pb-[3rem] pt-[2rem] lg:pb-[4rem] lg:pt-[2.5rem]"
        } `}
      style={{
        backgroundImage: `url(${leadingTools?.bgImage.src})`,
      }}
    >
      {leadingTools?.isVariant === "01" && (
        <div>
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
            >
              <Heading
                breakIndex={6}
                headingParts={leadingTools?.headingParts}
                description={leadingTools?.description}
                textColor={leadingTools?.textColor}
                isInCenter={true}
                isLastParaBold={leadingTools?.isLastParaBold}
              />
            </div>
          </MaxWidthWrapper>

          <div className="w-full overflow-hidden pt-[2rem]">
            <div className="flex w-max animate-marquee gap-[4rem] md:bg-transparent md:py-0">
              {duplicatedList.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className={`group relative flex h-[7rem] flex-shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-black/5 transition-all duration-700`}
                  style={{
                    transitionDelay: `${idx * 60}ms`,
                  }}
                >
                  <Image
                    src={item?.img}
                    alt="client logo"
                    className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {leadingTools?.isVariant === "02" && (
        <div>
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
            >
              <Heading
                breakIndex={6}
                headingParts={leadingTools?.headingParts}
                description={leadingTools?.description}
                textColor={leadingTools?.textColor}
                isInCenter={true}
                isLastParaBold={leadingTools?.isLastParaBold}
              />
            </div>

            <div className="relative mt-4 sm:mt-6">
              <div className="flex w-max animate-marquee gap-2 sm:gap-3 lg:gap-[2rem]">
                {row1Duplicated.map((client, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className={`group relative flex-shrink-0 transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <Image
                      src={client?.img}
                      alt="client logo"
                      width={225}
                      height={90}
                      className="my-0 h-full w-full transform object-contain transition-transform duration-300 ease-out group-hover:scale-110 md:my-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex w-max animate-marquee gap-2 [animation-direction:reverse] sm:gap-3 lg:gap-[2rem]">
                {row2Duplicated.map((client, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className={`group relative flex-shrink-0 transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    <Image
                      src={client?.img}
                      alt="client logo"
                      width={225}
                      height={90}
                      className="my-0 h-full w-full transform object-contain transition-transform duration-300 ease-out group-hover:scale-110 md:my-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {leadingTools?.isVariant === "03" && (
        <div>
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
            >
              <Heading
                breakIndex={6}
                headingParts={leadingTools?.headingParts}
                description={leadingTools?.description}
                textColor={leadingTools?.textColor}
                isDecVarticle={true}
                isLastParaBold={leadingTools?.isLastParaBold}
              />
            </div>
          </MaxWidthWrapper>

          <div className="w-full overflow-hidden pt-[4rem]">
            <div
              className={`flex w-max animate-marquee gap-[1rem] pb-4 lg:gap-[2rem] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              {duplicatedList.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex min-w-[65vw] flex-col items-center justify-between gap-[2rem] rounded-[1.5rem] border border-[#000000]/5 px-[1rem] py-[2rem] sm:min-w-[55vw] md:min-w-[35vw] lg:min-w-[270px] bg-white"
                >
                  <div className="relative flex h-[45px] w-[180px] items-center justify-center md:h-[65px] md:w-[190px] lg:h-[70px] lg:w-[202px]">
                    <Image
                      src={item?.img}
                      alt="icon"
                      fill
                      className="object-contain hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  <p className="text-center text-[16px]">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center pt-[2rem]">{leadingTools?.desc}</p>
        </div>
      )}
    </div>
  );
};

export default LeadingTools;
