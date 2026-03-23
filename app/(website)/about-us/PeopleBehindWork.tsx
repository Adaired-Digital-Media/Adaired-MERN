"use client";

import React, { useState } from "react";
import Heading from "@/app/components/common/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import Image from "next/image";

import GrowthPartnerCard from "./GrowthPartnerCard";
import GetQuoteModal from "../../components/popup/GetQuoteModal";

const PeopleBehindWork = ({ peopleBehindWork }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.1);
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref} className={`py-[3rem] lg:py-[4rem]`}>
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <Heading
            breakIndex={peopleBehindWork?.breakIndex}
            headingParts={peopleBehindWork?.headingParts}
            description={peopleBehindWork?.description}
            isDecVarticle={true}
            className="whitespace-pre-line"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 pt-[3rem] sm:grid-cols-2 lg:grid-cols-3">
          {peopleBehindWork?.images
            ?.slice(0, 6)
            .map((card: any, index: number) => (
              <div
                key={index}
                className={`relative mx-1 my-1 flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl bg-[#FFFFFF] transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 md:min-h-[400px] lg:min-h-[586px] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <Image src={card?.img} alt="" fill className="object-cover" />
                <div className="absolute bottom-2.5 min-h-[77px] w-[95%] max-w-[468px] rounded-2xl bg-white md:bottom-2 lg:bottom-4">
                  <div className="flex items-center justify-between p-[1rem]">
                    <div className="mx-1">
                      <h3 className="text-left capitalize">{card?.title}</h3>
                      <p className="text-left text-[14px] font-light uppercase">
                        {card?.desc}
                      </p>
                    </div>
                    <div className="relative h-12 w-12 flex-shrink-0 sm:h-12 sm:w-12 lg:h-[61px] lg:w-[61px]">
                      <Image
                        src={card?.icon}
                        alt=""
                        className=""
                        // width={61}
                        // height={61}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* {peopleBehindWork?.isFetureProofVisible && (
                        <GrowthPartnerCard handleClick={() => setOpen(true)} />
                    )} */}
          <GrowthPartnerCard handleClick={() => setOpen(true)} />
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default PeopleBehindWork;
