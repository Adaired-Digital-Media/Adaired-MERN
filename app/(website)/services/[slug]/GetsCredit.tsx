import Heading from '@/app/components/common/Heading';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { BiSolidBadgeCheck } from 'react-icons/bi';

const GetsCredit = ({ getsCredit }: any) => {
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

    return (
        <div ref={ref} className="py-[3rem] lg:py-[4rem] bg-[#FFD79F]/20">
            <MaxWidthWrapper>
                {getsCredit?.code === '01' && (
                    <div>
                        <div
                            className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                        >
                            <Heading
                                isInCenter={true}
                                subTitle={''}
                                headingParts={getsCredit?.headingParts}
                            />
                        </div>
                        <div
                            className={`flex flex-col gap-[4rem] lg:gap-0 lg:flex-row justify-between pt-[1rem] transition-all duration-700 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                                }`}
                        >
                            {getsCredit?.list?.map((item: any, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center transition-all duration-700"
                                    style={{
                                        transitionDelay: `${idx * 200}ms`,
                                    }}
                                >
                                    <h2 className="w-fit px-3 py-1">
                                        <BiSolidBadgeCheck
                                            size={40}
                                            className="text-[#FB9100]"
                                        />
                                    </h2>

                                    <h3 className="mt-6">{item?.description}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </MaxWidthWrapper>
        </div>
    );
};

export default GetsCredit;