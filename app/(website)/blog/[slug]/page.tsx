export const dynamic = "force-dynamic";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import parse, {
  Element,
  DOMNode,
  domToReact,
  HTMLReactParserOptions,
} from "html-react-parser";
import PageBanner from "@/app/components/PageBanner";
import Heading from "@/app/components/common/Heading";
import { BaseURL } from "@/app/baseUrl";
import arrowIcon from "../../../../public/assets/icons/arrowIcon.png";
import Image from "next/image";
import { transformDate } from "@/@core/hooks/transformDate";
import { Metadata } from "next";

/* ------------------ HELPERS ------------------ */

function splitHtmlAtFirstH2(html: string) {
  if (!html) return { introHtml: "", bodyHtml: "" };

  const firstH2Index = html.indexOf("<h2");
  if (firstH2Index === -1) {
    return { introHtml: html, bodyHtml: "" };
  }

  return {
    introHtml: html.slice(0, firstH2Index),
    bodyHtml: html.slice(firstH2Index),
  };
}

// function splitIntroParagraphs(html: string, wordLimit = 120) {
//   const paragraphs: string[] = [];

//   parse(html, {
//     replace(domNode) {
//       if (domNode instanceof Element && domNode.name === "p") {
//         const text = domNode.children
//           .map((c: any) => c.data || "")
//           .join("")
//           .trim();

//         if (text) paragraphs.push(text);
//       }
//     },
//   });

//   let wordCount = 0;
//   const top: string[] = [];
//   const bottom: string[] = [];

//   paragraphs.forEach((para) => {
//     const words = para.split(" ");
//     if (wordCount < wordLimit) {
//       top.push(para);
//       wordCount += words.length;
//     } else {
//       bottom.push(para);
//     }
//   });

//   return { top, bottom };
// }

function splitIntroParagraphs(html: string, wordLimit = 120) {
  const paragraphs: any[] = [];

  parse(html, {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name === "p") {
        const children = domToReact(domNode.children as DOMNode[]);

        const text = domNode.children
          .map((c: any) => c.data || "")
          .join("")
          .trim();

        if (text) {
          paragraphs.push({
            html: children, // ✅ React nodes (with links)
            text,
          });
        }
      }
    },
  });

  let wordCount = 0;
  const top: any[] = [];
  const bottom: any[] = [];

  paragraphs.forEach((para) => {
    const words = para.text.split(" ");

    if (wordCount < wordLimit) {
      top.push(para.html); // ✅ push HTML
      wordCount += words.length;
    } else {
      bottom.push(para.html);
    }
  });

  return { top, bottom };
}

/* ------------------ DATA ------------------ */

async function getBlogs({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap params

  const res = await fetch(`${BaseURL}/blog/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null; // ✅ prevent crash if API fails
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params; // ✅ FIX

    const res = await fetch(`${BaseURL}/blog/${slug}`, {
      cache: "no-store",
    });

    // ❌ your check was wrong
    if (!res.ok) {
      return {
        title: "Blog | Adaired",
      };
    }

    const response = await res.json();
    const blog = response?.data;

    if (!blog) {
      return {
        title: "Blog Not Found | Adaired",
      };
    }

    const seo = blog?.seo || {};

    const cleanDescription =
      seo.metaDescription ||
      blog.postDescription?.replace(/<[^>]+>/g, "").slice(0, 160) ||
      "";

    return {
      title: seo.metaTitle || blog.postTitle || "Blog | Adaired",

      description: cleanDescription,

      alternates: {
        canonical: seo.canonicalLink || `https://adaired.com/blog/${blog.slug}`,
      },

      keywords: seo.keywords || "",

      openGraph: {
        title: seo.metaTitle || blog.postTitle,
        description: cleanDescription,
        url: `https://adaired.com/blog/${blog.slug}`,
        type: "article",
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt,
        images: blog.featuredImage ? [{ url: blog.featuredImage }] : [],
      },

      twitter: {
        card: "summary_large_image",
        title: seo.metaTitle || blog.postTitle,
        description: cleanDescription,
        images: blog.featuredImage ? [blog.featuredImage] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog | Adaired",
    };
  }
}

