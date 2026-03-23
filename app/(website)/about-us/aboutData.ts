import aboutBannerImg from "../../../public/assets/images/about/aboutBannerImg.png";

import aboutStruggleBg from "../../../public/assets/images/about/aboutStruggleBg.png";

import localServiceResultImg from "../../../public/assets/localseo/localServiceResultImg.png";
import localServiceResultIcon from "../../../public/assets/localseo/localServiceResultIcon.png";

import howItStartedImg_1 from "../../../public/assets/images/about/howItStartedImg_1.png";
import howItStartedImg_2 from "../../../public/assets/images/about/howItStartedImg_2.png";
import howItStartedImg_3 from "../../../public/assets/images/about/howItStartedImg_3.png";

import SEOManager from "../../../public/assets/images/about/SEOManager.png";
import HRManager from "../../../public/assets/images/about/HRManager.png";
import ORMManager from "../../../public/assets/images/about/ORMManager.png";
import WebDevelopmentManager from "../../../public/assets/images/about/WebDevelopmentManager.png";
import SalesManager from "../../../public/assets/images/about/SalesManager.png";
import Linkedin from "../../../public/assets/images/about/Linkedin.png";

import IndustriesWorkWithBg from "../../../public/assets/images/about/IndustriesWorkWithBg.png";

import IndustriesWorkWithImg_1 from "../../../public/assets/images/about/IndustriesWorkWithImg_1.png";
import IndustriesWorkWithImg_2 from "../../../public/assets/images/about/IndustriesWorkWithImg_2.png";
import IndustriesWorkWithImg_3 from "../../../public/assets/images/about/IndustriesWorkWithImg_3.png";
import IndustriesWorkWithImg_4 from "../../../public/assets/images/about/IndustriesWorkWithImg_2.png";
import IndustriesWorkWithImg_5 from "../../../public/assets/images/about/IndustriesWorkWithImg_1.png";
import IndustriesWorkWithImg_6 from "../../../public/assets/images/about/IndustriesWorkWithImg_2.png";
import IndustriesWorkWithImg_7 from "../../../public/assets/images/about/IndustriesWorkWithImg_3.png";
import IndustriesWorkWithImg_8 from "../../../public/assets/images/about/IndustriesWorkWithImg_2.png";
import IndustriesWorkWithImg_9 from "../../../public/assets/images/about/IndustriesWorkWithImg_1.png";
import IndustriesWorkWithImg_10 from "../../../public/assets/images/about/IndustriesWorkWithImg_2.png";
import IndustriesWorkWithImg_11 from "../../../public/assets/images/about/IndustriesWorkWithImg_3.png";
import IndustriesWorkWithImg_12 from "../../../public/assets/images/about/IndustriesWorkWithImg_2.png";

