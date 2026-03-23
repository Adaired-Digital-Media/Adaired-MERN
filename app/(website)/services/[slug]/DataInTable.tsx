"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Heading from "@/app/components/common/Heading";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import GetQuoteModal from "@/app/components/popup/GetQuoteModal";
import { BiSolidBadgeCheck } from "react-icons/bi";

const DataInTable = ({ dataInTable }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <section
      ref={ref}
      className={`py-[3rem] lg:py-[4rem] bg-[${dataInTable?.bgColor}]`}
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <Heading
            headingParts={dataInTable?.headingParts}
            description={dataInTable?.description}
            isInCenter={dataInTable?.isInCenter}
            isDecVarticle={!dataInTable?.isInCenter}
          />

          {dataInTable?.isVariant === "01" && (
            <div className="mt-10">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[700px] rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className={`${dataInTable?.trColor}`}>
                        {dataInTable?.data?.map(
                          (column: any, index: number) => (
                            <th
                              key={index}
                              className="px-6 md:px-10 lg:px-14 py-4 md:py-6 lg:py-8 text-xs md:text-sm text-white border-r border-[#3D3D3D]/30 last:border-r-0"
                            >
                              <div className="flex gap-4 items-center font-medium">
                                <BiSolidBadgeCheck className="mb-auto w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 text-white" />
                                <p className="break-words text-white font-semibold text-left">
                                  {column?.desctioption}
                                </p>
                              </div>
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>

                    <tbody>
                      {dataInTable?.data?.[0]?.list?.map(
                        (_: any, rowIndex: number) => (
                          <tr
                            key={rowIndex}
                            className={
                              rowIndex % 2 === 0
                                ? "bg-white"
                                : `${dataInTable?.rowColor}`
                            }
                          >
                            {dataInTable?.data?.map(
                              (column: any, idx: number) => (
                                <td
                                  key={idx}
                                  className="px-6 md:px-10 lg:px-14 py-4 md:py-6 lg:py-6 text-xs md:text-sm text-black border-r border-[#3D3D3D]/30 last:border-r-0"
                                >
                                  <div className="flex gap-4 items-center font-medium">
                                    <BiSolidBadgeCheck className="mb-auto w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                                    <p className="break-words text-left">
                                      {
                                        column?.list?.[rowIndex]
                                          ?.description?.[0]
                                      }
                                    </p>
                                  </div>
                                </td>
                              ),
                            )}
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default DataInTable;
