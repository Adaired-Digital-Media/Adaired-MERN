"use client";
import Heading from "@/app/components/common/Heading";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import { TbPointFilled } from "react-icons/tb";

const AdairedHelp = ({ adairedHelp }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <div
      className={`py-[3rem] lg:py-[4rem]`}
      style={{
        backgroundColor: adairedHelp?.bgColor,
        background: adairedHelp?.bgColor,
      }}
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}
        >
          <Heading
            breakIndex={adairedHelp?.breakIndex}
            isInCenter={adairedHelp?.isInCenter}
            isDecVarticle={!adairedHelp?.isInCenter && true}
            headingParts={adairedHelp?.headingParts}
            description={adairedHelp?.description}
            className=""
          />
        </div>

        {/* IMPORTANT: relative wrapper */}
        <div className="relative flex flex-col items-start gap-[5rem] pt-[3rem] lg:flex-row">
          {/* LEFT IMAGE – STICKY */}
          <div className="top-[16rem] w-full lg:sticky lg:w-[40%]">
            <div
              ref={ref}
              className={`group relative h-[22rem] w-full rounded-[20px] transition-all duration-1000 sm:h-[26rem] md:h-[31rem] lg:h-[35rem] ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
            >
              <Image
                src={adairedHelp?.img}
                fill
                className="rounded-[20px] object-fill lg:object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                alt="adairedHelp"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT – SCROLLS */}
          <div className="flex w-full flex-col gap-[1rem] lg:w-[55%]">
            {adairedHelp?.list?.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col items-center rounded-[20px] bg-[${adairedHelp?.cardBg || "#FFFFFF"}] p-[1.5rem] transition-all duration-700 lg:items-start ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{
                  transitionDelay: `${index * 280}ms`,
                  border: `1px solid ${adairedHelp?.cardBorderColor || "#FEE3BF"}`,
                }}
              >
                {/* <Image src={item?.img} width={40} height={40} alt="icon" /> */}
                {item?.img ? (
                  <Image src={item.img} width={40} height={40} alt="icon" />
                ) : (
                  // <div className={`text-[50px] font-semibold text-[${adairedHelp?.textColor || '#FB9100'}]  ${adairedHelp?.isnNumberBg ? `px-4 rounded-[0.7rem] bg-[${adairedHelp?.numberBg}]/50` : 'bg-[#FFFFFF]'}`}>
                  //   {String(index + 1).padStart(2, '0')}
                  // </div>

                  <div
                    className={`text-[50px] font-semibold ${adairedHelp?.isnNumberBg ? "px-4 rounded-[0.8rem]" : ""}`}
                    style={{
                      color: adairedHelp?.textColor || "#FB9100",
                      background: adairedHelp?.isnNumberBg
                        ? adairedHelp?.numberBg
                        : "transparent",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                )}
                {/* <p className="pt-[1.5rem] font-bold">{item?.name}</p> */}
                <h3 className="pt-[1.5rem]">{item?.name}</h3>

                <div className="pt-2">
                  {/* {item?.description?.map((desc: string, i: number) => (
                    <p key={i} className="my-3">
                      {desc}
                    </p>
                  ))} */}

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
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AdairedHelp;
