'use client';
import { FC, useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { PiEyeBold } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import useBreakpointCharLimit from '@/@core/hooks/useBreakpointCharLimit';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { transformDate } from '@/@core/hooks/transformDate';

// Type definitions
interface Blog {
  _id: string;
  slug: string;
  postTitle: string;
  postDescription: string;
  featuredImage: string;
  excerpt: string;
  createdAt: string;
}

interface IProps {
  data: Blog[];
}

const BlogWithPagination: FC<IProps> = ({ data }) => {
  const router = useRouter();
  const charLimit = useBreakpointCharLimit();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Memoize current blogs to prevent unnecessary slicing
  const currentBlogs = useMemo(() => {
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    return data.slice(indexOfFirstBlog, indexOfLastBlog);
  }, [data, currentPage]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);


  const totalPages = Math.ceil(data.length / blogsPerPage);
  const maxVisiblePages = 5;

  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(maxVisiblePages / 2),
      totalPages - maxVisiblePages + 1
    ),
    1
  );

  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-[2rem]">
        {currentBlogs.map((blog, idx) => (
          <div
            key={idx}
            className="group relative my-[2.5rem] rounded-3xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.14)] lg:my-[3rem]"
          >
            {/* IMAGE */}
            <div className="relative h-[170px] w-full overflow-hidden rounded-2xl lg:h-[200px] xl:h-[280px]">
              <Image
                src={blog?.featuredImage}
                fill
                alt={blog.postTitle}
                className="object-fill transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#1A5A96]/10 transition-opacity duration-300 group-hover:bg-[#1A5A96]/60" />

              {/* DATE */}
              <p className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xxs xl:text-xs">
                {transformDate(blog?.createdAt)}
              </p>

              {/* EYE ICON (SHOW ON HOVER) */}
              <PiEyeBold
                size={42}
                onClick={() => router.push(`/blog/${blog.slug}`)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 cursor-pointer text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              />
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-[-5rem] space-y-4 rounded-xl border-[0.71px] border-[#000000]/5 bg-white p-4 lg:mx-4 xl:bottom-[-4.5rem] xl:mx-8 xl:p-8">
              <h3
                onClick={() => router.push(`/blog/${blog.slug}`)}
                className="cursor-pointer text-[#111] transition-colors duration-300 group-hover:text-[#F28F17] xl:text-[1.125rem]"
              >
                {blog.postTitle.length > charLimit
                  ? blog.postTitle.slice(0, charLimit) + '...'
                  : blog.postTitle}
              </h3>

              <p
                onClick={() => router.push(`/blog/${blog.slug}`)}
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
      {data.length > blogsPerPage && (
        <div className="absolute bottom-[-7.5rem] flex w-[100%] justify-center">
          {/* <Pagination
            total={data.length}
            current={currentPage}
            onChange={setCurrentPage}
            pageSize={blogsPerPage}
            nextIcon="Next"
            prevIcon="Previous"
            rounded="md"
          /> */}

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-2 disabled:opacity-50"
          >
            <IoChevronBack size={20} />
          </button>

          {/* {startPage > 1 && <span className="text-2xl">…</span>} */}

          {/* {Array.from(
                { length: Math.ceil(data.length / blogsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-2 py-2 ${currentPage === i + 1
                      ? 'bg-[#1A5A96] text-white'
                      : 'bg-white text-black'
                      }`}
                  >
                    {i + 1}
                  </button>
                )
              )} */}

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => {
              const pageNumber = startPage + i;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`w-8 h-8 px-2 rounded-full mt-0.5 ${currentPage === pageNumber
                    ? 'bg-[#1A5A96] text-white'
                    : 'bg-white text-black'
                    }`}
                >
                  {pageNumber}
                </button>
              );
            }
          )}

          {/* {endPage < totalPages && <span className="text-2xl">…</span>} */}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(data.length / blogsPerPage))
              )
            }
            disabled={currentPage === Math.ceil(data.length / blogsPerPage)}
            className="px-2 py-2 disabled:opacity-50"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogWithPagination;
