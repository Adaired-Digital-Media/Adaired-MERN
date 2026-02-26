  "use client";
  import Image from 'next/image';
  import certificate_1 from '../../../public/assets/images/ai/ai_1.svg';
  import certificate_2 from '../../../public/assets/images/ai/ai_2.svg';
  import certificate_3 from '../../../public/assets/images/ai/ai_3.svg';
  import certificate_4 from '../../../public/assets/images/ai/ai_4.svg';
  import certificate_5 from '../../../public/assets/images/ai/ai_5.svg';
  import certificate_6 from '../../../public/assets/images/ai/ai_6.svg';
  import MaxWidthWrapper from '../layout/MaxWidthWrapper';
  import Heading from '../common/Heading';
  import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

  const Certificate = () => {
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
    const certificates = [
      certificate_1,
      certificate_2,
      certificate_3,
      certificate_4,
      certificate_5,
      certificate_6,
    ];

    // duplicate array for seamless loop
    const sliderItems = [...certificates, ...certificates];

    return (
      <section
        ref={ref}
        className={'bg-[#F9F9F9] py-[3rem] lg:pt-[4rem] lg:pb-[3rem]'}
      >
        {/* viewport */}

        <MaxWidthWrapper>
          <div
            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
          >
            <Heading
              isLabel={true}
              breakIndex={5}
              subTitle={'AI Growth Catalyst'}
              title={'Propelling Businesses into the Spotlight through Intelligent AI'}
              description={
                'Ensuring businesses gain visibility in AI responses, increasing brand mentions, trustworthiness, and discoverability across modern large language models.'
              }
              isInCenter={true}
              isBgWhite={true}
            />
          </div>

          <div
            className={`w-full overflow-hidden pt-[1.5rem] transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
          >
            {/* sliding track */}
            <div className="flex w-max animate-marquee gap-[7rem] md:bg-transparent md:py-0">
              {sliderItems.map((cert, idx) => (
                <div key={idx} className={`relative my-auto flex-shrink-0 p-4`}>
                  <Image
                    src={cert}
                    alt={`Certificate ${idx + 1}`}
                    width={130}
                    height={40}
                    quality={100}
                    className="h-[1.25rem] w-[6.125rem] object-contain transition duration-300 hover:scale-110 lg:h-[2.5rem] lg:w-[8.125rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    );
  };

  export default Certificate;
