import icon_1 from "../../public/assets/icons/header/Group 1000006700.svg";
import icon_2 from "../../public/assets/icons/header/Group 1000006727.svg";
import icon_3 from "../../public/assets/icons/header/Group 1000006729.svg";
import icon_4 from "../../public/assets/icons/header/Group 1000006731.svg";
import icon_5 from "../../public/assets/icons/header/Group 1000006730.svg";
import icon_6 from "../../public/assets/icons/header/Group 1000006732.svg";
import icon_7 from "../../public/assets/icons/header/Group 1000006733.svg";
import icon_8 from "../../public/assets/icons/header/ai-technology 1.svg";
import icon_9 from "../../public/assets/icons/header/Group 1000006735.svg";
import icon_10 from "../../public/assets/icons/header/Group 1000006736.svg";

/* ======================================
   NAV TYPES
====================================== */

export type NavLeaf = {
  name: string;
  href: string;
};

export type NavGroup = {
  icon: string;
  name: string;
  href: string;
  subItems: NavLeaf[];
};

export type WebsiteNavItem = {
  label: string;
  value: string;
  href: string;
  subItems?: NavGroup[] | NavLeaf[];
};

/* ======================================
   TYPE GUARDS (CRITICAL FIX)
====================================== */

export const isNavGroupArray = (
  items: WebsiteNavItem["subItems"],
): items is NavGroup[] =>
  Array.isArray(items) &&
  items.length > 0 &&
  typeof items[0] === "object" &&
  "subItems" in items[0];

export const isNavLeafArray = (
  items: WebsiteNavItem["subItems"],
): items is NavLeaf[] =>
  Array.isArray(items) && (items.length === 0 || !("subItems" in items[0]));

/* ======================================
   ROUTES
====================================== */

