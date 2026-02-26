"use client";

import { usePathname } from "next/navigation";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Heading from "../common/Heading";
import Image from "next/image";
import leftImg from "../../../public/assets/banner_left_gridiant.png";
import rightImg from "../../../public/assets/banner_right_gridiant.png";

const PageBanner = ({ subTitle, title }: any) => {
  const pathname = usePathname();

  // Check if the URL starts with '/blog/' and has something after it
  const isBlogDetailPage =
    pathname?.startsWith("/blog/") && pathname !== "/blog";

  return (
    <div className="relative flex h-40 w-full flex-col justify-center overflow-hidden pt-[5rem] md:h-48 lg:h-[25rem]">
      {/* Left Image */}
      <div className="absolute inset-y-0 left-0 w-1/2">
        <Image src={leftImg} fill className="object-contain" priority alt="" />
      </div>

      {/* Right Image */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image src={rightImg} fill className="object-contain" priority alt="" />
      </div>

      <MaxWidthWrapper>
        <Heading subTitle={subTitle} title={title} span={""} />
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
