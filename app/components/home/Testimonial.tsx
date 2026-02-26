'use client';
import { TestimonialSectionData } from '@/@core/data/website/Homepage';
import { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import { MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import google from '../../../public/assets/upwork_logo.png';
import useIsMobile from '@/@core/hooks/useIsMobile';
import useBreakpointReviewCharLimit from '@/@core/hooks/useBreakpointReviewCharLimit';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const Testimonial = () => {
  const isMobile = useIsMobile();
  const charLimit = useBreakpointReviewCharLimit();
  const { subTitle, title, description, testimonials } = TestimonialSectionData;
  // const VISIBLE_CARDS = isMobile ? 1 : 3;
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const VISIBLE_CARDS = isDesktop ? 3 : 1;

  const total = testimonials.length;
  const slides = [...testimonials, ...testimonials.slice(0, VISIBLE_CARDS)];
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [visibleCards, setVisibleCards] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-[#05121E] to-[#1A5A96] bg-cover bg-no-repeat py-[3rem] lg:py-[4rem]"
    >
      <div className="relative z-20">
        <div
          className={`flex w-[100%] justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={6}
            isLabel={true}
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isInCenter={true}
            className="w-[90%] lg:w-[65%]"
          />
        </div>
        <div
          className={`flex justify-center transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
        >
          <div className="relative w-[90%] overflow-x-hidden pt-[2.5rem]">
            {/* Track */}
            <div
              className={`flex ${enableTransition
                  ? 'transition-transform duration-700 ease-in-out'
                  : ''
                }`}
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {slides.map((testimonial: any, idx: number) => (
                <div
                  key={idx}
                  // className={`relative shrink-0 px-[rem] transition-all duration-700 lg:px-[0.5rem] xl:px-[1rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} basis-full lg:basis-1/3 `}
                  className={`relative shrink-0 basis-full px-2 transition-all duration-700 lg:basis-1/3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{
                    transitionDelay: `${(idx % visibleCards) * 120}ms`,
                  }}
                >
                  <div
                    onClick={() =>
                      window.open(
                        'https://www.upwork.com/agencies/1064740584575918080/',
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="h-[22rem] transform-gpu cursor-pointer rounded-2xl border-[5px] border-transparent bg-white p-[2.5rem] transition-all duration-300 ease-out will-change-transform hover:scale-[1.03] hover:border-[#1B5A96] md:h-[14rem] lg:h-[25rem] lg:p-[1.5rem] xl:p-[2rem] 1360:h-[18rem] 1400:h-[18rem] 1440:h-[22rem] 1600:h-[20rem] 1710:h-[19rem] 3xl:h-[19rem]"
                  >
                    <div className="">
                      <div className="flex justify-between pt-[0rem] lg:pt-[1rem]">
                        <div className="">
                          <p className="text-left font-semibold text-[#108A00]">
                            {testimonial.name}
                          </p>
                          <div className="my-1 flex gap-1 lg:gap-0 xl:gap-1">
                            <span className="my-auto flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <MdOutlineStar
                                  key={i}
                                  size={16}
                                  className="text-[#FB9100]"
                                />
                              ))}
                            </span>
                          </div>
                        </div>
                        <div className="relative h-[30px] w-[120px] flex-shrink-0">
                          <Image
                            src={google}
                            alt="Google"
                            fill
                            unoptimized
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="pt-[1rem] text-left text-[#262626]">
                      {testimonial.description?.length > charLimit
                        ? testimonial.description.slice(0, charLimit) + '...'
                        : testimonial.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            {total > visibleCards && (
              <div className="mt-[1rem] flex justify-center gap-2 md:mt-[2rem] lg:mt-[2.5rem]">
                {Array.from({ length: total }).map((_, i) => {
                  const activeIndex = index % total;
                  return (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-2 rounded-full transition-all ${activeIndex === i ? 'bg-[#FB9100]' : 'bg-gray-300'
                        }`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
