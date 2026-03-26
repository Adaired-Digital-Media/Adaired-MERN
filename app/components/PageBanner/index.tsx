"use client";
import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Heading from "../common/Heading";
import Image from "next/image";
import hero_banner from "../../../public/assets/images/home/hero_banner-bg.png";

const PageBanner = ({ subTitle, headingParts }: any) => {
  const pathname = usePathname();

  return (
    <div className="relative flex h-40 w-full flex-col justify-center overflow-hidden pt-[5rem] md:h-48 lg:h-[25rem]">
      <Image
        src={hero_banner}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-fill lg:object-cover"
      />
      <MaxWidthWrapper className="w-full">
        <Heading subTitle={subTitle} headingParts={headingParts} />
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
