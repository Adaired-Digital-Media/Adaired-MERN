'use client';
import { BlogSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import MaxWidthWrapper from '../layout/MaxWidthWrapper';
import Heading from '../common/Heading';
import { useRouter } from 'next/navigation';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { PiEyeBold } from 'react-icons/pi';
import useBreakpointCharLimit from '@/@core/hooks/useBreakpointCharLimit';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
const Blogs = () => {
  const router = useRouter();
  const charLimit = useBreakpointCharLimit();
  const { subTitle, title, description, blogs, span } = BlogSectionData;
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <section
      ref={ref}
      className="relative bg-[#F5F5F599] pb-[6rem] pt-[3rem] lg:pb-[9rem] lg:pt-[4rem]"
    >
      <MaxWidthWrapper>
        <div
          className={`flex justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={5}
            isLabel={true}
            subTitle={subTitle}
            title={title}
            span={span}
            description={description}
            isInCenter
            isBgWhite
            className="w-full lg:w-[70%]"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-3 lg:pt-[3rem] xl:gap-7">
          {blogs?.map((blog, idx) => (
            <div
              key={idx}
              // className="group relative my-[3.5rem] rounded-3xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.14)] lg:my-0"
              className={`group relative my-[3.5rem] rounded-3xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.14)] transition-all duration-700 lg:my-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} lg:my-0`}
              style={{
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              {/* IMAGE */}
              <div className="relative h-[250px] w-full overflow-hidden rounded-2xl md:h-[400px] lg:h-[250px] xl:h-[350px]">
                <Image
                  src={blog.image}
                  fill
                  alt={blog.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#1A5A96]/10 transition-opacity duration-300 group-hover:bg-[#1A5A96]/60" />

                {/* DATE */}
                <p className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xxs xl:text-xs">
                  {blog.label}
                </p>

                {/* EYE ICON (SHOW ON HOVER) */}
                <PiEyeBold
                  size={42}
                  onClick={() => router.push(`/blog/${blog.link}`)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 cursor-pointer text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-[-5rem] space-y-4 rounded-xl bg-white p-4 lg:mx-4 xl:bottom-[-4.5rem] xl:mx-8 xl:p-8">
                <h3
                  onClick={() => router.push(`/blog/${blog.link}`)}
                  className="cursor-pointer text-[#111] transition-colors duration-300 group-hover:text-[#F28F17] xl:text-[1.125rem]"
                >
                  {blog.title.length > charLimit
                    ? blog.title.slice(0, charLimit) + '...'
                    : blog.title}
                </h3>

                <p
                  onClick={() => router.push(`/blog/${blog.link}`)}
                  className="flex cursor-pointer items-center gap-2 border-t border-black/20 pt-4 transition-colors duration-300 group-hover:text-[#F28F17]"
                >
                  <IoArrowForwardSharp
                    size={24}
                    className="rounded-full bg-[#1A5A96] p-1 text-white"
                  />
                  <span>View Blog Post</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Blogs;
