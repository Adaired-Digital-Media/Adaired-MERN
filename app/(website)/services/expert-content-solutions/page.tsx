import { data } from './data';
import Heading from '@/app/components/common/Heading';
import FAQ from '@/app/components/home/FAQ';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import CldImage from '@/app/components/UI/CldImage';
import ContactForm from '@/app/components/form/ContactForm';
import Image from 'next/image';
import SaveAndCancel from '@/app/components/common/SaveAndCancel';

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

import contactSectionImg from '../../../../public/assets/images/expertContentSolutions/contactSectionImg.webp';


const expertContentSolutions = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative bg-[#FFF9F1] pt-[3rem] lg:pt-[12rem] overflow-hidden">
                <MaxWidthWrapper className="relative grid lg:grid-cols-2 gap-10">

                    <div className="absolute inset-0">
                        <div className="absolute bottom-1/2 left-[calc(100%-420px)] hidden lg:block h-[calc(100%+140px)] w-full translate-y-1/2 rounded-tl-[250px] bg-[#FFDCB2]" />
                        <div className="absolute bottom-1/2 left-[calc(100%-400px)] hidden lg:block h-[calc(100%+140px)] w-full translate-y-1/2 rounded-tl-[250px] bg-[#F39019]" />
                    </div>

                    <div className="relative z-10 mt-[4rem]">
                        <Heading
                            breakIndex={5}
                            headingParts={data?.hero?.headingParts}
                        />

                        <p>{data?.hero?.description}</p>

                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-10">
                            <button className="bg-[#424242] text-white px-10 py-3 rounded-full active:scale-95 transition duration-300 border-none">
                                <p>{data?.hero?.button}</p>
                            </button>

                            <div className="flex gap-2 items-center">
                                <div className='bg-[#FB9100] p-3 rounded-full flex items-center justify-center'>
                                    <BiSolidPhoneCall size={22} color='white' />
                                </div>
                                <div>
                                    <p className="capitalize text-left">
                                        {data?.hero?.contact?.title}
                                    </p>
                                    <span className="font-bold text-black">
                                        {data?.hero?.contact?.des}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center">
                        <Image
                            src={data.hero.image}
                            alt="hero"
                            width={718}
                            height={630}
                            className="object-contain"
                            priority
                        />
                    </div>

                </MaxWidthWrapper>
            </section>

            {/* ================= STAND OUT ================= */}
            <section className="py-12 lg:py-16">
                <MaxWidthWrapper className='grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-0 px-4'>

                    <div className="flex items-center justify-center">
                        <Image
                            src={data.standOut.image}
                            alt='image'
                            height={479}
                            width={597}
                            className=''
                        />
                    </div>

                    <div className='flex flex-col items-center justify-center lg:items-start'>
                        <div className='relative flex gap-4 items-center justify-center bg-[#F3F3F3] pl-[3rem] pr-[1rem] rounded-[2rem] w-fit'>
                            <div className='absolute bg-[#FB9100] p-2 rounded-full left-0 border-3 border-white'>
                                <Image
                                    src={data.products.subTitleIcon}
                                    alt='icon'
                                    height={22}
                                    width={22}
                                    className=''
                                />
                            </div>
                            <p className=''>{data.standOut.subTitle}</p>
                        </div>

                        <Heading
                            headingParts={data?.standOut?.headingParts}
                            className="mt-2"
                        />

                        <div className='space-y-4'>
                            {data.standOut.description.map((data, index) => (
                                <p key={index}>
                                    {data}
                                </p>
                            ))}
                        </div>

                        <ul className="mt-5 space-y-2">
                            {data.standOut.list.map((item, i) => (
                                <li key={i} className="flex gap-2">
                                    <Image
                                        src={data.standOut.listIcon}
                                        alt='icon'
                                        height={22}
                                        width={22}
                                        className='mb-2'
                                    />
                                    <p className='font-semibold text-left'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* ================= PRODUCTS ================= */}
            <section className="bg-[#F6FBFF] py-12 lg:py-16">
                <MaxWidthWrapper>

                    {/* HEADER */}
                    <div className="flex flex-col items-center">
                        <div className="relative flex items-center gap-4 bg-white pl-[3rem] pr-[1rem] rounded-[2rem]">
                            <div className="absolute left-0 bg-[#FB9100] p-2 rounded-full border-3 border-white">
                                <Image
                                    src={data.products.subTitleIcon}
                                    alt="icon"
                                    height={22}
                                    width={22}
                                />
                            </div>
                            <p className="text-[#424242]">
                                {data.products.subTitle}
                            </p>
                        </div>

                        <Heading
                            breakIndex={7}
                            isInCenter={true}
                            headingParts={data?.products?.headingParts}
                            className="mt-4"
                        />
                    </div>

                    {/* PRODUCTS GRID */}
                    <div className="flex justify-center">
                        <div
                            className="flex flex-wrap justify-center gap-[2rem] mt-10 w-full mx-[1rem] lg:mx-[8rem]
                            [&>*]:w-full
                            sm:[&>*]:w-[calc(50%-0.75rem)]
                            md:[&>*]:w-[calc(50%-1rem)]
                            lg:[&>*]:w-[calc(25%-1.5rem)]">
                            {data.products.cards.map((card, i) => (
                                <div
                                    key={i}
                                    className="group relative flex flex-col items-center justify-center lg:px-[3rem] py-[4rem] lg:py-[6rem] bg-white rounded-[2rem] overflow-hidden transition-all duration-500 ease-out hover:shadow-lg"
                                >
                                    <div className="flex flex-col items-center gap-4 transition-transform duration-500 ease-out group-hover:-translate-y-6 lg:group-hover:-translate-y-8">
                                        <Image
                                            src={card?.icon}
                                            alt="icon"
                                            height={45}
                                            width={45}
                                            className='lg:h-[60px] lg:w-[60px]'
                                        />
                                        <p className="font-semibold">
                                            {card?.title}
                                        </p>
                                    </div>

                                    <div className="lg:absolute lg:bottom-8 mt-[2rem] lg:mt-0 opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 ease-out">
                                        <SaveAndCancel name={data.products.button} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* ================= APPROACH ================= */}
            <section className="py-12 lg:py-16">
                <MaxWidthWrapper>
                    <Heading
                        headingParts={data?.approach?.headingParts}
                        description={data?.approach?.description}
                        textColor={data?.approach?.textColor}
                        className=""
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] mt-[2rem]">
                        {data.approach.steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center lg:flex-row lg:gap-4 p-6 rounded-[1rem] shadow-md"
                            >
                                <Image
                                    src={step?.icon}
                                    alt='icon'
                                    height={60}
                                    width={60}
                                    className='mb-7'
                                />
                                <div>
                                    <h2>{step.title}</h2>
                                    <p className="text-[#424242]">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* ================= SURFER SEO ================= */}
            <section className="relative bg-[#FFFBF5] py-12 lg:py-16">
                <MaxWidthWrapper>
                    <div className='flex flex-col md:flex-row items-center md:gap-4'>
                        <Image
                            src={data?.surferSEO?.icon}
                            alt='icon'
                            height={32}
                            width={32}
                            className='mb-2'
                        />
                        <Heading
                            headingParts={data?.surferSEO?.headingParts}
                        />
                    </div>

                    <div className="space-y-4">
                        {data.surferSEO.features.map((item, index) => (
                            <div key={index}>
                                <div className="flex items-start gap-3">
                                    <MdKeyboardDoubleArrowRight
                                        size={28}
                                        className="flex-shrink-0 lg:mt-1"
                                    />
                                    <div>
                                        <h3 className="text-left">
                                            {item.title}
                                        </h3>

                                        <p className="text-[#424242] text-left">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
                <div className='absolute right-0 bottom-[2rem] bg-linear-to-r from-[#FEF1E1] to-[#FEF6EC] h-[26rem] w-[33rem] rounded-l-[1rem] hidden lg:block'>
                    <div className='relative'>
                        <Image
                            src={data?.surferSEO?.image}
                            alt='icon'
                            width={572}
                            height={321}
                            className='absolute top-[4rem] -left-[15rem]'
                        />
                    </div>
                </div>
            </section>

            {/* ================= CONTACT US ================= */}
            <section className='py-12 lg:py-16'>
                <MaxWidthWrapper>
                    <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 md:gap-20`}>
                        <div className={`flex justify-center rounded-2xl`}>
                            <Image
                                src={contactSectionImg}
                                alt="Contact Image"
                                height={635}
                                width={635}
                                quality={100}
                            />
                        </div>
                        <div className={`h-full w-full md:pr-5`}>
                            <ContactForm />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* ================= FAQ ================= */}
            <FAQ faqs={data.faq} />
        </>
    );
}

export default expertContentSolutions;