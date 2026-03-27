import Heading from "@/app/components/common/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import CldImage from "@/app/components/UI/CldImage";

const WhatMakesAdaired = ({ whatMkeDeferent }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`py-[1.5rem] lg:py-[4rem]`}
      style={{
        backgroundColor: whatMkeDeferent?.bgColor,
        background: whatMkeDeferent?.bgColor,
      }}
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <Heading
              breakIndex={whatMkeDeferent?.breakIndex}
              headingParts={whatMkeDeferent?.headingParts}
              isInCenter={whatMkeDeferent?.isInCenter}
              description={whatMkeDeferent?.description}
              isDecVarticle={!whatMkeDeferent?.isInCenter}
            />
          </div>
        </div>
        <div className="pt-[rem]">
          {whatMkeDeferent?.list?.map((item: any, idx: number) => {
            const isSum = idx % 2 === 0;
            return (
              <div
                key={idx}
                style={{
                  transitionDelay: `${idx * 120}ms`,
                  backgroundColor: isSum
                    ? whatMkeDeferent?.cardColor
                    : `${whatMkeDeferent?.cardColor2}`,
                  borderColor: isSum
                    ? `${whatMkeDeferent?.borderColor || "#ffffff"}1A`
                    : `${whatMkeDeferent?.borderColor2 || "#ffffff"}1A`,
                }}
                className={`mt-[2rem] flex flex-col justify-between gap-10 rounded-[20px] border p-[1rem] lg:p-[2rem] transition-all duration-700 lg:flex-row lg:gap-0 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} `}
              >
                <div className="order-2 my-auto w-[100%] lg:order-1 lg:w-[50%]">
                  <h3>{item?.name}</h3>
                  <div className="pt-[1rem]">
                    {item?.description?.map((desc: any, idx: number) => {
                      return (
                        <p key={idx} className="my-[1rem]">
                          {desc}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`order-1 flex w-[100%] justify-center justify-items-center rounded-[20px] p-6 lg:p-8 lg:order-2 lg:w-[40%]`}
                  style={{
                    backgroundColor: isSum
                      ? whatMkeDeferent?.cardImgBgColor
                      : whatMkeDeferent?.cardImgBgColor2,
                  }}
                >
                  <div className="relative aspect-[525/334] w-full max-w-[525px]">
                    {typeof item?.img === "string" ? (
                      <CldImage
                        src={item?.img}
                        alt={item?.name}
                        fill
                        className="object-contain transition-transform duration-300 ease-out hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={item?.img}
                        alt={item?.name}
                        fill
                        className="object-contain transition-transform duration-300 ease-out hover:scale-110"
                      />
                    )}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhatMakesAdaired;
