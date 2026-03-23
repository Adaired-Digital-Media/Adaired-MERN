'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useState } from 'react';

export default function CustomSlider({ data, colors }: any) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto w-full pt-[1rem]">
      <Swiper
        modules={[Autoplay]}
        loop
        spaceBetween={24}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}

        pagination={{
          el: '#custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `
              <span
                class="${className}"
                style="
                  width:8px;
                  height:8px;
                  background:${colors?.textColor};
                  opacity:0.3;
                  margin:0 6px;
                  border-radius:50%;
                  display:inline-block;
                "
              ></span>
            `;
          },
        }}
      >
        {data?.map((item: any, idx: number) => (
          <SwiperSlide key={item.id}>
            <div
              className={`${colors?.isVariant === '01' ? 'h-[31rem]' : 'lg:h-[51rem] h-[60rem]'} rounded-[20px] bg-white p-8`}
              style={{
                border: `1px solid ${colors?.borderColor}`,
              }}
            >
              <h2
                className="mx-auto w-fit rounded-[20px] px-6 py-2 lg:mx-0"
                style={{
                  color: colors?.textColor,
                  backgroundColor: colors?.textBg,
                  border: `1px solid ${colors?.borderColor}`,
                }}
              >
                {`0${idx + 1}`}
              </h2>

              <h3
                className="pb-4 pt-8"
                style={{
                  color: colors?.textColor,
                }}
              >
                {item?.name}
              </h3>

              <div>
                {item?.description?.map((desc: string, i: number) => (
                  <p key={i} className="py-2">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-3 mt-6">
        {data?.map((item: any, index: number) => (

          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-transform ${activeIndex === index ? 'scale-125' : 'scale-100'
              }`}
            style={{
              backgroundColor:
                activeIndex === index
                  ? colors?.activeDot
                  : colors?.inactiveDot,
            }}
          />
        ))}
      </div>
    </div>
  );
}