export const ABOUT_DATA = {
  banner: {
    code: "09",
    isVisible: true,
    heading: "We Turn Digital Marketing",
    label: "Into Predictable Growth",
    subheading: `Performance-focused strategies, real data, and measurable ROI - No Guesswork!`,
    button: "Book a Strategy Call",
    Img: aboutBannerImg,
    records: [
      {
        number: 150,
        suffix: "+ ",
        suffix1: "",
        name: "Brands Served",
      },
      {
        number: 3,
        suffix: "M+ ",
        suffix1: "",
        name: "Leads Generated",
      },
      {
        number: 30,
        suffix: "M",
        suffix1: "$",
        name: "In Ad Spend Managed",
      },
      {
        number: 264,
        suffix: "%",
        suffix1: "",
        name: "Average ROI Increase",
      },
    ],
  },

  stopStruggling: {
    isVisible: true,
    isCenter: true,
    breakIndex: 5,
    title: `We're Not Just Another Digital Marketing Agency`,
    description: [
      `Successful digital marketing begins with the right strategy, the right team, and the right execution, and at Adaired Digital Media, we bring all three together. 
            We help brands turn digital opportunities into measurable results through data-driven strategy and execution, 
            backed up by a team of digitally savvy marketing specialists.`,
      `Over the years, we've earned the trust of brands as a true growth partner rather than just a service provider. 
            We do not promise quick fixes or overnight success; rather, we focus on long-term growth strategies that provide real value.`,
    ],
    button: "Get a Free Growth Audit",
    bgImg: aboutStruggleBg,
    isHoverBgBlue: true,
  },

  serviceResult: {
    isVisible: true,
    isVariant: "02",
    heading: "",
    description: [``],
    isBgColor: false,
    img: localServiceResultImg,
    width: 752,
    hight: 470,
    list: [
      {
        img: localServiceResultIcon,
        name: "Our Vision",
        description: [
          `To make digital growth simpler, smarter, and accessible for brands everywhere.`,
          `We envision a digital world where marketing is driven by clarity, technology, and measurable outcomes, not confusion or guesswork. 
                    Our vision is to help brands confidently navigate digital transformation and turn innovation into sustainable growth.`,
        ],
      },
      {
        img: localServiceResultIcon,
        name: "Our Mission",
        description: [
          `To help brands grow digitally through tech-savvy strategy and performance-led execution.`,
          `Our mission is to create scalable digital marketing systems that turn traffic into customers, generate real business value, and adapt to changing markets. 
                    We prioritize data, performance, and transparency to ensure that every digital effort is effective.`,
        ],
      },
      {
        img: localServiceResultIcon,
        name: "Our Values",
        description: [
          `To do honest, effective work that allows our clients to grow in confidence.`,
          `We are more concerned with outcomes than with buzzwords. If it doesn't drive growth, conversions, or value, it won't be considered. 
                    In addition, we remain committed to providing value that has a direct impact on our clients' growth.`,
        ],
      },
    ],
  },

  keyStats: {
    isVisible: true,
    code: "09",
    heading: "The Pillars: What We Actually Stand For",
    isCard: false,
    list: [
      {
        title: "Data First. Always",
        description: [
          `Every decision is backed by real performance data and real-world testing, not assumptions.`,
        ],
      },
      {
        title: "Partnership, Not Just Service",
        description: [
          `We work as an extension of your team, aligned with your goals, challenges, and long-term vision.`,
        ],
      },
      {
        title: "Tech-Savvy & Future-Ready",
        description: [
          `We stay ahead of trends, tools, and platforms to help brands compete in a rapidly changing digital landscape.`,
        ],
      },
      {
        title: "Transparency and Trust",
        description: [
          `Our approach to work is defined by clear communication, honest reporting, and complete accountability.`,
        ],
      },
    ],
  },

  MeetTheFounder: {
    isVisible: true,
    heading: "/assets/images/about/Meet The Founder.png",
    Name: "/assets/images/about/Dheeraj Swami,.png",
    designation: "Founder & CEO",
    image: "/assets/images/about/Rectangle 10109.png",
    Quote:
      "Digital marketing isn’t about being everywhere; it’s about being effective where it matters most.",
    descriptionHeading:
      "Dheeraj is a visionary digital growth leader who believes marketing should empower businesses, not overwhelm them.",
    description: [
      `He founded Adaired Digital Media in 2017 with one clear objective: to build a digital marketing agency that prioritizes measurable growth over marketing noise. With extensive experience in performance marketing and lead generation, he saw firsthand how brands were overwhelmed by complexity but underwhelmed by results.`,

      `His strategy is based on data-driven insights, ongoing optimization, and complete transparency. That’s why at Adaired, we create every campaign to generate qualified leads and measurable business growth.`,
    ],
  },

  growingBrands: {
    isVisible: true,
  },

  testimonial: {
    isVisible: true,
  },

  howItStarted: {
    isVisible: true,
    headingParts: [
      {
        text: "How It All Started",
        color: "#000000",
        weight: "700",
      },
    ],
    timeline: [
      {
        img: howItStartedImg_1,
        title: "Our Story",
        desc: [
          `Adaired Digital Media was founded in 2017 with a simple belief: digital marketing should be transparent, honest, and based on results, not empty promises.`,
          `What began as a focused effort to help brands cut through the digital complexity has grown into a performance-driven digital agency trusted by growth-oriented companies.`,
          `Initially, we saw brands invest heavily in digital marketing without knowing what worked, what didn't, and why. Campaigns appeared promising on paper but failed to produce meaningful business results. `,
          `That gap between effort and impact became the foundation for Adaired Digital Media's current existence.`,
        ],
      },
      {
        img: howItStartedImg_2,
        title: "The Problem We Set Out to Solve",
        desc: [
          `The digital marketing industry is crowded with noise, jargon, and one-size-fits-all solutions. `,
          `Too often, brands are left with perplexing reports, unclear ROI, and strategies that do not align with actual business objectives.`,
          `We set out to address this issue by reintroducing clarity, accountability, and performance into digital marketing. 
                    Instead of chasing trends and metrics, we prioritize growth, conversions, and long-term value. `,
          `Our approach is based on transparency, data-driven decision-making, and strategies tailored to each brand's unique challenges and opportunities.`,
        ],
      },
      {
        img: howItStartedImg_3,
        title: "The Way We Deliver Results",
        desc: [
          `As a lead generation-focused digital marketing agency, we put strategy and performance first. 
                    Every engagement begins with a thorough understanding of our clients' business objectives, target audience, and competitive environment.`,
          `From there, we develop data-driven digital strategies that can scale and adapt as markets change.`,
          `Continuous optimization, real-time insights, and clear performance tracking serve as the foundation for execution. `,
          `We are constantly testing and refining our strategies to ensure that every digital effort yields measurable growth, while also keeping clients updated through open communication and reports.`,
        ],
      },
    ],
  },

  seeDifference: {
    isVisible: true,
    image: "Static Website Images/about_main_anwqk5",
    subTitle: "",
    breakIndex: 7,
    headingParts: [
      {
        text: "We’re Not a Typical Digital Agency: You’ll See the Difference!",
        color: "#000000",
        weight: "700",
      },
    ],
    description: `We are problem solvers, data thinkers, and growth partners who believe that great digital marketing requires collaboration, curiosity, and continuous improvement. 
        Rather than working in silos, we work as a cohesive team dedicated to providing value, clarity, and measurable results to our clients.`,
    cursive:
      "As a powerhouse digital agency, we craft bold ideas backed by data and fueled by creativity that attract attention, command authority, and convert consistently.",
    btnText: "See What’s Next",
    btnHref: "/about",
  },

  peopleBehindWork: {
    isVisible: true,
    breakIndex: 3,
    headingParts: [
      {
        text: "The People Behind the Work",
        color: "#000000",
        weight: "700",
      },
    ],
    description: [
      `Behind every strategy and result is a team of digital media specialists who are deeply concerned with performance and outcomes.`,
      `At Adaired Digital Media, our team combines expertise in strategy, media, technology, content, and analytics to help brands grow smarter, faster.`,
      `As an enterprise digital marketing agency, we build scalable systems that integrate marketing, automation, and analytics.`,
    ],
    images: [
      {
        img: ORMManager,
        title: "Sandeep Grewal",
        desc: "ORM Team Manager",
        icon: Linkedin,
      },
      {
        img: HRManager,
        title: "Aarushi Sharma",
        desc: "HR Manager",
        icon: Linkedin,
      },
      {
        img: SEOManager,
        title: "Gourav Manuja",
        desc: "Seo Team Manager",
        icon: Linkedin,
      },
      {
        img: WebDevelopmentManager,
        title: "Ratanjyot Singh",
        desc: "Project Manager",
        icon: Linkedin,
      },
      {
        img: SalesManager,
        title: "Sahil Khanna",
        desc: "Sales Team Manager",
        icon: Linkedin,
      },
    ],
  },

  industriesWeWorkWith: {
    isVisible: true,
    code: "01",
    headingParts: [
      {
        text: "Industries We Work With",
        color: "#FFFFFF",
        weight: "700",
      },
    ],
    textColor: "#FFFFFF",
    description: [
      `Every industry has a different definition of growth, and your marketing plan should reflect this.
            With an extensive understanding of market dynamics, consumer expectations, and competitive challenges, 
            we collaborate with companies in a variety of industries. `,
      `By combining performance-driven execution with industry knowledge, we create digital ecosystems 
            that have a measurable financial impact in addition to drawing attention.`,
    ],
    isCard: false,
    bgImg: IndustriesWorkWithBg,
    list: [
      {
        img: IndustriesWorkWithImg_1,
        btn: [`E-commerce & Retail`],
      },
      {
        img: IndustriesWorkWithImg_2,
        // btn: [`B2B Companies & Professional Services Firms`],
        btn: [`B2B Companies`],
      },
      {
        img: IndustriesWorkWithImg_3,
        btn: [`Real Estate & Infrastructure`],
      },
      {
        img: IndustriesWorkWithImg_4,
        btn: [`Healthcare & Wellness`],
      },
      {
        img: IndustriesWorkWithImg_5,
        btn: [`Education & EdTech`],
      },
      {
        img: IndustriesWorkWithImg_6,
        btn: [`Finance & FinTech`],
      },
      {
        img: IndustriesWorkWithImg_7,
        btn: [`Startups & Growing Businesses`],
      },
      {
        img: IndustriesWorkWithImg_8,
        btn: [`Manufacturing & Industrial`],
      },
      {
        img: IndustriesWorkWithImg_9,
        btn: [`Technology & SaaS Companies`],
      },
      {
        img: IndustriesWorkWithImg_10,
        btn: [`Logistics & Supply Chain`],
      },
      {
        img: IndustriesWorkWithImg_11,
        btn: [`Automotive & Mobility`],
      },
      {
        img: IndustriesWorkWithImg_12,
        btn: [`Travel & Hospitality`],
      },
    ],
  },

  readyToStart: {
    isVisible: true,
  },
};
