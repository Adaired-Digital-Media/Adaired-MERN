'use client';
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from './layout/MaxWidthWrapper';
import user from '../../public/assets/review/Ellipse 30.png';
import user_2 from '../../public/assets/review/Ellipse 31.png';
import user_3 from '../../public/assets/review/Ellipse 32.png';
import user_4 from '../../public/assets/review/Ellipse 33.png';
import user_5 from '../../public/assets/review/Ellipse 34.png';
import Image from 'next/image';
import { MdStarRate } from 'react-icons/md';
import SaveAndCancel from './common/SaveAndCancel';
import banner_img_1 from '../../public/assets/graph/Graph 1.svg';
import banner_img_2 from '../../public/assets/graph/Graph 2.svg';
import banner_img_3 from '../../public/assets/graph/Graph 3.svg';
import hero_banner from '../../public/assets/images/home/hero_banner-bg.png';
import { useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { PiDotsThree } from 'react-icons/pi';
import google from '../../public/assets/images/partner/google.svg';
import upwork from '../../public/assets/images/partner/upwork.svg';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import star from '../../public/assets/icons/star.png';
import useIsMobile from '@/@core/hooks/useIsMobile';

const Banner = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const users = [user, user_2, user_3, user_4, user_5];
  const griphData = [
    {
      icon: <FaUser size={10} />,
      id: 0,
      lebal: 'Monthly Users',
      number: '23.6K',
      griphNumber: `10`,
      griph: <FiArrowUpRight size={10} />,
      color: '#FF5A65',
    },
    {
      id: 1,
      icon: <FaUser size={10} />,
      lebal: 'Monthly Users',
      number: '23.6K',
      griphNumber: `102`,
      griph: <FiArrowUpRight size={10} />,
      color: '#14CA74',
    },
    ,
    {
      id: 2,
      icon: <FaUser size={10} />,
      lebal: 'New Users',
      number: '10.6K',
      griphNumber: `102`,
      griph: <FiArrowUpRight size={10} />,
      color: '#14CA74',
    },
    {
      id: 3,
      icon: <FaUser size={10} />,
      lebal: 'Subscribes',
      number: '21.6K',
      griphNumber: `102`,
      griph: <FiArrowUpRight size={10} />,
      color: '#14CA74',
    },
  ];

  const [active, setActive] = useState<null | 'img3' | 'img2' | 'img1'>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1️⃣ IMG 3
      setActive('img2');

      setTimeout(() => {
        setActive(null);

        // 2️⃣ IMG 2
        setTimeout(() => {
          setActive('img3');

          setTimeout(() => {
            setActive(null);

            // 3️⃣ IMG 1
            setTimeout(() => {
              setActive('img1');

              setTimeout(() => {
                setActive(null);
              }, 2000); // img1 stay
            }, 400);
          }, 2000); // img2 stay
        }, 400);
      }, 2000); // img3 stay
    }, 5200); // total cycle time

    return () => clearInterval(interval);
  }, []);
  const scrollToServices = () => {
    const section = document.getElementById('services');
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

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
        className="pointer-events-none object-fill lg:object-cover"
      />
      <MaxWidthWrapper className="relative z-10 block items-center justify-between py-[6rem] lg:flex lg:py-[4rem]">
        <div
          className={`w-[100%] space-y-5 transition-all duration-1000 lg:w-[45%] xl:w-[42%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
        >
          <div className="mx-auto flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem] lg:mx-0 lg:mr-auto">
            <Image
              src={star}
              width={18}
              height={17}
              alt=""
              className="mb-auto"
            />
            <span className="my-auto uppercase text-[#000000]">
              Gain Visibility That Converts
            </span>
          </div>
          <h1 className="text-center lg:text-left">
            Result-Driven Digital Marketing Agency for Scalable Growth
          </h1>
          <p className="text-center lg:text-left">
            From Google searches to AI chats, we make sure your brand is visible
            to your customers wherever they look.
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex w-fit justify-between">
              <div className="flex items-center">
                {users
                  ?.slice(0, isMobile ? 3 : users.length)
                  ?.map((img, index) => {
                    const isLast = index === (isMobile ? 3 : users.length) - 1;

                    return (
                      <div
                        key={index}
                        className={`relative ${index !== 0 ? '-ml-4' : ''}`}
                        // style={{ zIndex: users.length - index }}
                        style={{ zIndex: index + 1 }}
                      >
                        <Image
                          src={img}
                          width={50}
                          height={50}
                          alt="user"
                          className={`${
                            isLast ? 'animate-zoomPulse' : ''
                          } h-[50px] w-[50px] rounded-full border-2 border-white object-cover`}
                        />
                      </div>
                    );
                  })}
              </div>

              <span className="flex">
                <MdStarRate
                  size={20}
                  className="my-auto hidden text-[#FB9100] lg:block"
                />
                <MdStarRate
                  size={20}
                  className="my-auto hidden text-[#FB9100] lg:block"
                />
                <MdStarRate size={20} className="my-auto text-[#FB9100]" />
                <MdStarRate size={20} className="my-auto text-[#FB9100]" />
                <MdStarRate size={20} className="my-auto text-[#FB9100]" />
                <p className="my-auto pl-1 text-left text-[12px]">
                  4.9/5 by 1K+ Clients
                </p>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://www.google.com/partners/agency?id=7775339798"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={google}
                width={208}
                height={39}
                alt="Google Partner"
                className="w-[clamp(8rem,14vw,13rem)] cursor-pointer object-contain"
              />
            </a>

            <span className="text-lg text-black/20">|</span>

            <a
              href="https://www.upwork.com/agencies/1064740584575918080/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={upwork}
                width={130}
                height={39}
                alt="Upwork"
                className="w-[clamp(7rem,12vw,8.125rem)] cursor-pointer object-contain"
              />
            </a>
          </div>

          <p className="text-justify lg:text-left">
            Generate leads by 15% or more within your first 6 months with
            real-time data and expert insights. Our strategy ensures that your
            brand reaches the right people, produces measurable results, and
            effectively expands across digital channels.
          </p>
          <SaveAndCancel
            name={'Get a Quote'}
            button2Name={'Explore Services'}
            is2ndButton={true}
            isIcon={true}
            is2BgWhite={true}
            className="lg:pt-[1rem]"
            handleClick={() => router.push('/contact')}
            handleClick2={scrollToServices}
          />
        </div>
        {/* <div
          className={`relative mt-[5rem] w-[100%] pt-[20vh] transition-all delay-200 duration-1000 md:pt-[50vh] lg:mt-0 lg:w-[50%] lg:pt-0 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
        >
          <div className="my-auto h-full space-y-4">
            <div className="flex w-[100%] justify-center">
              <div className="relative flex justify-end">
                <Image
                  src={banner_img_1}
                  width={599}
                  height={483}
                  alt=""
                  className={`h-[10rem] w-[15rem] transition-opacity transition-transform duration-700 ease-in-out md:h-[20rem] md:w-[32rem] lg:h-[18rem] lg:w-[24rem] xl:h-[30.188rem] xl:w-[37.438rem] 1366:h-[23rem] 1366:w-[28rem] 1400:h-[25rem] 1400:w-[30rem] 1600:h-[26rem] 1600:w-[32rem] 1680:w-[35rem] 3xl:h-[30.188rem] 3xl:w-[37.438rem] ${
                    active === 'img1'
                      ? 'z-40 opacity-100'
                      : active
                        ? 'opacity-40'
                        : 'opacity-100'
                  } `}
                />
                <div className="absolute right-0 top-[103%] hidden w-[100%] grid-cols-4 gap-2 md:grid">
                  {griphData?.map((item, idx) => {
                    return (
                      <div
                        className={`h-[3.125rem] ${idx == 1 && 'animate-step1'} ${idx == 2 && 'animate-step2'} ${idx == 3 && 'animate-step3'} ${idx == 4 && 'animate-step4'} rounded-[0.25rem] border-[1px] border-[#000000]/20 bg-[#FFFFFF]/80 px-[0.5rem] pb-2`}
                      >
                        <div className="flex justify-between">
                          <div className="my-auto flex gap-1">
                            <span className="my-auto">{item?.icon}</span>
                            <p className="mb-auto text-[6px] xl:text-[8px]">
                              {item?.lebal}
                            </p>
                          </div>
                          <PiDotsThree size={12} />
                        </div>
                        <div className="-mt-1 flex h-fit w-[100%] gap-2">
                          <p className="my-auto text-[10px] font-bold xl:text-[12px]">
                            {item?.number}
                          </p>
                          <div
                            className={`my-auto flex h-[16px] w-fit gap-1 rounded-[0.25rem] border-[0.49px] bg-[#000000]/10 px-[0.5rem] opacity-40 ${item?.griphNumber == '10' ? 'border-[#FF5A65];20 text-[#FF5A65]' : 'border-[#14CA74]/20 text-[#14CA74]'}`}
                          >
                            <p
                              className={`mt-[-0.25rem] text-[6px] font-semibold xl:text-[8px] ${item?.griphNumber == '10' ? 'text-[#FF5A65]' : 'text-[#14CA74]'}`}
                            >
                              {item?.griphNumber}
                            </p>
                            <span className="my-auto">{item?.griph}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Image
              src={banner_img_3}
              width={302}
              height={186}
              alt=""
              className={`absolute bottom-[-15%] left-[0rem] h-[6rem] w-[8rem] transition-opacity transition-transform duration-700 ease-in-out md:left-[0rem] md:h-[10rem] md:w-[14rem] xl:h-[11.625rem] xl:w-[18.875rem] 1366:h-[8rem] 1366:w-[14rem] 1400:h-[9rem] 1400:w-[16rem] 3xl:h-[11.625rem] 3xl:w-[18.875rem] ${
                active === 'img3'
                  ? 'z-30 translate-x-[100%] translate-y-[-50%] scale-105 opacity-100 backdrop-blur-md md:translate-x-[105%] md:translate-y-[-80%] lg:translate-x-[50%] lg:translate-y-[-80%] xl:translate-x-[80%] xl:translate-y-[-110%] 1366:translate-y-[-150%] 1400:translate-x-[70%] 1400:translate-y-[-130%] 1600:translate-x-[80%] 1680:translate-x-[90%] 3xl:translate-x-[85%] 3xl:translate-y-[-120%]'
                  : active
                    ? 'z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                    : 'z-10 translate-x-0 translate-y-0 scale-100 opacity-100'
              }`}
            />
            <Image
              src={banner_img_2}
              width={388}
              height={244}
              alt=""
              className={`absolute right-0 top-[-20%] h-[6.875rem] w-[10.563rem] transition-opacity transition-transform duration-700 ease-in-out md:h-[13rem] md:w-[20rem] lg:h-[10.25rem] lg:w-[15.25rem] xl:h-[15.25rem] xl:w-[24.25rem] 1366:h-[10rem] 1366:w-[18rem] 1400:h-[12rem] 1400:w-[20rem] 3xl:h-[15.25rem] 3xl:w-[24.25rem] ${
                active === 'img2'
                  ? 'z-30 translate-x-[-50%] translate-y-[50%] scale-105 bg-white/80 opacity-100 backdrop-blur-md md:translate-x-[-60%] md:translate-y-[75%] lg:translate-x-[-45%] lg:translate-y-[80%] xl:translate-x-[-50%] xl:translate-y-[100%] 1400:translate-x-[-40%] 1470:translate-x-[-45%] 1600:translate-x-[-50%] 1680:translate-x-[-60%] 1680:translate-y-[100%] 3xl:translate-x-[-49%] 3xl:translate-y-[90%]'
                  : active
                    ? 'z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                    : 'z-10 translate-x-0 translate-y-0 scale-100 opacity-100'
              }`}
            />
          </div>
        </div> */}
        <div
          className={`relative mt-[5rem] w-[100%] transition-all delay-200 duration-1000 lg:mt-0 lg:w-[50%] lg:pt-0 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
        >
          <div className="my-auto h-full space-y-4">
            <div className="flex w-[100%] justify-center">
              <div className="relative flex justify-end">
                <Image
                  src={banner_img_1}
                  width={599}
                  height={483}
                  alt=""
                  className={`aspect-[599/483] w-[clamp(12rem,70vw,20rem)] max-w-full transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(14rem,55vw,28rem)] lg:w-[clamp(15rem,32vw,37.438rem)] ${
                    active === 'img1'
                      ? 'z-40 opacity-100'
                      : active
                        ? 'opacity-40'
                        : 'opacity-100'
                  }`}
                />

                <div className="absolute right-0 top-[103%] hidden w-[100%] grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2 md:grid">
                  {griphData?.map((item, idx) => {
                    return (
                      // <div
                      //   className={`min-h-[3.5rem] rounded-[0.25rem] border border-black/20 bg-white/80 px-2 pb-2 ${
                      //     idx == 1 && 'animate-step1'
                      //   } ${idx == 2 && 'animate-step2'} ${
                      //     idx == 3 && 'animate-step3'
                      //   } ${idx == 4 && 'animate-step4'}`}
                      // >
                      //   <div className="flex justify-between">
                      //     <div className="my-auto flex gap-1">
                      //       <span className="my-auto">{item?.icon}</span>
                      //       <p className="mb-auto text-[6px] xl:text-[6px]">
                      //         {item?.lebal}
                      //       </p>
                      //     </div>
                      //     <PiDotsThree size={12} />
                      //   </div>

                      //   <div className="-mt-1 flex h-fit w-[100%] gap-2">
                      //     <p className="my-auto text-[10px] font-bold xl:text-[12px]">
                      //       {item?.number}
                      //     </p>

                      //     <div
                      //       className={`my-auto flex h-[16px] w-fit gap-1 rounded-[0.25rem] border-[0.49px] bg-[#000000]/10 px-[0.5rem] opacity-40 ${
                      //         item?.griphNumber == '10'
                      //           ? 'border-[#FF5A65]/20 text-[#FF5A65]'
                      //           : 'border-[#14CA74]/20 text-[#14CA74]'
                      //       }`}
                      //     >
                      //       <p
                      //         className={`mt-[-0.25rem] text-[6px] font-semibold xl:text-[6px] ${
                      //           item?.griphNumber == '10'
                      //             ? 'text-[#FF5A65]'
                      //             : 'text-[#14CA74]'
                      //         }`}
                      //       >
                      //         {item?.griphNumber}
                      //       </p>
                      //       <span className="my-auto">{item?.griph}</span>
                      //     </div>
                      //   </div>
                      // </div>
                      <div
                      key={idx}
                        className={`min-h-[3.5rem] rounded-[0.25rem] border border-black/20 bg-white/80 px-2 py-2 ${
                          idx == 1 && 'animate-step1'
                        } ${idx == 2 && 'animate-step2'} ${
                          idx == 3 && 'animate-step3'
                        } ${idx == 4 && 'animate-step4'}`}
                      >
                        <div className="flex justify-between">
                          <div className="my-auto flex gap-1">
                            <span className="my-auto">{item?.icon}</span>
                            <p className="mb-auto text-[clamp(0.55rem,0.6vw,0.75rem)] leading-tight">
                              {item?.lebal}
                            </p>
                          </div>
                          <PiDotsThree size={14} />
                        </div>

                        <div className="mt-1 flex w-full gap-2">
                          <p className="my-auto text-[clamp(0.75rem,0.9vw,1rem)] font-bold leading-tight">
                            {item?.number}
                          </p>

                          <div
                            className={`my-auto flex min-h-[1rem] w-fit items-center gap-1 rounded-[0.25rem] border px-2 py-[0.1rem] opacity-80 ${
                              item?.griphNumber == '10'
                                ? 'border-[#FF5A65]/20 bg-[#FF5A65]/10 text-[#FF5A65]'
                                : 'border-[#14CA74]/20 bg-[#14CA74]/10 text-[#14CA74]'
                            }`}
                          >
                            <p
                              className={`text-[clamp(0.55rem,0.6vw,0.65rem)] font-semibold leading-none ${
                                item?.griphNumber == '10'
                                  ? 'text-[#FF5A65]'
                                  : 'text-[#14CA74]'
                              }`}
                            >
                              {item?.griphNumber}
                            </p>
                            <span className="text-[clamp(0.55rem,0.6vw,0.75rem)] leading-none">
                              {item?.griph}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <Image
              src={banner_img_3}
              width={302}
              height={186}
              alt=""
              className={`absolute bottom-[-15%] left-[0rem] aspect-[302/186] w-[clamp(7rem,55vw,10rem)] transition-opacity transition-transform duration-700 ease-in-out md:bottom-[-20%] md:w-[clamp(8rem,28vw,14rem)] lg:bottom-[-15%] lg:w-[clamp(8rem,14vw,18.875rem)] ${
                active === 'img3'
                  ? 'z-30 translate-x-[60%] translate-y-[-100%] scale-105 opacity-100 backdrop-blur-md md:translate-x-[100%] md:translate-y-[-150%]'
                  : active
                    ? 'z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                    : 'z-10 translate-x-0 translate-y-0 scale-100 opacity-100'
              }`}
            />

            {/* Image 2 */}
            <Image
              src={banner_img_2}
              width={388}
              height={244}
              alt=""
              className={`absolute right-0 top-[-20%] aspect-[388/244] w-[clamp(7rem,55vw,10rem)] transition-opacity transition-transform duration-700 ease-in-out md:w-[clamp(10rem,35vw,20rem)] lg:w-[clamp(10rem,18vw,24.25rem)] ${
                active === 'img2'
                  ? 'z-30 translate-x-[-60%] translate-y-[100%] scale-105 bg-white/80 opacity-100 backdrop-blur-md md:translate-x-[-65%] md:translate-y-[100%]'
                  : active
                    ? 'z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                    : 'z-10 translate-x-0 translate-y-0 scale-100 opacity-100'
              }`}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