export const routes: {
  auth: Record<string, string>;
  root: Record<string, string>;
  websiteNav: WebsiteNavItem[];
  homeWebsite: Record<string, string>;
  ecommerceNav: {
    label: string;
    value: string;
    href: string;
  }[];
  eCommerce: {
    home: string;
    products: string;
    shop: string;
    cart: string;
    contentProductForm: (slug: string) => string;
    orders: string;
    orderDetails: (id: string) => string;
    thankyouPage: string;
  };
  userDashboard: {
    website: string;
    dashboard: string;
    accountSettings: string;
    passwordSettings: string;
    cart: string;
    orders: string;
    tickets: string;
    inbox: (tickedId: string) => string;
    invoices: string;
    invoiceDetails: (id: string) => string;
  };
  termsNconditions: string;
  privacyPolicy: string;
} = {
  auth: {
    signUp: "/auth/sign-up",
    signIn: "/auth/sign-in",
    forgotPassword: "/auth/forgot-password",
    error: "/auth/error",
  },

  root: {
    home: "/",
    bhwHome: "/expert-content-solutions",
    TermsNConditions: "/terms-and-conditions",
    PrivacyPolicy: "/privacy-policy",
  },

  websiteNav: [
    // {
    //   label: 'About Us',
    //   value: 'about',
    //   href: '/about-us',
    // },
    {
      label: "Services",
      value: "services",
      href: "#",
      subItems: [
        // {
        //   icon: icon_1,
        //   name: 'White Label (For Agencies)',
        //   href: '/services/white-label-agency-india',
        //   subItems: [
        //     {
        //       name: 'White Label SEO',
        //       href: '/services/seo-outsourcing-india',
        //     },
        //     {
        //       name: 'White Label Social Media',
        //       href: '/services/social-media-outsourcing-india',
        //     },
        //     {
        //       name: 'White Label Paid Ads',
        //       href: '/services/white-label-paid-ads-india',
        //     },
        //     {
        //       name: 'White Label Link Building',
        //       href: '/services/white-label-link-building-india',
        //     },
        //   ],
        // },
        {
          icon: icon_5,
          name: "Search Engine Optimization",
          href: "/services/search-engine-optimization",
          subItems: [
            // {
            //   name: 'SEO',
            //   href: '/services/seo-company-india',
            // },
            {
              name: "SAAS SEO",
              href: "/services/saas-seo-agency",
            },
            {
              name: "ECommerce SEO",
              href: "/services/ecommerce-seo-agency",
            },
          ],
        },
        {
          icon: icon_8,
          name: "AI SEO",
          href: "/services/ai-seo-agency",
          subItems: [
            // {
            //   name: 'AI SEO',
            //   href: '/services/ai-seo-india',
            // },
            {
              name: "LMM SEO/LLMO",
              href: "/services/llm-seo-agency",
            },
            {
              name: "GEO",
              href: "/services/generative-engine-optimization",
            },
            {
              name: "AEO",
              href: "/services/answer-engine-optimization",
            },
          ],
        },
        {
          icon: icon_6,
          name: "Local SEO",
          href: "/services/local-seo-company",
          subItems: [
            {
              name: "GBP Only",
              href: "/services/google-my-business-optimization",
            },
            {
              name: "GBP + Website",
              href: "/services/gmb-website-seo",
            },
          ],
        },
        {
          icon: icon_2,
          name: "Link Building",
          href: "/services/link-building-agency",
          subItems: [
            {
              name: "High Authority Link Building",
              href: "#",
            },
            {
              name: "Guest Post Links",
              href: "#",
            },
            {
              name: "Niche Edits",
              href: "#",
            },
            {
              name: "Press Releases",
              href: "#",
            },
          ],
        },
        {
          icon: icon_9,
          name: "Pay Per Click",
          href: "/services/ppc-management-company",
          subItems: [
            {
              name: "Google Ads",
              href: "/services/google-ads-management-company",
            },
            {
              name: "Meta Ads",
              href: "/services/meta-ads-agency",
            },
            {
              name: "Linkedin Ads",
              href: "/services/linkedIn-marketing-agency",
            },
            {
              name: "TikTok Ads",
              href: "/services/tiktok-ads-agency",
            },
          ],
        },
        {
          icon: icon_3,
          name: "Social Media Management",
          href: "/services/social-media-management",
          subItems: [
            {
              name: "Port Creation",
              href: "#",
            },
            {
              name: "Content Calendar",
              href: "#",
            },
            {
              name: "Reel Editing",
              href: "#",
            },
            {
              name: "Creatives",
              href: "#",
            },
          ],
        },
        {
          icon: icon_7,
          name: "Web Design & Development",
          href: "/services/web-design-development-company",
          subItems: [
            {
              name: "Wordpress Development",
              href: "/services/wordpress-development-company",
            },
            {
              name: "Shopify Development",
              href: "/services/shopify-development-company",
            },
            {
              name: "ECommerce Development",
              href: "/services/ecommerce-development-company",
            },
            {
              name: "Custom Web Development",
              href: "/services/custom-web-development-company",
            },
          ],
        },
        {
          icon: icon_10,
          name: "Mobile App Development",
          href: "/services/mobile-app-development-company",
          subItems: [
            {
              name: "IOS Development",
              href: "/services/ios-app-development-company",
            },
            {
              name: "Android Development",
              href: "/services/android-app-development-company",
            },
            {
              name: "Cross-Platform",
              href: "/services/cross-platform-app-development",
            },
            {
              name: "Wearables",
              href: "/services/wearables-app-development",
            },
          ],
        },
        {
          icon: icon_4,
          name: "Content Writing & Marketing",
          href: "/services/expert-content-solutions",
          subItems: [
            {
              name: "Article Writing",
              href: "#",
            },
            {
              name: "Blog Writing",
              href: "#",
            },
            {
              name: "Web Content",
              href: "#",
            },
            {
              name: "ECommerce Content",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      // label: 'White Label',
      // value: 'White Label',
      label: "For Agencies",
      value: "For Agencies",
      href: "/services/white-label-agency-india",
      subItems: [
        { name: "White Label SEO", href: "/services/seo-outsourcing-india" },
        {
          name: "White Label Social Media",
          href: "/services/social-media-outsourcing-india",
        },
        {
          name: "White Label Paid Ads",
          href: "/services/white-label-paid-ads-india",
        },
        {
          name: "White Label Link Building",
          href: "/services/white-label-link-building-india",
        },
      ],
    },

    {
      label: "Industries",
      value: "industries",
      href: "#",
    },

    {
      label: "Resources",
      value: "resources",
      href: "#",
      subItems: [
        { name: "About Us", href: "/about-us" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Career", href: "/career" },
      ],
    },

    // {
    //   label: 'Contact Us',
    //   value: 'contact',
    //   href: '/contact',
    // },
  ],

  homeWebsite: {
    TermsNConditions: "/terms-and-conditions",
    PrivacyPolicy: "/privacy-policy",
  },

  ecommerceNav: [
    { label: "Home", value: "home", href: "/expert-content-solutions" },
    {
      label: "Services",
      value: "services",
      href: "/expert-content-solutions#products",
    },
    { label: "FAQs", value: "faqs", href: "/expert-content-solutions#faqs" },
    {
      label: "Pricing",
      value: "pricing",
      href: "/expert-content-solutions#products",
    },
    {
      label: "Contact",
      value: "contact",
      href: "/expert-content-solutions#contact",
    },
  ],

  eCommerce: {
    home: "/services/expert-content-solutions",
    products: "/services/expert-content-solutions/#products",
    shop: "/services/expert-content-solutions/#products",
    cart: "/services/expert-content-solutions/cart",
    contentProductForm: (slug: string) =>
      `/services/expert-content-solutions/products/${slug}/form`,
    orders: "/services/expert-content-solutions/orders",
    orderDetails: (id: string) =>
      `/dashboard/shop/orders/order-details?orderNumber=${id}`,
    thankyouPage: "/services/expert-content-solutions/thankyou",
  },

  userDashboard: {
    website: "/services/expert-content-solutions",
    dashboard: "/dashboard",
    accountSettings: "/dashboard/user/profile-settings",
    passwordSettings: "/dashboard/user/profile-settings/password",
    cart: "/dashboard/shop/cart",
    orders: "/dashboard/shop/orders",
    tickets: "/dashboard/support/tickets",
    inbox: (tickedId: string) => `/dashboard/support/inbox?tkt=${tickedId}`,
    invoices: "/dashboard/invoices",
    invoiceDetails: (id: string) =>
      `/dashboard/invoices/details?invoiceNumber=${id}`,
  },

  termsNconditions: "https://www.adaired.com/terms-and-conditions",
  privacyPolicy: "https://www.adaired.com/privacy-policy",
};
