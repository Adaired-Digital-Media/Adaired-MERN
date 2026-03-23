'use client';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import background from '../../../../public/assets/aiseo/DominateAI.png';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import Heading from '@/app/components/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { useState } from 'react';
import GetQuoteModal from '@/app/components/popup/GetQuoteModal';

export type page = {
  image: string;
};

const DominateAI = ({ getplan }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);
  const [open, setOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative flex items-center py-[3rem] lg:py-[4rem]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />

      <MaxWidthWrapper className="relative z-10 w-full">
        <div
          className={`space-y-5 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <Heading
            isLabel={getplan?.isLabel && true}
            breakIndex={5}
            isH1={true}
            subTitle={getplan?.subtitle}
            headingParts={getplan?.headingParts}
            description={getplan?.description}
            textColor={getplan?.textColor}
            isInCenter={true}
          />

          <div className="flex justify-center">
            <SaveAndCancel
              name={getplan?.button}
              isIcon={true}
              isBgWhite={true}
              handleClick={() => setOpen(!open)}
              className="flex "
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <GetQuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default DominateAI;
