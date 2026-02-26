'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import { FAQSSectionData } from '@/@core/data/website/Homepage';
import { MdAdd } from 'react-icons/md';
import { GrFormSubtract } from 'react-icons/gr';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { TbPointFilled } from 'react-icons/tb';
import SimpleButton from '../common/SimpleButton/page';

const FAQ = ({ faqs }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const { subTitle } = FAQSSectionData;

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleSeeMore = () => {
    setVisibleCount(faqs?.list?.length);
  };
  const handleSeeLess = () => {
    setVisibleCount(5);
  };

  return (
    <div ref={ref} className="overflow-visible py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper className="space-y-[1rem] overflow-visible">
        {/* Heading */}
        <div
          className={`flex w-full justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <Heading
            breakIndex={6}
            isLabel
            subTitle={subTitle}
            title={faqs?.title}
            span=""
            description={faqs?.description}
            isBgWhite
            isInCenter
            className="w-full lg:w-[90%]"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-6 px-4 md:px-12 lg:px-[22%]">
          {faqs?.list?.slice(0, visibleCount).map((faq: any, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleFAQ(idx)}
                className={`flex cursor-pointer justify-between rounded-2xl border-[2px] border-black/20 p-4 transition-all duration-700 lg:px-6 lg:py-4 ${isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {/* Content */}
                <div className="w-[85%] space-y-4 md:w-[90%]">
                  <h3 className="text-center md:text-left">{faq.title}</h3>

                  {/* {isOpen && (
                    <div className="space-y-3">
                      <p>{faq.description}</p>

                      {faq?.list?.length > 0 && (
                        <div className="space-y-2 pl-4">
                          {faq.list.map((item: any, i: number) => (
                            <div key={i} className="flex gap-2 text-black">
                              <TbPointFilled className="mt-1" />
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )} */}


                  {isOpen && (
                    <div className="space-y-3">

                      {Array.isArray(faq.description) ? (
                        faq.description.map((desc: any, index: number) => {

                          if (typeof desc === "string") {
                            return (
                              <p key={index}>{desc}</p>
                            );
                          }

                          if (typeof desc === "object" && desc?.list) {
                            return (
                              <div key={index} className="space-y-2">
                                {desc.list.map((item: string, i: number) => (
                                  <div key={i} className="flex items-center gap-2 text-black ">
                                    <TbPointFilled className="size-3" />
                                    <p className='text-left'>{item}</p>
                                  </div>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        })
                      ) : (
                        <p>{faq.description}</p>
                      )}

                    </div>
                  )}
                </div>

                {/* Toggle Icon */}
                <div className="flex w-[10%] justify-end">
                  <span
                    className={`mb-auto rounded-full p-1 ${isOpen ? 'bg-[#FB9100] text-white' : 'border border-black'
                      }`}
                  >
                    {isOpen ? (
                      <GrFormSubtract size={28} />
                    ) : (
                      <MdAdd size={28} />
                    )}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Load More Button */}
          {faqs?.list?.length > 5 && (
            <div className="flex justify-center">
              <SimpleButton
                name={
                  faqs?.list?.length > visibleCount ? 'See More' : 'See Less'
                }
                isBgWhite={false}
                isIcon
                className="w-[12rem]"
                handleClick={
                  faqs?.list?.length > visibleCount
                    ? handleSeeMore
                    : handleSeeLess
                }
              />
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQ;
