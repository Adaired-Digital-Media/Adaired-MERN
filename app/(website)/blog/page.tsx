import React from 'react';
import PageBanner from '@/app/components/PageBanner';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import BlogWithPagination from '@/app/components/BlogWithPagination';
import type { Metadata } from 'next';
import { BaseURL } from '@/app/baseUrl';
import Heading from '@/app/components/common/Heading';

export const getExcerpt = (html: string, maxLength: number = 150): string => {
  const text = html.replace(/<[^>]+>/g, ' '); // Strip HTML tags
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const metadata: Metadata = {
  title: 'Read Our Blog for Helpful Tips and Ideas | Adaired',
  description:
    'Get easy-to-understand tips and new ideas from Adaired’s blogs. From practical tips to interesting ideas, there is something for everyone. Start exploring today!',
  alternates: {
    canonical: 'https://www.adaired.com/blog',
  },
};

async function getBlogs() {
  try {
    const res = await fetch(`${BaseURL}blog/get`, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const response = await res.json();

    // 👇 Extract correct array safely
    let blogsArray: any[] = [];

    if (Array.isArray(response)) {
      blogsArray = response;
    } else if (Array.isArray(response?.data)) {
      blogsArray = response.data;
    } else if (Array.isArray(response?.blogs)) {
      blogsArray = response.blogs;
    } else {
      console.warn('Unexpected API shape');
      blogsArray = [];
    }

    const blogsWithExcerpts = blogsArray.map((blog: any) => ({
      ...blog,
      excerpt: getExcerpt(blog?.postDescription),
    }));

    return blogsWithExcerpts;
  } catch (error) {
    console.error('getBlogs error:', error);
    return [];
  }
}

const Blog = async () => {
  const data = await getBlogs();

  return (
    <>
      <PageBanner subTitle={'Latest'} headingParts={[{text:'OUR BLOGS', color:"#000000", weight:700}]} isInCenter={false} />
      <MaxWidthWrapper className="pb-[6rem] pt-[3rem] lg:py-[4rem] lg:pb-[10rem] xl:pb-[12rem] xl:pt-[6rem]">
        <div className="">
          <Heading
            isLabel={true}
            subTitle={'Our BLOGS'}
            breakIndex={3}
            headingParts={[{text:'Digital Agency That Turns Businesses Into Brands', color:"#000000", weight:700}]}
          />
          <BlogWithPagination data={data} />

          {/* <aside className="relative xl:w-[30%]">
            <div className="sticky top-24">
              <PopularPosts initialData={data.data.slice(0, 5)} />
            </div>
          </aside> */} 
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
