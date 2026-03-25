"use client";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
// import type { Metadata } from "next";
import bannerBg from '../../../public/assets/images/localSeoPortfolio/bannerBgImg.png'
import Heading from "@/app/components/common/Heading";
import { data } from './data';
import { useState, useEffect } from "react";

// export const metadata: Metadata = {
//     title: "Contact Adaired – Speak with Our Team Today!",
//     description:
//         "Need to ask something or just want to say hi? Our Contact page is where you can reach out easily. We're here to listen and help. Let's chat!",
//     alternates: {
//         canonical: "https://www.adaired.com/contact",
//     },
// };

type SectionKey = keyof typeof data;

const LocalSeoPortfolio = () => {
    const [active, setActive] = useState<SectionKey>("hvac");
    const sections = Object.keys(data) as SectionKey[];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach((key) => {
                const el = document.getElementById(key);
                if (el) {
                    const offsetTop = el.offsetTop - 120;
                    const offsetBottom = offsetTop + el.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActive(key);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const themeStyles = {
        purple: {
            card: "bg-[#F5F5FF]",
            header: "bg-[#D9DDFF]",
            headerText: "text-[#3441BA]",
        },
        purpleLight: {
            card: "bg-[#F8F3FF]",
            header: "bg-[#E6CDFF]",
            headerText: "text-[#5800AF]",
        },
        green: {
            card: "bg-[#EFFBF8]",
            header: "bg-[#E0EFED]",
            headerText: "text-[#273836]",
        },
        orange: {
            card: "bg-[#FFF8EF]",
            header: "bg-[#FFEBD0]",
            headerText: "text-[#FB9100]",
        },
        pink: {
            card: "bg-[#FDF7FF]",
            header: "bg-[#EAD5FF]",
            headerText: "text-[#9E53AC]",
        },
    };

    return (
        <>
            <div
                className="h-[600px] pt-[18rem]"
                style={{
                    backgroundImage: `url(${bannerBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Heading
                    isInCenter={true}
                    isH1={true}
                    headingParts={[{ text: "LOCAL SEO PORTFOLIO", color: "#FFFFFF", weight: 700 }]}
                    textColor="#FFFFFF"
                    description="Explore how our local SEO strategies helped businesses achieve higher Google Rankings"
                    className=""
                />
            </div>

            <MaxWidthWrapper className="flex flex-col lg:flex-row gap-10 lg:gap-36 p-6 lg:p-20">
                {/* Sidebar */}
                <div className="w-full lg:w-[40%] rounded-xl p-6 sticky top-25 h-fit">
                    <ul className="space-y-6">
                        {sections.map((key) => (
                            <li
                                key={key}
                                onClick={() => {
                                    setActive(key);
                                    const el = document.getElementById(key);
                                    if (el) {
                                        const yOffset = -100;
                                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }
                                }}
                                className={`cursor-pointer pb-3 border-b border-[#898989]/70 transition ${active === key
                                    ? "font-[950] text-black border-b-2 border-black"
                                    : "text-[#323232]/80"
                                    }`}
                            >
                                <p className="text-[25px]">{data[key].name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[60%] space-y-10">
                    {sections.map((key) => {
                        const section = data[key];
                        const theme = themeStyles[section.theme];

                        return (
                            <div
                                key={key}
                                id={key}
                                className={`rounded-3xl pt-8 ${theme.card}`}
                            >
                                <div className="px-8">
                                    <h2 className="mb-1">
                                        {section.name}
                                    </h2>

                                    <p className="text-sm mb-[2rem]">
                                        Website Link:{" "}
                                        <a
                                            href={section.websiteLink}
                                            target="_blank"
                                            className=""
                                        >
                                            {section.websiteLink}
                                        </a>
                                    </p>
                                </div>

                                {/* Table */}
                                <div className="overflow-hidden">
                                    <table className="w-full border-collapse">

                                        {/* Header */}
                                        <thead className={`${theme.header}`}>
                                            <tr className={`text-left  ${theme.headerText}`}>
                                                <th className="px-8 py-3 border-r border-[#000000]/30"><p className="text-[16px] font-semibold">Keyword</p></th>
                                                <th className="px-8 border-r border-[#000000]/30"><p className="text-[16px] font-semibold">Initial Position</p></th>
                                                <th className="px-8 text-center"><p className="text-[16px] font-semibold">Current Position</p></th>
                                            </tr>
                                        </thead>

                                        {/* Body */}
                                        <tbody className="">
                                            {section.keywords.map((item, i) => (
                                                <tr key={i} className="text-[16px] text-left">
                                                    <td className="px-8 py-3 border-r border-[#000000]/30">
                                                        {item}
                                                    </td>
                                                    <td className="px-8 py-3 border-r border-[#000000]/30">
                                                        {section.initial[i]}
                                                    </td>
                                                    <td className="px-8 py-3 text-center">
                                                        {section.current[i]}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MaxWidthWrapper>
        </>
    );
}
export default LocalSeoPortfolio;