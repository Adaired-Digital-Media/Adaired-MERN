"use client";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Heading from "@/app/components/common/Heading";
import Image from "next/image";
import SocialMediaSolutions from "../../../../public/assets/images/service/SocialMediaSolutions.png";
import img1 from "../../../../public/assets/linkBuilding/AI-Reporting-Tools-Automated-AI-Generated-Summary 1.png";
import img2 from "../../../../public/assets/linkBuilding/custom-digital-marketing-analytics-dashboard 1.png";
import arrow from "../../../../public/assets/linkBuilding/Vector.png";
import SocialMediaCheck from "../../../../public/assets/images/service/SocialMediaCheck.png";

const images = [img1, img2];

export interface IareYouTiredType {
  desctioption: string;
  list: string[];
}

const AreYouTired = ({ areYouTired }: any) => {
  return (
    <div>
      {areYouTired?.isVariant === "01" && (
        <div className="bg-[#FAFAFA] py-12 lg:py-16">
          <MaxWidthWrapper>
            <Heading
              breakIndex={8}
              isInCenter
              subTitle=""
              headingParts={areYouTired?.headingParts}
            />

            {areYouTired.data.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* TEXT */}
                <div className="order-2 flex max-w-xl flex-col justify-center space-y-7 lg:order-1">
                  <h2>{item.desctioption}</h2>

                  {item.list.map((listItem: any, i: number) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4">
                      <Image
                        src={arrow}
                        width={17}
                        height={23}
                        alt="arrow"
                        className="mt-1 h-auto w-3.5 shrink-0 sm:w-4.25"
                      />

                      <p className="text-left">{listItem.description}</p>
                    </div>
                  ))}
                </div>

                {/* IMAGE CARD */}
                <div className="order-1 flex w-full justify-center lg:order-2 lg:w-auto">
                  <div className="rounded-[30px] bg-[#F3F3F3] px-4 py-3 sm:px-10 sm:py-8 lg:px-12 lg:py-12">
                    <div className="group relative flex h-55 w-70 items-center justify-center overflow-hidden sm:h-77.5 sm:w-95 md:p-4 lg:h-108.75 lg:w-150">
                      <Image
                        src={images[index]}
                        fill
                        alt="are-you-tired"
                        className="object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </MaxWidthWrapper>
        </div>
      )}

      {areYouTired?.isVariant === "02" && (
        <div className="relative py-12 lg:py-16">
          <MaxWidthWrapper className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="">
              {areYouTired.data.map((item: IareYouTiredType, index: number) => (
                <div className="flex flex-col justify-center space-y-4 md:justify-center lg:order-1 lg:justify-start">
                  <Heading
                    className="whitespace-pre-line text-center"
                    breakIndex={6}
                    subTitle=""
                    headingParts={areYouTired?.headingParts}
                    description={areYouTired.description}
                  />

                  <h2 className="text-left text-[18px]">{item.desctioption}</h2>

                  {item.list.map((listItem: any, i: number) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4">
                      <Image
                        src={SocialMediaCheck}
                        width={20}
                        height={20}
                        alt="arrow"
                        className="mt-1 h-auto w-3.5 shrink-0 sm:w-4.25"
                      />

                      <p className="text-left">{listItem.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="lg:order-2">
              <div className="group flex justify-center">
                <Image
                  src={SocialMediaSolutions}
                  width={600}
                  height={500}
                  alt="are-you-tired"
                  className="h-auto w-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
};

export default AreYouTired;
