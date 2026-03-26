"use client";
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Heading from "@/app/components/common/Heading";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import Image from "next/image";
import FutureProof from "./FutureProof";
import GetQuoteModal from "@/app/components/popup/GetQuoteModal";

const WhatIncluded = ({ whatIncluded }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0);
  const [open, setOpen] = useState(false);

  return (
    <section ref={ref} className="py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div>
            {whatIncluded?.isVariant === "01" && (
              <div>
                <Heading
                  breakIndex={whatIncluded?.breakIndex}
                  isDecVarticle={!whatIncluded?.isInCenter && true}
                  headingParts={whatIncluded?.headingParts}
                  description={whatIncluded?.description}
                  isInCenter={whatIncluded?.isInCenter}
                />
                <div className="grid grid-cols-1 gap-6 pt-[1rem] lg:grid-cols-3">
                  {whatIncluded?.list?.map((card: any, index: number) => (
                    <div
                      key={index}
                      className={`relative rounded-2xl border border-[${whatIncluded?.borderColor || "#000000"}]/10 bg-[#F3F3F3] px-[2rem] pb-[5rem] pt-[2rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                      style={{
                        transitionDelay: isVisible ? "0ms" : `${index * 280}ms`,
                      }}
                    >
                      <div className="">
                        <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                          <Image
                            src={card.icon}
                            alt=""
                            width={60}
                            height={60}
                          />
                        </div>

                        <h3 className="py-[1.5rem]">{card.title}</h3>

                        <div className="space-y-4">
                          {card.description?.map(
                            (desc: string, index: number) => (
                              <p key={index} className="leading-relaxed">
                                {desc}
                              </p>
                            ),
                          )}
                        </div>

                        <p
                          onClick={() => setOpen(!open)}
                          className={`absolute bottom-[2rem] left-[0rem] flex w-full cursor-pointer items-center justify-center gap-2 lg:left-[2rem] lg:w-fit lg:justify-start`}
                          style={{ color: card?.btnColor }}
                        >
                          <span className="text-[18px]">{card.button}</span>
                          <MdOutlineArrowOutward />
                        </p>
                      </div>
                    </div>
                  ))}
                  {whatIncluded?.isFetureProofVisible && (
                    <FutureProof handleClick={() => setOpen(true)} />
                  )}
                </div>
              </div>
            )}
            {whatIncluded?.isVariant === "02" && (
              <div>
                <Heading
                  breakIndex={5}
                  headingParts={whatIncluded?.headingParts}
                  description={whatIncluded?.description}
                  isInCenter={true}
                />
                <div className="grid grid-cols-1 gap-6 pt-[1rem] lg:grid-cols-2">
                  {whatIncluded?.list?.map((card: any, index: number) => (
                    <div
                      key={index}
                      className={`relative rounded-2xl border border-[${whatIncluded?.borderColor || "#000000"}]/10 bg-[#FAFAFA] px-[2rem] pb-[5rem] pt-[2rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                      style={{
                        transitionDelay: isVisible ? "0ms" : `${index * 280}ms`,
                      }}
                    >
                      <div className="">
                        <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                          <Image
                            src={card.icon}
                            alt=""
                            width={60}
                            height={60}
                          />
                        </div>

                        <h3 className="py-[1.5rem]">{card.title}</h3>

                        <div className="space-y-4">
                          {card.description?.map(
                            (desc: string, index: number) => (
                              <p key={index} className="leading-relaxed">
                                {desc}
                              </p>
                            ),
                          )}
                        </div>
                        <p
                          onClick={() => setOpen(!open)}
                          className={`${index === 0 && "text-[#00769D]"} ${index === 1 && "text-[#5E8E3E]"} ${index === 2 && "text-[#D84861]"} ${index === 3 && "text-[#7D79FD]"} ${index === 5 && "text-[#2B99DE]"} absolute bottom-[2rem] left-[0rem] flex w-full cursor-pointer items-center justify-center gap-2 lg:left-[2rem] lg:w-fit lg:justify-start`}
                        >
                          <span className="text-[18px]">
                            {/* {'Get Your Free AI SEO Audit'} */}
                            {card.button}
                          </span>
                          <MdOutlineArrowOutward />
                        </p>
                      </div>
                    </div>
                  ))}
                  {whatIncluded?.isFetureProofVisible && <FutureProof />}
                </div>
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default WhatIncluded;
