'use client';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import Image from 'next/image';
import banner_img_4 from '../../../../public/assets/bannerImg/Group 1000006024.svg';
import banner_img_2 from '../../../../public/assets/bannerImg/Group 1000006023.svg';
import banner_img_3 from '../../../../public/assets/bannerImg/Group 1000006022.svg';
import banner_img_1 from '../../../../public/assets/bannerImg/Group 1000006025.svg';
import GetQuoteModal from '@/app/components/popup/GetQuoteModal';
import hero_banner from '../../../../public/assets/images/home/hero_banner-bg.png';
import google_rate from '../../../../public/google_rate.svg';
import google_review from '../../../../public/image 54.png';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import { useRouter } from 'next/navigation';
import star from '../../../../public/assets/icons/star.png';
import CldImage from '@/app/components/UI/CldImage';

const Banner = ({ banner }: any) => {
  const router = useRouter();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const images = ['img1', 'img2', 'img3', 'img4'] as const;
  const [activeIndex, setActiveIndex] = useState(0);
  const [pt, pb] = (banner?.customPadding || '6rem,6rem').split(',');

  const [open, setOpen] = useState(false);

  const [active, setActive] = useState<null | 'img3' | 'img2' | 'img1'>(null);

  const safeTitle = banner?.heading ?? '';
  const words = safeTitle.split(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500); // duration per image

    return () => clearInterval(interval);
  }, []);

  const isActive = (name: (typeof images)[number]) =>
    images[activeIndex] === name;

  console.log(
    banner?.customPadding?.split(',')[1],
    "banner?.customPadding?.split(',')[0]"
  );
  return (
    <div
      ref={ref}
      className="relative mx-auto w-full overflow-hidden pt-[5vh] lg:pt-[10vh]"
    >
      <Image
        src={hero_banner}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-fill lg:object-fill"
      />
      <MaxWidthWrapper
        className=""
        customPaddingRight={banner?.customPaddingRight}
        customPaddingLeft={banner?.customPaddingLeft}
      >
        {banner?.isCenter ? (
          <div className="relative z-10 block justify-center pb-[6rem] pt-[9rem] lg:flex">
            <div
              className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[60%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div
                className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
              >
                <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                  <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                    <h1 className="text-center capitalize text-[#FB9108]">
                      {banner?.heading}
                    </h1>
                    <h1 className="text-center capitalize">{banner?.label}</h1>
                  </div>
                </div>
                <div className={`$ 'pt-[1rem]'}`}>
                  {banner?.span && (
                    <p className="pt-4 text-center font-montserrat font-bold">
                      {banner?.span}
                    </p>
                  )}

                  <p className="my-5 px-0 text-center lg:px-[4%]">
                    Adaired helps you increase your website's authority, outrank
                    your competitors, and improve search engine rankings with
                    our high-quality link-building services.
                  </p>
                  <p className="text-center lg:px-[4%]">
                    We provide bespoke link-building services that fit the
                    requirements of your company with the help of innovative
                    strategies and technical knowledge.
                  </p>
                </div>
              </div>
              <div className="!mt-[4rem] flex justify-center">
                <SaveAndCancel
                  name={banner?.button}
                  isIcon={true}
                  // handleClick={() => router.push('/contact')}
                  handleClick={() => setOpen(!open)}
                  className="w-[18rem] lg:w-[18rem]"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            {banner?.code === '01' && (
              <div className="relative z-10 block justify-between py-[6rem] lg:flex">
                <div
                  className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[45%] xl:w-[45%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        <h1 className="text-center capitalize lg:text-left">
                          {banner?.heading}
                        </h1>
                        <h1 className="text-center capitalize text-[#FB9100] lg:text-left">
                          {banner?.heading2}
                        </h1>
                      </div>
                    </div>
                    <div className={`pt-[1rem]`}>
                      {banner?.span && (
                        <p className="pt-4 text-center font-montserrat font-bold lg:text-left">
                          {banner?.span}
                        </p>
                      )}

                      <p className="py-7 text-center lg:text-left">
                        {banner?.desc}
                      </p>
                      {banner?.subheading && (
                        <h3 className="text-[22px] font-[600] leading-[32px]">
                          {banner?.subheading}
                        </h3>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <SaveAndCancel
                      name={banner?.button}
                      isIcon={true}
                      // handleClick={() => router.push('/contact')}
                      handleClick={() => setOpen(!open)}
                      // className="w-[18rem] lg:w-[14rem]"
                      // className={`w-[${banner?.width}] lg:w-[${banner?.widthLg}]`}
                    />
                  </div>
                  <div className="flex justify-center gap-3 pt-[2rem] lg:justify-start">
                    <a
                      href="https://www.google.com/partners/agency?id=7775339798"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={google_rate}
                        width={135}
                        height={58}
                        alt="Upwork"
                        className="cursor-pointer"
                      />
                    </a>

                    <div className="mx-2 my-auto h-[3.5rem] w-0.5 bg-[#000000]/20"></div>

                    <a
                      href="https://www.upwork.com/agencies/1064740584575918080/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={google_review}
                        width={150}
                        height={67}
                        alt="Google Reviews"
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className={`relative my-auto w-[100%] pt-[6rem] transition-all delay-200 duration-1000 lg:w-[50%] lg:pt-0 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-16 opacity-0'
                  }`}
                >
                  <div className="my-auto h-full space-y-4">
                    <div className="flex w-[100%] justify-center">
                      <div className="relative flex justify-end">
                        <Image
                          src={banner_img_1}
                          width={563}
                          height={388}
                          alt=""
                          className={`aspect-[563/388] w-[clamp(18rem,35vw,35.5rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(18rem,55vw,55.5rem)] lg:w-[clamp(18rem,35vw,35.5rem)] ${
                            active === 'img1'
                              ? 'z-40 opacity-100'
                              : active
                                ? 'opacity-40'
                                : 'opacity-100'
                          }`}
                        />

                        <Image
                          src={banner_img_4}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute left-[-10%] top-[15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(8rem,23vw,23.75rem)] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img4')
                              ? 'left-1/2 top-1/2 z-40 translate-x-[105%] translate-y-[40%] scale-105 opacity-100'
                              : 'z-10 translate-x-0 translate-y-0 scale-100'
                          }`}
                        />

                        <Image
                          src={banner_img_3}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute bottom-[-15%] right-[10%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:bottom-[-10%] md:right-[10%] md:w-[clamp(8rem,23vw,23.75rem)] lg:bottom-[-14%] lg:right-[10%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img3')
                              ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] -translate-y-[50%] scale-105 opacity-100 md:-translate-y-[65%] lg:-translate-y-[50%]'
                              : 'z-10'
                          }`}
                        />
                        <Image
                          src={banner_img_2}
                          width={302}
                          height={186}
                          alt=""
                          className={`absolute right-[-10%] top-[-15%] aspect-[220/143] w-[clamp(8rem,13vw,13.75rem)] transition-opacity transition-transform duration-700 ease-in-out md:top-[-15%] md:w-[clamp(8rem,23vw,23.75rem)] lg:top-[-12%] lg:w-[clamp(8rem,13vw,13.75rem)] ${
                            isActive('img2')
                              ? 'left-1/2 top-1/2 z-40 -translate-x-[50%] translate-y-[115%] scale-105'
                              : 'z-10 translate-x-0 translate-y-0 scale-100'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {banner?.code === '02' && (
              <div
                className={`relative z-10 block justify-between gap-[3rem] lg:flex`}
                style={{
                  gap: banner?.customGap || '4rem',
                  paddingTop: banner?.customPadding?.split(',')[0] || '6rem',
                  paddingBottom: banner?.customPadding?.split(',')[1] || '6rem',
                }}
              >
                <div
                  className={`my-auto w-[100%] space-y-5 transition-all duration-1000 lg:w-[50%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                  style={{
                    paddingBottom: banner?.customPadding?.split(',')[0],
                  }}
                >
                  <div
                    className={`'grid lg:gap-[10rem]'} grid-cols-1 lg:grid-cols-2`}
                  >
                    <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                      <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                        {banner?.subtitle && (
                          <div className="mx-auto flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem] lg:mx-0 lg:mr-auto">
                            <Image
                              src={star}
                              width={18}
                              height={17}
                              alt="star icon"
                              className="mb-auto"
                            />
                            <span className="my-auto uppercase text-[#000000]">
                              {banner.subtitle}
                            </span>
                          </div>
                        )}
                        {banner?.isStyleHeading ? (
                          <h1 className="text-center capitalize lg:text-left">
                            {banner?.headingParts
                              ?.flatMap((part: any) =>
                                part.text.split(' ').map((word: string) => ({
                                  word,
                                  color: part.color,
                                  weight: part.weight,
                                }))
                              )
                              .map((item: any, i: number) => (
                                <span
                                  key={i}
                                  style={{
                                    color: item.color,
                                    fontWeight: item.weight,
                                  }}
                                  className="text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]"
                                >
                                  {item.word}{' '}
                                  {banner?.breakIndex === i + 1 && (
                                    <br className="hidden md:block" />
                                  )}
                                </span>
                              ))}
                          </h1>
                        ) : (
                          <div className="md:flex` block justify-center justify-items-center gap-3 lg:justify-start lg:justify-items-start">
                            <div className="mt-[0.8rem] !w-[100%] md:mt-[8px] lg:mt-[0.5rem]">
                              <h1 className="text-center capitalize lg:text-left">
                                {banner?.headingParts
                                  ?.flatMap((part: any) =>
                                    part.text
                                      .split(' ')
                                      .map((word: string) => ({
                                        word,
                                        color: part.color,
                                        weight: part.weight,
                                      }))
                                  )
                                  .map((item: any, i: number) => (
                                    <span
                                      key={i}
                                      style={{
                                        color: item.color,
                                        fontWeight: item.weight,
                                      }}
                                      className="text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]"
                                    >
                                      {item.word}{' '}
                                      {banner?.breakIndex === i + 1 && (
                                        <br className="hidden md:block" />
                                      )}
                                    </span>
                                  ))}
                              </h1>
                              <h1
                                className={`text-center capitalize text-[${banner?.heading2Color || '#000000'}] lg:text-left`}
                              >
                                {banner?.heading2}
                              </h1>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`$ 'pt-[1rem]'}`}>
                      {banner?.span && (
                        <p className="pt-[2rem] text-center font-montserrat font-bold lg:text-left">
                          {banner?.span}
                        </p>
                      )}
                      <div className="py-[1rem] text-center lg:text-left">
                        {Array.isArray(banner?.desc) &&
                        banner?.desc.length > 0 ? (
                          banner.desc.map((item: any, index: number) => (
                            <p
                              key={index}
                              className="my-4 text-center lg:text-left"
                            >
                              {item}
                            </p>
                          ))
                        ) : (
                          <p className="py-2 text-center lg:text-left">
                            {banner?.desc}
                          </p>
                        )}
                      </div>
                      {banner?.subheading && (
                        <h3 className="pb-2 text-[22px] font-[600] leading-[32px]">
                          {banner?.subheading}
                        </h3>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <SaveAndCancel
                      name={banner?.button}
                      isIcon={true}
                      // handleClick={() => router.push('/contact')}
                      handleClick={() => setOpen(!open)}
                    />
                  </div>
                </div>
                <div
                  className={`ml-auto w-full lg:w-[${`${100 - banner?.width}%` || '50%'}] pt-[4rem] transition-all delay-200 duration-1000 lg:h-[var(--img-h)] ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-16 opacity-0'
                  } lg:pt-0`}
                  style={
                    {
                      '--img-w': banner?.imgWidth,
                      '--img-h': banner?.imgHight,
                    } as React.CSSProperties
                  }
                >
                  {typeof banner?.img === 'string' ? (
                    <CldImage
                      src={banner?.img}
                      alt={banner?.name}
                      width={banner?.imgWidth || '800'}
                      height={banner?.imgHight || '600'}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Image
                      src={banner?.img}
                      alt={banner?.name}
                      width={banner?.imgWidth || '800'}
                      height={banner?.imgHight || '600'}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              </div>
            )}

            <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
          </div>
        )}
        <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
