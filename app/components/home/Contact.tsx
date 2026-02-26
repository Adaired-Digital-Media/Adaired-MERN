"use client";
import { ContactSectionData } from '@/@core/data/website/Homepage';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import Image from 'next/image';
// import reachout from '@/assets/700_650.png';
// import ContactForm from '../forms/ContactForm';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const Contact = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const { image, subTitle, title, span, description } = ContactSectionData;

  return (
    <section ref={ref} className="">
      <MaxWidthWrapper className="space-y-7 py-[3rem] lg:py-[4rem]">
        <div
          className={`transition-all duration-1000 lg:px-[%] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={5}
            isLabel={true}
            subTitle={subTitle}
            title={title}
            span={span}
            description={description}
            isInCenter={true}
            isBgWhite={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[2rem] 1600:gap-[3rem] 3xl:gap-[4.5rem]">
          <div
            className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} `}
          >
            {/* <Image
              src={reachout}
              fill
              alt="About Image"
              className="rounded-3xl border-[#e3e3e3] object-cover p-1"
            /> */}
          </div>
          <div
            className={`transition-all delay-200 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} `}
          >
            {/* <ContactForm /> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
