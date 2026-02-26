'use client';

import React, { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import { ServiceSectionData } from '@/@core/data/website/Homepage';
import Image, { StaticImageData } from 'next/image';
import SaveAndCancel from '../common/SaveAndCancel';
import { useRouter } from 'next/navigation';
import { useScrollTabs } from '@/@core/hooks/useScrollTabs';
import { MdArrowOutward } from 'react-icons/md';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
export interface ServiceItem {
  icon: StaticImageData;
  label: string;
  title: string;
  description: string;
  link: string;
  image?: StaticImageData; // ✅ OPTIONAL (important)
}
//test
const Service = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0);
  const router = useRouter();
  const { subtitle, title, span, description, services } = ServiceSectionData;
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const servicesWrapperRef = useRef<HTMLDivElement | null>(null);
  const { activeTab, setActiveTab, isMobile, showMobileTab, mobileTabs } =
    useScrollTabs({
      items: services,
      sectionRefs,
      wrapperRef: servicesWrapperRef,
    });

  const getMobileTabs = () => {
    if (!services) return [];

    // First tab active → show only 2
    if (activeTab === 0) {
      return services.slice(0, 2).map((service, index) => ({
        ...service,
        position: index === 0 ? 'active' : 'next',
        realIndex: index,
      }));
    }

    // Any other tab → show prev, active, next
    const tabs = [];

    if (services[activeTab - 1]) {
      tabs.push({
        ...services[activeTab - 1],
        position: 'prev',
        realIndex: activeTab - 1,
      });
    }

    if (services[activeTab]) {
      tabs.push({
        ...services[activeTab],
        position: 'active',
        realIndex: activeTab,
      });
    }

    if (services[activeTab + 1]) {
      tabs.push({
        ...services[activeTab + 1],
        position: 'next',
        realIndex: activeTab + 1,
      });
    }

    return tabs;
  };

  return (
    <div
      ref={ref}
      className="bg-[#F5F5F599] py-[3rem] lg:py-[4rem]"
      id="services"
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <Heading
            breakIndex={6}
            isLabel={true}
            subTitle={subtitle}
            title={title}
            isBgWhite
            description={description}
            isInCenter
          />
        </div>

        <div className="flex gap-[2rem] pt-[1rem] lg:pt-[3rem]">
          {/* MOBILE TABS */}
          {isMobile && showMobileTab && (
            <div className="fixed left-[1rem] right-[1rem] top-[5.5rem] z-10 bg-[#F1F1F1] py-2">
              <div className="flex items-center justify-center gap-2 overflow-hidden px-3">
                {getMobileTabs().map((tab) => {
                  const isActive = tab.position === 'active';

                  return (
                    <button
                      key={tab.realIndex}
                      onClick={() => {
                        setActiveTab(tab.realIndex);
                        setActiveCard(null);
                        sectionRefs.current[tab.realIndex]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }}
                      className={`rounded-full border px-4 py-3 text-xxs font-medium transition-all duration-300 lg:rounded-xl lg:text-sm ${
                        isActive
                          ? 'scale-100 border-[#FB9100] bg-[#FB9100] text-[#FFFFFF]'
                          : 'scale-90 border-transparent bg-[#FFFFFF]'
                      } ${tab.position !== 'active' ? 'w-[45%]' : 'w-[70%]'} whitespace-nowrap`}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ---------------- LEFT TABS (DESKTOP) ---------------- */}
          <div
            className={`relative hidden w-[30%] transition-all delay-200 duration-700 lg:block ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-16 opacity-0'
            }`}
          >
            <div className="sticky top-[20%] h-[43rem] rounded-xl bg-[#FFFFFF] p-[1rem] xl:h-[42rem] xl:p-[2rem]">
              {services?.map((service, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === services.length - 1;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveTab(idx);
                      setActiveCard(null);
                      sectionRefs.current[idx]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }}
                  >
                    <div
                      onMouseEnter={() => setHoveredTab(idx)}
                      onMouseLeave={() => setHoveredTab(null)}
                      className={`mb-[0.75rem] flex h-[3rem] w-full cursor-pointer items-center rounded-full border pl-[1.5rem] pr-[1rem] transition-all duration-300 ease-out hover:translate-y-[-2px] 1360:h-[3.125rem] 1400:h-[3.6rem] ${
                        activeTab === idx
                          ? 'bg-[#FB9100] text-white'
                          : 'bg-[#F5F5F5]'
                      } ${
                        hoveredTab === idx
                          ? 'border-[#FB9100] text-[#000000]'
                          : 'bg-[#F5F5F5]'
                      } `}
                    >
                      <div className="flex w-full items-center justify-between gap-3 1360:gap-1">
                        <p
                          className={`my-auto text-left font-medium ${
                            activeTab === idx
                              ? 'text-[#ffffff]'
                              : 'text-[#000000]'
                          } ${
                            hoveredTab === idx
                              ? 'text-[#000000]'
                              : 'text-[#000000]'
                          }`}
                        >
                          {service.title}
                        </p>

                        {(activeTab === idx || hoveredTab === idx) && (
                          <MdArrowOutward
                            size={35}
                            className="shrink-0 rounded-full bg-white p-2 text-[#FB9100] transition-transform duration-700 ease-out"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---------------- RIGHT CONTENT ---------------- */}
          <div
            className={`w-[100%] space-y-[2rem] transition-all delay-300 duration-700 lg:w-[70%] ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-16 opacity-0'
            }`}
          >
            {services?.map((service, idx) => {
              const ActiveCardDetails = service?.list?.filter(
                (item) => item.label === activeCard
              );
              const isActive = activeTab === idx;
              console.log(isActive, ' ');
              const { title, description, image, link } =
                (ActiveCardDetails?.[0] as ServiceItem) ?? {};
              return (
                <div
                  key={idx}
                  ref={(el) => {
                    sectionRefs.current[idx] = el;
                  }}
                  className="block gap-[2rem] rounded-xl border-[1px] border-[#00000033]/20 bg-white p-8"
                >
                  <div className="gap-2 lg:flex">
                    {/* LEFT CONTENT */}
                    <div className="relative w-[100%] lg:w-[50%] xl:w-[55%]">
                      <div className="overflow-hidden rounded-xl">
                        <div className="animate-slideUpFade h-[18rem] overflow-hidden rounded-2xl">
                          <Image
                            src={image ?? service.img}
                            fill
                            alt={service.title}
                            className="cursor-pointer rounded-[20px] object-cover"
                            priority
                            onClick={() => router.push(link ?? service.link)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="w-[100%] lg:w-[50%] xl:w-[45%]">
                      <div className="grid grid-cols-1 gap-2 py-[1rem] md:grid-cols-2 lg:py-0">
                        {service?.list?.slice(0, 4)?.map((item, i, arr) => {
                          return (
                            <div
                              key={i}
                              onClick={() => setActiveCard(item.label)}
                              style={{
                                transitionDelay: `${i * 280}ms`, // 👈 stagger delay
                              }}
                              className={`relative transition-opacity transition-transform duration-700 lg:h-[7.8rem] xl:h-[9rem] ${
                                isVisible
                                  ? 'translate-y-0 opacity-100'
                                  : 'translate-y-10 opacity-0'
                              } ${activeCard !== item.label ? 'bg-[#F5F5F5]' : 'bg-[#FEE9CC]'} flex !cursor-pointer gap-3 rounded-[15px] border-[0.71px] p-[1rem] hover:border-[0.71px] hover:border-[#F28F17]/60 md:block lg:p-[0.8rem] xl:p-5`}
                            >
                              <Image
                                src={item?.icon}
                                width={40}
                                height={40}
                                alt="check"
                                unoptimized
                                className="ani my-auto h-[25px] w-[25px] md:h-[30px] md:w-[30px]"
                              />
                              <p className="absolute bottom-5 left-16 right-4 text-left font-poppins font-semibold lg:bottom-4 lg:left-4">
                                {item?.label}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2
                      onClick={() => router.push(link ?? service.link)}
                      className="animate-slideUpFade my-2 w-full cursor-pointer text-center font-bold [animation-delay:120ms] hover:text-[#FB9100] lg:my-4 lg:w-fit lg:text-left"
                    >
                      {title ?? service.title}
                    </h2>

                    <p className="animate-slideUpFade mb-6 text-justify [animation-delay:120ms] lg:text-justify">
                      {description ?? service.description}
                    </p>

                    <div className="flex justify-center md:justify-start">
                      <SaveAndCancel
                        isBgWhite={true}
                        isBorder={true}
                        handleClick={() => router.push(link ?? service.link)}
                        name="See Service Details"
                        isIcon
                        buttonWidth={'!w-[14rem]'}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Service;
