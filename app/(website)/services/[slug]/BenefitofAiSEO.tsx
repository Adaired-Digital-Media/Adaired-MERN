import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import CustomSlider from './CustomSlider';
const BenefitofAiSEO = ({ benefitofAiSeo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      // className="bg-gradient-to-b from-[#FFF8F0] via-[#FFF8F0]/70 to-[#FFF8F0]/30 py-[3rem] lg:py-[6rem]"
      className={`${benefitofAiSeo?.bgColor} py-[3rem] lg:py-[4rem]`}
    >
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            headingParts={benefitofAiSeo?.headingParts}
            breakIndex={benefitofAiSeo?.breakIndex}
            isDecVarticle={!benefitofAiSeo?.isInCenter}
            isInCenter={benefitofAiSeo?.isInCenter}
            description={benefitofAiSeo?.description}
            className=""
          />
        </div>
      </MaxWidthWrapper>
      <CustomSlider data={benefitofAiSeo?.list} colors={benefitofAiSeo} />
    </div>
  );
};

export default BenefitofAiSEO;
