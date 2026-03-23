import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import React from "react";
import img from "../../../../public/assets/images/needofaiseo.png";
import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import imgCorner from "../../../../public/assets/images/authLinkBuilding.png";
import Mask from "../../../../public/assets/images/home/Mask group.png";
import imgcornerReverse from "../../../../public/assets/images/services/WhiteLabel/whiteLabelSeo/whiteLabelNeedImg.png";
import Heading from "@/app/components/common/Heading";

const NeedOfAdaired = ({ needOfService }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <div className="">
      <MaxWidthWrapper>
        {needOfService?.isVariant === "01" && (
          <div
            ref={ref}
            className="grid grid-cols-1 gap-[2rem] py-[3rem] lg:grid-cols-2 lg:py-[4rem]"
          >
            {needOfService?.isBgCornerImg ? (
              <div className="relative mx-auto mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
                {/* CENTER IMAGE */}
                <div
                  className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-16 opacity-0"
                  }`}
                >
                  <Image
                    src={imgCorner}
                    alt="About Image"
                    width={625}
                    height={470}
                    className="my-[0rem] aspect-[625/470] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                  />
                </div>

                {/* MASK – TOP RIGHT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
                />

                {/* MASK – BOTTOM LEFT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
                />
              </div>
            ) : (
              <div
                ref={ref}
                className={`flex items-center justify-center transition-all duration-1000 lg:items-start lg:justify-start ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
              >
                <Image src={img} width={652} height={568} alt="fd" />
              </div>
            )}

            <div
              className={`mt-[2rem] flex flex-col justify-center transition-all duration-1000 lg:mt-0 lg:h-full ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Heading headingParts={needOfService?.headingParts} />

              {needOfService?.data?.map((desc: any, idx: number) => {
                return (
                  <p
                    key={idx}
                    className="pt-[1rem] text-center lg:text-justify"
                  >
                    {desc?.desctioption}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {needOfService?.isVariant === "02" && (
          <div
            ref={ref}
            className="grid grid-cols-1 gap-[2rem] py-[3rem] lg:grid-cols-2 lg:py-[4rem]"
          >
            <div
              className={`flex flex-col justify-center transition-all duration-1000 lg:h-full ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2>
                Why{" "}
                <span className="text-[clamp(1.6rem,2.188vw,2.188rem)] font-semibold text-[#FB9100]">
                  {" "}
                  “Near Me”
                </span>{" "}
                Searches Are More Important Than Ever
              </h2>
              {needOfService?.data?.map((desc: any, idx: number) => {
                return (
                  <p
                    key={idx}
                    className="pt-[1rem] text-center lg:text-justify"
                  >
                    {desc?.desctioption}
                  </p>
                );
              })}
            </div>
            {needOfService?.isBgCornerImg ? (
              <div className="relative mx-auto mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
                {/* CENTER IMAGE */}
                <div
                  className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-16 opacity-0"
                  }`}
                >
                  <Image
                    src={needOfService?.img}
                    alt="About Image"
                    width={625}
                    height={470}
                    className="my-[0rem] aspect-[625/470] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                  />
                </div>

                {/* MASK – TOP RIGHT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
                />

                {/* MASK – BOTTOM LEFT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
                />
              </div>
            ) : (
              <div
                ref={ref}
                className={`flex items-center justify-center transition-all duration-1000 lg:items-start lg:justify-start ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
              >
                <Image src={img} width={652} height={568} alt="fd" />
              </div>
            )}
          </div>
        )}
        {needOfService?.isVariant === "03" && (
          <div
            ref={ref}
            className="grid grid-cols-1 gap-[2rem] py-[3rem] pb-[3rem] lg:grid-cols-2 lg:py-[4rem] lg:pb-[4rem]"
          >
            {needOfService?.isBgCornerImg ? (
              <div className="relative mx-auto mt-[3rem] flex-1 md:mt-[3rem] lg:mt-0">
                {/* CENTER IMAGE */}
                <div
                  className={`mx-[1rem] my-[1rem] flex items-center justify-center transition-all duration-1000 md:mx-[0.65rem] md:my-[0.65rem] lg:mx-[2.65rem] lg:my-[2.65rem] ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-16 opacity-0"
                  }`}
                >
                  <Image
                    src={needOfService?.img}
                    alt="About Image"
                    width={625}
                    height={470}
                    className="my-[0rem] aspect-[625/470] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                  />
                </div>

                {/* MASK – TOP RIGHT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
                />

                {/* MASK – BOTTOM LEFT */}
                <Image
                  src={Mask}
                  alt="Mask Image"
                  width={246}
                  height={136}
                  className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
                />
              </div>
            ) : (
              <div
                ref={ref}
                className={`flex items-center justify-center transition-all duration-1000 lg:items-start lg:justify-start ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
              >
                <Image src={img} width={652} height={568} alt="fd" />
              </div>
            )}

            <div
              className={`mt-[2rem] flex flex-col justify-center transition-all duration-1000 lg:mt-0 lg:h-full ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2>
                Why These{" "}
                <span className="text-[clamp(1.6rem,2.188vw,2.188rem)] font-semibold text-[#FB9100]">
                  {" "}
                  Factors Matter
                </span>{" "}
              </h2>

              {needOfService?.data?.map((desc: any, idx: number) => {
                return (
                  <p
                    key={idx}
                    className="pt-[1rem] text-center lg:text-justify"
                  >
                    {desc?.desctioption}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        {needOfService?.isVariant === "04" && (
          <div
            ref={ref}
            className="grid grid-cols-1 gap-[2rem] py-[3rem] pb-[3rem] lg:grid-cols-2 lg:py-[4rem] lg:pb-[4rem]"
          >
            {needOfService?.isBgCornerImg ? (
              <div className="mx-auto mt-[6rem] flex-1 md:mt-[6rem] lg:mt-0">
                {/* CENTER IMAGE */}
                <div
                  className={`my relative flex items-center justify-center px-[1rem] py-[1rem] lg:px-[4rem] lg:py-[2.65rem] transition-all duration-1000 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-16 opacity-0"
                  }`}
                >
                  <Image
                    src={imgcornerReverse}
                    alt="About Image"
                    width={625}
                    height={470}
                    className="my-[0rem] aspect-[625/470] w-[clamp(15rem,32vw,32.063rem)] rounded-lg transition-opacity transition-transform md:w-[clamp(16rem,60vw,62.063rem)] lg:w-[clamp(14rem,35vw,39.063rem)]"
                  />

                  <Image
                    src={Mask}
                    alt="Mask Image"
                    width={246}
                    height={136}
                    className="absolute right-[-3rem] top-[-2rem] -z-10 lg:right-0 lg:top-0"
                  />

                  <Image
                    src={Mask}
                    alt="Mask Image"
                    width={246}
                    height={136}
                    className="absolute bottom-[-1.6rem] left-[-3rem] -z-10 lg:bottom-0 lg:left-0"
                  />
                </div>
              </div>
            ) : (
              <div
                ref={ref}
                className={`flex items-center justify-center transition-all duration-1000 lg:items-start lg:justify-start ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
              >
                <Image src={img} width={652} height={568} alt="fd" />
              </div>
            )}

            <div
              className={`mt-[2rem] flex flex-col justify-center transition-all duration-1000 lg:mt-0 lg:h-full ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h2>
                How{" "}
                <span className="text-[clamp(1.6rem,2.188vw,2.188rem)] font-semibold text-[#FB9100]">
                  {" "}
                  White Label SEO
                </span>{" "}
                Works For Agencies
              </h2>
              {needOfService?.data?.map((desc: any, idx: number) => {
                return (
                  <p
                    key={idx}
                    className="pt-[1rem] text-center lg:text-justify"
                  >
                    {desc?.desctioption}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default NeedOfAdaired;
