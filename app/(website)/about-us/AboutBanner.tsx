"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Image from "next/image";
import hero_banner from "../../../public/assets/images/home/hero_banner-bg.png";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import SaveAndCancel from "@/app/components/common/SaveAndCancel";
import { useRouter } from "next/navigation";

import CountUp from "../../components/CountUp";
import { ABOUT_DATA } from "./aboutData";
import GetQuoteModal from "../../components/popup/GetQuoteModal";

const AboutBanner = ({ banner }: any) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const images = ["img1", "img2", "img3", "img4"] as const;
  const [activeIndex, setActiveIndex] = useState(0);

  const [active, setActive] = useState<null | "img3" | "img2" | "img1">(null);

  const [hover, setHover] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500); // duration per image

    return () => clearInterval(interval);
  }, []);

  const isActive = (name: (typeof images)[number]) =>
    images[activeIndex] === name;
  const isCenter = true;
  return (
    <div>
      <div
        ref={ref}
        className="relative mx-auto w-full overflow-hidden pb-[0vh] pt-[0rem] md:pb-[10vh] lg:pb-[30vh] lg:pt-[5rem]"
      >
        <Image
          src={hero_banner}
          fill
          alt="hero bg"
          priority
          className="pointer-events-none -z-10 object-fill lg:object-fill"
        />
        <MaxWidthWrapper className="">
          <div>
            <div className="relative z-10 block justify-center pb-[6rem] pt-[9rem] lg:flex">
              <div
                className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[60%] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
              >
                <div
                  className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                >
                  <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                    <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                      <h2 className="text-center font-normal capitalize">
                        {banner?.heading}
                      </h2>
                      <h1 className="text-center capitalize">
                        {banner?.label}
                      </h1>
                    </div>
                  </div>
                  <div className={`$ 'pt-[1rem]'}`}>
                    {banner?.subheading && (
                      <p className="pt-4 text-center font-montserrat font-semibold">
                        {banner?.subheading}
                      </p>
                    )}
                  </div>
                </div>
                <div className="!mt-[2rem] flex justify-center">
                  <SaveAndCancel
                    name={banner?.button}
                    isIcon={true}
                    handleClick={() => setOpen(!open)}
                    className="w-[18rem] lg:w-[18rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="mt-[-5vh] md:mt-[-12vh] lg:mt-[-28vh]">
        <div>
          <Image
            src={banner?.Img}
            height={751}
            width={1604}
            alt="hero bg"
            priority
            className="pointer-events-none lg:object-cover"
          />
        </div>

        <div className="py-[2rem]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {ABOUT_DATA.banner?.records?.map((record, idx: any) => {
              const isHovered = hover === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHover(idx)}
                  onMouseLeave={() => setHover(null)}
                  style={{
                    transitionDelay: `${idx * 280}ms`,
                  }}
                  className={`rounded-3xl border-b border-b-[#00000026] lg:border-b-0 lg:border-r lg:border-r-[#00000026] last:border-r-0 p-[1.8rem] transition-all duration-700 last:border-r-0 lg:p-[1rem] xl:px-[1.75rem] xl:py-[1.5rem] 1360:p-[1rem] 1400:p-[1rem] ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${
                    isHovered
                      ? "bg-gradient-to-br from-[#FB9100] to-[#000000]"
                      : ""
                  } `}
                >
                  <div
                    className={`text-center text-xl font-semibold transition-colors duration-300 3xl:text-[50px] ${isHovered ? "text-white" : "text-black"} `}
                  >
                    {record.suffix1}
                    <CountUp end={record.number} />
                    {record.suffix}
                  </div>

                  <p
                    className={`py-[0.5rem] text-center font-bold transition-colors duration-300 xl:pb-[1rem] xl:pt-[1.25rem] ${isHovered && "text-white"} `}
                  >
                    {record.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default AboutBanner;

//fixed
