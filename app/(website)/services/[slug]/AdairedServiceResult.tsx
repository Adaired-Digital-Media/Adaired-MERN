"use client";
import Heading from "@/app/components/common/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React, { useState } from "react";
import Image from "next/image";
import rocket from "../../../../public/assets/icons/rocket.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";

const AdairedServiceResult = ({ aiseoResult }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div>
      {aiseoResult?.isVariant === "01" && (
        <div
          className={`py-48 lg:py-64`}
          style={{
            backgroundColor: aiseoResult.bgColor,
            background: aiseoResult.bgColor,
          }}
        >
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} `}
            >
              <div className="block gap-24 lg:flex">
                <div
                  className={`${aiseoResult?.description?.length > 0 ? "w-full" : "flex w-full items-center justify-center"}`}
                >
                  <Heading
                    breakIndex={aiseoResult?.breakIndex}
                    headingParts={aiseoResult?.headingParts}
                    description={aiseoResult?.description}
                    textColor={aiseoResult?.textColor}
                    isInCenter={aiseoResult?.isInCenter}
                    isDecVarticle={!aiseoResult?.isInCenter && true}
                  />
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col gap-12 lg:gap-24 ${
                aiseoResult?.isRowReverse
                  ? "lg:flex-row-reverse py-16"
                  : "lg:flex-row py-16"
              }`}
            >
              <div
                ref={ref}
                className={`relative w-full rounded-[20px] transition-all duration-1000 lg:w-[42%] ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
                style={{
                  height: aiseoResult?.imgHight || "480px",
                }}
              >
                {/* Main image */}
                <Image
                  src={aiseoResult?.img}
                  fill
                  className="rounded-[20px] object-cover"
                  alt="image"
                  priority
                />

                {aiseoResult?.isRocket && (
                  <div className="absolute -left-4 -top-4 h-18.75 w-17.5 sm:h-23.75 sm:w-22.5] lg:h-30.75 lg:w-28.75">
                    {/* Rocket wrapper */}
                    <Image
                      src={rocket}
                      fill
                      alt="rocket"
                      className="object-fill"
                    />
                  </div>
                )}
              </div>

              {/* RIGHT ACCORDION */}
              <div className="flex w-full flex-col gap-4 lg:w-[55%]">
                {aiseoResult?.list?.map((item: any, index: number) => {
                  const isActive = index === activeIndex;
                  const iconColor = isActive
                    ? aiseoResult.titleColor || "#000000"
                    : "#000000";
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`cursor-pointer rounded-[20px] border p-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${
                        isActive
                          ? "border-[#FB9100]/20 bg-[#F3F3F3]"
                          : "border-[#00000014] bg-[#F3F3F3]"
                      }`}
                      style={{
                        transitionDelay: `${index * 280}ms`, // 👈 stagger here
                        backgroundColor: aiseoResult.cardColor || "#FFFFFF",
                      }}
                    >
                      {/* HEADER */}
                      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex flex-col items-center gap-3 lg:flex-row">
                          {item?.icon ? (
                            <Image
                              src={item?.icon}
                              width={32}
                              height={32}
                              alt="icon"
                              style={{ color: iconColor }}
                            />
                          ) : (
                            <h4>{index + 1}.</h4>
                          )}

                          <p
                            className={`font-bold ${
                              isActive ? "hover:text-(--hover-color)" : ""
                            }`}
                            // style={
                            //   {
                            //     '--hover-color':
                            //       aiseoResult.titleColor || '#000000',
                            //     color: isActive
                            //       ? aiseoResult.titleColor || '#000000'
                            //       : '#000000',
                            //   } as React.CSSProperties
                            // }
                          >
                            {item?.name}
                          </p>
                        </div>

                        {/* ARROW */}
                        {isActive ? (
                          <MdKeyboardArrowUp
                            size={26}
                            className="hidden lg:block"
                            style={{ color: iconColor }}
                          />
                        ) : (
                          <MdKeyboardArrowDown
                            size={26}
                            className="hidden lg:block"
                            style={{ color: iconColor }}
                          />
                        )}
                      </div>

                      {/* BODY */}
                      <div
                        className={`ease-in-ou grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-700 ${
                          isActive
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          {item?.description?.map((desc: string, i: number) => (
                            <p key={i} className="my-2 text-left text-[#333]">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
};

export default AdairedServiceResult;