interface BlogProps {
  params: { slug: string };
}

/* ------------------ COMPONENT ------------------ */

const Blog = async ({ params }: any) => {
  const blog = await getBlogs({ params });

  const { introHtml, bodyHtml } = splitHtmlAtFirstH2(
    blog?.data?.postDescription,
  );
  const { top, bottom } = splitIntroParagraphs(introHtml, 100);

  const h2Total = (bodyHtml.match(/<h2>/g) || []).length;
  let currentH2Index = 0;
  let isLastH2Section = false;

  const options: HTMLReactParserOptions = {
    replace(domNode: DOMNode) {
      if (!(domNode instanceof Element)) return;

      switch (domNode.name) {
        case "h2":
          currentH2Index++;
          isLastH2Section = currentH2Index === h2Total;
          return (
            <h2 className="">
              {domToReact(domNode.children as DOMNode[], options)}{" "}
            </h2>
          );

        case "h3":
          return (
            <div className="flex items-start gap-2 font-medium">
              {isLastH2Section && (
                <Image
                  src={arrowIcon}
                  width={15}
                  height={20}
                  alt="icon"
                  className="my-auto pt-2"
                />
              )}
              <h3 className="">
                {domToReact(domNode.children as DOMNode[], options)}{" "}
              </h3>
            </div>
          );
        case "h4":
          return (
            <div className=" flex items-start gap-2 font-medium">
              <h4 className="my-auto">
                {domToReact(domNode.children as DOMNode[], options)}{" "}
              </h4>
            </div>
          );
        case "p":
          return (
            <p className="text-[18px] text-[#000000] leading-7">
              {domToReact(
                (domNode.children || []) as unknown as DOMNode[],
                options,
              )}
            </p>
          );

        case "ul":
          return (
            <ul className="list-disc space-y-2 pl-6">
              {domToReact(domNode.children as DOMNode[], options)}
            </ul>
          );

        case "ol":
          return (
            <ol className="list-decimal space-y-2 pl-6">
              {domToReact(domNode.children as DOMNode[], options)}
            </ol>
          );

        case "li":
          return (
            <li className="leading-7">
              {domToReact(domNode.children as DOMNode[], options)}
            </li>
          );

        case "a":
          return (
            <a
              href={domNode.attribs?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {domToReact(
                (domNode.children || []) as unknown as DOMNode[],
                options,
              )}
            </a>
          );

        default:
          return;
      }
    },
  };

  return (
    <>
      <PageBanner
        subTitle={"Latest"}
        headingParts={[{ text: "BLOG DETAILS", color: "#000000", weight: 700 }]}
      />

      <MaxWidthWrapper className="py-12 md:py-20">
        <Heading
          subTitle="BLOG"
          isLabel={true}
          breakIndex={3}
          headingParts={[
            { text: blog?.data?.postTitle, color: "#000000", weight: 700 },
          ]}
        />

        {/* ----------- IMAGE + FIRST 100 WORDS ----------- */}
        <div className="mt-8 grid grid-cols-1 gap-[2rem] md:grid-cols-2">
          <div className="relative h-[30rem] rounded-2xl">
            {blog?.data?.featuredImage ? (
              <Image
                src={blog?.data?.featuredImage}
                fill
                alt={blog?.data?.postTitle}
                className="rounded-2xl object-fill transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <Image
                src={blog?.data?.seo?.openGraph?.image}
                fill
                alt={blog?.data?.postTitle}
                className="rounded-2xl object-fill transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </div>

          <div>
            <div className="flex gap-2 py-4">
              <div className="h-6 w-1 bg-[#1B5A96]"></div>
              <p className="font-bold">
                Date : {transformDate(blog?.data?.createdAt)}
              </p>
            </div>

            {top.map((para, i) => (
              <p key={i} className="mb-4 leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ----------- REMAINING INTRO PARAGRAPHS ----------- */}
        {bottom.length > 0 && (
          <div className="mt-6">
            {bottom.map((para, i) => (
              <p key={i} className="mb-4 leading-7">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* ----------- BLOG BODY ----------- */}
        <div className="prose mt-10 w-full max-w-none">
          {parse(bodyHtml || "", options)}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
