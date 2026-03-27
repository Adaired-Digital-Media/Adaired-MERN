"use client";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Heading from "@/app/components/common/Heading";
import Image from "next/image";
import { useInViewOnce } from "@/@core/hooks/useInViewOnce";
import SocialMediaCheck from "../../../../public/assets/images/PPCimg/arrowOrange.png";
import { motion, AnimatePresence } from "framer-motion";

const OurProcess = ({ ourProcess }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const [activeTab, setActiveTab] = useState(0);
  const scrollSections = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      scrollSections.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight / 2;

        if (rect.top <= middle && rect.bottom >= middle) {
          setActiveTab(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      // className={`${ourProcess?.bgGradient || "bg-[#f9f9f9]/80"} relative bg-fixed py-[3rem] lg:py-[4rem]`}
      className={` relative bg-fixed py-[3rem] lg:py-[4rem]`}
      style={{
        backgroundColor: ourProcess?.bgGradient,
        background: ourProcess?.bgGradient,
      }}
    >
      <MaxWidthWrapper>
        {/* ================= HEADING ================= */}

        <div className="sticky top-[5rem] z-20 mb-[3rem] lg:top-[10rem]">
          <div
            className={`mx-auto w-full lg:w-[80%] transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Heading
              isLabel={true}
              subTitle={"Our Process"}
              breakIndex={ourProcess?.breakIndex}
              headingParts={ourProcess?.headingParts}
              description={ourProcess?.description}
              isInCenter={ourProcess?.isInCenter}
              isDecVarticle={ourProcess?.isVerticle}
              textColor={ourProcess?.textColor}
            />
          </div>

          <div
            className={`grid grid-cols-1 gap-[4rem] lg:grid-cols-5 ${!ourProcess?.isInCenter && "mt-[2rem]"}`}
          >
            <div
              className={`col-span-2 hidden h-fit items-center justify-center md:flex transform transition-all delay-200 duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
            >
              <div className="relative h-[520px] w-[520px]">
                <svg width="520" height="520" viewBox="0 0 520 520">
                  {ourProcess.services.map((service: any, idx: number) => {
                    const total = ourProcess.services.length;
                    const center = 260;

                    const outerR = 245;
                    const innerR = 110;
                    const thickness = outerR - innerR;
                    const capRadius = thickness / 2.2;

                    const fullAngle = (2 * Math.PI) / total;
                    const gap = 0.03;

                    const start = idx * fullAngle - Math.PI / 2 + gap / 2;
                    const end = start + fullAngle - gap;

                    const largeArc = fullAngle > Math.PI ? 1 : 0;

                    const sx = center + outerR * Math.cos(start);
                    const sy = center + outerR * Math.sin(start);

                    const ex = center + outerR * Math.cos(end);
                    const ey = center + outerR * Math.sin(end);

                    const isx = center + innerR * Math.cos(start);
                    const isy = center + innerR * Math.sin(start);

                    const iex = center + innerR * Math.cos(end);
                    const iey = center + innerR * Math.sin(end);

                    return (
                      <path
                        key={idx}
                        d={`
                            M ${sx} ${sy}
                            A ${outerR} ${outerR} 0 ${largeArc} 1 ${ex} ${ey}
                            A ${capRadius} ${capRadius} 0 0 1 ${iex} ${iey}
                            A ${innerR} ${innerR} 0 ${largeArc} 0 ${isx} ${isy}
                            A ${capRadius} ${capRadius} 0 0 0 ${sx} ${sy}
                            Z
                         `}
                        fill={activeTab === idx ? "#FB9100" : "#FBEBD5"}
                        stroke="#FFFFFF"
                        onClick={() => setActiveTab(idx)}
                        className="cursor-pointer transition-all duration-500"
                      />
                    );
                  })}
                </svg>

                {/* ================= ICONS ================= */}

                {ourProcess.services.map((service: any, idx: number) => {
                  const total = ourProcess.services.length;

                  const outerR = 200;
                  const innerR = 150;
                  const center = 260;

                  const midRadius = (outerR + innerR) / 2;

                  const angle = (2 * Math.PI) / total;
                  const mid = idx * angle + angle / 1.25 - Math.PI / 2;

                  const x = center + midRadius * Math.cos(mid);
                  const y = center + midRadius * Math.sin(mid);

                  return (
                    <div
                      key={idx}
                      className="absolute"
                      style={{
                        left: x,
                        top: y,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                        onClick={() => setActiveTab(idx)}
                        className={
                          activeTab === idx
                            ? "brightness-0 invert"
                            : "opacity-100"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`col-span-3 my-auto flex h-fit w-full items-center justify-center transform transition-all delay-200 duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[20px] border border-[#FB9100]/20 bg-white p-6 lg:p-10"
                >
                  <h3 className="mb-4 text-[18px] font-semibold uppercase text-[#FB9100]">
                    Step {activeTab + 1}: {ourProcess.services[activeTab].title}
                  </h3>

                  {ourProcess.services[activeTab].description.map(
                    (item: any, i: number) => {
                      if (typeof item === "string") {
                        return (
                          <p key={i} className="my-2 text-gray-700">
                            {item}
                          </p>
                        );
                      }

                      if (item.list) {
                        return item.list.map((listItem: any, j: number) => (
                          <div
                            key={`${i}-${j}`}
                            className="my-2 flex items-start gap-2"
                          >
                            <Image
                              src={SocialMediaCheck}
                              width={17}
                              height={23}
                              alt="arrow"
                              className="mt-1 w-[14px] shrink-0"
                            />

                            <p className="text-gray-700">
                              {listItem.des || listItem.description}
                            </p>
                          </div>
                        ));
                      }

                      return null;
                    },
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* <div className="relative flex gap-[4rem]">
          <div>
            <div className="mt-[300px]">
              {ourProcess.services.map((_: any, idx: number) => (
                <div
                  key={idx}
                  ref={(el) => {
                    scrollSections.current[idx] = el;
                  }}
                  className="h-[100vh]"
                />
              ))}
            </div>
          </div>
        </div> */}
      </MaxWidthWrapper>
    </section>
  );
};

export default OurProcess;
