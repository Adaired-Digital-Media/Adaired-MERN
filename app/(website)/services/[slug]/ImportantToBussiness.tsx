import Heading from "@/app/components/common/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React, { useState } from "react";
import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import { MdOutlineArrowOutward } from "react-icons/md";
import GetQuoteModal from "@/app/components/popup/GetQuoteModal";
import SocialMediaCheck from "../../../../public/assets/images/PPCimg/arrowOrange.png";
import ImpToBusinessSlider from "./ImpToBusinessSlider";
import { TbPointFilled } from "react-icons/tb";
import ImpToBusinessCard from "./ImpToBusinessCard";
import LaunchMobileApp from "./LaunchMobileApp";

const ImportantToBussiness = ({ importantToBussiness }: any) => {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0);

  return (
    <div>
      {importantToBussiness?.isVariant === "01" && (
        <div
          ref={ref}
          className={`pb-[3rem] bg-[${importantToBussiness?.bgColor || "#FFFFFF"}] pt-[2rem] lg:pb-[4rem] lg:pt-[3rem]`}
        >
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"} `}
            >
              <Heading
                isDecVarticle
                isInCenter={importantToBussiness?.isInCenter}
                textColor={importantToBussiness?.textColor}
                headingParts={importantToBussiness?.headingParts}
                description={importantToBussiness?.description}
                breakIndex={importantToBussiness?.breakIndex}
              />
            </div>

            <div
              className={`pt-[1.5rem] ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"} grid-cols-1 gap-[1rem] lg:grid lg:grid-cols-2`}
            >
              {importantToBussiness?.data?.map((item: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={`relative my-[1rem] rounded-[1rem] bg-[${importantToBussiness?.cardColor || "#FFFFFF"}] p-[2rem] px-[2rem] ${item?.button ? "pb-[4rem]" : "pb-[2rem]"} pt-[2rem] transition-all duration-700 lg:my-0 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    style={{
                      transitionDelay: `${idx * 280}ms`,
                        border: `1px solid ${importantToBussiness?.borderColor || "#000000"}1D`
                    }}
                  >
                    
                    <div className="relative flex items-center">
                      <div className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0">
                        <Image
                          src={item?.icon}
                          width={60}
                          height={60}
                          alt="img"
                        />
                      </div>

                      {/* <h1
                        className={`ml-auto text-[6rem]`}
                        style={{ color: "#F1F1F1" }}
                      > */}
                      <h1 className="ml-auto text-[4rem] lg:text-[6rem] text-[#F1F1F1]">
                        0{idx + 1}
                      </h1>
                    </div>

                    <h3 className="mb-[0.5rem] mt-[2rem]">{item?.name}</h3>

                    {/* <div className="">
                      {item?.description?.map((dec: any) => {
                        return <p className="py-3">{dec}</p>;
                      })}
                    </div> */}

                    <div>
                      {item?.description?.map((dec: any, index: number) => {
                        if (typeof dec === "string") {
                          return (
                            <p key={index} className="py-3">
                              {dec}
                            </p>
                          );
                        }

                        if (typeof dec === "object") {
                          return (
                            <div key={index} className="py-3">
                              {dec?.desctioption && (
                                <p className="pb-[1rem]">{dec.desctioption}</p>
                              )}

                              {dec?.list && (
                                <ul className="space-y-3">
                                  {dec.list.map((listItem: any, i: number) => (
                                    <li key={i}>
                                      {listItem?.des?.map(
                                        (d: string, di: number) => (
                                          <div
                                            key={di}
                                            className="flex items-center gap-3"
                                          >
                                            {/* <Image
                                            src={SocialMediaCheck}
                                            width={17}
                                            height={23}
                                            alt="check"
                                            className="shrink-0 mt-1 w-[14px] h-auto sm:w-[17px]"
                                          /> */}
                                            <TbPointFilled size={11} />
                                            <p className="text-left">{d}</p>
                                          </div>
                                        ),
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

                    {item?.button && (
                      <p
                        onClick={() => setOpen(!open)}
                        className="absolute bottom-[2rem] left-[0rem] flex w-full cursor-pointer items-center justify-center gap-2 text-[#FB9100] lg:left-[2rem] lg:w-fit lg:justify-start"
                      >
                        <span className="text-[16px]">{item.button}</span>
                        <MdOutlineArrowOutward />
                      </p>
                    )}
                  </div>
                );
              })}
              {/* {importantToBussiness?.isCardVisible && (
                <LaunchMobileApp handleClick={() => setOpen(true)} />
              )} */}

              {/* {importantToBussiness.card?.map((card: any, idx: any) => (
                <LaunchMobileApp
                  idx={importantToBussiness?.data?.length}
                  isVisible={isVisible}
                  handleClick={() => setOpen(true)}
                  cardData={card}
                />
              ))}

              {importantToBussiness.card?.map((card: any, idx: any) => (
                <ImpToBusinessCard
                  idx={importantToBussiness?.data?.length}
                  isVisible={isVisible}
                  handleClick={() => setOpen(true)}
                  cardData={card}
                />
              ))} */}

              {importantToBussiness.isLaunchCard
                ? importantToBussiness.card?.map((card: any, idx: any) => (
                    <LaunchMobileApp
                      key={idx}
                      idx={importantToBussiness?.data?.length}
                      isVisible={isVisible}
                      handleClick={() => setOpen(true)}
                      cardData={card}
                    />
                  ))
                : importantToBussiness.card?.map((card: any, idx: any) => (
                    <ImpToBusinessCard
                      key={idx}
                      idx={importantToBussiness?.data?.length}
                      isVisible={isVisible}
                      handleClick={() => setOpen(true)}
                      cardData={card}
                    />
                  ))}
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {importantToBussiness?.isVariant === "02" && (
        <div
          ref={ref}
          className="pb-[3rem] pt-[2rem] lg:pb-[4rem] lg:pt-[3rem]"
          style={{
            backgroundColor: importantToBussiness?.bgColor || "#FFFFFF",
          }}
        >
          <MaxWidthWrapper>
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <Heading
                isDecVarticle
                isInCenter={importantToBussiness?.isInCenter}
                textColor={importantToBussiness?.textColor}
                headingParts={importantToBussiness?.headingParts}
                description={importantToBussiness?.description}
                breakIndex={importantToBussiness?.breakIndex}
              />
            </div>
          </MaxWidthWrapper>

          {/* Slider Here */}
          <div
            className={`pt-[1.5rem] transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <ImpToBusinessSlider
              data={importantToBussiness?.data}
              SocialMediaCheck={SocialMediaCheck}
              open={open}
              setOpen={setOpen}
              colors={{
                textColor: importantToBussiness?.textColor || "#000000",
                borderColor: importantToBussiness?.borderColor || "#E5E5E5",
                cardColor: importantToBussiness?.cardColor || "#F9F9F9",
                activeDot: importantToBussiness?.activeDot || "#FB9100",
                inactiveDot: importantToBussiness?.inactiveDot || "#FB91004D",
              }}
            />
          </div>
        </div>
      )}
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default ImportantToBussiness;
